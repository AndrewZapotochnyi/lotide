// let letters = 'lighthouse in the house';

const countLetters = function(sentence) {
  results = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (letter in results) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
}

// console.log(countLetters(letters));
// console.log(countLetters("ooooooooooooooooooowww"));
// console.log(countLetters(""));

module.exports = countLetters;