"use client"
import Container from "@/components/Container/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import { AboutMacbookScroll } from "@/components/ui/AboutMackbookScroll/AboutMackBookScroll";
import lottieAnimation from "../../assets/animation/about.json"
import Lottie from "lottie-react";


const About = () => {
  return (
    <div id="about" className="overflow-hidden flex items-center py-0 md:py-20 w-full">
      <AboutMacbookScroll
        // title={<SectionTitle color="About" text="Me" />}
        showGradient={false}
      />
      {/* <div className="w-[30%] relative">
        <Lottie animationData={lottieAnimation}/>
      </div> */}
    </div>
  );
};

export default About;
