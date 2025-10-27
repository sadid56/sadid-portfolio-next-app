"use client";
import { cn } from "@/lib/cn";
import styles from "@/styles/loading.module.css";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingPercentage((prev) => (prev < 100 ? prev + 1 : prev));
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex h-[100vh] items-center justify-center bg-mainBgColor fixed inset-0 z-50'>
      <div className='w-72'>
        {/* Glitch Text */}
        <div className='loader mb-6'>
          <div data-glitch='Sadid :)' className={cn(styles.glitch, "whitespace-nowrap")}>
            Sadid :)
          </div>
        </div>

        {/* Custom Progress Bar */}
        <div className='w-full h-3 bg-slate-700 rounded-lg overflow-hidden'>
          <div className='h-4 bg-[#03e9f4] transition-all duration-200' style={{ width: `${loadingPercentage}%` }} />
        </div>

        {/* Percentage Text */}
        <div className='font-semibold mt-2 text-white flex items-center justify-center gap-2'>
          {loadingPercentage}% Loading
          <span className='loading loading-dots loading-xs'></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
