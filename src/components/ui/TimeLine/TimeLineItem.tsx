import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const [isNotification, setIsNotification] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [droppedItems, setDroppedItems] = useState<TimelineEntry[]>([]);

  // Handle notification close
  const handleNotificationClose = () => {
    localStorage.setItem("notificationDisabled", "true");
    setIsNotification(false); // Close the notification
  };

  // notification controler
  useEffect(() => {
    const notificationDisabled = localStorage.getItem("notificationDisabled");

    if (!notificationDisabled && inView) {
      setIsNotification(true);
    }
  }, [inView, controls]);

  // card view animation controller
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const isEven = index % 2 === 0;

  // Handle drag end
  const handleDragEnd = (event: any, info: any) => {
    const { y } = info.point;
    const windowHeight = window.innerHeight;

    // Check if dropped near the bottom of the screen
    if (y > windowHeight - 150) {
      setDroppedItems((prev) => [...prev, item]);
    }
  };

  return (
    <>
      {isNotification && (
        <div className="flex items-center gap-5 bg-indigo-500 font-outfit px-4 py-3 rounded-md text-white shadow-lg fixed right-5 bottom-5 z-[999]">
          <div className="flex items-center gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></circle>{" "}
                <path
                  d="M12 17V11"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
                <circle
                  cx="1"
                  cy="1"
                  r="1"
                  transform="matrix(1 0 0 -1 11 9)"
                  fill="#ffffff"
                ></circle>{" "}
              </g>
            </svg>
            <p className="text-sm md:text-base">
              Unleash your creativity! Drag and drop service cards for a dash of
              fun!
            </p>
          </div>
          <button
            onClick={handleNotificationClose}
            className="bg-white text-indigo-600 font-bold px-3 py-1 rounded-md hover:bg-indigo-100 transition-all"
          >
            OK
          </button>
        </div>
      )}

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={getTimelineVariants(isEven, isMobile)}
        className={`lg:flex lg:justify-between cursor-pointer z-20 gap-10 relative pt-20 md:pt-40 ${
          isEven
            ? "flex-row lg:mr-28 ml-10 lg:ml-0"
            : "flex-row-reverse ml-10 lg:ml-28 "
        }`}
      >
        {/* card body */}
        <motion.div
          drag
          dragConstraints={{ top: -200, bottom: 800, left: -300, right: 300 }}
          dragElastic={0.5}
          onDragEnd={handleDragEnd}
          whileDrag={{ zIndex: 30 }}
          className={`group/spotlight p-5 md:p-10 relative flex py-6 px-5 items-center w-full lg:w-[50%] ${
            isEven
              ? `text-left lg:text-right flex-row-reverse lg:flex-row ${
                  isMobile ? "timeline-card-right" : "timeline-card-left"
                }`
              : "text-left flex-row-reverse timeline-card-right"
          }`}
        >
          {/* card arrow icon */}
          <div
            className={`timeline-arrow ${
              isEven
                ? isMobile
                  ? "timeline-arrow-right"
                  : "timeline-arrow-left"
                : "timeline-arrow-right"
            }`}
          />
          {/* card content */}
          <div className="space-y-3 z-20">
            <div
              className={`flex w-full ${
                isEven ? "justify-start lg:justify-end" : "justify-start"
              }`}
            >
              <Image
                width={60}
                height={60}
                alt={item.service_name}
                src={item.icon}
              />
            </div>
            <h3 className="hidden md:block text-xl md:text-4xl font-bold text-neutral-200 font-outfit">
              {item.service_name}
            </h3>
            <h3 className="text-[16px] font-medium text-neutral-300 font-poppins">
              {item.description}
            </h3>
          </div>

          <div
            className={`hidden lg:block relative ${
              isEven ? "lg:left-[77px]" : "-left-[117px]"
            }`}
          >
            <div className="absolute z-40 flex items-center justify-center w-10 h-10 bg-[#0b586f3e] rounded-full">
              <div className="absolute w-4 h-4 rounded-full bg-[#0da6d4]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TimelineItem;
