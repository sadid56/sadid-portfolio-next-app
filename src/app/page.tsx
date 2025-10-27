import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import Services from "@/components/sections/Services/Services";
import ThanksComponent from "@/components/sections/ThanksComponent/ThanksComponent";
import DynamicBackground from "@/components/global/DynamicBackground";
import Hero from "@/components/sections/Hero/Hero";

export default async function Home() {
  return (
    <DynamicBackground>
      <Hero />
      <Achievements />
      <Projects />
      <Services />
      <ThanksComponent />
    </DynamicBackground>
  );
}
