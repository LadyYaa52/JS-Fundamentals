#!/usr/bin/node

// Count arguments excluding "node" and script name
const argsCount = process.argv.slice(2).length;

if (argsCount === 0) {
  console.log('No argument');
} else if (argsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}





