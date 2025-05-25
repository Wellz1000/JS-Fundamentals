// 7-multi_c.js

// Get the first argument from the command line
const arg = process.argv[2]; // Index 2 is the first user-provided argument

// Convert the argument to an integer
const x = parseInt(arg);

// Check if x is a valid positive integer
if (isNaN(x) || x <= 0) {
  console.log("Missing number of occurrences"); // First console.log
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun"); // Second console.log
    i++;
  }
}
