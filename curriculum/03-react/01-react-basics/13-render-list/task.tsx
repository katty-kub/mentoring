// Ukaž products jako list (seznam) <ul>: jeden <li> na produkt.
// Console (konzole) v browseru (prohlížeči), klávesa F12, má zůstat bez varování.

const products = [
  { id: 1, name: "Espresso", price: 49 },
  { id: 2, name: "Cappuccino", price: 65 },
  { id: 3, name: "Čaj", price: 45 },
  { id: 4, name: "Koláč", price: 79 },
];

export const Task = () => (
  <div>
    <h2>Menu</h2>
  </div>
);

// stránka má ukázat:
// Menu
// Espresso: 49 Kč
// Cappuccino: 65 Kč
// Čaj: 45 Kč
// Koláč: 79 Kč
