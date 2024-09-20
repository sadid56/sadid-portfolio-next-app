"use client";
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import BoxReveal from "../BoxReveal/BoxReveal";
import "./timeline.css"
import TimelineItem from "./TimeLineItem";
import DockText from "../TextAnimation/DockText";

interface TimelineEntry {
  service_name: string;
  description: string;
  icon: string;
}

interface Props {
  data: TimelineEntry[];
}

export const Timeline: React.FC<Props> = ({ data }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 20%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10 overflow-hidden" ref={containerRef}>
      {/* Header Section */}
      <div className=" px-4 md:w-1/2 mx-auto text-center">
        <BoxReveal boxColor={"#03e9f4"} duration={0.7}>
          <DockText text=" Ultimate Support Tailored for You"/>
        </BoxReveal>
        <BoxReveal boxColor={"#03e9f4"} duration={0.8}>
          <p className="max-w-2xl text-sm md:text-lg mt-5 text-slate-400">
            We craft beautiful products using cutting-edge technologies and
            frameworks. Our team of passionate developers and designers is
            dedicated to bringing your vision to life with innovative and
            reliable solutions.
          </p>
        </BoxReveal>
      </div>

      {/* Timeline Section */}
      <div ref={ref} className="relative pb-20">
        {data.map((item: TimelineEntry, index: number) => (
          <TimelineItem item={item} index={index} key={item.service_name + index} />
        ))}

        {/* Centered Progress Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
             className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
