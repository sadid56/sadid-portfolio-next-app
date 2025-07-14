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
  position = "left",
}: {
  className?: string;
  children?: ReactNode;
  translateX?: number;
  start: number;
  end: number;
  position?: "left" | "right";
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
    <motion.div
      className={cn(
        className,
        position === "left"
          ? "md:ml-12 lg:ml-8 xl:-ml-32"
          : "md:mr-12 lg:mr-8 xl:-mr-32"
      )}
      ref={ref}
      style={{ transform, opacity }}
    >
      {children}
    </motion.div>
  );
};
