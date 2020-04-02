const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }  
  for (const key1 in object1) {
    let value1 = object1[key1];
    let value2 = object2[key1];
    if (Array.isArray(value1) && Array.isArray(value2)) {  
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else {
      if (value1 !== value2) {
        return false;
      } 
    }
  }
    return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual,expected)) {
    console.log(`😎😎😎 Assertion Passed: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);