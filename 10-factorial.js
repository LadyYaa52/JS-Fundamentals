// Recursive factorial function
function factorial(n) {
    // Handle NaN case
    if (isNaN(n)) {
        return 1;
    }

    // Base case
    if (n <= 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

// Get the first argument from command line
const arg = process.argv[2];
const num = parseInt(arg);

// Compute factorial
const result = factorial(num);

// Print output
console.log(`Factorial of ${arg} is: ${result}`);
