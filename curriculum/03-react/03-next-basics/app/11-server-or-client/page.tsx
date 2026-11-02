// Predict (předpověz): je komponenta server component, nebo client component ("use client")?
// Napiš tip a proč. Pak to ověř tady, v části „When to use Server and Client Components“:
// https://nextjs.org/docs/app/getting-started/server-and-client-components
//
// A: function Price({ price }: { price: number }) { return <p>{price} Kč</p>; }
// B: function Like() { const [n, setN] = useState(0); return <button>{n}</button>; }
// C: function Search() { return <input onChange={(e) => console.log(e.target.value)} />; }
// D: function MenuList() { return <ul>{menu.map((m) => <li key={m.id}>{m.name}</li>)}</ul>; }
// E: function Hours() { return <p>{readFileSync("hours.txt", "utf8")}</p>; }
//
// A → tip:
// B → tip:
// C → tip:
// D → tip:
// E → tip:

export default function Page() {
  return <h1>11 server-or-client</h1>;
}
