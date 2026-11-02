// Bug report (hlášení chyby): stránka ukazuje jméno variable (proměnné) místo hodnoty.

const item = "Káva";
const price = 59;
const stock = 12;

export default function Task() {
  return (
    <div>
      <p>{item}: price Kč</p>
      <p>Skladem: {"stock"} ks</p>
    </div>
  );
}

// stránka má ukázat:
// Káva: 59 Kč
// Skladem: 12 ks
