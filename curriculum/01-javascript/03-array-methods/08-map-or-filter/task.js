// Bug report (hlášení chyby): Seznam levných cen ukazuje true a false místo cen. Oprav to.
// [10, 70, 30] → [ 10, 30 ]

const prices = [49, 65, 45];

const cheapPrices = prices.map((price) => price < 50);

console.log(cheapPrices);

// node task.js má vypsat: [ 49, 45 ]
