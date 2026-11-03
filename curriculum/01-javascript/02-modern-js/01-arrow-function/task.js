// Přepiš obě functions (funkce) na arrow functions (šipkové funkce). Výstup se nezmění.
// V kódu pak nezůstane ani jedno slovo function.

function toNumber(text) {
  return Number(text.trim());
}

function printPrice(label, price) {
  console.log(`${label}: ${price} CZK`);
}

printPrice("Coffee", toNumber(" 59 "));
printPrice("Tea", toNumber("45"));

// node task.js má vypsat:
// Coffee: 59 CZK
// Tea: 45 CZK
