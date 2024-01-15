/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0])
console.log(numbers[4])
console.log(numbers.at(-1))
// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
let minval = Math.min(...numbers)
let maxval = Math.max(...numbers)
console.log(minval)
console.log(maxval)
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
console.log(average);
// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: Both Python lists and JavaScript arrays can be used to store collections of elements, they have different characteristics and methods for manipulation.
// However, they have similar functionalities. They use the same form of indexing which starts at 0, and both have the capabality of being modified. 
// Additionally, they also have some similar functions like len(), append(), sort(), etc.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let subject = new Object();
subject = {    
    coursecode: "IT114L",  
    name: "Web Systems",
    units: 3,
    numofStud: 45,        
  };
  console.log(subject)
// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
subject.professor = "Job Lipat"
console.log(subject)
console.log(subject.professor)
// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
  {
    coursecode: "IT114L",
    name: "Web Systems (lab)",
    units: 1,
    numofStud: 45,
    professor: "Job Lipat",
  },
  {
    coursecode: "IT133",
    name: "Technopreneurship",
    units: 4,
    numofStud: 30,
    professor: "Jonalyn Ebron",
  },
  {
    coursecode: "IT114",
    name: "Web Systems",
    units: 3,
    numofStud: 45,
    professor: "Adomar Ilao",
  }
];

console.log(courses);
// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
let totalUnits = 0;
for (let i = 0; i < courses.length; i++) {
  totalUnits += courses[i].units;
}
console.log("total units: " + totalUnits)
// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
/* Answer: Python dictionaries are the equivalent of objects in JavaScript. 
Both data structures allow you to store related information using key-value pairs. 
In JavaScript, objects can have methods and properties, while in Python, dictionaries 
can contain various types of values. However, they share the fundamental concept of 
associating keys with corresponding values. Despite some differences, they serve similar purposes in representing structured data.
*/

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numberscopy = [...numbers, 420]
console.log(numberscopy)

// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let { coursecode, units, ...rest} = subject
console.log("Course code" + coursecode)
console.log("Units" + units)