/*
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// An empty array should yield an empty array for its tail
console.log(tail([]));
*/


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#head", () => {
  it("Check the original array doesn't change length", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it("An array with only one element should yield an empty array for its tail", () => {
    const input = tail([1]);
    assert.deepEqual(input, []);
  });

  it("An empty array should yield an empty array for its tail", () => {
    const input = tail([]);
    assert.deepEqual(input, []);
  });

 

});