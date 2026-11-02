// Bug report (hlášení chyby): u prázdného košíku stránka ukazuje navíc „0“.

function Cart({ items }: { items: string[] }) {
  return (
    <div>
      <h2>Košík</h2>
      {items.length && <p>Položek: {items.length}</p>}
      {items.length === 0 && <p>Košík je prázdný</p>}
    </div>
  );
}

export default function Task() {
  return (
    <div>
      <Cart items={[]} />
      <Cart items={["Káva", "Koláč"]} />
    </div>
  );
}

// stránka má ukázat:
// Košík
// Košík je prázdný
// Košík
// Položek: 2
