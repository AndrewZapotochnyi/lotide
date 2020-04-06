// ACTUAL FUNCTION
const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    let midOddIndex = (array.length - 1) / 2
    return [array[midOddIndex]];
  } else if (array.length % 2 === 0) {
    let midEvenIndex = array.length / 2;
    let midValueArray = [array[midEvenIndex-1],array[midEvenIndex]];
    return midValueArray;
  }
};

module.exports = middle;
