"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsMobile from "@/hooks/useMobile";
import LINKS from "@/constant/links";

gsap.registerPlugin(ScrollTrigger);

const CenterVideo = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    gsap.to(videoRef.current, {
      clipPath: `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`,
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "+=1000", // adjust scroll range
        scrub: 1.2, // smooth scrubbing
      },
      ease: "power3.out",
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, [isMobile]);

  return (
    <div className='sticky top-0 w-full h-screen '>
      <video
        ref={videoRef}
        muted
        autoPlay
        loop
        playsInline
        preload='auto'
        className='w-full h-full object-cover'
        style={{
          clipPath: isMobile ? "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" : "polygon(10% 10%, 90% 10%, 90% 90%, 10% 90%)",
        }}
      >
        <source type='video/mp4' src={LINKS.hero_video} />
      </video>

      {/* Dark overlay for contrast */}
      <div className='absolute inset-0 bg-black/50' />
    </div>
  );
};

export default CenterVideo;
