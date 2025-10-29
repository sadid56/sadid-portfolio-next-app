"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import usePageScroll from "@/hooks/usePageScroll";
import { IconMenu2 } from "@tabler/icons-react";
import gsap from "gsap";
import ShinnyButton from "@/components/ui/ShinnyButton";
import Link from "next/link";

const Navber = () => {
  const handleScroll = usePageScroll();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const linkRefs = useRef<HTMLAnchorElement[]>([]);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>(null);

  const links = [
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
    { path: "#services", label: "Services" },
  ];

  useEffect(() => {
    if (!navRef.current) return;

    // GSAP Timeline setup (paused initially)
    tl.current = gsap.timeline({ defaults: { duration: 0.8, ease: "expo.inOut" }, paused: true });

    tl.current
      .to(navRef.current, { right: 0 })
      .to(navRef.current, { height: "95vh" }, "-=0.1")
      .to(linkRefs.current, { opacity: 1, pointerEvents: "auto", stagger: 0.15 }, "-=0.6")
      .to(closeRef.current, { opacity: 1, pointerEvents: "auto" }, "-=0.7")
      .to(titleRef.current, { opacity: 1 }, "-=1");
  }, []);

  // Handle open/close animation
  const toggleMobileMenu = () => {
    if (!tl.current) return;
    if (mobileOpen) {
      tl.current.reverse();
      setMobileOpen(false);
    } else {
      tl.current.play();
      setMobileOpen(true);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[60]",
        "backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl",
        "transition-all duration-300 w-[90%] md:w-[70%] lg:w-[55%]"
      )}
    >
      <div className='flex items-center justify-between py-3 md:pr-5'>
        {/* Logo */}
        <button
          onClick={() => {
            window.location.href = "/";
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className='flex items-center cursor-pointer'
        >
          <Image src='/logo-name.png' alt='Logo' width={120} height={120} priority style={{ width: "auto", height: "auto" }} />
        </button>

        {/* Desktop Links */}
        <div>
          <div className=' hidden md:flex items-center gap-6'>
            <div className='flex gap-8 items-center'>
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
            <Link href={"/blogs"}>
              <ShinnyButton>BLOGS</ShinnyButton>
            </Link>
          </div>

          <div className='md:hidden text-white pr-5 z-[70] relative'>
            <label className='hamburger'>
              <input checked={mobileOpen} onChange={toggleMobileMenu} type='checkbox' />
              <svg viewBox='0 0 32 32'>
                <path
                  className='line line-top-bottom'
                  d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                ></path>
                <path className='line' d='M7 16 27 16'></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* 🔥 Mobile Fullscreen Menu */}
      <div
        ref={navRef}
        className='fixed top-0 right-[-200vw] w-full h-[70px] bg-mainBgColor flex justify-center items-center flex-col md:hidden overflow-hidden z-[65] backdrop-blur-xl rounded-2xl border border-white/10'
      >
        <h2 ref={titleRef} className='absolute top-[3%] left-[7%] text-white text-3xl font-bold opacity-0 select-none'>
          <button
            onClick={() => {
              window.location.href = "/";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className='flex items-center cursor-pointer'
          >
            <Image src='/logo-name.png' alt='Logo' width={120} height={120} priority style={{ width: "auto", height: "auto" }} />
          </button>
        </h2>

        {/* Links */}
        <ul className='list-none flex flex-col items-center'>
          {links.map((link, idx) => (
            <li key={idx} className='my-6'>
              <a
                ref={(el) => {
                  if (el) linkRefs.current[idx] = el;
                }}
                onClick={(e) => {
                  handleScroll(e, link.path);
                  toggleMobileMenu();
                }}
                className="text-2xl font-semibold text-white opacity-0 pointer-events-none relative hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-[3px] after:bg-white after:left-0 after:-bottom-2 after:scale-x-0 after:origin-left after:transition-transform after:duration-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Link href={"/blogs"}>
          <ShinnyButton>BLOGS</ShinnyButton>
        </Link>
      </div>
    </nav>
  );
};

export default Navber;
