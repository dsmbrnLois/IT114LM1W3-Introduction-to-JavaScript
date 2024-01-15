/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squared = numbers.map(items => items**2)
console.log(squared)

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter(items => items % 2 == 0)
console.log(even)

// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce(function(result, num){
    return result + num;
}, 0);
console.log(sum);

// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const caps = words.map(items => items.toUpperCase());
console.log(caps);

// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const morethanFour = words.filter(items => items.length > 4);
console.log(morethanFour);

// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const allwords = words.reduce(function(words, more){
    return words + more;
});
console.log(allwords);

// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: 
/*The map function is used to create a new array from a set of existing one by applying a function to each elements of the existing array.

The filter function is used to apply a conditional statement into each element of the array. If the condition is met, 
the element is included in the output array, and if the condition is false, the element is excluded.

The reduce function is used to iteratively reduce an array to a single value. It applies a provided 
function to each element of the array, accumulating a result. The final result is a single value representing the reduction of the entire array.
*/