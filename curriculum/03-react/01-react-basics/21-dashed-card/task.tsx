// Prázdný notebook (sešit), 0 poznámek, má mít čárkovaný rámeček. Ostatní mají plný.

type Notebook = { id: string; name: string; notes: number };

const notebooks: Notebook[] = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
];

const NotebookCard = ({ notebook }: { notebook: Notebook }) => (
  <li style={{ border: "1px solid gray", padding: 8 }}>
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
// plný rámeček: Starter / Poznámky: 12
// plný rámeček: API / Poznámky: 7
// plný rámeček: Backend / Poznámky: 5
// čárkovaný rámeček: Frontend / Poznámky: 0
