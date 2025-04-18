import React from "react";
import Skills from "@/components/sections/Skills/Skills";
import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import Services from "@/components/sections/Services/Services";
import ThanksComponent from "@/components/sections/ThanksComponent/ThanksComponent";
import dynamic from "next/dynamic";
import Loading from "@/components/ui/Loading";
import DynamicBackground from "@/components/global/DynamicBackground";
// import BubbleCursor from "@/components/ui/ExternalStyle/BubbleCurson";

const Hero = dynamic(() => import("@/components/sections/Hero/Hero"), {
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <DynamicBackground>
      <Hero />
      <Skills />
      <Achievements />
      <Projects />
      <Services />
      <ThanksComponent />
    </DynamicBackground>
  );
}
