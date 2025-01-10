"use client";

import useIsMobile from "@/hooks/useMobile";
import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useState } from "react";

export const CenterVideo = () => {
  const [isClient, setIsClient] = useState(false);
  const isMobile = useIsMobile();

  // Ensure rendering happens only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1000], [isMobile ? 0 : 10, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [isMobile ? 100 : 90, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div className="sticky top-0 w-full h-screen">
      {isClient && (
        <motion.video
          muted
          preload="none"
          autoPlay
          loop
          style={{ clipPath }}
          className="w-full h-full object-cover"
        >
          <motion.source
            type="video/mp4"
            src={"/video/itachi-uchiha.1920x1080.mp4"}
          />
        </motion.video>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </motion.div>
  );
};
