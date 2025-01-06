alert("Hello! I am an alert box!!");

const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
    var randN = Math.floor(Math.random() * 3); //0-3
    return(randN);
}

function randomChosenColor(randomNumber) {
    var currentColor = (buttonColors[randomNumber]);
    gamePattern[gamePattern.length] = currentColor;
    return(currentColor);
}

var randomNumber = nextSequence();
var color = randomChosenColor(randomNumber)
console.log(randomNumber);
console.log(color);
console.log(gamePattern);
  