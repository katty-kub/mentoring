// Bug report (hlášení chyby): Na cenovkách je undefined místo ceny. Oprav to.
// [10, 20] → [ '10 CZK', '20 CZK' ]

const prices = [49, 65, 45];

const labels = prices.map((price) => {
  `${price} CZK`;
});

console.log(labels);

// node task.js má vypsat: [ '49 CZK', '65 CZK', '45 CZK' ]
