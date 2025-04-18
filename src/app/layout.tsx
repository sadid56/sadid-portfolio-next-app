import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";
import Navber from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import TopProgressBar from "@/components/ui/TopProgressBar";
import GlowCursor from "@/components/ui/GlowCursor";
import { Montserrat, Poppins } from "next/font/google";
import { cn } from "@/lib/cn";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sadid",
  description: "Let's code! 😊",
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
        <link rel="icon" href="/favicon.ico" />
      </head>
      <ReactLenis options={{ duration: 1.5 }} root>
        <body className={cn(montserrat.variable, poppins.variable)}>
          <Navber />
          <TopProgressBar />
          <GlowCursor />
          {children}
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
