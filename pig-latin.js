const args = process.argv.slice(2);

const sum = function(args) {
  
  let resultsArray = [];
  for (let i = 0; i < args.length; i++) {
    let word = "";
    for (let y = 1; y < args[i].length; y++) {
      word += args[i].charAt(y);
    }
    word = word + args[i].charAt(0) + "ay";
    resultsArray.push(word);
  }

  return resultsArray.join(" ");

};

console.log(sum(args));