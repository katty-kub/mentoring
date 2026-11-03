import type { ReactNode } from "react";

// Ukaž menu kavárny po sekcích, každou sekci v rámečku. Components (komponenty) si rozděl sama.
// Při count 0 ukaž „Vyprodáno“ místo ceny. Note (poznámku) ukaž jen tam, kde je.
// Všechno otypuj. Console (konzole) v browseru (prohlížeči), F12, bez varování.

const drinks = [
  { id: 1, name: "Espresso", price: 49, count: 20 },
  { id: 2, name: "Matcha latte", price: 79, count: 0, note: "s ovesným mlékem" },
  { id: 3, name: "Čaj", price: 45, count: 8 },
];

const desserts = [
  { id: 4, name: "Dýňový koláč", price: 85, count: 3, note: "jen na podzim" },
  { id: 5, name: "Brownie", price: 65, count: 0 },
];

export const Task = () => <h1>Kavárna U Kocoura</h1>;

// stránka má ukázat:
// Kavárna U Kocoura
// rámeček: Nápoje
//   Espresso: 49 Kč
//   Matcha latte: Vyprodáno (s ovesným mlékem)
//   Čaj: 45 Kč
// rámeček: Dezerty
//   Dýňový koláč: 85 Kč (jen na podzim)
//   Brownie: Vyprodáno
