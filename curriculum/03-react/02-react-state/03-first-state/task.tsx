import { useState } from "react";

// Bug report (hlášení chyby): klikám na Přidat, ale stránka pořád ukazuje „Kliků: 0“.
// Ať si počet pamatuje React: state (stav).

let count = 0;

export const Task = () => (
  <div>
    <p>Kliků: {count}</p>
    <button
      onClick={() => {
        count = count + 1;
      }}
    >
      Přidat
    </button>
  </div>
);

// stránka má ukázat: Kliků: 0
// po třech klicích: Kliků: 3
