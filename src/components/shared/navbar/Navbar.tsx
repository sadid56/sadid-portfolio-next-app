"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import usePageScroll from "@/hooks/usePageScroll";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navber = () => {
  const handleScroll = usePageScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { path: "#home", label: "Home" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#services", label: "Services" },
  ];

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        "transition-all duration-300 w-[90%] md:w-[70%] lg:w-[55%]"
      )}
    >
      <div className='flex items-center justify-between py-3 px-4 md:px-5'>
        {/* Logo */}
        <button
          onClick={(e) => {
            handleScroll(e, "#home");
            setMobileOpen(false); // close menu on logo click
          }}
          className='flex items-center cursor-pointer'
        >
          <Image src='/logo-name.png' alt='Logo' width={120} height={120} priority style={{ width: "auto", height: "auto" }} />
        </button>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-8 items-center'>
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={(e) => handleScroll(e, link.path)}
              className='cursor-pointer relative font-medium text-slate-300 transition-colors duration-200 hover:text-white uppercase font-montserrat'
            >
              <span>{link.label}</span>
              <span className='underline absolute left-0 -bottom-1 h-[2px] bg-white' style={{ width: 0 }} />
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={toggleMobileMenu} className='md:hidden text-white' aria-label='Toggle Menu'>
          {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden overflow-hidden transition-all duration-300", mobileOpen ? "h-96 py-2" : "max-h-0")}>
        <div className='flex flex-col gap-8 pl-10 pt-16'>
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                handleScroll(e, link.path);
                setMobileOpen(false); // close menu after click
              }}
              className='text-slate-300 hover:text-white uppercase font-medium font-montserrat text-lg text-left'
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navber;
