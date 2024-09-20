/* eslint-disable react/no-unescaped-entities */
"use client";
import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import heroVideo1 from "../../assets/video/itachi-uchiha.3840x2160.mp4";
import heroVideo2 from "../../assets/video/Itachi.mp4";
import heroVideo3 from "../../assets/video/itachi-crying-in-a-purple-landscape.3840x2160.mp4";
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // List of video sources
  const videos = [heroVideo1, heroVideo2, heroVideo3];

  // Background video change logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsTransitioning(false);
      }, 1000); // Duration of fade transition
    }, 10000); // Change video every 10 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  // lenis smoth scroll
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
    <div id="home" className="bg-mainBgColor">
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterVideo
          currentVideoIndex={currentVideoIndex}
          videos={videos}
          isTransitioning={isTransitioning}
        />
        <HeroParallaxItems />
        {/* hero bottom  overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-mainBgColor" />
        {/* right side scroll icon */}
        <div className="fixed top-[60%] right-3 md:right-5 flex-col items-center gap-10 flex">
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

// const SECTION_HEIGHT = 1000;
const CenterVideo = ({
  currentVideoIndex,
  videos,
  isTransitioning,
}: {
  currentVideoIndex: number;
  videos: string[];
  isTransitioning: boolean;
}) => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1000], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;
  // const opacity = useTransform(
  //   scrollY,
  //   [SECTION_HEIGHT, SECTION_HEIGHT + 500],
  //   [1, 0]
  // );

  return (
    <motion.div
      style={{
        position: "sticky",
        top: 0,
        width: "100%",
        height: "100vh",
        opacity: isTransitioning ? 0 : 1,
        transition: "opacity 1s ease", // Smooth transition for the opacity
      }}
    >
      <motion.video
        muted
        autoPlay
        key={currentVideoIndex}
        loop
        style={{ clipPath }}
        className="w-full h-full object-cover"
      >
        <motion.source src={videos[currentVideoIndex]} />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </motion.div>
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
      {/* intro  */}
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
      </HeroParallaxItem>
      {/* name */}
      <HeroParallaxItem start={250} end={-100} className="mx-auto w-2/3">
        <BoxReveal boxColor={"#03e9f4"} duration={0.8}>
          <h3 className="hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[180px]">
            Sadid
          </h3>
        </BoxReveal>
      </HeroParallaxItem>
      {/* personal info */}
      <HeroParallaxItem
        start={100}
        end={250}
        className="float-end w-[90%] md:w-2/3"
      >
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
      {/* about  me name */}
      <HeroParallaxItem
        start={500}
        end={200}
        className="float-start w-[90%] md:w-2/3"
      >
        <BoxReveal boxColor={"#03e9f4"} duration={0.8}>
          <>
            <div className="relative">
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block">
                About Me
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary to-transparent"></span>
              </h2>
            </div>
          </>
        </BoxReveal>
      </HeroParallaxItem>
      {/* about me description  */}
      <HeroParallaxItem
        start={550}
        end={250}
        className="float-start w-[90%] md:w-2/3"
      >
        <BoxReveal boxColor={"#03e9f4"} duration={0.9}>
          <p className="text-slate-200 font-ubuntu font-normal text-start">
            Hello, I'm Sadid, a skilled MERN stack web developer. With a passion
            for creating seamless digital experiences, I specialize in crafting
            efficient and user-friendly applications. My expertise spans
            MongoDB, Express.js, React, and Node.js, allowing me to deliver
            end-to-end solutions. I thrive on challenges, continuously learn,
            and am committed to turning your ideas into powerful online
            realities. Let's collaborate and build something extraordinary.
          </p>
        </BoxReveal>
      </HeroParallaxItem>
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
