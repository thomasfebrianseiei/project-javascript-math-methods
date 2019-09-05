// Math.round()
// Math.round(x) returns the value of x rounded to its nearest integer:

console.log(Math.round(4.7)); // returns 5
console.log(Math.round(4.4)); // returns 4
console.log("");

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y:

console.log(Math.pow(8, 2)); // returns 64
console.log("");

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(64)); // returns 8
console.log("");

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7)); // returns 4.7
console.log("");

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer:
console.log(Math.ceil(4.4)); // returns 5
console.log("");

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.7)); // returns 4
console.log("");

// Math.min() and Math.max()
// Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
var arr = [0, 150, 30, 20, -8, -200];
console.log(Math.min(...arr)); // returns -200
console.log("");
console.log(Math.max(...arr)); // returns 150
console.log("");

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
console.log("");
console.log(getRandomInt(3));
// expected output: 0, 1 or 2
console.log("");
console.log(getRandomInt(1));
// expected output: 0
console.log("");
console.log(Math.random());
// expected output: a number between 0 and 1
console.log("");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}