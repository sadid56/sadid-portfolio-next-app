/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, RefObject } from "react";
import { useMotionValue, useSpring, frame } from "framer-motion";

const spring = { damping: 4, stiffness: 70, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  // Store the last known mouse position
  let lastX = 0;
  let lastY = 0;

  useEffect(() => {
    if (!ref.current) return;

    // Function to update cursor position based on pointer movement
    const handlePointerMove = ({ pageX, pageY }: MouseEvent) => {
      lastX = pageX; // Store the last X coordinate
      lastY = pageY; // Store the last Y coordinate

      const element = ref.current!;
      frame.read(() => {
        // Update cursor position
        xPoint.set(pageX - element.offsetWidth / 2);
        yPoint.set(pageY - element.offsetHeight / 2);
      });
    };

    // Function to update cursor position when scrolling (keep it at the last known mouse position)
    const handleScroll = () => {
      const element = ref.current!;
      frame.read(() => {
        // Set the cursor to the last known position even during scrolling
        xPoint.set(lastX - element.offsetWidth / 2);
        yPoint.set(lastY - element.offsetHeight / 2);
      });
    };

    // Attach the event listeners
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listeners when component unmounts
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, xPoint, yPoint]);

  return { x, y };
}
