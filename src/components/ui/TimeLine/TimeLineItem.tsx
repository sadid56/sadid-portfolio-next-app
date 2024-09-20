import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectCardSpotlight } from "../ProjectCardSpotLigt/ProjectCardSpotLight";
import useIsMobile from "@/hooks/useMobile";
import { TimelineEntry } from "@/types/TimeLIneTypes";

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const controls = useAnimation();
  const isMobile = useIsMobile()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const isEven = index % 2 === 0;
  
  // Define your complex animation variants
  const timelineVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? isMobile ? 100 : -100 : 100,  // Move left for even, right for odd
      scale: 0.8,  // Start smaller
      rotate: isEven ? isMobile ? 0 : -10 : isMobile ? 0 : 10,  // Slight rotation to add complexity
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,  // Back to normal size
      rotate: 0,  // No rotation on visible
      transition: {
        type: "spring",  // Use a spring animation for a natural feel
        stiffness: 50,
        damping: 20,
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={timelineVariants}
      className={`lg:flex lg:justify-between gap-10 relative pt-20 md:pt-40 ${
        isEven ? "flex-row lg:mr-28 ml-10" : "flex-row-reverse ml-10 lg:ml-28 "
      }`}
    >
      {/* card body */}
      <ProjectCardSpotlight
        className={`relative flex py-6 px-5 items-center w-full lg:w-[50%] ${
          isEven
            ? `text-left lg:text-right flex-row-reverse lg:flex-row ${isMobile ? "timeline-card-right" : " timeline-card-left"}`
            : "text-left flex-row-reverse timeline-card-right"
        }`}
      >
        {/* card arrow icon */}
        <div
          className={`timeline-arrow ${
            isEven ? `${isMobile ? "timeline-arrow-right": "timeline-arrow-left"}` : "timeline-arrow-right"
          }`}
        />
        {/* card content */}
        <div className="space-y-3 z-20">
          <div
            className={`flex w-full ${isEven ? "justify-start lg:justify-end" : "justify-start"}`}
          >
            <Image width={60} height={60} alt={item.service_name} src={item.icon} />
          </div>
          <h3 className="hidden md:block text-xl md:text-4xl font-bold text-neutral-300">
            {item.service_name}
          </h3>
          <h3 className="text-[16px] font-medium text-neutral-400">
            {item.description}
          </h3>
        </div>

        <div className={`hidden lg:block relative ${isEven ? "lg:left-[77px]" : "-left-[117px]"}`}>
          <div className="absolute z-40 flex items-center justify-center w-10 h-10 bg-[#0b586f3e] rounded-full">
            <div className="absolute w-4 h-4 rounded-full bg-[#216c83]" />
          </div>
        </div>
      </ProjectCardSpotlight>
    </motion.div>
  );
};

export default TimelineItem;
