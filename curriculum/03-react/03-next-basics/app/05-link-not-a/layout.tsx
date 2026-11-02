import type { ReactNode } from "react";
import Counter from "./_parts/Counter";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <nav>
        <a href="/05-link-not-a">Domů</a> · <a href="/05-link-not-a/menu">Menu</a>
      </nav>
      <Counter />
      {children}
    </div>
  );
}
