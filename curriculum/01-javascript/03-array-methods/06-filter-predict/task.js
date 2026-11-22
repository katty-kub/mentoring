// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// filter nechá jen položky, pro které function (funkce) vrátí true.
// [1, 5, 9].filter((n) => n > 4) → [ 5, 9 ]

const prices = [49, 65, 45];
const values = [0, 5, "", "tea"];

console.log(prices.filter((price) => price < 50)); // tip:
console.log(prices.filter((price) => price > 100)); // tip:
console.log(prices.filter((price) => true)); // tip:
console.log(prices.filter((price) => price < 50).length); // tip:
console.log(values.filter((value) => value)); // tip:
console.log(prices); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
