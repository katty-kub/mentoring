import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <section>
    <h2>MENU</h2>
    {children}
  </section>
);

export default Layout;
