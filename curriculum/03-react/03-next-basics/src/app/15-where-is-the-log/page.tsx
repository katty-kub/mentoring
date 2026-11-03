// Predict (předpověz): kde ten kód běžel? Na serveru, v browseru (prohlížeči), nebo na obou?
// Napiš tip za každý řádek. Pak otevři /15-where-is-the-log.
// Podívej se do terminálu, kde běží npm run dev, i do F12.
// V console (konzoli) v F12 má log (výpis) ze serveru štítek Server.
//
// log: Page → tip:
// log: Title → tip:
// log: Counter → tip:

import { Counter } from "./_parts/Counter";
import { Title } from "./_parts/Title";

const Page = () => {
  console.log("log: Page");
  return (
    <div>
      <Title />
      <Counter />
    </div>
  );
};

export default Page;
