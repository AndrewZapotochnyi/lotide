const tail = function(tailArray) {
  let tailedArray = [];
  for (let i = 1; i < tailArray.length; i++) {
    tailedArray.push(tailArray[i]);
  }
  return tailedArray;
};

module.exports = tail;