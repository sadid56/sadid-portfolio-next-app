"use client";
import { useRef, useEffect, useState } from "react";
import SectionTitle from "@/components/global/SectionTitle";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { IconBrandGithub, IconPlayerPlay, IconServer, IconWorld } from "@tabler/icons-react";
import BoxReveal from "@/components/ui/BoxReveal";
import Link from "next/link";
import { UrlObject } from "url";
import projects from "@/data/projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  cardsRef.current = [];
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        end: () => `+=2000`,
        pin: true,
        scrub: 1,
        snap: 1 / (totalCards - 0.5), // snap to each card
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
              className='flex-shrink-0 w-[90vw] md:w-[900px] mx-auto h-[420px] md:h-[400px] snap-center ml-5 md:ml-0'
            >
              <Card project={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ project }: any) => {
  return (
    <div className='rounded-2xl p-[2px] bg-gradient-to-r from-[#03e8f4] via-[#6a5acd] to-[#03e8f4] animate-border h-full w-full'>
      <div className='flex flex-col md:flex-row gap-4 md:gap-7 rounded-2xl h-full bg-black/90 border border-white/10 shadow-lg hover:shadow-[#03e8f480]/40 transition-all duration-500 p-4'>
        <div className='w-full md:w-[40%] rounded-xl overflow-hidden relative group'>
          <Image
            src={
              "https://i.ytimg.com/vi/NtfbWkxJTHw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqq9DkE96fZqe3np_pvXTTddliJw"
            }
            alt={project?.project_name}
            width={500}
            height={500}
            className='w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-md shadow-lg h-36 md:h-full object-cover'
          />

          {/* play icon  */}
          <div className='absolute inset-0 flex items-center justify-center cursor-pointer'>
            <div className='bg-gradient-to-br from-[#03e8f4]/40 via-[#6a5acd]/40 to-[#03e8f4]/40 backdrop-blur-md rounded-full w-14 h-14 flex items-center justify-center transform scale-90 group-hover:scale-105 transition-transform duration-300'>
              <IconPlayerPlay className='text-white size-8' />
            </div>
          </div>
        </div>
        <div className='md:w-[60%] z-20'>
          <h3 className='text-xl md:text-3xl font-semibold text-white bg-gradient-to-r from-[#03e8f4] to-[#6a5acd] bg-clip-text font-montserrat py-1 w-full'>
            <BoxReveal duration={0.8}>
              <span>{project?.project_name}</span>
            </BoxReveal>
          </h3>
          <p className='text-sm md:text-[16px] text-slate-300 leading-6 font-poppins hidden md:block mt-3'>{project?.description}</p>
          <p className='text-sm md:text-[16px]  text-slate-400 leading-6 font-poppins md:hidden mt-2'>
            {project?.description?.slice(0, 100)}...
          </p>
          <h5 className='text-[12px] mt-3 md:text-sm text-slate-300 font-medium font-poppins'>
            Technologies: <span className='text-slate-400'>{project?.technology?.join(", ")}</span>
          </h5>
          {project?.contributors && (
            <div className='mt-2 hidden md:block'>
              <p className='font-medium text-sm font-montserrat text-slate-300'>Contributors:</p>
              <div className='space-x-2'>
                {project?.contributors?.map((item: { fb: string | UrlObject; name: string }, i: number) => (
                  <Link
                    target='_blank'
                    key={i + 1}
                    href={item.fb}
                    className='text-[#03e8f4] text-[13px] font-medium font-poppins hover:underline'
                  >{`@${item?.name}`}</Link>
                ))}
              </div>
            </div>
          )}
          <div className='flex gap-5 mt-3'>
            <LinkPreview url={project?.live_link}>
              <div className='hover:bg-[#03e8f4] shadow shadow-[#03e8f4] transition-all duration-500 border border-[#03e8f4] flex items-center justify-center w-10 h-10 rounded-full text-white'>
                <IconWorld />
              </div>
            </LinkPreview>
            <LinkPreview url={project?.client_github_link}>
              <div className='hover:bg-[#6a5acd] shadow shadow-[#6a5acd] transition-all duration-500 border border-[#6a5acd] flex items-center justify-center w-10 h-10 rounded-full text-white'>
                <IconBrandGithub />
              </div>
            </LinkPreview>
            <LinkPreview url={project?.server_github_link}>
              <div className='hover:bg-[#00ffaa] shadow shadow-[#00ffaa] transition-all duration-500 border border-[#00ffaa] flex items-center justify-center w-10 h-10 rounded-full text-white'>
                <IconServer />
              </div>
            </LinkPreview>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
