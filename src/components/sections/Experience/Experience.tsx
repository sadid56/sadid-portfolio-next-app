"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/global/Container";
import { cn } from "@/lib/cn";
import LINKS from "@/constant/links";
import Link from "next/link";
import EXPERIENCE from "@/data/experience";
import { TExperience } from "@/types/experienceTypes";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const leftRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const media = gsap.matchMedia();

      // ✅ Only run for desktop
      media.add("(min-width: 1024px)", () => {
        // Left side entrance animations
        if (leftRef.current) {
          const items = leftRef.current.querySelectorAll(".left-animate");
          gsap.set(items, { y: 16, opacity: 0, filter: "blur(4px)" });
          gsap.to(items, {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.7,
            ease: "power2.out",
            stagger: 0.08,
          });
        }

        const cards = cardRefs.current.filter(Boolean);
        if (!cards.length) return;

        cards.forEach((card, index) => {
          const isTop = index === 0;
          const isSecond = index === 1;
          const altTilt = index % 2 === 0 ? -6 : 6;
          const peekY = 28 + Math.max(0, index - 1) * 28;
          const depthZ = isTop ? 0 : -40 - Math.max(0, index - 1) * 20;
          const overlay = card.querySelector(".active-glow");

          gsap.set(card, {
            zIndex: cards.length - index,
            yPercent: isTop ? 0 : peekY,
            scale: isTop ? 1 : 0.96,
            opacity: isTop ? 1 : 0.6,
            rotationY: isTop ? 0 : altTilt,
            z: depthZ,
            transformPerspective: 1200,
            transformOrigin: "50% 50%",
            willChange: "transform, opacity",
          });

          if (overlay) {
            gsap.set(overlay, { opacity: isTop || isSecond ? 0.7 : 0 });
          }
        });

        const tl = gsap.timeline({
          defaults: { ease: "power2.out" },
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top center",
            end: `+=${Math.max(140, 90 * Math.max(cards.length - 1, 1))}%`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            snap: {
              snapTo: (value, self) => {
                const steps = Math.max(cards.length - 1, 1);
                const raw = value * steps;
                const velocity = self?.getVelocity?.() ?? 0;
                if (Math.abs(velocity) > 300) {
                  return (velocity > 0 ? Math.ceil(raw) : Math.floor(raw)) / steps;
                }
                const nearest = Math.round(raw);
                const delta = raw - nearest;
                if (delta > 0.12) return (nearest + 1) / steps;
                if (delta < -0.12) return (nearest - 1) / steps;
                return nearest / steps;
              },
              duration: { min: 0.15, max: 0.35 },
              ease: "power2.out",
            },
          },
        });

        for (let i = 0; i < cards.length - 1; i++) {
          const current = cards[i];
          const next = cards[i + 1];
          const rest = cards.slice(i + 2);
          const currentGlow = current.querySelector(".active-glow");
          const nextGlow = next.querySelector(".active-glow");

          tl.addLabel(`step-${i}`)
            .to(
              current,
              {
                yPercent: -22,
                scale: 0.94,
                opacity: 0.3,
                rotationY: i % 2 === 0 ? -10 : 10,
                z: -80,
                duration: 0.9,
              },
              ">"
            )
            .to(
              next,
              {
                yPercent: 0,
                scale: 1,
                opacity: 1,
                rotationY: 0,
                z: 0,
                duration: 0.9,
              },
              "<"
            )
            .to(
              rest,
              {
                yPercent: (index) => 28 + index * 28,
                scale: 0.96,
                opacity: 0.6,
                rotationY: (index) => ((i + 2 + index) % 2 === 0 ? -6 : 6),
                z: (index) => -40 - index * 20,
                duration: 0.9,
              },
              "<"
            )
            .add(() => {
              gsap.set(next, { zIndex: cards.length + 5 });
              cards.forEach((c, idx) => {
                if (c !== next) gsap.set(c, { zIndex: cards.length - idx });
              });
            })
            .to(currentGlow, { opacity: 0.15, duration: 0.6 }, "<")
            .to(nextGlow, { opacity: 0.75, duration: 0.6 }, "<");
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='experience' ref={sectionRef} className='relative py-24 hidden lg:block'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 items-center'>
          <div ref={leftRef} className='lg:col-span-5 lg:sticky lg:top-1/2 lg:-translate-y-1/2 self-start'>
            {/* Animated tag */}
            <div className='left-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/40 text-slate-300 text-xs shadow-md shadow-emerald-400/10'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
              Professional Journey
            </div>

            {/* Heading */}
            <h2 className='left-animate text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mt-4'>
              <span className='bg-linear-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent'>
                Creating what people love to use
              </span>
            </h2>

            {/* Description */}
            <p className='left-animate text-slate-400 leading-relaxed max-w-md mt-3'>
              I create performant, beautiful web experiences that balance innovation with reliability. Focused on clean architecture.
            </p>

            {/* Call to Action */}
            <div className='left-animate flex items-center gap-3 mt-4'>
              <Link
                href={LINKS.facebook}
                className='px-4 py-2 text-sm rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700/40 transition-colors duration-300'
              >
                Let’s Connect
              </Link>
            </div>
          </div>

          {/* Right: stacking cards */}
          <div ref={stackRef} className='lg:col-span-7 relative min-h-[40vh] self-center'>
            <div className='pointer-events-none absolute inset-0 overflow-hidden bg-linear-to-r from-emerald-400/10 via-sky-400/10 to-fuchsia-500/10 blur-3xl rounded-[40px]'></div>

            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-full max-w-xl mx-auto relative min-h-[540px]' style={{ perspective: 1200, transformStyle: "preserve-3d" }}>
                {EXPERIENCE.map((exp: TExperience, idx: number) => (
                  <div
                    key={exp.id}
                    ref={(el) => {
                      if (el) cardRefs.current[idx] = el;
                    }}
                    className={cn(
                      "absolute inset-x-0 mx-auto w-full rounded-3xl border border-white/10 bg-slate-700/30 backdrop-blur-2xl will-change-transform",
                      "shadow-xl hover:shadow-2xl hover:shadow-black/20 transition-shadow duration-500 overflow-hidden group"
                    )}
                  >
                    {/* Main Content */}
                    <div className='relative z-10 p-8'>
                      {/* Header */}
                      <div className='flex items-start justify-between gap-6 mb-6'>
                        <div className='space-y-3'>
                          <div className='flex items-center gap-3'>
                            <div className='w-3 h-3 rounded-full bg-linear-to-r from-blue-400 to-cyan-400'></div>
                            <h3 className='text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300'>
                              {exp.role}
                            </h3>
                          </div>
                          <div className='flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300/90'>
                            <a
                              href={exp.website}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='underline decoration-transparent hover:decoration-sky-400 hover:text-white transition-colors'
                            >
                              {exp.company}
                            </a>
                            <span className='text-slate-500'>•</span>
                            <span className='text-slate-400'>{exp.location}</span>
                          </div>
                        </div>
                        <span className='px-3 py-1.5 text-sm text-cyan-300 rounded-full border border-cyan-500/30 bg-cyan-500/10 whitespace-nowrap'>
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className='space-y-3 mb-8'>
                        {exp.highlights.map((h, i) => (
                          <li key={i} className='flex items-start gap-3 text-slate-400 group/highlight'>
                            <div className='w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5 shrink-0'></div>
                            <span className='group-hover/highlight:text-slate-300 transition-colors duration-300'>{h}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <div className='flex flex-wrap gap-2'>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className='px-3 py-1.5 text-sm text-blue-300 bg-blue-500/10 rounded-xl border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300'
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
