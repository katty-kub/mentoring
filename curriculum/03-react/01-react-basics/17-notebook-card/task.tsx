// Karta notebooku (sešitu) je napsaná přímo v map.
// Ať je to component (komponenta) NotebookCard, která dostane data přes props (vstupy).

const notebooks = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
];

type NotebookCardProps = {
  name: string;
  notes: number;
};

const NotebookCard = ({ name, notes }: NotebookCardProps) => (
  <li>
    <h2>{name}</h2>
    <p>Poznámky: {notes}</p>
  </li>
);

export const Task = () => (
  <ul>
    {notebooks.map((notebook) => (
      <NotebookCard
        key={notebook.id}
        name={notebook.name}
        notes={notebook.notes}
      />
    ))}
  </ul>
);

// stránka má ukázat (stejně jako teď):
// Starter / Poznámky: 12
// API / Poznámky: 7
// Backend / Poznámky: 5
// Frontend / Poznámky: 0
