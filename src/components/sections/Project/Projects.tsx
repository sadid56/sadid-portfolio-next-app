"use client";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import SectionTitle from "@/components/global/SectionTitle";
import projects from "../../../../public/projects.json";
import { LinkPreview } from "@/components/ui/LinkPreview";
import { IconBrandGithub, IconServer, IconWorld } from "@tabler/icons-react";
import { ProjectCardSpotlight } from "@/components/ui/ProjectCardSpotLight";
import ShineBorder from "@/components/ui/ShinBorder";
import { useScroll, useTransform, motion } from "motion/react";
import { Project } from "@/types/ProjectTypes";
import BoxReveal from "@/components/ui/BoxReveal";
import { VideoDialog } from "@/components/ui/VideoDialog";
import Link from "next/link";
import { UrlObject } from "url";

interface Props {
  project: Project;
  isVideoOpen: boolean;
  setIsVideoOpen: Dispatch<SetStateAction<boolean>>;
}

const Projects = () => {
  const targetRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    //@ts-ignore
    target: targetRef,
  });

  // horizental scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);
  let transform = isVideoOpen ? undefined : { x };

  // main content
  return (
    <div id="projects" className="max-w-[1300px] mx-auto relative">
      <SectionTitle text="Projects_" color="My" />
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={transform}
            //@ts-ignore
            initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and below view
            whileInView={{ opacity: 1, y: 0 }} // When in view, move it up to y: 0 and make it visible
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
            viewport={{ once: false }} // Trigger only once when it comes into view
            className="flex gap-8 snap-mandatory"
            // transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {projects.map((card: Project, idx) => {
              return (
                <Card
                  project={card}
                  key={idx + 1}
                  isVideoOpen={isVideoOpen}
                  setIsVideoOpen={setIsVideoOpen}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className="w-48 h-48 bg-[#03e8f4aa] blur-[180px] absolute -top-24 -left-32"></div>
    </div>
  );
};

// project card

const Card: React.FC<Props> = ({
  project,
  setIsVideoOpen,
  isVideoOpen,
}: any) => {
  return (
    <motion.div>
      <ShineBorder
        color={["#03e9f4", "#FE8FB5", "#094f52c8"]}
        key={project?.id}
        className="h-[420px] md:h-[400px] w-[90vw] lg:w-[900px] snap-center"
      >
        {/* project main card content with hover effect */}
        <ProjectCardSpotlight className="flex flex-col md:flex-row gap-4 md:gap-7 rounded-sm h-full">
          <div className="w-full md:w-[35%]  rounded-md relative">
            <VideoDialog
              className="w-full h-full"
              animationStyle="from-center"
              setIsVideoOpen={setIsVideoOpen}
              isVideoOpen={isVideoOpen}
              videoSrc="https://www.youtube.com/embed/NtfbWkxJTHw?si=WyeCuKiwW0JwxexI"
              thumbnailSrc="https://i.ytimg.com/vi/NtfbWkxJTHw/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDqq9DkE96fZqe3np_pvXTTddliJw"
              thumbnailAlt="Hero Video"
            />
          </div>
          <div className="md:w-[60%] z-20">
            <h3 className="text-xl md:text-3xl font-semibold text-slate-300 bg-[#108a91] py-1 font-montserrat w-full pl-1">
              <BoxReveal duration={0.8}>
                <span>{project?.project_name}</span>
              </BoxReveal>
            </h3>

            <p className="text-sm md:text-[16px] text-slate-400 leading-6 font-poppins md:hidden mt-2">
              {project?.description.length >= 80
                ? `${project?.description.slice(0, 80)}...`
                : project?.description}
            </p>
            <p className="text-sm md:text-[16px] text-slate-400 leading-6 font-poppins hidden md:block mt-3">
              {project?.description}
            </p>

            {/* technologies */}
            <h5 className="text-[12px] mt-3 md:text-sm text-slate-300 font-medium font-poppins">
              Technologies:{" "}
              <span className="text-slate-400">
                {project?.technology?.join(", ")}
              </span>
            </h5>

            {project?.contributors && (
              <div className="mt-2 hidden md:block">
                <p className="font-medium text-sm font-montserrat text-slate-300">
                  Contributors:
                </p>
                <div className="space-x-2">
                  {project?.contributors?.map(
                    (
                      item: { fb: string | UrlObject; name: string },
                      i: number
                    ) => (
                      <Link
                        target="_blank"
                        key={i + 1}
                        href={item.fb}
                        className="text-blue-500 text-[13px] font-medium font-poppins hover:underline"
                      >{`@${item?.name}`}</Link>
                    )
                  )}
                </div>
              </div>
            )}

            {/* view all links */}
            <div className="flex gap-5 mt-3">
              <LinkPreview url={project?.live_link}>
                <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full text-white">
                  <IconWorld />
                </div>
              </LinkPreview>{" "}
              <LinkPreview url={project?.client_github_link}>
                <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full text-white">
                  <IconBrandGithub />
                </div>
              </LinkPreview>{" "}
              <LinkPreview url={project?.server_github_link}>
                <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full text-white">
                  <IconServer />
                </div>
              </LinkPreview>{" "}
            </div>
          </div>
        </ProjectCardSpotlight>
      </ShineBorder>
    </motion.div>
  );
};

export default Projects;
