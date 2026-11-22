// Přepiš loop (smyčku) na method (metodu) forEach. Výstup se nezmění.
// V kódu pak nezůstane slovo for se závorkou: `for (`.

const prices = [49, 65, 45];

for (const price of prices) {
  console.log(`${price} CZK`);
}

// node task.js má vypsat:
// 49 CZK
// 65 CZK
// 45 CZK
