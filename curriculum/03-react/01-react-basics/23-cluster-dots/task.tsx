// Na kartě notebooku (sešitu) ukaž jeho clusters (okruhy). Každý okruh má tečku ve své barvě.
// tečka: <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%" }} />

type Cluster = { id: string; name: string; color: string };
type Notebook = { id: string; name: string; notes: number; clusters: Cluster[] };

const notebooks: Notebook[] = [
  {
    id: "starter",
    name: "Starter",
    notes: 12,
    clusters: [
      { id: "react", name: "React", color: "deepskyblue" },
      { id: "typescript", name: "TypeScript", color: "royalblue" },
      { id: "css", name: "CSS", color: "orchid" },
    ],
  },
  {
    id: "api",
    name: "API",
    notes: 7,
    clusters: [
      { id: "basics", name: "Základy", color: "seagreen" },
      { id: "rest", name: "REST", color: "orange" },
      { id: "auth", name: "Auth", color: "crimson" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    notes: 5,
    clusters: [
      { id: "node", name: "Node.js", color: "olivedrab" },
      { id: "postgres", name: "PostgreSQL", color: "steelblue" },
    ],
  },
  { id: "frontend", name: "Frontend", notes: 0, clusters: [] },
];

const NotebookCard = ({ notebook }: { notebook: Notebook }) => (
  <li>
    <h2>{notebook.name}</h2>
    <p>Poznámky: {notebook.notes}</p>
  </li>
);

export const Task = () => (
  <ul>
    {notebooks.map((notebook) => (
      <NotebookCard key={notebook.id} notebook={notebook} />
    ))}
  </ul>
);

// stránka má ukázat:
// Starter / ● React ● TypeScript ● CSS / Poznámky: 12
// API / ● Základy ● REST ● Auth / Poznámky: 7
// Backend / ● Node.js ● PostgreSQL / Poznámky: 5
// Frontend / Poznámky: 0
// každá tečka ve své barvě, console (konzole) v F12 bez varování
