"use client";
import Container from "@/components/Container/Container";
import { useLayoutEffect, useRef } from "react";
import "./Project.css";
import { gsapHorizentalScroll } from "@/utils/gsapHorizentalScroll";

const Projects = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // gsap animation
  useLayoutEffect(() => {
    const ctx = gsapHorizentalScroll(componentRef, sliderRef);
    return () => ctx.revert();
  }, []);

  return (
    <Container id="projects" className="border relative">
      <div className="App" ref={componentRef}>
        <div ref={sliderRef} className="container">
          <div className="panel red">ONE</div>
          <div className="panel orange">TWO</div>
          <div className="panel purple">THREE</div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
