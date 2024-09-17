function getMilk(money) {

    var bottleCost = 1.5;
    var NumBottles = Math.floor(money/1.5);

    console.log("You have $" + money + " You can buy "
         + NumBottles + " of milk");

}



getMilk(30);