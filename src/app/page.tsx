import React from "react"; // Ensure you import React
import Hero from "@/pages/Hero/Hero";
import Projects from "@/pages/project/Projects";
import Services from "@/pages/services/Services";
import Skills from "@/pages/skills/Skills";
import Footer from "@/shared/footer/Footer";
import Navber from "@/shared/navber/Navber";
import TopProgressBar from "@/components/ui/ExternalStyle/TopProgressBar";
import GlowCursor from "@/components/ui/ExternalStyle/GlowCursor";

export default function Home() {
  return (
    <>
      <TopProgressBar />
      <GlowCursor />
      <Navber />
      <Hero />
      <main className="bg-mainBgColor">
        <Skills />
        <Projects />
        <Services />
        <Footer />
      </main>
    </>
  );
}
