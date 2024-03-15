function fibonacci_num(num) {
    let FirstNumber = 0;
    let SecondNumber = 1;
    let sum;
    let x = 0;
    for (x = 0; x < num; x++) {
        sum = FirstNumber + SecondNumber;
        FirstNumber = SecondNumber;
        SecondNumber = sum;
    }
    return SecondNumber;
}
 
console.log("Fibonacci_num(100): " + fibonacci_num(100));
