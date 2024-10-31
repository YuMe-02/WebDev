// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// 1 Prompt user 
var name = prompt("What is your name?");

// 2 Make everything lower case
var LowerName = name.toLowerCase();

// 3 Extract the non first char
var Rest = LowerName.slice(1,LowerName.length);

// 4 Make the first Char upper case
var FirstChar = name.slice(0,1);

var Firstchar = FirstChar.toUpperCase

// 5 Cat the first cahar and rest of the word
var Fin_str = FirstChar + Rest;

// 6 alert
alert("Hello" + " " + Fin_str);