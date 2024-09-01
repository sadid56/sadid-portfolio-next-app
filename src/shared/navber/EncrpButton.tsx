import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const EncryptButton = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const TARGET_TEXT = "Send message";
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;

  const CHARS = "!@#$%^&*.<>/?";

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
  };

  const handleClick = () => {
    window.location.href = "mailto:sadidhasan56.com";
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      onClick={handleClick}
      className="group relative overflow-hidden rounded-lg border-[1px] border-border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] px-4 h-10 md:h-12 font-medium uppercase text-slate-400 transition-colors hover:text-indigo-300"
    >
      <span>{text}</span>

      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 1, ease: "linear" }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};
