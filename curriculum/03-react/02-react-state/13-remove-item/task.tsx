import { useState } from "react";

// Tlačítko × odebere z košíku svou položku.

export const Task = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Espresso" },
    { id: 2, name: "Čaj" },
    { id: 3, name: "Koláč" },
  ]);

  return (
    <ul>
      {cart.map((item) => (
        <li key={item.id}>
          {item.name} <button>×</button>
        </li>
      ))}
    </ul>
  );
};

// stránka má ukázat: Espresso ×, Čaj ×, Koláč ×
// po kliku na × u Čaj: Espresso ×, Koláč ×
