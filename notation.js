let library = [
  ["Book1", "Movie1", "Book2"],
  ["Movie2", "Book3", "Movie3"],
  ["Book4", "Movie4", "Book5"]
];
// Task 2: Log all elements using numbers
for (let r = 0; r < 3; r++) {
  for (let c = 0; c < 3; c++) {
    console.log(library[r][c]);
  }
}
// Task 3: Log all elements using variables
let row = 0, item = 0;
console.log(library[row][item]); // example
// Task 4: Loop to print all items on second shelf (index 1)
for (let i = 0; i < library[1].length; i++) {
  console.log(library[1][i]);
}
