// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// find vrátí první položku, pro kterou function (funkce) vrátí true.
// [1, 5, 9].find((n) => n > 4) → 5

const prices = [49, 65, 45];
const products = [
  { id: 1, name: "Coffee", price: 65 },
  { id: 2, name: "Tea", price: 45 },
  { id: 3, name: "Cake", price: 49 },
];

console.log(prices.find((price) => price < 50)); // tip:
console.log(prices.filter((price) => price < 50)); // tip:
console.log(prices.find((price) => price > 100)); // tip:
console.log(products.find((product) => product.id === 2)); // tip:
console.log(products.find((product) => product.price < 50).name); // tip:
console.log(products.find((product) => product.id === 9)); // tip:

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
