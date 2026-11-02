// Predict (předpověz): kde ten kód běžel? Na serveru, v browseru (prohlížeči), nebo na obou?
// Napiš tip za každý řádek. Pak otevři /12-where-is-the-log. Podívej se do terminálu i do F12.
// V console (konzoli) v F12 má log ze serveru štítek Server.
//
// log: Page → tip:
// log: Title → tip:
// log: Counter → tip:

import Counter from "./_parts/Counter";
import Title from "./_parts/Title";

export default function Page() {
  console.log("log: Page");
  return (
    <div>
      <Title />
      <Counter />
    </div>
  );
}
