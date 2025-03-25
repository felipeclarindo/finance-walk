import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Walk",
  description: "Project to control you finances.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
