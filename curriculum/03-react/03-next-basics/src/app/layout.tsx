import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Next tasky" };

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="cs">
    <body>{children}</body>
  </html>
);

export default RootLayout;
