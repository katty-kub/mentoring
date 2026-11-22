// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// some: vrátí function (funkce) true aspoň pro jednu položku? every: vrátí true pro všechny?
// [1, 5].some((n) => n > 4) → true

const prices = [49, 65, 45];
const stock = [3, 0, 12];

console.log(prices.some((price) => price > 60)); // tip:
console.log(prices.every((price) => price > 60)); // tip:
console.log(prices.every((price) => price > 40)); // tip:
console.log(stock.some((count) => count === 0)); // tip:
console.log(stock.every((count) => count > 0)); // tip:
console.log(prices.some((price) => price > 100)); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
