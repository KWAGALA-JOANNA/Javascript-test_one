// Function to generate Fibonacci sequence up to n
function fibonacci(n) {
    let fibSeries = [0, 1];  // Initialize the sequence with the first two Fibonacci numbers
    while (fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2] <= n) {  // Continue until the last number in the sequence is less than or equal to n
        fibSeries.push(fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]);  // Add the next Fibonacci number to the sequence
    }
    return fibSeries;
}

// Print Fibonacci numbers up to 100
console.log("Fibonacci numbers up to 100:");
fibonacci(100).forEach(num => {
    console.log(num);
});
