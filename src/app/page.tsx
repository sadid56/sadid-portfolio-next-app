import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import Services from "@/components/sections/Services/Services";
import ThanksComponent from "@/components/sections/ThanksComponent/ThanksComponent";
import DynamicBackground from "@/components/global/DynamicBackground";
import Hero from "@/components/sections/Hero/Hero";
import Experience from "@/components/sections/Experience/Experience";
import ExperienceMobileDevice from "@/components/sections/Experience/ExperienceMobileDevice";

export default async function Home() {
  return (
    <DynamicBackground>
      <Hero />
      <Achievements />
      <Experience />
      <ExperienceMobileDevice />
      <Projects />
      <Services />
      <ThanksComponent />
    </DynamicBackground>
  );
}
