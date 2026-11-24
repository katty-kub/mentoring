// Predict (předpověz): co vypíše každý řádek s tipem? Napiš tip. Pak spusť node task.js.
// Callback: function (funkce), kterou předáš jiné funkci. twice ji dostane a sama ji zavolá.

const sayHi = () => console.log("hi");

const twice = (action) => {
  action();
  action();
};

sayHi(); // tip: hi
twice(sayHi); // tip: hi hi
twice(() => console.log("bye")); // tip: bye bye
console.log(typeof sayHi); // tip: function
;console.log(typeof sayHi()) // tip: hi, undefined
console.log(typeof twice); // tip: function

// node task.js vypíše 9 řádků. Porovnej je se svými tipy.
