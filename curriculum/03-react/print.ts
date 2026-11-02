// Prints the HTML of one task. In a task folder: npm run print
// Anywhere in 03-react: npm run print -- 01-react-basics/05-greeting-prop
import path from "node:path";
import { createElement, type ComponentType } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const here = path.relative(process.cwd(), process.env.INIT_CWD ?? process.cwd());
const task = (process.argv[2] ?? here).replace(/\/?(task\.tsx)?$/, "");

if (task === "") {
  console.error("Run it in a task folder, or: npm run print -- 01-react-basics/05-greeting-prop");
  process.exit(1);
}

const server = await createServer({
  appType: "custom",
  logLevel: "error",
  server: { middlewareMode: true },
});

try {
  const loaded = await server.ssrLoadModule(`./${task}/task.tsx`);
  const Task: ComponentType = loaded.default;
  const html = renderToStaticMarkup(createElement(Task));
  // One block element per line, so it reads like the page
  console.log(html.replace(/(<\/(?:p|li|ul|h\d|div|header|main|section)>)/g, "$1\n").trim());
} finally {
  await server.close();
}
