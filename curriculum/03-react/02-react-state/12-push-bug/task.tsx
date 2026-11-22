import { useState } from "react";

// Bug report (hlášení chyby): klikám na Přidat stůl, ale na stránce se nic nezmění.

export const Task = () => {
  const [tables, setTables] = useState(["Stůl 1", "Stůl 2"]);

  return (
    <div>
      <ul>
        {tables.map((table) => (
          <li key={table}>{table}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          tables.push(`Stůl ${tables.length + 1}`);
          setTables(tables);
        }}
      >
        Přidat stůl
      </button>
    </div>
  );
};

// stránka má ukázat: Stůl 1, Stůl 2
// po dvou klicích: Stůl 1, Stůl 2, Stůl 3, Stůl 4
