#!/usr/bin/node

// Get the first argument
const arg = process.argv[2];

// Check if an argument exists without using length
if (arg === undefined) {
  console.log('No argument');
} else {
  console.log(arg);
}
