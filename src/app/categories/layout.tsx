import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance Walk | Categories",
  description: "Manage your categories",
};

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      {children}
    </body>
  );
}
