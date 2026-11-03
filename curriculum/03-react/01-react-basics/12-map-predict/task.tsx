// Predict (předpověz): co ukáže stránka na každém řádku? Napiš tip. Pak to ověř na stránce.
// <p>0: {[1, 2].map((n) => n + 1).join(", ")}</p> → 0: 2, 3
// 1: tip:
// 2: tip:
// 3: tip:
// 4: tip:
// 5: tip:
// 6: tip:

const prices = [49, 65, 45];
const names = ["Eva", "Petr"];

export const Task = () => (
  <div>
    <p>1: {prices.map((price) => price * 2).join(", ")}</p>
    <p>2: {names.map((name) => name.toUpperCase()).join(", ")}</p>
    <p>3: {prices.map((price) => price + 1).length}</p>
    <p>4: {prices.join(", ")}</p>
    <p>5: {names.map((name, index) => index + " " + name).join(", ")}</p>
    <p>6:</p>
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </div>
);
