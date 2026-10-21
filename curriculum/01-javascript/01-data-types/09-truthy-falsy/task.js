// Predict: true or false? Write your guess after each line. Then run it.
// Boolean("hi") → true

console.log(Boolean(0)); // guess: false
console.log(Boolean("")); // guess: false
console.log(Boolean(" ")); // guess: true
console.log(Boolean("0")); // guess: true
console.log(Boolean(null)); // guess: false
console.log(Boolean(NaN)); // guess: false

// node task.js prints 6 lines. Compare each one with your guess.

/*
Proč:
- 0 je číslo, které se v podmínce považuje za nepravdivé.
- "" je prázdný text, takže také vrací false.
- " " obsahuje mezeru. Není prázdný, proto vrací true.
- "0" je textový řetězec, ne číslo 0. Je neprázdný, proto vrací true.
- null znamená prázdnou hodnotu a vrací false.
- NaN znamená „není číslo“ a také vrací false.
Pozor hlavně na rozdíl mezi číslem 0 a textem "0": Boolean(0) je false, ale Boolean("0") je true.
*/
