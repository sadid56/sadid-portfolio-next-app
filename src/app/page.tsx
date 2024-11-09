import React from "react";
import Hero from "@/pages/Hero/Hero";
import Projects from "@/pages/project/Projects";
import Services from "@/pages/services/Services";
import Skills from "@/pages/skills/Skills";
import Footer from "@/shared/footer/Footer";
import Navber from "@/shared/navber/Navber";
import TopProgressBar from "@/components/ui/ExternalStyle/TopProgressBar";
import GlowCursor from "@/components/ui/ExternalStyle/GlowCursor";
import DynamicBackground from "@/components/layout/DynamicBackgournd";
import ThanksComponent from "@/pages/ThanksComponent/ThanksComponent";
import Achivement from "@/pages/Achivement/Achivement";

export default function Home() {
  return (
    <DynamicBackground>
      <TopProgressBar />
      <GlowCursor />
      <Navber />
      <Hero />
      <Skills />
      <Achivement/>
      <Projects />
      <Services />
      <ThanksComponent/>
      <Footer />
    </DynamicBackground>
  );
}
