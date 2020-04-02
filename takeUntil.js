const assertArraysEqual = function(actual, expected) {

  if (eqArrays(actual,expected)) {
    console.log(`😎😎😎 Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: "${actual}" !== "${expected}"`);
  }

};

const eqArrays = function(arrayOne, arrayTwo) {

  if (!arrayOne.length || !arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] === arrayTwo[i]) {
      if (i === arrayOne.length - 1) {
        return true;
      } 
    } else {
      if (i === arrayOne.length - 1) {
        return false;
      } else if (arrayOne[i] === undefined) {
        return false;
      }
    }
  }

}

/*
The array to work with
The callback (which Lodash calls "predicate")
*/

const takeUntil = function(array, callback) {
  let resultArray = [];

  for (let value of array) {
    if (!callback(value)) {
      resultArray.push(value);
    } else {
      return resultArray;
    }
  }
  return resultArray;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ])


/* EXPECTED OUTPUT 
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]*/