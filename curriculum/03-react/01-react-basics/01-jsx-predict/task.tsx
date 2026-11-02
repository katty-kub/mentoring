// Predict (předpověz): co ukáže stránka na každém řádku? Napiš tip. Pak to ověř na stránce.
// <p>0: {1 + 1}</p> → 0: 2
// 1: tip:
// 2: tip:
// 3: tip:
// 4: tip:
// 5: tip:
// 6: tip:
// 7: tip:
// 8: tip:

const name = "eva";
const price = 59;
const count = 0;

export default function Task() {
  return (
    <div>
      <p>1: {price * 2} Kč</p>
      <p>2: {name.toUpperCase()}</p>
      <p>3: {"Ahoj, " + name}</p>
      <p>4: {true}</p>
      <p>5: {null}</p>
      <p>6: {count}</p>
      <p>7: {count > 0}</p>
      <p>8: {[1, 2, 3]}</p>
    </div>
  );
}
