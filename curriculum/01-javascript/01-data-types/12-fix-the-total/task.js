// Bug report: 2 tickets at 15 plus a 5 fee should cost 35. The shop shows 305. Fix it.
// quantity "2", price 15, fee "5" → 35

const quantity = "2"; // from a form field
const price = 15;
const fee = "5"; // from a form field

const total = quantity * price + fee;
console.log(total);

// node task.js should print: 35
