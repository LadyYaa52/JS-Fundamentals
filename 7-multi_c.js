#!/usr/bin/node

// Retrieve the first argument
const args = process.argv.slice(2);
const x = parseInt(args[0], 10);

// Check if the argument is a valid integer
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
