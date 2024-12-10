"use client";

import { cn } from "@/utils/cn";
import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { ReactNode, ReactElement } from "react";

interface GradualSpacingProps {
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
  children: ReactNode;
}

export function GradualSpacing({
  duration = 0.1,
  delayMultiple = 0.02,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
  children,
}: GradualSpacingProps) {
  const renderContent = (node: ReactNode, index: number): ReactNode => {
    if (typeof node === "string") {
      return node.split("").map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={framerProps}
          transition={{ duration, delay: (index + i) * delayMultiple }}
          className="inline-block"
        >
          {char === " " ? <span>&nbsp;</span> : char}
        </motion.span>
      ));
    }

    if (React.isValidElement(node)) {
      return React.cloneElement(node as ReactElement, {
        key: index,
        children: React.Children.map(node.props.children, (child, i) =>
          renderContent(child, index + i)
        ),
      });
    }

    return node;
  };

  return (
    <div className={cn("flex max-w-4xl flex-wrap", className)}>
      <AnimatePresence>{React.Children.map(children, renderContent)}</AnimatePresence>
    </div>
  );
}
