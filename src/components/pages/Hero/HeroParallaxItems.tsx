"use client"
import { useMotionTemplate, useScroll, useTransform, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

export const HeroParallaxItem = ({
  className,
  children,
  start,
  end,
}: {
  className?: string;
  children?: ReactNode;

  start: number;
  end: number;
}) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.div className={className} ref={ref} style={{ transform, opacity }}>
      {children}
    </motion.div>
  );
};
