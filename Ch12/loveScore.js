
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);

if (loveScore == 70) {
    alert("YOU GUYS ARE MEANT TO BE!!!\nYour love score is " + loveScore + "%");
} else if (loveScore < 50){
    alert("YOU GUYS ARE LIKE OIL AND WATER.\nYour love score is " + loveScore + "%");
} else if(loveScore > 50 && loveScore < 70) {
    alert("OKAY LOVE BIRDS!!!\nYour love score is " + loveScore + "%");
}
