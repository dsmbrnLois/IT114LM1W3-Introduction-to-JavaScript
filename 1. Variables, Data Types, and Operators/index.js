/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here

console.log(x);
var x = "hohohoho";
// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let y = "hahahaha";
console.log(y);
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const z = "constant";
console.log(z);

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer: all three are used to assign a variable, var is much older, let can be updated but not redeclared, while const cannot be updated nor redeclared 

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
const lois = 165 + 2 / 3;
console.log(lois);

// Checkpoint 1.2 What operators did you use?
// Answer: addition, and division 
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring = "hello";
mystring += " world;" 
console.log(mystring);

// Checkpoint 1.3 What operators did you use?
// Answer: shorthand assignment operator

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
const truth = true || false;
console.log(truth);

// Checkpoint 1.4 What operators did you use?
// Answer: logical OR 


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators
const pl = ["python", "c#", "c++", "c"];
0 in pl; 
3 in pl;
6 in pl;

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: 
// Your code here