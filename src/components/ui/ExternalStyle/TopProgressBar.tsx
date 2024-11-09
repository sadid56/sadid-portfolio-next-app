"use client";
import { useScroll, motion, useSpring } from "framer-motion";
const TopProgressBar = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
};

export default TopProgressBar;
