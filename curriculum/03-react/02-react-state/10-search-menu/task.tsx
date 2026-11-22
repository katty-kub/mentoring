import { useState } from "react";

// Přidej nad seznam políčko pro hledání. Ukaž jen produkty, které mají napsaný text ve jménu.

const products = [
  { id: 1, name: "espresso" },
  { id: 2, name: "cappuccino" },
  { id: 3, name: "latte" },
  { id: 4, name: "matcha latte" },
];

export const Task = () => (
  <div>
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
);

// stránka má ukázat: prázdné políčko a všechny 4 produkty
// po napsání latte: latte, matcha latte
// po napsání x: žádný produkt
