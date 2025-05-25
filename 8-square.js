// 8-square.js

// Get the first argument from the command line
const arg = process.argv[2];

// Convert the argument to an integer
const size = parseInt(arg);

// Check if size is a valid positive integer
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  // Outer loop for rows
  for (let i = 0; i < size; i++) {
    let row = '';
    // Inner loop for columns (building the row string)
    for (let j = 0; j < size; j++) {
      row += 'x';
    }
    console.log(row);
  }
}


