// Lists every task folder in src/app/ as a link.
import { readdirSync } from "node:fs";
import path from "node:path";
import Link from "next/link";

const Home = () => {
  const tasks = readdirSync(path.join(process.cwd(), "src", "app"), { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^\d\d-/.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task}>
          <Link href={`/${task}`}>{task}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
