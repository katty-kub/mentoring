// Predict (předpověz): co vypíše každý console.log? Napiš tip za každý. Pak spusť node task.js.
// Destructuring (rozložení): const [a] = [7, 8]; → a je 7

const product = { name: "tea", price: 45 };
const sizes = ["S", "M", "L"];

const { name, price } = product;
console.log(name, price); // tip: tea 45

const [first, second] = sizes;
console.log(first, second); // tip: S M

const { color } = product;
console.log(color); // tip: undefined

const { stock = 0 } = product;
console.log(stock); // tip: 0

// node task.js vypíše 4 řádky. Porovnej každý se svým tipem.

/*
const { vlastnost } = objekt → chybějící vlastnost dá undefined.
const { vlastnost = 0 } = objekt → chybějící vlastnost dá 0.

Jako nejjasnější edge case: tento řádek:
const { color } = product;
console.log(color);

product obsahuje name a price, ale color v něm chybí. Je to okrajová situace: co se stane, když z objektu zkusíme získat neexistující vlastnost? Výsledkem je undefined.

I stock je podobný případ: vlastnost chybí, ale díky = 0 dostane náhradní hodnotu 0.
*/