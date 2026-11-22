import { useState } from "react";

// Bug report (hlášení chyby): do políčka nejde psát.
// Console (konzole) v browseru (prohlížeči), klávesa F12, má varování.

export const Task = () => {
  const [name, setName] = useState("Eva");

  return (
    <div>
      <input value={name} />
      <p>Ahoj, {name}</p>
    </div>
  );
};

// stránka má ukázat: políčko s Eva a Ahoj, Eva
// po přepsání políčka na Petr: Ahoj, Petr
// console bez varování
