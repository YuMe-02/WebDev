alert("Hello! I am an alert box!!");

const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function buttonPress() {
    $(".btn").click(function() {
        var userChosenColour = $(this).attr("id"); // Get the ID of the clicked button
        console.log("Button clicked:", userChosenColour); // Log the button ID
        userClickedPattern[userClickedPattern.length] = userChosenColour; // append to list
        console.log(userClickedPattern); // debugging with list
        animatePress(userChosenColour);
        playSound(userChosenColour);
    });                
}

function nextSequence() {
    var randN = Math.floor(Math.random() * 4); // 1. 0-4
    randomChosenColour = buttonColors[randN]
    gamePattern[gamePattern.length] = randomChosenColour; // 2. push the colour to the pattern array
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);  // 3. fade the button in and out
    console.log(randomChosenColour);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();   
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed")
    setTimeout(() => {
        /* Code to run after 100 ms */
        $("#" + currentColour).removeClass("pressed")
      }, 100)
}
nextSequence();
buttonPress();