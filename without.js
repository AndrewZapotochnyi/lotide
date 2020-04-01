const without = function(source, itemsToRemove) {
  
  let resultArray = [];

  // Check whether source values are in itemsToRemove
  // If we are at the end of itemsToRemove and there's
  // no value to remove we push it to the resultArray

  for (i = 0; i < source.length; i++) {
    for (y = 0; y < itemsToRemove.length; y++) {
      if (source[i] === itemsToRemove[y]) {
        break;
      } else if (y === itemsToRemove.length - 1) {
        resultArray.push(source[i]);
      }
    }
  }

  console.log(`The source array is: ${source}`);
  console.log(`The result array is: ${resultArray}`);

}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
without(["1", "2", "3", 1, 2, 3, 5, 6, 1], [1, 2, "3", 6])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case



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

assertArraysEqual(words, ["hello", "world", "lighthouse"]);