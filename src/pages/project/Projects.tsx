"use client";
import Container from "@/components/Container/Container";
import { useLayoutEffect, useRef } from "react";
import "./Project.css";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import projects from "../../../public/projects.json";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import { IconBrandGithub, IconServer, IconWorld } from "@tabler/icons-react";
import Icon from "@/components/Icon/Icon";
import { ProjectCardSpotlight } from "@/components/ui/ProjectCardSpotLigt/ProjectCardSpotLight";
import ShineBorder from "@/components/ui/ShinBorder/ShinBorder";
import { useScroll, useTransform, motion } from "framer-motion";
import { Project } from "@/types/ProjectTypes";

interface Props {
  project: Project;
}

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  return (
    <Container>
      <section ref={targetRef} className="relative h-[300vh]">
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
      </section>
    </Container>
  );
};

const Card: React.FC<Props> = ({ project }) => {
  return (
    <ShineBorder
      color={["#03e9f4", "#FE8FB5", "#094f52c8"]}
      key={project?.id}
      className="h-[400px] w-[90vw] md:w-[50vw] snap-center"
    >
      {/* project main card content with hover effect */}
      <ProjectCardSpotlight className="flex flex-col md:flex-row gap-4 md:gap-7 rounded-sm h-full">
        <div className="w-full md:w-[40%] h-[300px]  overflow-y-auto rounded-md z-20 relative ">
          <Image
            width={500}
            height={1000}
            alt=""
            src={project?.project_thumnail}
          />
        </div>
        <div className="md:w-[60%] space-y-4 z-20">
          <h3 className=" text-xl md:text-3xl font-semibold text-slate-300 bg-[#108a91] py-1">
            {project?.project_name}
          </h3>
          <p className="text-sm md:text-[16px] text-slate-300 leading-6">
            {project?.description}
          </p>

          {/* technologies */}
          <h5 className="text-[12px] md:text-sm text-slate-300 font-medium">
            Technologies:{" "}
            <span className="text-slate-400">
              {project?.technology?.join(", ")}
            </span>
          </h5>

          {/* view all links */}
          <div className=" flex gap-5">
            <LinkPreview url={project?.live_link}>
              <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                <IconWorld />
              </div>
            </LinkPreview>{" "}
            <LinkPreview url={project?.client_github_link}>
              <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                <IconBrandGithub />
              </div>
            </LinkPreview>{" "}
            <LinkPreview url={project?.server_github_link}>
              <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                <IconServer />
              </div>
            </LinkPreview>{" "}
          </div>
        </div>
      </ProjectCardSpotlight>
    </ShineBorder>
  );
};

export default Projects;
