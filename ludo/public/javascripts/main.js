function Paper(color, number){
   this.color = color;
   this.number = number;
   playerIcon = document.getElementById(yellow_paper);
}

var yellowPaper1 = new Paper("yellow", "1");

// function dice_roll(){
//    var diceImages = [{
//       src: "../images/Dice1.png",
//    }, {
//       src: "../images/Dice2.png",
//    }, {
//       src: "../images/Dice3.png",
//    }, {
//       src: "../images/Dice4.png",
//    }, {
//       src: "../images/Dice5.png",
//    }, {
//       src: "../images/Dice6.png",
//    }];

//    var preBuffer = [];
//    for (var i = 0, j = diceImages.length; i < j; i++) {
//       preBuffer[i] = new Image();
//       preBuffer[i].src = diceImages[i].src
//       preBuffer[i].width = diceImages[i].width;
//       preBuffer[i].height = diceImages[i].height;
//    }

//    function getRandomInt(min,max)
//    {

//    imn = Math.floor(Math.random() * (max - min + 1)) + min;
//       return preBuffer[imn];
//    }

//    var newImage = getRandomInt(0, preBuffer.length - 1);

//    var Images = document.getElementsByTagName('img');
//    var l = images.length;
//    for (var p = 0; p < l; p++){
//       images[0].parentNode.removeChild(images[0]);
//    }
   
//    document.body.appendChild(newImage);
// }

function dice_roll(){
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
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}