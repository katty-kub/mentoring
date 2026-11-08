// Predict (předpověz): co vypíše každý řádek? Napiš tip za každý řádek. Pak spusť node task.js.
// user je object (objekt): values (hodnoty) se jmény. { ...{ a: 1 }, b: 2 } → { a: 1, b: 2 }

const user = { name: "Eva", city: "Brno" };

console.log({ ...user }); // tip: { name: 'Eva', city: 'Brno' }
console.log({ ...user, age: 30 }); // tip: { name: 'Eva', city: 'Brno', age: 30 }
console.log({ ...user, city: "Ostrava" }); // tip: { name: 'Eva', city: 'Ostrava' }
console.log({ city: "Ostrava", ...user }); // tip: { city: 'Brno', name: 'Eva' }
console.log(user); // tip: { name: 'Eva', city: 'Brno' }

// node task.js vypíše 5 řádků. Porovnej každý se svým tipem.
