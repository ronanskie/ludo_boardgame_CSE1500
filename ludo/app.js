var express = require("express");
var http = require("http");

var port = process.argv[2];
var app = express();

app.use(express.static(__dirname + "/public"));
http.createServer(app).listen(port);

// var server = http.createServer(app);
// const wss = new websocket.Server({ server });

// var websockets = {};

// /*
//  * regularly clean up the websockets object
//  */ 
// setInterval(function() {
//   for(let i in websockets){
//       if(websockets.hasOwnProperty(i)){
//           let gameObj = websockets[i];
//           //if the gameObj has a final status, the game is complete/aborted
//           if(gameObj.finalStatus!=null){
//               console.log("\tDeleting element "+i);
//               delete websockets[i];
//           }
//       }
//   }
// }, 50000);

// //initializing game
// var currentGame = new Game(gameStatus.gamesInitialized++);
// var connectionID = 0;//each websocket receives a unique ID

// wss.on("connection", function connection(ws) {

//     /*
//      * two-player game: every two players are added to the same game
//      */
//     let con = ws; 
//     con.id = connectionID++;
//     let playerType = currentGame.addPlayer(con);
//     websockets[con.id] = currentGame;

//     console.log("Player %s placed in game %s as %s", con.id, currentGame.id, playerType);

//     /*
//      * inform the client about its assigned player type
//      */ 
//     con.send((playerType == "A") ? messages.S_PLAYER_A : messages.S_PLAYER_B);

//     if (currentGame.hasFourConnectedPlayers()) {
//       currentGame = new Game(gameStatus.gamesInitialized++);
//   }
// })