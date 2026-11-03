// Spočítej cenu s DPH (daní) pro cenu z formuláře. Použij addVat.
// addVat(200, 1.21) → 242

const addVat = (price: number, rate: number) => {
  return price * rate;
};

const input = "100"; // z form field (políčka formuláře)
const rate = 1.21;

// tvůj kód


// node task.ts má vypsat: 121
