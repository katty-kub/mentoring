// Predict (předpověz): co vypíše každý console.log? Napiš tip za každý. Pak spusť node task.js.
// Destructuring (rozložení): const [a] = [7, 8]; → a je 7

const product = { name: "tea", price: 45 };
const sizes = ["S", "M", "L"];

const { name, price } = product;
console.log(name, price); // tip:

const [first, second] = sizes;
console.log(first, second); // tip:

const { color } = product;
console.log(color); // tip:

const { stock = 0 } = product;
console.log(stock); // tip:

// node task.js vypíše 4 řádky. Porovnej každý se svým tipem.
