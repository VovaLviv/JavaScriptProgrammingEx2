/*
  Name: Vova Vitkovskyi
  Date: 2026-01-16
  Desc: Exercise - Variables, Strings and Concatenation
  GitHub https://github.com/VovaLviv/JavaScriptProgrammingEx2
*/

let firstName = "Vova";
let lastName = "Vitkovskyi";
let age = 29;
let city = "Lviv";
let likeWinter = true;
let myFirstJob = "Restaurant";
let hourlyRate = 13.50;

let textConcat = "Hello, " + firstName + " " + lastName + ". You are " + age + " years old and were born in " + city + ", and currently live in Moncton.\n\nYour first job was at " + myFirstJob + " making " + hourlyRate + "/hour.\n\nI asked if you liked Winter, you said " + likeWinter + "." 

let textLiteral = `Hello, ${firstName} ${lastName}. You are ${age} years old and were born in ${city}, and currently live in Moncton.\n\nYour first job was at ${myFirstJob} making ${hourlyRate}/hour.\n\nI asked if you liked Winter, you said ${likeWinter}.`

console.log();
console.log(textConcat);
console.log("-------------------------------------------");

console.log(textLiteral);
console.log();




