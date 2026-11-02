// Bug report (hlášení chyby): console (konzole) v browseru (prohlížeči), klávesa F12, hlásí:
// Encountered two children with the same key, `Káva`.

const orders = [
  { id: 101, name: "Káva", table: 3 },
  { id: 102, name: "Koláč", table: 3 },
  { id: 103, name: "Káva", table: 5 },
];

export default function Task() {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.name}>
          {order.name}, stůl {order.table}
        </li>
      ))}
    </ul>
  );
}

// stránka má ukázat (stejně jako teď), console bez varování:
// Káva, stůl 3
// Koláč, stůl 3
// Káva, stůl 5
