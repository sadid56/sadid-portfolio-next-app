"use client"
import { MotionConfig, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

interface Props{
  setIsToggle: Dispatch<SetStateAction<boolean>>;
  setActive: Dispatch<SetStateAction<boolean>>;
  isToggle: boolean,
  active: boolean,
}

const AnimatedHamburgerButton:React.FC<Props> = ({setIsToggle, isToggle, setActive, active}) => {
  

const handleClick = ()=>{
  setActive((pv) => !pv)
  setIsToggle(!isToggle)
}

  return (
    // animmated button
    <MotionConfig
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active || isToggle ? "open" : "closed"}
        onClick={handleClick}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/10 z-[999]"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};


// button animated variant
const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default AnimatedHamburgerButton;