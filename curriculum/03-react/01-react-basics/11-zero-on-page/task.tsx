// Bug report (hlášení chyby): u prázdného košíku stránka ukazuje navíc „0“.

const Cart = ({ items }: { items: string[] }) => (
  <div>
    <h2>Košík</h2>
    {items.length && <p>Položek: {items.length}</p>}
    {items.length === 0 && <p>Košík je prázdný</p>}
  </div>
);

export const Task = () => (
  <div>
    <Cart items={[]} />
    <Cart items={["Káva", "Koláč"]} />
  </div>
);

// stránka má ukázat:
// Košík
// Košík je prázdný
// Košík
// Položek: 2
