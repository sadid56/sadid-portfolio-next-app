<<<<<<< HEAD:src/pages/Hero/Hero.tsx
/* eslint-disable react/no-unescaped-entities */
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
import { CenterVideo } from "@/components/Hero/HeroCenterVideo";
import { HeroParallaxItem } from "@/components/Hero/HeroParallaxItems";

const Hero = () => {
  const SECTION_HEIGHT = 1600;

  return (
    <header id="home">
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterVideo />
        <HeroParallaxItems />
        {/* hero bottom  overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-mainBgColor" />
        {/* right side scroll icon */}
        <div className="fixed bottom-5 right-3 md:right-5 flex-col items-center gap-10 flex">
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
            <p className="text-slate-300 text-sm absolute rotate-90 -right-1 top-8 font-poppins">
              <small>Scroll</small>
            </p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

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
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-outfit">
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
          <h3 className="hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[180px] font-outfit italic">
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
          <p className="text-slate-300 font-poppins font-normal text-end">
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
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-outfit">
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
          <p className="text-slate-300 font-poppins font-normal text-start">
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
=======
/* eslint-disable react/no-unescaped-entities */
import BoxReveal from "@/components/ui/BoxReveal/BoxReveal";
import "./hero.css";
import { FlipWords } from "@/components/ui/FlipWords/FlipWords";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import Icon from "@/components/common/Icon/Icon";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { CenterVideo } from "@/components/pages/Hero/HeroCenterVideo";
import { HeroParallaxItem } from "@/components/pages/Hero/HeroParallaxItems";
const Hero = () => {

  const SECTION_HEIGHT = 1600;

  return (
    <header id="home">
      <div
        style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
        className="relative w-full"
      >
        <CenterVideo />
        <HeroParallaxItems />
        {/* hero bottom  overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-mainBgColor" />
        {/* right side scroll icon */}
        <div className="fixed bottom-5 right-3 md:right-5 flex-col items-center gap-10 flex">
          <div className="flex flex-col gap-3 items-center ">
            <LinkPreview url="https://github.com/sadid56/">
              <Icon Icon={IconBrandGithub} widht={2} />
            </LinkPreview>
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
            <p className="text-slate-300 text-sm absolute rotate-90 -right-1 top-8 font-poppins">
              <small>Scroll</small>
            </p>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Hero;

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
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-outfit">
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
          <h3 className="hero-text uppercase text-[80px] leading-[70px] md:leading-[160px] md:text-[180px] font-outfit italic">
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
          <div className="text-slate-300 font-poppins font-normal text-end">
            Passionate
            <FlipWords words={words} />
            specializing in React, Next.js, and TypeScript. I craft seamless
            user experiences with Tailwind CSS and Framer Motion. I love someone
            who loves programming and is eager to learn.
          </div>
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
              <h2 className="font-semibold text-slate-300 text-2xl mb-1 relative inline-block font-outfit">
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
          <p className="text-slate-300 font-poppins font-normal text-start">
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


>>>>>>> 81ae2577f4974cd4122ba5932695c109cb198f7c:src/components/pages/Hero/Hero.tsx
