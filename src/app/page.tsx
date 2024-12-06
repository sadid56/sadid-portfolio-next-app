import React from "react";
import Footer from "@/components/layouts/footer/Footer";
import Navber from "@/components/layouts/navber/Navber";
import TopProgressBar from "@/components/ui/ExternalStyle/TopProgressBar";
import GlowCursor from "@/components/ui/ExternalStyle/GlowCursor";
import Hero from "@/components/pages/Hero/Hero";
import Skills from "@/components/pages/skills/Skills";
import Achievements from "@/components/pages/Achivement/Achivement";
import Projects from "@/components/pages/project/Projects";
import Services from "@/components/pages/services/Services";
import ThanksComponent from "@/components/pages/ThanksComponent/ThanksComponent";
import DynamicBackground from "@/components/Container/DynamicBackgournd";


export default function Home() {
  return (
    <DynamicBackground>
      <TopProgressBar />
      <GlowCursor />
      <Navber />
      <Hero />
      <Skills />
      <Achievements/>
      <Projects />
      <Services />
      <ThanksComponent/>
      <Footer />
    </DynamicBackground>
  );
}
