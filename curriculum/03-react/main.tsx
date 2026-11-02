// Shows the list of tasks, or one task: ?task=01-react-basics/05-greeting-prop
import { StrictMode, type ComponentType } from "react";
import { createRoot } from "react-dom/client";

type TaskModule = { default: ComponentType };

const tasks = import.meta.glob<TaskModule>("./*/*/task.tsx");
const names = Object.keys(tasks)
  .map((path) => path.slice("./".length, -"/task.tsx".length))
  .sort();

function TaskList() {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>
          <a href={`?task=${name}`}>{name}</a>
        </li>
      ))}
    </ul>
  );
}

const root = createRoot(document.getElementById("root")!);
const current = new URLSearchParams(location.search).get("task");
const load = current ? tasks[`./${current}/task.tsx`] : undefined;

if (load) {
  document.title = current ?? "React tasky";
  load().then(({ default: Task }) => {
    root.render(
      <StrictMode>
        <Task />
      </StrictMode>,
    );
  });
} else {
  root.render(<TaskList />);
}
