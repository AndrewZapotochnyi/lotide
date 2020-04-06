const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');


// EMPTY ARRAY needs a fix
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]); // OK
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),[6]); // OK
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]); //OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]); //OK
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[5, 6]);
