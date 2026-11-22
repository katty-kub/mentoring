// Predict (předpověz): co vypíše každý řádek s tipem? Napiš tip. Pak spusť node task.js.
// Callback: function (funkce), kterou předáš jiné funkci. twice ji dostane a sama ji zavolá.

const sayHi = () => console.log("hi");

const twice = (action) => {
  action();
  action();
};

sayHi(); // tip:
twice(sayHi); // tip:
twice(() => console.log("bye")); // tip:
console.log(typeof sayHi); // tip:
console.log(typeof sayHi()); // tip:
console.log(typeof twice); // tip:

// node task.js vypíše 9 řádků. Porovnej je se svými tipy.
