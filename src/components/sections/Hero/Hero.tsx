"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconArrowDown } from "@tabler/icons-react";
import Container from "@/components/global/Container";
import { cn } from "@/lib/cn";
import Link from "next/link";
import socialLinks from "@/data/socialLinks";
import usePageScroll from "@/hooks/usePageScroll";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const handleScroll = usePageScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ----- Animated Name -----
      const nameLetters = nameRef.current?.querySelectorAll("span");
      if (nameLetters) {
        gsap.fromTo(
          nameLetters,
          { y: 100, opacity: 0, rotationX: 90, filter: "blur(10px)" },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            filter: "blur(0px)",
            duration: 1.2,
            stagger: 0.08,
            ease: "power3.out",
          }
        );

        // Hover interactive glow & 3D rotation
        nameLetters.forEach((letter: any) => {
          letter.addEventListener("mouseenter", () => {
            gsap.to(letter, { scale: 1.2, rotationY: 20, color: "white", textShadow: "0px 0px 20px rgba(255,255,255,0.8)", duration: 0.3 });
          });
          letter.addEventListener("mouseleave", () => {
            gsap.to(letter, { scale: 1, rotationY: 0, color: "", textShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 0.3 });
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='home' ref={containerRef} className='relative h-screen overflow-hidden'>
      {/* Canvas Background */}

      <div className='absolute inset-0'>
        {/* Animated Orb */}
        <div className='absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl float-slow'></div>

        <div className='absolute bottom-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl float-fast'></div>
      </div>

      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]'></div>

      <Container className='relative z-10 h-full flex flex-col justify-center items-center'>
        {/* Name */}
        <div ref={nameRef} className='mb-6'>
          <h1 className='text-6xl md:text-8xl lg:text-[180px] font-montserrat uppercase font-extrabold select-none'>
            {"Sadid".split("").map((letter, idx) => (
              <span
                key={idx}
                className={cn(
                  "inline-block mx-1 bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent",
                  "cursor-default"
                )}
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Description */}
        <p className='text-center text-lg text-slate-400 max-w-2xl mb-12'>
          I craft digital experiences that blend innovative design with cutting-edge technology. Specializing in modern web applications and
          interactive interfaces.
        </p>

        {/* CTA Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={(e) => handleScroll(e, "#projects")}
            className='px-6 py-3 bg-white text-black font-semibold rounded-xl flex items-center gap-2 cta-btn hover:scale-105 transition-transform font-poppins'
          >
            View Projects <IconArrowDown className='w-5 h-5' />
          </button>
          <a
            href='mailto:hello@sadid.com'
            className='px-6 py-3 border border-slate-600 text-slate-300 rounded-xl font-medium cta-btn hover:bg-slate-800/60 transition-all'
          >
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className='flex flex-col gap-6 absolute right-0 top-1/2 transform -translate-y-1/2'>
          {socialLinks.map(({ Icon, href, label, color }) => (
            <Link
              key={label}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='group p-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-500/10'
              aria-label={label}
            >
              <Icon className={cn("w-6 h-6 text-slate-400 transition-colors", color)} />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Hero;
