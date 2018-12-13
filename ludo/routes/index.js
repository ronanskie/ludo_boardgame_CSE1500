var express = require("express");
var router = express.Router();

/* GET home page. */
router.get('./public/splash/splash.html', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*start the game*/
router.get("./public/main/main.html", function(req, res) {
  res.sendFile("main.html", {root: "./public/main"});
});

module.exports = router;
