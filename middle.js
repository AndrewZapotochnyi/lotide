// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`😎😎😎 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
        return false;
    }
  }
  return true;
}

// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    let midOddIndex = (array.length - 1) / 2
    return [array[midOddIndex]];
  } else if (array.length % 2 === 0) {
    let midEvenIndex = array.length / 2;
    let midValueArray = [array[midEvenIndex-1],array[midEvenIndex]];
    return midValueArray;
  }
};

module.exports = middle;
