// 9-add.js

// Define the addition function as required
function add (a, b) {
  return a + b;
}

// Get the first and second arguments from the command line
const arg1 = process.argv[2];
const arg2 = process.argv[3];

// Convert arguments to integers
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Call the add function and print the result
// If either num1 or num2 is NaN, their sum will also be NaN,
// which matches the sample output behavior for missing/invalid arguments.
console.log(add(num1, num2));

