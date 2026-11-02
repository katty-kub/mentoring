// Přidej pod cenu tlačítko „Líbí 0“: každý klik přičte 1.
// Stránka ať zůstane server component. Client ať je jen to, co musí.
// import { useState } from "react";

const product = { name: "Matcha latte", price: 79 };

export default function Page() {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price} Kč</p>
    </div>
  );
}

// /13-like-button má ukázat: Matcha latte, 79 Kč, Líbí 0
// po dvou klicích: Líbí 2
