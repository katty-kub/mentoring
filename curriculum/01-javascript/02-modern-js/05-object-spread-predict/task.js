// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// user je object (objekt): values (hodnoty) se jmény. { ...{ a: 1 }, b: 2 } → { a: 1, b: 2 }

const user = { name: "Eva", city: "Brno" };

console.log({ ...user }); // tip:
console.log({ ...user, age: 30 }); // tip:
console.log({ ...user, city: "Ostrava" }); // tip:
console.log({ city: "Ostrava", ...user }); // tip:
console.log(user); // tip:

// node task.js vypíše 5 řádků. Porovnej každý se svým tipem.
