/* eslint-disable react/no-unescaped-entities */
"use client";
import heroVideo from "../../assets/video/itachi-uchiha.3840x2160.mp4";
import useVideoPlayer from "@/hooks/useAutoPlays";
import "./hero.css";
import Icon from "@/components/Icon/Icon";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import BoxReveal from "@/components/ui/BoxReveal/BoxReveal";
import { Element } from "react-scroll";
import { FlipWords } from "@/components/ui/FlipWords/FlipWords";

const Hero = () => {
  const videoRef = useVideoPlayer(heroVideo);
  const words = [
    "Software developer",
    "Web developer",
    "Full stack web developer",
    "React developer",
  ];

  return (
    <Element
      name="home"
      id="home"
      className="h-screen w-full px-3 md:px-7 sticky top-0 -z-[1]"
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      {/* Hero content */}
      <div className="w-full container overflow-y-hidden mx-auto h-full flex items-end relative z-[10] pb-8">
        {/* My intro */}
        <div className="space-y-5 md:w-1/2 px-3">
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
            <h3 className="hero-text uppercase text-[100px] leading-[70px] md:leading-[160px] md:text-[180px]">
              Sadid
            </h3>
          </BoxReveal>
          <BoxReveal boxColor={"#03e9f4"} duration={0.9}>
            <p className="text-slate-400 font-ubuntu font-normal">
              Passionate
              <FlipWords words={words} />
              specializing in React, Next.js, and TypeScript. I craft seamless
              user experiences with Tailwind CSS and Framer Motion. I love
              someone who loves programming and is eager to learn.
            </p>
          </BoxReveal>
        </div>
        {/* Social profile */}
        <div className="absolute right-2 md:right-0 flex-col items-center gap-10 hidden md:flex">
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
    </Element>
  );
};

export default Hero;
