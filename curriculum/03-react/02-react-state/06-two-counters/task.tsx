import { useState } from "react";

// Predict (předpověz): klikni v duchu dvakrát na první tlačítko a jednou na druhé. Napiš tipy.
// Pak to ověř na stránce.
// první tlačítko ukáže → tip:
// druhé tlačítko ukáže → tip:

const Counter = () => {
  const [likes, setLikes] = useState(0);

  return <button onClick={() => setLikes(likes + 1)}>Líbí {likes}</button>;
};

export const Task = () => (
  <div>
    <Counter />
    <Counter />
  </div>
);
