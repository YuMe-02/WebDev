function bmiCalculator (weight, height) {
    
    var bmi = (weight / (height ** 2));

    return Math.round(bmi);
    
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);