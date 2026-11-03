import type { ReactNode } from "react";
import { Counter } from "./_parts/Counter";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <nav>
      <a href="/06-link-not-a">Domů</a> · <a href="/06-link-not-a/menu">Menu</a>
    </nav>
    <Counter />
    {children}
  </div>
);

export default Layout;
