#!/usr/bin/node

// Define the function with the required prototype
function add(a, b) {
  return a + b;
}

// Retrieve arguments from the command line
const args = process.argv.slice(2);

// Convert arguments to integers
const firstInt = parseInt(args[0], 10);
const secondInt = parseInt(args[1], 10);

// Perform addition and print the result
console.log(add(firstInt, secondInt));
