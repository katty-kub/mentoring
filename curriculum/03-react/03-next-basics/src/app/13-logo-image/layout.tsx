import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <header>
      <h1>Kavárna U Kocoura</h1>
    </header>
    {children}
  </div>
);

export default Layout;
