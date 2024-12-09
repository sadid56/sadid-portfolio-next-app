"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";

export default function DynamicBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const lenisRef = useRef<Lenis | null>(null);
  // Define background color transformation based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7, 0.8, 1],
    ["#010610", "#010610", "#010610", "#010610", "#0b0b55", "#010610"]
  );

  // lenis smoth scroll
  useEffect(() => {
    lenisRef.current = new Lenis({
      lerp: 0.04,
    });

    const animate = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <motion.div style={{ backgroundColor }} className="min-h-screen border-[#0b0b55]">
      {children}
    </motion.div>
  );
}
