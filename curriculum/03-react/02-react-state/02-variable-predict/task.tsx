// Predict (předpověz): klikni v duchu třikrát na Přidat. Napiš tipy. Pak to ověř na stránce.
// Console (konzole) v browseru (prohlížeči): klávesa F12.
// stránka po třech klicích ukáže → tip:
// console po třech klicích ukáže → tip:

let count = 0;

export const Task = () => (
  <div>
    <p>Kliků: {count}</p>
    <button
      onClick={() => {
        count = count + 1;
        console.log(count);
      }}
    >
      Přidat
    </button>
  </div>
);
