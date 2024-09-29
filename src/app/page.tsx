/* eslint-disable @next/next/no-page-custom-font */
import ParticlesPage from "@/components/particless/Particless";
import Hero from "@/pages/Hero/Hero";
import Projects from "@/pages/project/Projects";
import Services from "@/pages/services/Services";
import Skills from "@/pages/skills/Skills";
import Footer from "@/shared/footer/Footer";
import Navber from "@/shared/navber/Navber";

export default function Home() {
  return (
    <>
      {/* <ParticlesPage/>  */}
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
