const assertEqual = function(actual, expected) {
  if (actual === expected) {
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const ac = { c: "1", b: "2" };
console.log(eqObjects(ab, ac)); // => false


///////// Arrays As Values (Tests)
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

