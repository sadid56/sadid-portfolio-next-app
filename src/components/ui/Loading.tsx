"use client";
import { cn } from "@/lib/cn";
import styles from "@/styles/loading.module.css";
import { Line } from "rc-progress";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  // calculate percentage
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : prevPercentage;
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-[100vh] items-center justify-center bg-white fixed inset-0 z-50">
      <div>
        <div className="loader">
          <div data-glitch="Sadid :)" className={cn(styles.glitch)}>
            Sadid :)
          </div>
        </div>
        <div>
          <Line
            percent={loadingPercentage}
            strokeWidth={5}
            strokeColor="#03e9f4"
            trailColor="#0a2729"
            trailWidth={5}
            strokeLinecap="butt"
          />
          <div className=" font-semibold mt-2 text-slate-700 flex items-center justify-center">
            {loadingPercentage}% Loading
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
