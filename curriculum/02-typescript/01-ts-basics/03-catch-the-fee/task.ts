// Bug report (hlášení chyby): lístek za 15 plus poplatek 5 má stát 20. Obchod ukazuje 155.
// Oprav to. A ať TypeScript takovou chybu příště chytí sám.

const price = 15;
const fee = "5"; // z form field (políčka formuláře)

const total = price + fee;
console.log(total);

// node task.ts má vypsat: 20
