"use client"
import Container from "@/components/Container/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import lottieAnimation from "../../assets/animation/about.json"
import Lottie from "lottie-react";
import { Macbook } from "@/components/ui/AboutMackbookScroll/AboutMackBookScroll";


const About = () => {
  return (
    <div id="about" className="overflow-hidden flex items-center py-0 md:py-20 w-full">
      <Macbook
        showGradient={false}
      />

    </div>
  );
};

export default About;
