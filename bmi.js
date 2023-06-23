const prompt = require("prompt-sync")();
let fullName;
let height;
let weight;
let age;
let a, b, c;

console.log("We would like you to enter your data ");
do {
  fullName = prompt("Enter your name please ");
} while (!isNaN(fullName));
do {
  height = prompt("Enter your height ");
  a = Number(height);
} while (a <= 0 || isNaN(a));
do {
  weight = prompt("Enter your weight ");
  b = Number(weight);
} while (b <= 0 || isNaN(b));
do {
  age = prompt("Enter your age ");
  c = Number(age);
} while (c <= 0 || isNaN(c));
let bmi = weight / Math.sqrt(height);
console.log(
  `${fullName} i am ${age} years old,weight is ${weight} height is ${height} and my bmi is ${bmi}`
);
