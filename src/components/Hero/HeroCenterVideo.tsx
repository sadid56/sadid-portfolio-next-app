import { useMotionTemplate, useScroll, useTransform, motion } from "framer-motion";
import heroVideo1 from "../../assets/video/itachi-uchiha.1920x1080.mp4";

export const CenterVideo = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, 1000], [15, 0]);
  const clip2 = useTransform(scrollY, [0, 1000], [85, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  return (
    <motion.div className="sticky top-0 w-full h-screen">
      <motion.video
        muted
        autoPlay
        loop
        style={{ clipPath }}
        className="w-full h-full object-cover"
      >
        <motion.source src={heroVideo1} />
      </motion.video>
      <div className="absolute inset-0 bg-black bg-opacity-70" />
    </motion.div>
  );
};
