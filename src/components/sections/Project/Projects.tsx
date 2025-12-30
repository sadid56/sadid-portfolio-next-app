"use client";
import { useRef, useEffect, useState } from "react";
import SectionTitle from "@/components/global/SectionTitle";
import projects from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "./components/Card";
import VideoModal from "./components/VideoModal";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  cardsRef.current = [];

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const totalCards = cardsRef.current.length;

    gsap.to(cardsRef.current, {
      xPercent: -100 * (totalCards - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalCards * 600}`,
        pin: true,
        scrub: 1,
        snap: 1 / (totalCards - 0.5),
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div id='projects' className='max-w-[1300px] mx-auto relative'>
      <SectionTitle text='Projects_' color='My' />
      <div ref={containerRef} className='relative h-screen overflow-hidden'>
        <div className='flex items-center h-full w-full gap-5 md:gap-10'>
          {projects.map((card, idx) => (
            <div
              ref={addToRefs}
              key={idx}
              className='flex-shrink-0 w-[90vw] md:w-[850px] mx-auto h-[320px] md:h-[350px] snap-center ml-5 md:ml-0'
            >
              <Card project={card} onPlayVideo={() => setActiveVideo(card.video_url)} />
            </div>
          ))}
        </div>
      </div>

      <VideoModal videoKey={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
};

export default Projects;
