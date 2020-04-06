
// Simple sorting
let array = [10, 2, 5, 1, 9];

// console.log(array.sort(function(a,b){return a - b}));

// Advanced sorting
/* Say we have a list of students that we would like to sort in alphabetical order. 
If students have the same name, then we prioritize the older student first. */

const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

const objectSort = function(arrayOfStudents) {
  
  let namesFiltered = arrayOfStudents.sort((a,b) => a.name.localeCompare(b.name));

  
  
}

console.log(objectSort(students));

/*
var objs = [ 
  { first_nom: 'Lazslo', last_nom: 'Jamf'     },
  { first_nom: 'Pig',    last_nom: 'Bodine'   },
  { first_nom: 'Pirate', last_nom: 'Prentice' }
];
objs.sort((a, b) => a.last_nom.localeCompare(b.last_nom));
*/