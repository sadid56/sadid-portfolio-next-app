import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadid",
  description: "Let's code !😊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="_next">{children}</body>
    </html>
  );
}
