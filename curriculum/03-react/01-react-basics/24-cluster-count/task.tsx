// Bug report (hlášení chyby): karta API ukazuje „Okruhy: 2“, ale clusters (okruhy) má tři.
// Oprav to tak, aby se to stát znovu nemohlo.

type Notebook = { id: string; name: string; clusters: string[]; clusterCount: number };

const notebooks: Notebook[] = [
  { id: "starter", name: "Starter", clusters: ["React", "TypeScript", "CSS"], clusterCount: 3 },
  { id: "api", name: "API", clusters: ["Základy", "REST", "Auth"], clusterCount: 2 },
  { id: "backend", name: "Backend", clusters: ["Node.js", "PostgreSQL"], clusterCount: 2 },
  { id: "frontend", name: "Frontend", clusters: [], clusterCount: 0 },
];

const NotebookCard = ({ notebook }: { notebook: Notebook }) => (
  <li>
    <h2>{notebook.name}</h2>
    <p>{notebook.clusters.join(", ")}</p>
    <p>Okruhy: {notebook.clusterCount}</p>
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
// Starter / React, TypeScript, CSS / Okruhy: 3
// API / Základy, REST, Auth / Okruhy: 3
// Backend / Node.js, PostgreSQL / Okruhy: 2
// Frontend / Okruhy: 0
