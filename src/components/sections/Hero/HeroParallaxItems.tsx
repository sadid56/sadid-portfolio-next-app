"use client";
import { cn } from "@/lib/cn";
import {
  useMotionTemplate,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { ReactNode, useRef } from "react";

export const HeroParallaxItem = ({
  className,
  children,
  start,
  end,
  translateX = -150,
}: {
  className?: string;
  children?: ReactNode;
  translateX?: number;
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
  const transform = useMotionTemplate`translateY(${y}px) translateX(${translateX}px) scale(${scale})`;

  return (
    <motion.div
      className={cn(className)}
      ref={ref}
      style={{ transform, opacity }}
    >
      {children}
    </motion.div>
  );
};
