const args = process.argv.slice(2);

const sum = function(args) {
  for (let i = 0; i < args.length; i++) {
    let reverseValue = null;
      for (y = args[i].length; y >= 0; y--) {
        if (reverseValue === null) {
          reverseValue = args[i].charAt(y);
        } else {
          reverseValue += args[i].charAt(y);
        }      
      }
    console.log(reverseValue);
  }
};

console.log(sum(args));