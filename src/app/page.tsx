import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import Services from "@/components/sections/Services/Services";
import ThanksComponent from "@/components/sections/ThanksComponent/ThanksComponent";
import DynamicBackground from "@/components/global/DynamicBackground";
import Hero from "@/components/sections/Hero/Hero";
import Experience from "@/components/sections/Experience/Experience";
import ExperienceMobileDevice from "@/components/sections/Experience/ExperienceMobileDevice";
import Navber from "@/components/shared/navbar/Navbar";

export default async function Home() {
  return (
    <DynamicBackground>
      <Navber />
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
