"use client";
import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Loading from "../ui/Loading/Loading";

// home page loading
const LoadingSpinner = () => {
  return <Loading/>;
};

export default function DynamicBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const lenisRef = useRef<Lenis | null>(null);
  const [isLoading, setIsloading] = useState(false);
  // Define background color transformation based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7, 0.8, 1],
    ["#010610", "#010610", "#010610", "#010610", "#090946", "#010610"]
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

  // auto loading show
  useEffect(() => {
    const fetchLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsloading(false);
    };
    fetchLoading();
  }, []);

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen border-[#040459e2]"
    >
      <>{isLoading ? <LoadingSpinner /> :  children }</>
    </motion.div>
  );
}
