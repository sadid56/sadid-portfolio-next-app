import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import useIsMobile from "@/hooks/useMobile";
import { TimelineEntry } from "@/types/TimeLIneTypes";

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, index }) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement | null>(null);

  const isEven = index % 2 === 0;

  useLayoutEffect(() => {
    let cleanup: (() => void) | undefined;
    if (!ref.current) return;
    const el = ref.current;
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = (gsapMod as any).gsap || (gsapMod as any).default || (gsapMod as any);
      const ScrollTrigger = (stMod as any).ScrollTrigger || (stMod as any).default || (stMod as any);
      if (gsap && ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }
      const fromX = isMobile ? 0 : isEven ? -60 : 60;
      const fromY = 40;
      gsap.set(el, { opacity: 0, x: fromX, y: fromY });
      const tween = gsap.to(el, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });
      cleanup = () => {
        if (tween && (tween as any).kill) (tween as any).kill();
      };
    })();
    return () => {
      if (cleanup) cleanup();
    };
  }, [isEven, isMobile]);

  return (
    <>
      <div
        ref={ref}
        className={`relative lg:flex lg:justify-between z-20 gap-10 pt-20 md:pt-40 ${
          isEven ? "flex-row lg:mr-28 ml-10 lg:ml-0" : "flex-row-reverse ml-10 lg:ml-28"
        }`}
      >
        <div
          className={`group p-8 md:p-10 flex items-center w-full lg:w-[50%] relative rounded-3xl border border-white/10 bg-slate-700/30 backdrop-blur-2xl will-change-transform shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-500 overflow-hidden ${
            isEven ? "text-left lg:text-right flex-row-reverse lg:flex-row" : "text-left flex-row-reverse"
          }`}
        >
          <div className='space-y-3 z-20'>
            <div className={`flex w-full ${isEven ? "justify-start lg:justify-end" : "justify-start"}`}>
              <Image
                width={60}
                height={60}
                alt={item.service_name}
                src={item.icon}
                className='rounded-lg bg-slate-800/40 p-2 border border-white/10'
              />
            </div>
            <h3 className='hidden md:block text-xl md:text-4xl font-bold text-neutral-100 font-montserrat drop-shadow-[0_1px_0_rgba(255,255,255,0.05)]'>
              {item.service_name}
            </h3>
            <h3 className='text-[16px] font-medium text-neutral-300 font-poppins'>{item.description}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
