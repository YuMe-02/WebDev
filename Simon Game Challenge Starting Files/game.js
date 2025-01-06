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
var currentColor = randomChosenColor(randomNumber)
console.log(randomNumber);
console.log(currentColor);
console.log(gamePattern);
  
$(".yellow")
  .fadeOut(250) // 500ms (0.5 seconds)
  .fadeIn(250)
  .fadeOut(250)
  .fadeIn(250);
