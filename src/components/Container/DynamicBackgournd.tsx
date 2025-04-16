"use client";
import React, { useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Loading from "../ui/Loading/Loading";

// home page loading
const LoadingSpinner = () => {
  return <Loading />;
};

export default function DynamicBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsloading] = useState(false);
  // Define background color transformation based on scroll position
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.7, 0.8, 1],
    ["#010610", "#010610", "#010610", "#010610", "#090946", "#010610"]
  );

  // auto loading show
  useEffect(() => {
    const fetchLoading = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsloading(false);
    };
    fetchLoading();
  }, []);

  return (
    <motion.div
      style={{ backgroundColor }}
      className="min-h-screen border-[#040459e2]"
    >
      <>{isLoading ? <LoadingSpinner /> : children}</>
    </motion.div>
  );
}
