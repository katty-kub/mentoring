// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// map zavolá function (funkci) pro každou položku. Z výsledků složí nové array (pole).
// [1, 2].map((n) => n + 1) → [ 2, 3 ]

const prices = [49, 65, 45];
const names = ["Eva", "Petr"];

console.log(prices.map((price) => price * 2)); // tip: [ 98, 130, 90 ]
console.log(names.map((name) => name.toUpperCase())); // tip: [ 'EVA', 'PETR' ]
console.log(names.map((name) => name.length)); // tip: [ 3, 4 ]
console.log(prices.map((price) => price > 50)); // tip: [ false, true, false ]
console.log(names.map((name, index) => `${index}: ${name}`)); // tip:[ '0: Eva', '1: Petr' ]
console.log(prices); // tip: [ 49, 65, 45 ]

// node task.js vypíše 6 řádků. Porovnej každý se svým tipem.
