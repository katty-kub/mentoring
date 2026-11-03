// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// ... je spread (rozbalení): [...[5, 6], 7] → [ 5, 6, 7 ]

const small = [1, 2];
const big = [8, 9];

console.log([...small]); // tip: [ 1, 2 ]
console.log([...small, 3]); // tip: [ 1, 2, 3 ]
console.log([0, ...small]); // tip: [ 0, 1, 2 ]
console.log([...small, ...big]); // tip: [ 1, 2, 8, 9 ]
console.log([small, big]); // tip: [ [ 1, 2 ], [ 8, 9 ] ]
console.log(...small); // tip: 1 2

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
