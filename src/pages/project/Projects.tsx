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

const Projects = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // gsap animation
  useLayoutEffect(() => {
    const ctx = gsapHorizentalScroll(componentRef, sliderRef);
    return () => ctx.revert();
  }, []);

  return (
    <Container id="projects" className=" relative">
      <SectionTitle color="Projects" text="" />
      <div className="App" ref={componentRef}>
        <div ref={sliderRef} className="container">
          {projects?.map((project) => (
            <div key={project?.id} className="panel flex p-[2px]">
             <div className="card flex items-center gap-7">
             <div className="w-[40%] h-[300px] overflow-y-auto rounded-md">
                <Image
                  width={500}
                  height={1000}
                  alt=""
                  src={project?.project_thumnail}
                />
              </div>
              <div className="w-[60%]">
                <h3>{project?.project_name}</h3>
                <p>{project?.description}</p>
              
                <div className=" flex gap-5">
                <LinkPreview
                    url={project?.live_link}
                  >
                    <Icon Icon={IconWorld} widht={1}/>
                  </LinkPreview>{" "}
                  <LinkPreview
                    url={project?.client_github_link}
                  >
                      <Icon Icon={IconBrandGithub} widht={1}/>
                  </LinkPreview>{" "}
                  <LinkPreview
                    url={project?.server_github_link}
                  >
                      <Icon Icon={IconBrandGithub} widht={1}/>
                  </LinkPreview>{" "}
                </div>
              </div>
             </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
