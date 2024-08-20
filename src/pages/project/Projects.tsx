"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import Container from "@/components/Container/Container";
import SectionTitle from "@/components/sectionTitle/SectionTitle";
import ShineBorder from "@/components/ui/ShinBorder/ShinBorder";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { ProjectCardSpotlight } from "@/components/ui/ProjectCardSpotLigt/ProjectCardSpotLight";
import projects from "../../../public/projects.json";
import "./Project.css";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // GSAP animation setup
  useLayoutEffect(() => {
    if (componentRef.current && sliderRef.current) {
      let panels = gsap.utils.toArray(".panel") as HTMLElement[];

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderRef.current!.offsetWidth,
          markers: false,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Container id="projects" className="">
      <SectionTitle color="Projects" text="" />
      <div className="App" ref={componentRef}>
        <div ref={sliderRef} className="container">
          {projects?.map((project) => (
            <ShineBorder
              key={project.id}
              color={["#03e9f4", "#FE8FB5", "#094f52c8"]}
              className="panel flex w-full my-auto mx-5 snap-center md:w-[80%] h-[70%] md:h-[60%]"
            >
              <ProjectCardSpotlight className="flex flex-col md:flex-row gap-4 md:gap-7 rounded-sm">
                <div className="w-full md:w-[40%] min-h-[100px] md:min-h-[300px] overflow-y-auto rounded-md z-20 relative">
                  <Image
                    width={500}
                    height={1000}
                    alt={project.project_name}
                    src={project.project_thumnail}
                  />
                </div>
                <div className="md:w-[60%] space-y-4 z-20">
                  <h3 className="text-xl md:text-3xl font-semibold text-slate-300 bg-[#108a91] py-1">
                    {project.project_name}
                  </h3>
                  <p className="text-sm md:text-[16px] text-slate-300 leading-6">
                    {project.description}
                  </p>

                  <h5 className="text-[12px] md:text-sm text-slate-300 font-medium">
                    Technologies:{" "}
                    <span className="text-slate-400">
                      {project.technology?.join(", ")}
                    </span>
                  </h5>

                  <div className="flex gap-5">
                    <LinkPreview url={project.live_link}>
                      <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <IconWorld />
                      </div>
                    </LinkPreview>
                    <LinkPreview url={project.client_github_link}>
                      <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <IconBrandGithub />
                      </div>
                    </LinkPreview>
                    <LinkPreview url={project.server_github_link}>
                      <div className="hover:bg-primary shadow shadow-primary transition-all duration-500 border border-primary flex items-center justify-center w-8 h-8 rounded-full">
                        <IconBrandGithub />
                      </div>
                    </LinkPreview>
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
