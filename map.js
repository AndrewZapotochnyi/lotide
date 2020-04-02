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

/* Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the 
results of the callback function. */


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, ["g","c","t","m","t"]);

