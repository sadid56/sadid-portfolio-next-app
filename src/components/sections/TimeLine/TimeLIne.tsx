"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import BoxReveal from "../../ui/BoxReveal";
import "./timeline.css";
import TimelineItem from "./TimeLineItem";
import DockText from "../../ui/DockText";
import animationRocket from "@/assets/animation/rocket.json";
import useScrollTrigger from "@/hooks/useScrollTrigger";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
  const scrollingDown = useScrollTrigger();
  const [rocketRotation, setRocketRotation] = useState(0);

  // Update rocket rotation based on scrolling direction
  useEffect(() => {
    if (typeof window !== "undefined") {
      setRocketRotation(scrollingDown ? 180 : 0);
    }
  }, [scrollingDown]);

  // Set the height of the timeline container
  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
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
    <div className="w-full md:px-10 overflow-hidden z-10" ref={containerRef}>
      {/* Header Section */}
      <div className="px-4 lg:w-1/2 mx-auto text-center">
        <BoxReveal duration={0.7}>
          <DockText text=" Ultimate Support Tailored for You" />
        </BoxReveal>
        <BoxReveal duration={0.8}>
          <p className="max-w-2xl text-sm md:text-lg mt-5 text-slate-400 font-poppins">
            I create beautiful products with full-stack technologies, dedicated
            to turning your vision into innovative and reliable solutions.
          </p>
        </BoxReveal>
      </div>

      {/* Timeline Section */}
      <div ref={ref} className="relative pb-20 pr-5 md:pr-0">
        {data.map((item: TimelineEntry, index: number) => (
          <TimelineItem
            item={item}
            index={index}
            key={item.service_name + index}
          />
        ))}

        {/* Centered Progress Line */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 top-0 overflow-hidden w-[30px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-slate-700/20 to-transparent to-[100%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] z-0"
        >
          <motion.div>
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-20"
            >
              {/* Rocket Animation */}
              <motion.div
                style={{
                  rotate: rocketRotation,
                }}
                className="w-14 h-14 absolute bottom-0 right-9"
              >
                <Lottie animationData={animationRocket} loop={true} />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
