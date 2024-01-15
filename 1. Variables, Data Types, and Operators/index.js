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
/* Answer: All three are used for variable assignment. var is an older declaration keyword and not blocked-scope, 
while let is blocked-scope, and allows updates but not redeclaration. On the other hand, const does not allow both updates and redeclaration */

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

// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
/* Answer: 
In JavaScript, when you use the double equals sign (==) to compare things, 
it tries to make them the same type before checking if they're equal.
So, if you compare an empty array [] with false using ==, 
JavaScript will turn the array into a string and then compare it with false. The empty array becomes an empty string, and when you compare an empty string with false, JavaScript considers it similar, so it says it's true.
But keep in mind, it's better to use triple equals (===) for comparison in JavaScript because it doesn't try to change the types and gives a more straightforward result
*/

// Your code here
console.log([] == false);
const pl = ["python", "c#", "c++", "c"];
console.log(0 in pl); 
console.log(3 in pl);
console.log(6 in pl);

const a = 1;
const b = 2;
console.log(a>b);
console.log(b>a);
console.log(a===b);