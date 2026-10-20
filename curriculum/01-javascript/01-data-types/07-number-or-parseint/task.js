// Predict what each line prints. Write your guess after it. Then run it.
// Number("12") → 12

console.log(Number("12px")); // guess: NaN
console.log(parseInt("12px")); // guess: 12
console.log(Number("")); // guess: 0
console.log(parseInt("")); // guess: NaN
console.log(Number("3.5")); // guess: 3.5
console.log(parseInt("3.5")); // guess: 3

// node task.js prints 6 lines. Compare each one with your guess.

// Number() tries to convert the whole string into a number.
// If the entire string is not a valid number, it returns NaN.
// An empty string converts to 0.

// parseInt() reads an integer from the beginning of the string
// and stops when it reaches a character that is not part of that integer.
// If it cannot find a number at the beginning, it returns NaN.
