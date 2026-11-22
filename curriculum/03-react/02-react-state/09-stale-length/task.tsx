import { useState } from "react";

// Bug report (hlášení chyby): napíšu vzkaz a kliknu na Smazat.
// Políčko je prázdné, ale „Znaků“ ukazuje staré číslo.

export const Task = () => {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);

  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          setLength(event.target.value.length);
        }}
      />
      <button onClick={() => setText("")}>Smazat</button>
      <p>Znaků: {length}</p>
    </div>
  );
};

// stránka má ukázat: prázdné políčko a Znaků: 0
// po napsání Ahoj: Znaků: 4
// po kliku na Smazat: Znaků: 0
