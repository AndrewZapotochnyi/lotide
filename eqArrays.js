const assertEqual = function(actual, expected) {
  if (actual === expected) {
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2"]), true);
assertEqual(eqArrays([], ["1", "2"]), false);