#!/usr/bin/node

// Retrieve the first argument
const args = process.argv.slice(2);
const size = parseInt(args[0], 10);

// Check if the argument is a valid integer
if (isNaN(size)) {
  console.log("Missing size");
} else {
  // Print the square using a loop
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
