let letters = 'whatever';

const letterPositions = function(sentence) {
  results = {};
  for (let i = 0; i < sentence.length; i++){
    let keys = Object.keys(results);
    // check if the letter is in results as a key
    if (!keys.includes(sentence[i])) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
}

console.log(letterPositions(letters));


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

console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("whatever").r, [7]));