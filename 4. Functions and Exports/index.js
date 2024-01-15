/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name) {
    console.log("Hello," + name +"!")
  }
greet("Lois")
// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: function declarations are available for use throughout the code, regardless of where they appear, while function expressions need to be defined before they are called.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea (length, width) {
    return length * width
}

const length = 99
const width = 120
const area = calculateArea(length, width)
console.log(area)
// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed as an argument to another function and is executed after the completion of a specific task.
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  function Finished() {
    console.log('Finished my homework.');
  }
  
  doHomework('math', Finished);


// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];
function modifyArray(arr, modifierFunction) {
    const modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {
        modifiedArr.push(modifierFunction(arr[i]));
    }

    return modifiedArr;
}

const increment = function(number) {
    return number + 1;
};

const modifiedNumbers = modifyArray(numbers, increment);
console.log("Set of numbers: ", numbers);
console.log("incremented by 1:", modifiedNumbers);

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

const mathUtils = require('./mathUtils');
const sum = mathUtils.add(1,2);
console.log("Sum of two numbers: ", sum)

console.log("Value of PI: ", mathUtils.PI)

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
const isPalindrome = require('./isPalindrome')

isPalindrome('lois');
isPalindrome('racecar');
// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
/* Answer: In Node.js, the require function is used to import modules, and the module.exports variable is used to define what a 
module exports. This is known as the CommonJS module system. In modern JavaScript or environments that support ES6 modules, 
you use import and export for similar functionality. The choice between them depends on the specific environment and project requirements. 
If you’re working in Node.js, you typically use require and module.exports. 
If you’re in a modern JavaScript or browser environment, you can use import and export. 
*/
