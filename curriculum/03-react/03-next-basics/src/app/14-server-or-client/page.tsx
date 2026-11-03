// Predict (předpověz): server component (na serveru), nebo client component (i v prohlížeči)?
// Napiš tip a proč. Pak to ověř tady, v části „When to use Server and Client Components“:
// https://nextjs.org/docs/app/getting-started/server-and-client-components
//
// A: const Price = ({ price }: { price: number }) => <p>{price} Kč</p>;
// B: const Like = () => { const [n, setN] = useState(0); return <button>{n}</button>; };
// C: const Search = () => <input onChange={(e) => console.log(e.target.value)} />;
// D: const MenuList = () => <ul>{menu.map((m) => <li key={m.id}>{m.name}</li>)}</ul>;
// E: const Hours = () => <p>{readFileSync("hours.txt", "utf8")}</p>;
//
// A → tip:
// B → tip:
// C → tip:
// D → tip:
// E → tip:

const Page = () => <h1>Task 14 server-or-client</h1>;

export default Page;
