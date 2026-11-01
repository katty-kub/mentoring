// Vypiš konečnou cenu každého produktu: price minus discount. Všechno otypuj.
// Kdo discount (slevu) nemá, platí celou price.

const products = [
  { name: "Mug", price: 120, discount: 20 },
  { name: "Pen", price: "35" }, // z form field (políčka formuláře)
  { name: "Bag", price: 400, discount: 50 },
];

// tvůj kód


// node task.ts má vypsat:
// Mug 100
// Pen 35
// Bag 350
