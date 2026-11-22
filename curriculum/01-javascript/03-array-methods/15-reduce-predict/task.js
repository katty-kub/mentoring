// Predict (předpověz): co vypíše každý console.log? Napiš tip za každý. Pak spusť node task.js.
// reduce projde array (pole) a skládá z něj jednu value (hodnotu). Tady sum začíná na 0.

const prices = [49, 65, 45];

const total = prices.reduce((sum, price) => {
  console.log(sum, price); // tip (3 řádky):
  return sum + price;
}, 0);

console.log(total); // tip:

const count = prices.reduce((sum, price) => sum + 1, 0);

console.log(count); // tip:

// node task.js vypíše 5 řádků. Porovnej každý se svým tipem.
