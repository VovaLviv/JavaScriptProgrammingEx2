/*
  Name: Vova Vitkovskyi
  Date: 2026-01-16
  Desc: Working with strings
*/

let line = "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";

let firstName = "Volodymyr";
let lastName = 'Vitkovskyi';
let age = 29;

console.log(line);


// String concatenation
let messageConcat = "My name is " + firstName + ' ' + 'and my age is ' + age;

console.log(messageConcat);

console.log(line);

let messageStringLiteral = `My name is ${firstName} ${lastName} and my age is ${age}`

console.log(messageStringLiteral);

console.log(messageStringLiteral.length);
console.log(line);

// Escape & New Line
let a = "Add a new line\nThis is another line"
console.log(a);
console.log(line);

let b = "i was quoted as saying \"I love JavaScript\"!";
console.log(b);
console.log(line);

let c = 'It\'s right over there. Over where?';
console.log(c);
console.log(line);

let d = 'I was quoted as saying "I love JavaScript"!'
console.log(d);
console.log(line);

let e = "It's right over there. Over where?";
console.log(e);
console.log(line);

let f = `It's right over there.`
console.log(f);
console.log(line);

// String Functions
let g = "abcdefg"

console.log(g);
console.log(g.toUpperCase());

let h = "HIJKL";
console.log(h);
console.log(h.toLowerCase());

let student = "John William Smith";
let middleName = student.substring(5, 12); // The end index is not inclusive

console.log(middleName);

// Index of character

let index = student.indexOf('W');
console.log(index);










