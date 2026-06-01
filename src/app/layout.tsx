import type { Metadata } from "next";
import "@editframe/elements/styles.css";

export const metadata: Metadata = {
  title: "Editframe Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
