import { useState } from "react";

// Košík začíná prázdný. Přidej tlačítko Přidat kávu: každý klik dá do košíku další "Káva".
// Po tvé změně se ozve npx tsc. Oprav i to.

export const Task = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <p>V košíku: {cart.join(", ")}</p>
      <p>Položek: {cart.length}</p>
    </div>
  );
};

// stránka má ukázat: V košíku: a Položek: 0
// po dvou klicích: V košíku: Káva, Káva a Položek: 2
// npx tsc nevypíše nic
