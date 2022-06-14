"use strict";

//calling this keyword in global scope
// console.log("This keyword in global scope", this);

// // simple function call
// function calcAge(birthYear) {
//   console.log("this keyword in normal function scope", this);
//   return 2037 - birthYear;
// }

// calcAge(1992);
// const calcAge2 = (birthYear) => {
//   console.log("this keyword in arrow function scope", this);
//   return 2037 - birthYear;
// };

// calcAge2(1993);
var name = "sandhu";
const jonas = {
  name: "jonas",
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Greetings ${this.name}`);
  },
};
// jonas.calcAge();
// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = matilda.calcAge;
// f(); -> returns undefined as it is a regular function call so "this " is undefined.

//Regular Functions vs Arrow Functions
// What is the difference between regular and arrow functions
jonas.greet();
