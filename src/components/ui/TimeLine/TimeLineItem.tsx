import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import useIsMobile from "@/hooks/useMobile";
import { TimelineEntry } from "@/types/TimeLIneTypes";
import { getTimelineVariants } from "@/components/animations/GetTimeLineVeriant";

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const controls = useAnimation();
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const isEven = index % 2 === 0;

  const handleDragEnd = () => {
    // Reset position after 0.5 seconds
    setTimeout(() => {
      controls.start({
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 8,
        },
      });
    }, 500);
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        whileDrag={{ scale: 1.1 }}
        drag={isMobile ? false : true}
        dragElastic={0.5}
        onDragEnd={handleDragEnd}
        dragSnapToOrigin
        variants={getTimelineVariants(isEven, isMobile)}
        className={`relative lg:flex lg:justify-between z-20 gap-10 pt-20 md:pt-40 ${
          isEven
            ? "flex-row lg:mr-28 ml-10 lg:ml-0"
            : "flex-row-reverse ml-10 lg:ml-28"
        }`}
      >
        <motion.div
          className={`group/spotlight p-5 md:p-10 flex items-center w-full lg:w-[50%] relative ${
            isEven
              ? `text-left lg:text-right flex-row-reverse lg:flex-row ${
                  isMobile ? "timeline-card-right" : "timeline-card-left"
                }`
              : "text-left flex-row-reverse timeline-card-right"
          }`}
        >
          <div
            className={`timeline-arrow ${
              isEven
                ? isMobile
                  ? "timeline-arrow-right"
                  : "timeline-arrow-left"
                : "timeline-arrow-right"
            }`}
          />
          <div className="space-y-3 z-20">
            <div
              className={`flex w-full ${
                isEven ? "justify-start lg:justify-end" : "justify-start"
              }`}
            >
              <Image
                width={60}
                height={60}
                priority
                alt={item.service_name}
                src={item.icon}
              />
            </div>
            <h3 className="hidden md:block text-xl md:text-4xl font-bold text-neutral-200 font-montserrat">
              {item.service_name}
            </h3>
            <h3 className="text-[16px] font-medium text-neutral-300 font-poppins">
              {item.description}
            </h3>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TimelineItem;
