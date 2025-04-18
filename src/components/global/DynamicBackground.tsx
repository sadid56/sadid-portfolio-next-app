"use client";
import { useScroll, useTransform, motion } from "motion/react";

export default function DynamicBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  // Define background color transformation based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7, 0.8, 1],
    ["#010610", "#010610", "#010610", "#010610", "#090946", "#010610"]
  );

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen border-[#040459e2]"
    >
      <>{children}</>
    </motion.div>
  );
}
