import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <div>
    <h1>KAVÁRNA</h1>
    {children}
  </div>
);

export default Layout;
