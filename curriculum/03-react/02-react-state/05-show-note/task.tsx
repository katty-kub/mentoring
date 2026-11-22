import { useState } from "react";

// Tlačítko Poznámka ukáže poznámku. Druhý klik ji zase schová.

export const Task = () => (
  <div>
    <h2>Matcha latte</h2>
    <button>Poznámka</button>
    <p>S ovesným mlékem.</p>
  </div>
);

// stránka má ukázat: Matcha latte a tlačítko Poznámka
// po kliku navíc: S ovesným mlékem.
// po druhém kliku: stejně jako na začátku
