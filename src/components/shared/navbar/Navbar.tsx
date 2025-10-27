"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import usePageScroll from "@/hooks/usePageScroll";

const Navber = () => {
  const handleScroll = usePageScroll();

  const links = [
    { path: "#home", label: "Home" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#services", label: "Services" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        "transition-all duration-300 w-[90%] md:w-[70%] lg:w-[55%]"
      )}
    >
      <div className='flex items-center justify-between py-3 pr-5'>
        {/* Logo */}
        <button onClick={(e) => handleScroll(e, "#home")} className='flex items-center cursor-pointer'>
          <Image src='/logo-name.png' alt='Logo' width={120} height={120} priority style={{ width: "auto", height: "auto" }} />
        </button>

        {/* Links */}
        <div className='hidden md:flex gap-8 items-center'>
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={(e) => handleScroll(e, link.path)}
              className=' cursor-pointer relative font-medium text-slate-300 transition-colors duration-200 hover:text-white uppercase font-montserrat'
            >
              <span>{link.label}</span>
              <span className='underline absolute left-0 -bottom-1 h-[2px] bg-white' style={{ width: 0 }} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
