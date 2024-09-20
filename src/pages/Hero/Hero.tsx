/* eslint-disable react/no-unescaped-entities */
"use client";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import heroVideo from "../../assets/video/itachi-uchiha.3840x2160.mp4";
import BoxReveal from "@/components/ui/BoxReveal/BoxReveal";
import "./hero.css";
import { FlipWords } from "@/components/ui/FlipWords/FlipWords";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import Icon from "@/components/Icon/Icon";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
 const Hero = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.05,
    });

    const animate = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const SECTION_HEIGHT = 1500;

  return (
    <div className="bg-mainBgColor">
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterVideo />
        <HeroParallaxItems />
        {/* hero bottom  overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-mainBgColor" />
        {/* right side scroll icon */}
        <div className="absolute top-[20%] right-3 md:right-5 flex-col items-center gap-10 flex">
          <div className="flex flex-col gap-3 items-center ">
            <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
              <Icon Icon={IconBrandFacebook} widht={2} />
            </LinkPreview>
            <LinkPreview url="https://discord.com/users/1151169623149002752/">
              <Icon Icon={IconBrandDiscord} widht={2} />
            </LinkPreview>
            <LinkPreview url="https://www.linkedin.com/in/mr-sadid/">
              <Icon Icon={IconBrandLinkedin} widht={2} />
            </LinkPreview>
          </div>
          <div className="relative">
            <p className="text-slate-300 text-sm absolute rotate-90 -right-1 top-8">
              <small>Scroll</small>
            </p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

const SECTION_HEIGHT = 1500;
const CenterVideo = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0,1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.video
      muted
      autoPlay
      loop
      style={{ clipPath, opacity }}
      className="sticky top-0 h-screen w-full object-cover inset-0"
    >
      <motion.source src={heroVideo} />
      <div className="absolute inset-0 bg-black bg-opacity-95"></div>
    </motion.video>
  );
};

const HeroParallaxItems = () => {
  const words = [
    "Software developer",
    "Web developer",
    "Full stack web developer",
    "React developer",
  ];
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <HeroParallaxItem start={250} end={-100} className="mx-auto w-2/3">
        <BoxReveal boxColor={"#03e9f4"} duration={0.7}>
          <>
            <div className="relative">
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block">
                Hey, I am
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent"></span>
              </h2>
            </div>
          </>
        </BoxReveal>
        <BoxReveal boxColor={"#03e9f4"} duration={0.8}>
          <h3 className="hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[180px]">
            Sadid
          </h3>
        </BoxReveal>
      </HeroParallaxItem>
      <HeroParallaxItem start={100} end={250} className="float-end w-[90%] md:w-2/3">
        <BoxReveal boxColor={"#03e9f4"} duration={0.9}>
          <p className="text-slate-200 font-ubuntu font-normal text-end">
            Passionate
            <FlipWords words={words} />
            specializing in React, Next.js, and TypeScript. I craft seamless
            user experiences with Tailwind CSS and Framer Motion. I love someone
            who loves programming and is eager to learn.
          </p>
        </BoxReveal>
      </HeroParallaxItem>
      <HeroParallaxItem start={800} end={500} className="mx-auto  w-[90%] md:w-1/3">
        <BoxReveal boxColor={"#03e9f4"} duration={0.9}>
          <>
            <p className="text-slate-200 font-ubuntu font-normal text-center">
              Thanks for stepping into my world—where creativity meets code, and
              every detail is crafted with passion. Let's build something
              amazing together :)
            </p>
          </>
        </BoxReveal>
      </HeroParallaxItem>
      {/* <HeroParallaxItem start={0} end={-500} className="ml-24 w-5/12" /> */}
    </div>
  );
};

const HeroParallaxItem = ({
  className,
  children,
  start,
  end,
}: {
  className?: string;
  children?: ReactNode;

  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div className={className} ref={ref} style={{ transform, opacity }}>
      {children}
    </motion.div>
  );
};
