// Print isNaN(input). Then print Number.isNaN(input).
// "abc" → true false

const input = "12px"

// your code

console.log(isNaN(input));
console.log(Number.isNaN(input));
// node task.js should print:
// true
// false

/*
isNaN(input) zkusí text převést na číslo.
Number.isNaN(input) kontroluje,
jestli je input přímo hodnota NaN — ale "abc" je text.
U prázdného textu: JavaScript převede "" na nulu. 
Proto isNaN("") vrátí false  - 
převod na číslo se povedl. 
Number.isNaN("") také vrátí false,
protože "" je text, ne NaN.
"12px" ani prázdný text 
nejsou hodnota NaN — jsou to řetězce.

*/