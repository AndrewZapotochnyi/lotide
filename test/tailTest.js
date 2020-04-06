const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// An array with only one element should yield an empty array for its tail
console.log(tail([1]));
// An empty array should yield an empty array for its tail
console.log(tail([]));