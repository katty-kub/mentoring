// Tvar notebooku (sešitu) je napsaný dvakrát. Ať je jen na jednom místě: type (typ) Notebook.

const notebooks: { id: string; name: string; notes: number }[] = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
];

const NotebookCard = ({ notebook }: { notebook: { id: string; name: string; notes: number } }) => (
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

// stránka má ukázat (stejně jako teď):
// Starter / Poznámky: 12
// API / Poznámky: 7
// Backend / Poznámky: 5
// Frontend / Poznámky: 0
// npx tsc nevypíše nic
