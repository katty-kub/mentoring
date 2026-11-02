import type { ReactNode } from "react";

export const metadata = { title: "Next tasky" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
