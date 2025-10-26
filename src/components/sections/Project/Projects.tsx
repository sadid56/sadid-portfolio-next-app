"use client";
import { useRef, useState } from "react";
import SectionTitle from "@/components/global/SectionTitle";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { IconBrandGithub, IconServer, IconWorld } from "@tabler/icons-react";
import { useScroll, useTransform, motion } from "motion/react";
import { Project } from "@/types/ProjectTypes";
import BoxReveal from "@/components/ui/BoxReveal";
import { VideoDialog } from "@/components/ui/VideoDialog";
import Link from "next/link";
import { UrlObject } from "url";
import projects from "@/data/projects";

const Projects = () => {
  const targetRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // horizental scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  let transform = isVideoOpen ? undefined : { x };

  // main content
  return (
    <div id='projects' className='max-w-[1300px] mx-auto relative'>
      <SectionTitle text='Projects_' color='My' />
      <div ref={targetRef} className='relative h-[300vh]'>
        <div className='sticky top-0 flex h-screen items-center overflow-hidden'>
          <motion.div
            style={transform}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false }}
            className='flex gap-8 snap-mandatory'
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {projects.map((card: Project, idx) => {
              return <Card project={card} key={idx + 1} isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} />;
            })}
          </motion.div>
        </div>
      </div>
      <div className='w-48 h-48 bg-[#03e8f4aa] blur-[180px] absolute -top-24 -left-32'></div>
    </div>
  );
};

// project card

const Card = ({ project, setIsVideoOpen, isVideoOpen }: any) => {
  return (
    <motion.div
    // whileHover={{ scale: 1.02 }}
    // transition={{ type: "spring", stiffness: 150, damping: 15 }}
    // className="relative"
    >
      {/* Outer shiny border */}
      <div className=' h-[420px] md:h-[400px] w-[90vw] lg:w-[900px] snap-center rounded-2xl p-[2px] bg-gradient-to-r from-[#03e8f4] via-[#6a5acd] to-[#03e8f4] animate-border'>
        {/* Inner card */}
        <div className='flex flex-col md:flex-row gap-4 md:gap-7 rounded-2xl h-full bg-black/90 border border-white/10 shadow-lg hover:shadow-[#03e8f480]/40 transition-all duration-500 p-4'>
          {/* Video */}
          <div className='w-full md:w-[40%] rounded-xl overflow-hidden relative'>
            <VideoDialog
              className='w-full h-full'
              animationStyle='from-center'
              setIsVideoOpen={setIsVideoOpen}
              isVideoOpen={isVideoOpen}
              videoSrc='https://www.youtube.com/embed/NtfbWkxJTHw?si=WyeCuKiwW0JwxexI'
              thumbnailSrc='https://i.ytimg.com/vi/NtfbWkxJTHw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqq9DkE96fZqe3np_pvXTTddliJw'
              thumbnailAlt='Hero Video'
            />
          </div>

          {/* Text content */}
          <div className='md:w-[60%] z-20'>
            <h3 className='text-xl md:text-3xl font-semibold text-white bg-gradient-to-r from-[#03e8f4] to-[#6a5acd] bg-clip-text font-montserrat py-1 w-full'>
              <BoxReveal duration={0.8}>
                <span>{project?.project_name}</span>
              </BoxReveal>
            </h3>

            <p className='text-sm md:text-[16px] text-slate-300 leading-6 font-poppins hidden md:block mt-3'>{project?.description}</p>
            <p className='text-sm md:text-[16px] truncate text-slate-400 leading-6 font-poppins md:hidden mt-2'>{project?.description}</p>

            {/* technologies */}
            <h5 className='text-[12px] mt-3 md:text-sm text-slate-300 font-medium font-poppins'>
              Technologies: <span className='text-slate-400'>{project?.technology?.join(", ")}</span>
            </h5>

            {/* Contributors */}
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

            {/* Links */}
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
    </motion.div>
  );
};

export default Projects;
