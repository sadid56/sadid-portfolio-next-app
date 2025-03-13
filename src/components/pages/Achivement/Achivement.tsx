"use client";
import { MagicCard } from "@/components/ui/MagicCard/MagicCard";
import { NumberTicker } from "@/components/ui/TextAnimation/NumberTicker";
import { cn } from "@/utils/cn";
import {
  IconAddressBook,
  IconBook2,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

  // States to toggle margin style
  const [githubHasMaxRotate, setGithubHasMaxRotate] = useState(false);
  const [codeHasMaxRotate, setCodeHasMaxRotate] = useState(false);
  const [earnHasMaxRotate, setEarnHasMaxRotate] = useState(false);

  useEffect(() => {
    const unsubscribeGithub = rotateGithub.on("change", (value) => {
      setGithubHasMaxRotate(value === 0); // When rotate hits its max value (0 in this case)
    });

    const unsubscribeCode = rotateCode.on("change", (value) => {
      setCodeHasMaxRotate(value === 0); // When rotate hits its max value (0 in this case)
    });

    const unsubscribeEarn = rotateEarn.on("change", (value) => {
      setEarnHasMaxRotate(value === 0); // When rotate hits its max value (0 in this case)
    });

    return () => {
      unsubscribeGithub();
      unsubscribeCode();
      unsubscribeEarn();
    };
  }, [rotateGithub, rotateCode, rotateEarn]);

  const items = [
    {
      rotate: rotateGithub,
      scale: scaleGithub,
      title: "Year of Experience",
      value: 1,
      style: githubHasMaxRotate ? "" : "-mr-16 z-10",
      icon: (
        <IconCalendarEvent size={48} strokeWidth={1} className="text-primary" />
      ),
    },
    {
      rotate: rotateCode,
      scale: scaleCode,
      title: "Projects Completed",
      value: 10,
      style: codeHasMaxRotate ? "" : "z-0",
      icon: (
        <IconAddressBook size={48} strokeWidth={1} className="text-primary" />
      ),
    },
    {
      rotate: rotateEarn,
      scale: scaleEarn,
      title: "Achievement",
      value: 5,
      style: earnHasMaxRotate ? "" : "-ml-16 z-10",
      icon: <IconBook2 size={48} strokeWidth={1} className="text-primary" />,
    },
  ];

  return (
    <div
      ref={ref}
      className="flex justify-center gap-10 items-center flex-col md:flex-row mb-32 mt-24 lg:mt-5"
    >
      {items.map((item, index) => (
        <MagicCard
          rotate={item?.rotate}
          scale={item?.scale}
          key={index}
          className={cn(
            `w-64 h-80 transition-all duration-150 ease-out`,
            item?.style
          )}
        >
          <motion.div
            className={`relative w-64 h-80 bg-gradient-to-b from-white/20 to-transparent border border-white/10 shadow-xl flex justify-center items-center rounded-lg backdrop-blur-lg`}
          >
            <div className="flex flex-col items-center gap-3">
              <div>{item.icon}</div>
              <h2 className="text-slate-300 font-bold font-montserrat text-4xl">
                <NumberTicker value={item.value} />+
              </h2>
            </div>
            <span className="absolute bottom-0 w-full h-10 bg-white/5 flex justify-center items-center text-white font-poppins">
              {item.title}
            </span>
          </motion.div>
        </MagicCard>
      ))}
    </div>
  );
};

export default Achievements;
