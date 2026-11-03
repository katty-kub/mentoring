// Přidej pod cenu tlačítko „Líbí 0“: každý klik přičte 1.
// Stránka ať zůstane server component (běží na serveru).
// Client component (běží i v prohlížeči) ať je jen to, co musí.
// import { useState } from "react";

const product = { name: "Matcha latte", price: 79 };

const Page = () => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.price} Kč</p>
  </div>
);

export default Page;

// /16-like-button má ukázat: Matcha latte, 79 Kč, Líbí 0
// po dvou klicích: Líbí 2
