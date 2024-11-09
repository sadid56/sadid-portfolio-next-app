"use client";
import { NumberTicker } from "@/components/ui/TextAnimation/NumberTicker";
import {
  IconAddressBook,
  IconBook2,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Achievements = () => {
  const ref = useRef(null);

  // Track the scroll progress for the specific div
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Defines the start and end of animation trigger
  });

  // Animate rotation and scale based on scroll position
  const rotateGithub = useTransform(scrollYProgress, [0, 0.5], [-30, 0]);
  const rotateCode = useTransform(scrollYProgress, [0, 0.5], [0, 0]);
  const rotateEarn = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  const scaleGithub = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scaleCode = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const scaleEarn = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const items = [
    {
      rotate: rotateGithub,
      scale: scaleGithub,
      title: "Year of Experiance",
      value: 1,
      icon: (
        <IconCalendarEvent size={48} strokeWidth={1} className="text-primary" />
      ),
    },
    {
      rotate: rotateCode,
      scale: scaleCode,
      title: "Projects Completed",
      value: 10,
      icon: (
        <IconAddressBook size={48} strokeWidth={1} className="text-primary" />
      ),
    },
    {
      rotate: rotateEarn,
      scale: scaleEarn,
      title: "Achievement",
      value: 5,
      icon: <IconBook2 size={48} strokeWidth={1} className="text-primary" />,
    },
  ];

  return (
    <div ref={ref} className="flex justify-center gap-6 items-center flex-col md:flex-row mb-32">
      {items.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }} // Start with opacity 0 and below view
          whileInView={{ opacity: 1, y: 0 }} // When in view, move it up to y: 0 and make it visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: false }} // Trigger only once when it comes into view
          key={index}
          style={{ rotate: item.rotate, scale: item.scale }} // Apply both rotate and scale
          className="relative w-44 h-52 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center rounded-lg backdrop-blur-lg"
        >
          <div className="flex flex-col items-center gap-3">
            <div>{item.icon}</div>
            <h2 className="text-slate-300 font-bold font-outfit text-4xl">
              <NumberTicker value={item.value}/>+
            </h2>
          </div>
          <span className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white font-poppins">
            {item.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievements;
