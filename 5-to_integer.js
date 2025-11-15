#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Check if it can be converted to an integer
if (!isNaN(arg) && arg !== undefined) {
  console.log('My number: ' + parseInt(arg));
} else {
  console.log('Not a number');
}
