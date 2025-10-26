import { useEffect, useRef, RefObject } from "react";
import { useMotionValue, useSpring, frame } from "motion/react";

const spring = { damping: 4, stiffness: 70, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  // Store the last known mouse position using refs
  const lastX = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ pageX, pageY }: MouseEvent) => {
      lastX.current = pageX;
      lastY.current = pageY;

      const element = ref.current!;
      frame.read(() => {
        xPoint.set(pageX - element.offsetWidth / 2);
        yPoint.set(pageY - element.offsetHeight / 2);
      });
    };

    const handleScroll = () => {
      const element = ref.current!;
      frame.read(() => {
        xPoint.set(lastX.current - element.offsetWidth / 2);
        yPoint.set(lastY.current - element.offsetHeight / 2);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, xPoint, yPoint]);

  return { x, y };
}
