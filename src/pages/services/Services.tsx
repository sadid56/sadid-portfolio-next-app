"use client"

import Container from "@/components/Container/Container";
import servicesArray from "../../../public/services.json"
import { useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/CardHoverEffect/CardHoverEffect";
import BoxReveal from "@/components/ui/BoxReveal/BoxReveal";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-550, -50]),
    springConfig
  );

  return (
    <Container id="services" className="mt-20">
      <div
      ref={ref}
      className="overflow-hidden  antialiased relative  self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <HoverEffect items={servicesArray}/>
      </motion.div>
    </div>
    </Container>
  );
};

export default Services;



export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <BoxReveal boxColor={"#03e9f4"} duration={0.7}>
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> Support with me!
      </h1>
      </BoxReveal>
      <BoxReveal boxColor={"#03e9f4"} duration={0.8}>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
      </BoxReveal>
    </div>
  );
};
