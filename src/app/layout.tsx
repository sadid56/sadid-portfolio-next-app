import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadid",
  description: "Let's code! 😊",
  // icons: {
  //   icon: "./favicon.ico", 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        {/* Link to the favicon */}
        <link rel="icon" href="./favicon.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
