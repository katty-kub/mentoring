// Bug report (hlášení chyby): 2 lístky po 15 plus poplatek 5 mají stát 35.
// Obchod ukazuje 305. Oprav to.
// quantity "2", price 15, fee "5" → 35

const quantity = "2"; // z form field (políčka formuláře)
const price = 15;
const fee = "5"; // z form field (políčka formuláře)

const total = quantity * price + fee;
console.log(total);

// node task.js má vypsat: 35
