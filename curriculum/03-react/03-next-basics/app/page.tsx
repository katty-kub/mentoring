// Lists every task folder in app/ as a link.
import { readdirSync } from "node:fs";
import path from "node:path";

export default function Home() {
  const tasks = readdirSync(path.join(process.cwd(), "app"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d\d-/.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>
          <a href={`/${task}`}>{task}</a>
        </li>
      ))}
    </ul>
  );
}
