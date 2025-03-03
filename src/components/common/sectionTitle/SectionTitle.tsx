"use client"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css"


interface SectionTitleProps {
  color: string;
  text: string;
  lineBrak?: boolean
}

const SectionTitle: React.FC<SectionTitleProps> = ({ color, text, lineBrak = false }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  };



  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 1 }}
      className=" relative"
    >
      <h2
        className={`${
          inView && `${styles.animation}`
        } flex ${lineBrak  ? "flex-col" : ""} gap-2 ${styles.textAnimation} text-3xl md:text-5xl font-semibold font-outfit`}
      >
        <span>{color}</span> <span className="text-slate-300">{text}</span>
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
