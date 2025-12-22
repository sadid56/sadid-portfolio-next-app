import Achievements from "@/components/sections/Achivement/Achivement";
import Projects from "@/components/sections/Project/Projects";
import DynamicBackground from "@/components/global/DynamicBackground";
import Hero from "@/components/sections/Hero/Hero";
import Navber from "@/components/shared/navbar/Navbar";
import Footer from "@/components/shared/footer/Footer";
import TopProgressBar from "@/components/ui/TopProgressBar";
import Experience from "@/components/sections/Experience/Experience";

export default async function Home() {
  return (
    <DynamicBackground>
      <TopProgressBar />
      <Navber />
      <Hero />
      <Experience />
      <Achievements />
      <Projects />
      <Footer />
    </DynamicBackground>
  );
}
