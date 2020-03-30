const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😎😎😎 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const tail = function(tailArray) {
  let tailedArray = [];
  for (let i = 1; i < tailArray.length; i++) {
    tailedArray.push(tailArray[i]);
  }
  return tailedArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// An array with only one element should yield an empty array for its tail
console.log(tail([1]));
// An empty array should yield an empty array for its tail
console.log(tail([]));