"use client";
import { useRef } from "react";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import projects from "../../../public/projects.json";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import { IconBrandGithub, IconServer, IconWorld } from "@tabler/icons-react";
import { ProjectCardSpotlight } from "@/components/ui/ProjectCardSpotLigt/ProjectCardSpotLight";
import ShineBorder from "@/components/ui/ShinBorder/ShinBorder";
import { useScroll, useTransform, motion } from "framer-motion";
import { Project } from "@/types/ProjectTypes";
import { Element } from "react-scroll";
import BoxReveal from "@/components/ui/BoxReveal/BoxReveal";

interface Props {
  project: Project;
}

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // horizental scroll progress
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  // main content
  return (
    <Element name="projects" className="max-w-[1300px] mx-auto relative">
      <SectionTitle text="Projects_" color="My" />
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex gap-8 snap-mandatory"
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            {projects.map((card: Project) => {
              return <Card project={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </div>
      <div className="w-48 h-48 bg-[#03e8f4aa] blur-[180px] absolute -top-24 -left-32"></div>
    </Element>
  );
};

// project card

const Card: React.FC<Props> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and below view
      whileInView={{ opacity: 1, y: 0 }} // When in view, move it up to y: 0 and make it visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: false }} // Trigger only once when it comes into view
    >
      <ShineBorder
        color={["#03e9f4", "#FE8FB5", "#094f52c8"]}
        key={project?.id}
        className="h-[400px] w-[90vw] md:w-[50vw] snap-center"
      >
        {/* project main card content with hover effect */}
        <ProjectCardSpotlight className="flex flex-col md:flex-row gap-4 md:gap-7 rounded-sm h-full">
          <div className="w-full md:w-[40%] h-[300px]  overflow-y-auto rounded-md z-20 relative">
            <Image
              width={500}
              height={1000}
              alt=""
              src={project?.project_thumnail}
            />
          </div>
          <div className="md:w-[60%] space-y-4 z-20">
            <h3 className="text-xl md:text-3xl font-semibold text-slate-300 bg-[#108a91] py-1 font-outfit w-full pl-1">
              <BoxReveal boxColor={"#108a91"} duration={0.8}>
                <span>{project?.project_name}</span>
              </BoxReveal>
            </h3>

            <p className="text-sm md:text-[16px] text-slate-300 leading-6 font-poppins">
              {project?.description}
            </p>

            {/* technologies */}
            <h5 className="text-[12px] md:text-sm text-slate-300 font-medium font-poppins">
              Technologies:{" "}
              <span className="text-slate-400">
                {project?.technology?.join(", ")}
              </span>
            </h5>

            {/* view all links */}
            <div className="flex gap-5">
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
