"use client";

import useIsMobile from "@/hooks/useMobile";
import { HeroParallaxItem } from "./HeroParallaxItem";
import BoxReveal from "@/components/ui/BoxReveal";
import { cn } from "@/lib/cn";
import { GradualSpacing } from "@/components/ui/GradualSpacing";
import { FlipWords } from "@/components/ui/FlipWords";
import styles from "@/styles/helo.module.css";

export const HeroParallaxItems = () => {
  const words = [
    "Software developer",
    "Web developer",
    "Full stack web developer",
    "React developer",
  ];
  const isMobile = useIsMobile();
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {/* intro  */}
      <HeroParallaxItem start={isMobile ? -100 : -800} end={-100} className="">
        <BoxReveal viewportAnimate={false} duration={0.7}>
          <>
            <div className="relative">
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-montserrat italic">
                Hey, I am
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent"></span>
              </h2>
            </div>
          </>
        </BoxReveal>
      </HeroParallaxItem>
      {/* name */}
      <HeroParallaxItem
        start={isMobile ? -40 : -800}
        end={isMobile ? -100 : 300}
        className=""
      >
        <BoxReveal duration={0.8} overflow="visible">
          <h3
            className={cn(
              "hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[140px] lg:text-[180px] font-montserrat italic pr-5 py-2 md:py-0",
              styles.hero_text
            )}
          >
            Sadid
          </h3>
        </BoxReveal>
      </HeroParallaxItem>

      {/* about  me name */}
      <HeroParallaxItem
        start={isMobile ? 100 : -200}
        end={350}
        position="right"
        className="float-end w-[90%] md:w-2/3"
      >
        <BoxReveal viewportAnimate={false} duration={0.8}>
          <>
            <div className="relative">
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-montserrat">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent"></span>
              </h2>
            </div>
          </>
        </BoxReveal>
      </HeroParallaxItem>
      {/* about me description  */}
      <HeroParallaxItem
        start={150}
        position="right"
        end={370}
        className="float-end w-[90%] md:w-2/3"
      >
        <BoxReveal viewportAnimate={false} duration={0.9}>
          <GradualSpacing className="text-slate-300 font-poppins font-normal text-end">
            Passionate {<FlipWords words={words} />} specializing in React,
            Next.js, and TypeScript. I craft seamless user experiences with
            Tailwind CSS and Framer Motion. I love someone who loves programming
            and is eager to learn.
          </GradualSpacing>
        </BoxReveal>
      </HeroParallaxItem>
    </div>
  );
};
