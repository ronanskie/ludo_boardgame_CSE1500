var game = function (gameID) {
    this.playerA = null;
	this.playerB = null;
	this.playerC = null;
	this.playerD = null;
    this.id = gameID;
    this.gameState = "0 JOINT"; //"A" means A won, "B" means B won, "ABORTED" means the game was aborted
};

game.prototype.transitionStates = {};
game.prototype.transitionStates["0 JOINT"] = 0;
game.prototype.transitionStates["1 JOINT"] = 1;
game.prototype.transitionStates["2 JOINT"] = 2;
game.prototype.transitionStates["3 JOINT"] = 3;
game.prototype.transitionStates["4 JOINT"] = 4;
game.prototype.transitionStates["A"] = 5; //A won
game.prototype.transitionStates["B"] = 6; //B won
game.prototype.transitionStates["C"] = 7; //C won
game.prototype.transitionStates["D"] = 8; //D won
game.prototype.transitionStates["ABORTED"] = 9;

// game.prototype.transitionMatrix = [
//     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //0 joint
//     [0, 1, 0, 0, 0, 0, 0, 0, 0, 0]  //1 joint
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]  //2 joint
//     [0, 0, 0, 1, 0, 0, 0, 0, 0, 0]  //3 joint
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0]  //4 joint
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //A won
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //B won
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //C won
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //D won
// 	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  ///ABORTED
// ];

//the function for the dice
function dice_roll(){
	var dice_sound = new Audio("../sounds/dice.wav");
	dice_sound.play();
	document.getElementById("dice_image").src="../images/EmptyDice.png";

	setTimeout(function(){
	var diceNumber = getRandomInt(1, 6);
	if(diceNumber == 1){
		document.getElementById("dice_image").src="../images/Dice1.png";
	}
	else if(diceNumber == 2){
		document.getElementById("dice_image").src="../images/Dice2.png";
	}
	else if(diceNumber == 3){
		document.getElementById("dice_image").src="../images/Dice3.png";
	}
	else if(diceNumber == 4){
		document.getElementById("dice_image").src="../images/Dice4.png";
	}
	else if(diceNumber == 5){
		document.getElementById("dice_image").src="../images/Dice5.png";
	}
	else if(diceNumber == 6){
		document.getElementById("dice_image").src="../images/Dice6.png";
	}
} ,2000);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function player_turn(){
	var playernumber = (1, 2, 3, 4);
	var turnnumber = (1, 2, 3, 4);

	if(turnnumber == 1){

		document.getElementById("dice_image").disabled = true;
	}

}