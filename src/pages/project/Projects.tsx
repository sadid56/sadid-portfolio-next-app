"use client";
import Container from "@/components/Container/Container";
import { useLayoutEffect, useRef } from "react";
import "./Project.css";
import { gsapHorizentalScroll } from "@/utils/gsapHorizentalScroll";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import projects from "../../../public/projects.json";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import Icon from "@/components/Icon/Icon";
import { ProjectCardSpotlight } from "@/components/ui/ProjectCardSpotLigt/ProjectCardSpotLight";
import ShineBorder from "@/components/ui/ShinBorder/ShinBorder";

const Projects = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // gsap animation
  useLayoutEffect(() => {
    const ctx = gsapHorizentalScroll(componentRef, sliderRef);
    return () => ctx.revert();
  }, []);

  return (
    <Container id="projects" className="">
      <SectionTitle color="Projects" text="" />
      <div className="App" ref={componentRef}>
        <div ref={sliderRef} className="container">
          {projects?.map((project) => (
            // project card with shine border
            <ShineBorder color={["#03e9f4", "#FE8FB5", "#094f52c8"]} key={project?.id} className="panel flex w-full my-auto mx-5 snap-center   md:w-[80%] h-[60%]">
              {/* project main card content with hover effect */}
              <ProjectCardSpotlight className="flex items-center gap-7 rounded-sm">
                <div className="w-[40%] h-[300px] overflow-y-auto rounded-md z-20">
                  <Image
                    width={500}
                    height={1000}
                    alt=""
                    src={project?.project_thumnail}
                  />
                </div>
                <div className="w-[60%] space-y-4 z-20">
                  <h3 className="text-3xl font-semibold text-slate-300 bg-[#108a91] py-1">{project?.project_name}</h3>
                  <p className="text-[16px] text-slate-300 leading-6">{project?.description}</p>

                  {/* technologies */}
                  <h5 className="text-sm text-slate-300 font-medium">Technologies: <span className="text-slate-400">{project?.technology?.join(", ")}</span></h5>


                  {/* view all links */}
                  <div className=" flex gap-5">
                    <LinkPreview url={project?.live_link}>
                    <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full"><IconWorld /></div>
                    </LinkPreview>{" "}
                    <LinkPreview url={project?.client_github_link}>
                      <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full"><IconBrandGithub /></div>
                    </LinkPreview>{" "}
                    <LinkPreview url={project?.server_github_link}>
                      <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full"><IconBrandGithub /></div>
                    </LinkPreview>{" "}
                  </div>
                </div>
              </ProjectCardSpotlight>
            </ShineBorder>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
