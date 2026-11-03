// Když má notebook (sešit) 0 poznámek, má karta ukázat „Zatím žádné poznámky“ místo „Poznámky: 0“.

type Notebook = { id: string; name: string; notes: number };

const notebooks: Notebook[] = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
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
// Starter / Poznámky: 12
// API / Poznámky: 7
// Backend / Poznámky: 5
// Frontend / Zatím žádné poznámky
