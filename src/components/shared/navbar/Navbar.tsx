"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import usePageScroll from "@/hooks/usePageScroll";
import { IconMenu2, IconX } from "@tabler/icons-react";
import gsap from "gsap";

const Navber = () => {
  const handleScroll = usePageScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const links = [
    { path: "#home", label: "Home" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#services", label: "Services" },
  ];

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Animate mobile menu
  useEffect(() => {
    const menu = menuRef.current;
    const icon = iconRef.current;
    if (!menu || !icon) return;

    if (mobileOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        paddingTop: 16,
        paddingBottom: 16,
      });

      gsap.to(icon, {
        rotate: 90,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        paddingTop: 0,
        paddingBottom: 0,
      });

      gsap.to(icon, {
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        "transition-all duration-300 w-[90%] md:w-[70%] lg:w-[55%]"
      )}
    >
      <div className='flex items-center justify-between py-3 md:pr-5'>
        {/* Logo */}
        <button
          onClick={(e) => {
            handleScroll(e, "#home");
            setMobileOpen(false);
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
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div ref={iconRef} className='md:hidden text-white pr-5'>
          <button onClick={toggleMobileMenu} aria-label='Toggle Menu'>
            {mobileOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div ref={menuRef} className='md:hidden overflow-hidden opacity-0 transition-none'>
        <div className='flex flex-col gap-8 pl-10'>
          {links.map((link, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                handleScroll(e, link.path);
                setMobileOpen(false);
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
