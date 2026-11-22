// Změň wantedId na 9 a spusť node task.js. Program spadne: produkt s id 9 není.
// Uprav kód pod wantedId, ať pak vypíše not found. S wantedId 2 dál vypíše Tea.
// wantedId 3 → Cake, wantedId 7 → not found

const products = [
  { id: 1, name: "Coffee", price: 65 },
  { id: 2, name: "Tea", price: 45 },
  { id: 3, name: "Cake", price: 49 },
];
const wantedId = 2;

const product = products.find((item) => item.id === wantedId);
console.log(product.name);

// node task.js má s wantedId 9 vypsat: not found
