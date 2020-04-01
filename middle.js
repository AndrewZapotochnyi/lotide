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

// EMPTY ARRAY needs a fix
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]); // OK
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),[6]); // OK
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); //OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); //OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[5, 6]);
