import { useState } from "react";

// Predict (předpověz): klikni v duchu jednou na „+1“, pak jednou na „+2?“. Napiš tipy. Pak to ověř.
// Console (konzole) v browseru (prohlížeči): klávesa F12.
// 1: console po kliku na „+1“ vypíše → tip:
// 2: stránka po kliku na „+1“ ukáže → tip:
// 3: stránka po kliku na „+2?“ ukáže → tip:

export const Task = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Počet: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        +2?
      </button>
    </div>
  );
};
