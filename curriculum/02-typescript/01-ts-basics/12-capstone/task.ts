// Vypiš konečnou cenu každého produktu: price minus discount. Všechno otypuj.
// Kdo discount (slevu) nemá, platí celou price.

type Product = {
  name: string;
  price: number;
  discount?: number;
};

const products: Product[] = [
  { name: "Mug", price: 120, discount: 20 },
  { name: "Pen",  price: Number("35") }, // z form field (políčka formuláře)
  { name: "Bag", price: 400, discount: 50 },
];

// tvůj kód

for (const product of products) {
  const price = product.price;
  const discount = product.discount ?? 0;
  const finalPrice = price - discount;

  console.log(product.name, finalPrice);
}

// node task.ts má vypsat:
// Mug 100
// Pen 35
// Bag 350
