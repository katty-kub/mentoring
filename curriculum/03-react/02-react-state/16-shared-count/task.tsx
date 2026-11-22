import { useState } from "react";

// Summary má ukazovat stejný počet jako tlačítko. Teď o klicích neví.
// Type (typ) pro prop (vstup), která je function (funkce): onAdd: () => void

const AddButton = () => {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(count + 1)}>Přidat ({count})</button>;
};

const Summary = () => <p>V košíku: 0 ks</p>;

export const Task = () => (
  <div>
    <AddButton />
    <Summary />
  </div>
);

// stránka má ukázat: Přidat (0) a V košíku: 0 ks
// po třech klicích: Přidat (3) a V košíku: 3 ks
