"use client";

import { useFollowPointer } from "@/hooks/useFollowPointer";
import React, { useRef } from "react";
import { motion } from "motion/react";
import styles from "@/styles/cursor.module.css";
import { cn } from "@/lib/cn";

const GlowCursor = () => {
  const ref: any = useRef(null);
  const { x, y } = useFollowPointer(ref);
  return <motion.div ref={ref} className={cn(styles.cursor)} style={{ x, y }} />;
};

export default GlowCursor;
