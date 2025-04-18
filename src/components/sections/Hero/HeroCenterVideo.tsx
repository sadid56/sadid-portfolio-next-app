"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import useIsMobile from "@/hooks/useMobile";

export const CenterVideo = () => {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const wrapperRef = useRef(null);

  // Scroll effect for clipping
  const clip1 = useTransform(scrollY, [0, 1000], [isMobile ? 0 : 10, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [isMobile ? 100 : 90, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Ensure video starts loading properly

  return (
    <motion.div ref={wrapperRef} className="sticky top-0 w-full h-screen">
      {/* Render video only when fully loaded */}
      <motion.video
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        style={{ clipPath }}
        className="w-full h-full object-cover"
      >
        <motion.source type="video/mp4" src="/video/itachi-uchiha.mp4" />
      </motion.video>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </motion.div>
  );
};
