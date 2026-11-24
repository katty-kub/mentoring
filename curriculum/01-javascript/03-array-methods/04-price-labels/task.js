// Vypiš cenovky: nové array (pole), kde má každá cena na konci " CZK". Nepoužij `for`.
// [10, 20] → [ '10 CZK', '20 CZK' ]

const prices = [49, 65, 45];

// tvůj kód

const labels = prices.map((price) => `${price} CZK`);

console.log(labels);

// node task.js má vypsat: [ '49 CZK', '65 CZK', '45 CZK' ]
