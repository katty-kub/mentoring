import { useState } from "react";

// Košík kavárny. V menu má každý produkt tlačítko Přidat, v košíku má každá položka tlačítko ×.
// Každý produkt může být v košíku jen jednou. Pod košíkem je cena celkem.
// Components (komponenty) rozděl sama. Všechno otypuj.
// Console (konzole) v browseru (prohlížeči), klávesa F12, bez varování.

const menu = [
  { id: 1, name: "Espresso", price: 49 },
  { id: 2, name: "Čaj", price: 45 },
  { id: 3, name: "Koláč", price: 79 },
];

export const Task = () => <h1>Kavárna U Kocoura</h1>;

// stránka má ukázat:
// Kavárna U Kocoura
// Menu: Espresso 49 Kč [Přidat], Čaj 45 Kč [Přidat], Koláč 79 Kč [Přidat]
// Košík: Košík je prázdný
// Celkem: 0 Kč
// po kliku na Přidat u Espresso a u Koláč: Košík: Espresso [×], Koláč [×] a Celkem: 128 Kč
// po dalším kliku na Přidat u Koláč: beze změny
// po kliku na × u Espresso: Košík: Koláč [×] a Celkem: 79 Kč
// npx tsc nevypíše nic
