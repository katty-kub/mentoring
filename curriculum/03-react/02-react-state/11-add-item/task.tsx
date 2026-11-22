import { useState } from "react";

// Tlačítko Přidat hosta přidá na konec seznamu dalšího: Host 3, pak Host 4…

export const Task = () => {
  const [guests, setGuests] = useState(["Host 1", "Host 2"]);

  return (
    <div>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <button>Přidat hosta</button>
    </div>
  );
};

// stránka má ukázat: Host 1, Host 2
// po dvou klicích: Host 1, Host 2, Host 3, Host 4
