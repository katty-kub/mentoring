// Predict (předpověz): co ukáže stránka na každém řádku? Napiš tip. Pak to ověř na stránce.
// <p>0: {1 + 1}</p> → 0: 2
// 1: tip: 118 Kč
// 2: tip: EVA
// 3: tip: Ahoj, eva
// 4: tip: Boolean React nevykresluje
// 5: tip: null (a undefined) React nevykresluje
// 6: tip: 0
// 7: tip: Porovnání vrací boolean a ten se nevykreslí
// 8: tip: 123

const name = "eva";
const price = 59;
const count = 0;

export const Task = () => (
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
