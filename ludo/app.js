var express = require("express");
var http = require("http");
var websocket = require("ws");
var credentials = require("/documenten/visual studio code workspace git/board game/ludo_boardgame_CSE1500/ludo/credentials");
var cookies = require("cookie-parser");

var indexRouter = require("./routes/index");
var messages = require("./public/javascripts/messages.js")

var gameStatus = require("./statTracker.js");
var Game = require("./public/javascripts/main.js");

var port = process.argv[2];
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/play", indexRouter);

//TODO: move to routes/index
app.get("./routes/index.js", (req, res) => {
    res.render("splash.ejs", { gamesInitialized: gameStatus.gamesInitialized, gamesCompleted: gameStatus.gamesCompleted });
});

var server = http.createServer(app);
const wss = new websocket.Server({ server });

var websockets = {};//property: websocket, value: game

setInterval(function() {
    for(let i in websockets){
        if(websockets.hasOwnProperty(i)){
            let gameObj = websockets[i];
            //if the gameObj has a final status, the game is complete/aborted
            if(gameObj.finalStatus!=null){
                console.log("\tDeleting element "+i);
                delete websockets[i];
            }
        }
    }
}, 50000);

console.log("credentials: " + credentials.cookieSecret);
app.use(cookies(credentials.cookieSecret));
http.createServer(app).listen(port);

app.get("/sendMeCookies", function (req, res) {
	console.log("player joined website");
	res.cookie("joined");
	res.cookie("joined", { signed: true });
	res.send();
});

app.get("/listAllCookies", function (req, res) {
	console.log("++ unsigned ++");
	console.log(req.cookies);
	console.log("++ signed ++");
	console.log(req.signedCookies);
	res.clearCookie("joined");
	res.send();
});


// server.listen(port);