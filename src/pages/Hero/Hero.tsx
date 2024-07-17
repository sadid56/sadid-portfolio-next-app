/* eslint-disable react/no-unescaped-entities */
"use client";
import heroVideo from "../../assets/video/Itachi.mp4";
import useVideoPlayer from "@/hooks/useAutoPlays";
import "./hero.css"
import Icon from "@/components/Icon/Icon";
import { IconBrandDiscord, IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
const Hero = () => {
  const videoRef = useVideoPlayer(heroVideo);

  return (
    <header id="home" className="h-screen w-full">
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
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>{" "}
      {/* hero content */}
      <div className="max-w-7xl mx-auto h-full flex items-end relative z-10 pb-8">
        <div className="space-y-5 w-1/2">
        <h4 className="font-semibold text-slate-300 text-2xl">Hey, I am</h4>
          <h3 className="hero-text uppercase">
            Sadid
          </h3>
          <p className="text-slate-400 font-ubuntu font-normal">
          Passionate software developer specializing in React, Next.js, and TypeScript. I craft seamless user experiences with Tailwind CSS and Framer Motion. I love someone who loves programming and is eager to learn.
          </p>
        </div>
       <div className="absolute right-0 flex flex-col items-center gap-10">
       <div className="flex flex-col gap-3 items-center ">
          <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
          <Icon Icon={IconBrandFacebook} widht={2}/>
          </LinkPreview>
          <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
          <Icon Icon={IconBrandDiscord} widht={2}/>
          </LinkPreview>
          <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
          <Icon Icon={IconBrandLinkedin} widht={2}/>
          </LinkPreview>
          
        </div>
        <div className=" relative">
          <p className="text-slate-300 text-sm absolute rotate-90 -right-1 top-8"><small>Scroll</small></p>
        <div className="arrow"></div>
        </div>
       </div>
      </div>
    </header>
  );
};

export default Hero;
