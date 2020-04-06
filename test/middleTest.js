const middle = require('../middle');
const assert = require('chai').assert;

describe("#head", () => {

  it("One element array should return empty array", () => {
    const input = middle([1]);
    assert.deepEqual(input, []);
  });

  it("assertArraysEqual(middle([1, 2]),[]);", () => {
    const input = middle([1, 2]);
    assert.deepEqual(input, []);
  });

  it("assertArraysEqual(middle([1, 2, 3]),[2]); // OK", () => {
    const input = middle([1, 2, 3]);
    assert.deepEqual(input, [2]);
  });

  it("assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // OK", () => {
    const input = middle([1, 2, 3, 4, 5]);
    assert.deepEqual(input, [3]);
  });

  it("assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),[6]); // OK", () => {
    const input = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    assert.deepEqual(input, [6]);
  });

  it("assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); //OK", () => {
    const input = middle([1, 2, 3, 4]);
    assert.deepEqual(input, [2, 3]);
  });

  it("assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); //OK", () => {
    const input = middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(input, [3, 4]);
  });
 
});