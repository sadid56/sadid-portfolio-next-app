import React from "react";
import Skills from "@/components/sections/Skills/Skills";
import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import Services from "@/components/sections/Services/Services";
import ThanksComponent from "@/components/sections/ThanksComponent/ThanksComponent";
import DynamicBackground from "@/components/global/DynamicBackground";
import Hero from "@/components/sections/Hero/Hero";

interface PageProps {
  searchParams: Promise<{ skill: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const { skill } = await searchParams;

  return (
    <DynamicBackground>
      <Hero />
      <Skills skill={skill} />
      <Achievements />
      <Projects />
      <Services />
      <ThanksComponent />
    </DynamicBackground>
  );
}
