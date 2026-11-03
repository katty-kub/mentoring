// Ukaž notebooks (sešity) jako list (seznam) <ul>: jeden <li> na sešit.
// Console (konzole) v browseru (prohlížeči), klávesa F12, má zůstat bez varování.

const notebooks = [
  { id: "starter", name: "Starter", notes: 12 },
  { id: "api", name: "API", notes: 7 },
  { id: "backend", name: "Backend", notes: 5 },
  { id: "frontend", name: "Frontend", notes: 0 },
];

export const Task = () => (
  <div>
    <h2>Notebooks</h2>
  </div>
);

// stránka má ukázat:
// Notebooks
// Starter
// API
// Backend
// Frontend
