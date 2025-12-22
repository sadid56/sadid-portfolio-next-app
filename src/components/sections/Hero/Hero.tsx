"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconArrowDown, IconCoffee, IconBrandReact, IconBrandNextjs, IconBrandTypescript } from "@tabler/icons-react";
import Container from "@/components/global/Container";
import { cn } from "@/lib/cn";
import Link from "next/link";
import socialLinks from "@/data/socialLinks";
import usePageScroll from "@/hooks/usePageScroll";
import { FlipWords } from "@/components/ui/FlipWords";
import Skills from "../Skills/Skills";
import Button from "@/components/ui/Button";
import LINKS from "@/constant/links";
import styles from "@/styles/hero.module.css";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const dLetterRef = useRef<HTMLSpanElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const handleScroll = usePageScroll();
  const words = ["Software developer", "Web developer", "Full stack developer", "React developer"];

  useLayoutEffect(() => {
    ScrollTrigger.getAll().forEach((t) => t.kill());

    const ctx = gsap.context(() => {
      const nameLetters = nameRef.current?.querySelectorAll("span") ?? [];
      const ctaButtons = containerRef.current?.querySelectorAll(".cta-btn") ?? [];
      const gradualEls = containerRef.current?.querySelectorAll(".GradualSpacing") ?? [];
      const socialEls = containerRef.current?.querySelectorAll(".social-links-container") ?? [];

      // Build a single array of real DOM targets (no selector strings)
      const otherLetters = Array.from(nameLetters).filter((el) => el !== dLetterRef.current);
      const otherContentTargets: (Element | HTMLElement)[] = [
        ...otherLetters,
        ...Array.from(gradualEls),
        ...Array.from(ctaButtons),
        ...Array.from(socialEls),
      ];

      // make sure reveal and D initial states are correct
      if (revealRef.current) gsap.set(revealRef.current, { clipPath: "circle(0% at 50% 50%)" });
      if (dLetterRef.current)
        gsap.set(dLetterRef.current, {
          scale: 1,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2000",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          onLeaveBack: () => {
            gsap.to(otherContentTargets, { opacity: 1, y: 0, x: 0, filter: "none", duration: 0.35, clearProps: "all" });
            gsap.to(dLetterRef.current, { scale: 1, opacity: 1, duration: 0.35, clearProps: "all" });
            gsap.to(revealRef.current, { clipPath: "circle(0% at 50% 50%)", duration: 0.35, clearProps: "all" });
          },
        },
      });

      // Hover interactive glow & 3D rotation
      // nameLetters.forEach((letter: any) => {
      //   letter.addEventListener("mouseenter", () => {
      //     gsap.to(letter, {
      //       scale: 1.2,
      //       rotationY: 20,
      //       color: "white",
      //       textShadow: "0px 0px 20px rgba(255,255,255,0.8)",
      //       duration: 0.3,
      //     });
      //   });
      //   letter.addEventListener("mouseleave", () => {
      //     gsap.to(letter, {
      //       scale: 1,
      //       rotationY: 0,
      //       color: "",
      //       textShadow: "0px 0px 0px rgba(0,0,0,0)",
      //       duration: 0.3,
      //     });
      //   });
      // });

      // Identify specific letters for motion
      const letters = Array.from(nameRef.current?.querySelectorAll("span") ?? []);
      const leftLetters = letters.slice(0, 2); // S, A
      const rightLetters = letters.slice(3, 5); // I, D
      const dLetter = dLetterRef.current;

      tl.to(
        leftLetters,
        {
          x: -250,
          opacity: 0.6,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0
      );

      tl.to(
        rightLetters,
        {
          x: 250,
          opacity: 0.6,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0
      );

      // Phase 2: Center D zooms in
      tl.to(
        dLetter,
        {
          scale: 20,
          ease: "power3.inOut",
          duration: 1.5,
          force3D: false,
          lazy: false,
          onStart: () => {
            if (!dLetterRef.current) return;
            gsap.set(dLetterRef.current, {
              backgroundImage: "linear-gradient(to right, white, #cbd5e1, #94a3b8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            });
          },
        },
        0.2
      );

      // Phase 3: Reveal new section
      tl.to(
        revealRef.current,
        {
          clipPath: "circle(150% at 50% 50%)",
          ease: "power2.in",
          duration: 1.5,
        },
        0.8
      );
      tl.to(
        dLetter,
        {
          opacity: 0,
          duration: 1,
        },
        1
      );

      // Floating icons gentle animation
      const floatingIcons = Array.from(containerRef.current?.querySelectorAll(".floating-icon") ?? []);
      floatingIcons.forEach((el, idx) => {
        const baseDuration = 3 + (idx % 3) * 0.6;
        gsap.to(el, {
          y: "+=18",
          rotate: idx % 2 === 0 ? 6 : -6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: baseDuration,
        });
      });

      // Parallax with mouse move
      const onMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
        const my = (e.clientY - rect.top) / rect.height - 0.5;
        floatingIcons.forEach((el, idx) => {
          const speed = 10 + (idx % 4) * 5;
          gsap.to(el, { x: mx * speed, yPercent: my * 2, duration: 0.3, ease: "power2.out" });
        });
      };
      containerRef.current?.addEventListener("mousemove", onMouseMove);

      // Cleanup for mouse listener in context
      return () => {
        containerRef.current?.removeEventListener("mousemove", onMouseMove);
        gsap.killTweensOf(floatingIcons);
      };
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id='home' ref={containerRef} className='relative h-screen overflow-hidden'>
      {/* Floating decorative icons */}
      <div className='pointer-events-none absolute inset-0 z-20'>
        <IconCoffee className='floating-icon absolute bottom-24 right-[20%] w-9 h-9 text-slate-300/70 drop-shadow-[0_0_10px_rgba(203,213,225,0.25)]' />
        <IconBrandReact className='floating-icon absolute top-[25%] left-[15%] w-10 h-10 text-cyan-300/70' />
        <IconBrandNextjs className='floating-icon absolute bottom-32 left-1/4 w-10 h-10 text-slate-200/70' />
        <IconBrandTypescript className='floating-icon absolute top-[15%] md:top-1/2 right-[15%] w-9 h-9 text-blue-300/70' />
      </div>
      <div ref={revealRef} className='absolute inset-0 z-50 bg-mainBgColor' style={{ clipPath: "circle(0% at 50% 50%)" }}>
        <Skills />
      </div>
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-1/3 -right-20 w-96 h-96 bg-linear-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl float-slow'></div>
        <div className='absolute bottom-1/4 -left-20 w-80 h-80 bg-linear-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl float-fast'></div>
      </div>
      <div className='absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]'></div>
      <Container className='relative z-30 h-full flex flex-col justify-center items-center text-center'>
        {/* Name */}
        <div ref={nameRef} className='mb-6'>
          <h1 className='text-[90px] leading-[90%] md:text-8xl lg:text-[180px] xl:text-[210px] font-montserrat uppercase font-extrabold select-none'>
            {"Sadid".split("").map((letter, idx) => (
              <span
                key={idx}
                ref={idx === 2 ? dLetterRef : null} // Assign ref to 'D'
                className={cn(
                  "inline-block mx-1 bg-linear-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent",
                  "cursor-default"
                )}
                style={
                  idx === 2
                    ? {
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        textRendering: "optimizeLegibility",
                      }
                    : undefined
                }
              >
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Description */}
        <div className='text-slate-300 font-poppins font-normal max-w-[600px] mx-auto mb-6 GradualSpacing'>
          Passionate {<FlipWords words={words} />} specializing in React, Next.js, Node.js, PostgreSQL and TypeScript. I love someone who
          loves programming and is eager to learn.
        </div>

        {/* CTA Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={(e) => handleScroll(e, "#projects")}
            className='h-12 px-8 bg-white outline-none cursor-pointer font-montserrat rounded-[10px] font-semibold hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] tracking-wide transition-all duration-300 hover:-translate-y-[2px] flex items-center gap-2'
          >
            Projects <IconArrowDown />
          </button>
          <Link target='_blank' href={LINKS.resume}>
            <Button>Resume</Button>
          </Link>
        </div>
      </Container>
      {/* Social Links */}
      <div
        className={cn(
          "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-6 md:flex-col md:fixed md:right-4 md:top-1/2 md:-translate-y-1/2 md:left-auto md:translate-x-0 h-fit"
        )}
      >
        {socialLinks.map(({ Icon, href, label, color }) => (
          <Link
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='group p-4 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-600/80 transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-500/10'
            aria-label={label}
          >
            <Icon className={cn("w-6 h-6 text-slate-300 transition-colors", color)} />
          </Link>
        ))}
      </div>
      {/* Mouse scroll indicator (right side) */}
      <div className='fixed right-3 bottom-5 z-40 pointer-events-none hidden md:flex flex-col items-center gap-2'>
        <p className='text-slate-400 text-xs rotate-90 font-poppins tracking-widest pr-4'>
          <small>Scroll</small>
        </p>
        <div className={styles?.arrow}></div>
      </div>
    </section>
  );
};

export default Hero;
