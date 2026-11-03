// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// ... je spread (rozbalení): [...[5, 6], 7] → [ 5, 6, 7 ]

const small = [1, 2];
const big = [8, 9];

console.log([...small]); // tip:
console.log([...small, 3]); // tip:
console.log([0, ...small]); // tip:
console.log([...small, ...big]); // tip:
console.log([small, big]); // tip:
console.log(...small); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
