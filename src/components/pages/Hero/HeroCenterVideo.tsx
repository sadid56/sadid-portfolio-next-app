"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import useIsMobile from "@/hooks/useMobile";

export const CenterVideo = () => {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  const wrapperRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Scroll effect for clipping
  const clip1 = useTransform(scrollY, [0, 1000], [isMobile ? 0 : 10, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [isMobile ? 100 : 90, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Lazy load video when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  // Ensure video starts loading properly
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <motion.div ref={wrapperRef} className="sticky top-0 w-full h-screen">
      {/* Preload Video (Hidden) */}
      <video
        ref={videoRef}
        className="hidden"
        preload="metadata"
        onLoadedData={() => setIsVideoReady(true)}
      >
        <source src="/video/itachi-uchiha.1920x1080.mp4" type="video/mp4" />
      </video>

      {/* Render video only when fully loaded */}
      {isLoaded && isVideoReady && (
        <motion.video
          ref={videoRef}
          muted
          autoPlay
          loop
          playsInline
          preload="metadata"
          style={{ clipPath }}
          className="w-full h-full object-cover"
        >
          <motion.source
            type="video/mp4"
            src="/video/itachi-uchiha.1920x1080.mp4"
          />
        </motion.video>
      )}

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
    </motion.div>
  );
};
