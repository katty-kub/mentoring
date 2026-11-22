// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// map zavolá function (funkci) pro každou položku. Z výsledků složí nové array (pole).
// [1, 2].map((n) => n + 1) → [ 2, 3 ]

const prices = [49, 65, 45];
const names = ["Eva", "Petr"];

console.log(prices.map((price) => price * 2)); // tip:
console.log(names.map((name) => name.toUpperCase())); // tip:
console.log(names.map((name) => name.length)); // tip:
console.log(prices.map((price) => price > 50)); // tip:
console.log(names.map((name, index) => `${index}: ${name}`)); // tip:
console.log(prices); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
