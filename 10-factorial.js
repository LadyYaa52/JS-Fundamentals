// factorial.js

// Get the first CLI argument
const arg = process.argv[2];

// Try to cast it to a number
const n = Number(arg);

// Recursive factorial function
function factorial(x) {
  // If x is not a number (NaN), return 1
  if (Number.isNaN(x)) {
    return 1;
  }

  // Cast to integer
  const xi = Math.trunc(x);

  // Factorial of negative numbers: you could decide behavior, here we treat them as 1
  if (xi < 0) {
    return 1;
  }

  // Base case: 0! = 1, 1! = 1
  if (xi === 0 || xi === 1) {
    return 1;
  }

  // Recursive case
  return xi * factorial(xi - 1);
}

// Compute the factorial
const result = factorial(n);

// Print the result
console.log(result);
