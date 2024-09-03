/* eslint-disable @next/next/no-page-custom-font */
import ParticlesPage from "@/components/particless/Particless";
import About from "@/pages/about/About";
import { Hero } from "@/pages/Hero/Hero";
import Projects from "@/pages/project/Projects";
import Services from "@/pages/services/Services";
import Skills from "@/pages/skills/Skills";
import Footer from "@/shared/footer/Footer";
import Navber from "@/shared/navber/Navber";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
   <link  href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
    </Head>
    {/* <ParticlesPage/>  */}
    <Navber/>
    <Hero/>
    <main className="bg-mainBgColor">
    <About/>
    <Skills/>
    <Projects/>
    <Services/>
    <Footer/>
    </main>
    </>
  );
}
