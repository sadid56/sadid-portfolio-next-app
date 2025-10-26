"use client";

import { useRef, useEffect } from "react";
import useIsMobile from "@/hooks/useMobile";
import { HeroParallaxItem } from "./HeroParallaxItem";
import BoxReveal from "@/components/ui/BoxReveal";
import { cn } from "@/lib/cn";
import { GradualSpacing } from "@/components/ui/GradualSpacing";
import { FlipWords } from "@/components/ui/FlipWords";
import styles from "@/styles/helo.module.css";
import { gsap } from "gsap";

export const HeroParallaxItems = () => {
  const words = ["Software developer", "Web developer", "Full stack web developer", "React developer"];
  const isMobile = useIsMobile();

  const heyRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heyRef.current && nameRef.current) {
      // Split Sadid text into spans
      const letters = nameRef.current.querySelectorAll("span");

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate "Hey, I am"
      tl.from(heyRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Animate each letter of "Sadid" with stagger, skew, and scale
      tl.from(
        letters,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          rotationX: 90,
          skewY: 10,
          duration: 1,
          stagger: 0.08,
          ease: "back.out(1.7)",
          filter: "blur(4px)",
          onUpdate: function () {
            letters.forEach((l: any) => (l.style.filter = "blur(0px)"));
          },
        },
        "-=0.5"
      );
    }
  }, []);

  return (
    <div className='mx-auto max-w-5xl pl-14 pt-[250px]'>
      {/* intro  */}
      <HeroParallaxItem start={isMobile ? -100 : -800} end={-200}>
        <BoxReveal viewportAnimate={false} duration={0.7}>
          <div ref={heyRef} className='relative'>
            <h2 className='font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-montserrat italic'>
              Hey, I am
              <span className='absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent'></span>
            </h2>
          </div>
        </BoxReveal>
      </HeroParallaxItem>

      {/* name */}
      <HeroParallaxItem start={isMobile ? -40 : -800} end={isMobile ? -100 : 300}>
        <BoxReveal duration={0.8} overflow='visible'>
          <div
            ref={nameRef}
            className={cn(
              "hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[140px] lg:text-[180px] font-montserrat italic pr-5 py-2 md:py-0 flex gap-1",
              styles.hero_text
            )}
          >
            {/* Split letters into spans for animation */}
            {"Sadid".split("").map((letter, idx) => (
              <span key={idx} className={cn("inline-block bg-clip-text text-transparent", styles.hero_text)}>
                {letter}
              </span>
            ))}
          </div>
        </BoxReveal>
      </HeroParallaxItem>

      {/* About me */}
      <HeroParallaxItem start={isMobile ? 100 : -200} end={350} position='right' className='float-end w-[90%] md:w-2/3'>
        <BoxReveal viewportAnimate={false} duration={0.8}>
          <div className='relative'>
            <h2 className='font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-montserrat'>
              About Me
              <span className='absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent'></span>
            </h2>
          </div>
        </BoxReveal>
      </HeroParallaxItem>

      <HeroParallaxItem start={150} position='right' end={370} className='float-end w-[90%] md:w-2/3'>
        <BoxReveal viewportAnimate={false} duration={0.9}>
          <GradualSpacing className='text-slate-300 font-poppins font-normal text-end'>
            Passionate {<FlipWords words={words} />} specializing in React, Next.js, and TypeScript. I craft seamless user experiences with
            Tailwind CSS and Framer Motion. I love someone who loves programming and is eager to learn.
          </GradualSpacing>
        </BoxReveal>
      </HeroParallaxItem>
    </div>
  );
};
