function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "YES";
    } else {
        return "no";
    }
}

console.log(isLeapYear(24)); // Replace alert with return or console.log for better functionality
