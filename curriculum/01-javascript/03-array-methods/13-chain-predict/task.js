// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// Methods (metody) jdou psát za sebe. Další dostane výsledek té před ní.
// [1, 5, 9].filter((n) => n > 4).map((n) => n * 2) → [ 10, 18 ]

const prices = [49, 65, 45];

console.log(prices.filter((price) => price < 50)); // tip:
console.log(prices.filter((price) => price < 50).map((price) => price * 2)); // tip:
console.log(prices.map((price) => price * 2)); // tip:
console.log(prices.map((price) => price * 2).filter((price) => price < 50)); // tip:
console.log(prices.map((price) => price - 20).filter((price) => price < 30).length); // tip:
console.log(prices.filter((price) => price > 60).map((price) => `${price} CZK`)); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
