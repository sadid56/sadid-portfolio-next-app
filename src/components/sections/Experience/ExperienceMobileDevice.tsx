"use client";

import Container from "@/components/global/Container";
import { cn } from "@/lib/cn";
import LINKS from "@/constant/links";
import Link from "next/link";
import EXPERIENCE from "@/data/experience";
import { TExperience } from "@/types/experienceTypes";

const ExperienceMobileDevice = () => {
  return (
    <section id='experience' className='relative py-24 lg:hidden'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 items-start'>
          {/* Left content */}
          <div className='lg:col-span-5 self-start'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700/60 bg-slate-800/40 text-slate-300 text-xs shadow-md shadow-emerald-400/10'>
              <span className='w-2 h-2 rounded-full bg-emerald-400 animate-pulse'></span>
              Professional Journey
            </div>

            <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mt-4'>
              <span className='bg-linear-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent'>
                Creating what people love to use
              </span>
            </h2>

            <p className='text-slate-400 leading-relaxed max-w-md mt-3'>
              I create performant, beautiful web experiences that balance innovation with reliability. Focused on clean architecture.
            </p>

            <div className='flex items-center gap-3 mt-4'>
              <Link
                href={LINKS.facebook}
                className='px-4 py-2 text-sm rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700/40 transition-colors duration-300'
              >
                Let’s Connect
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className='lg:col-span-7 relative self-center'>
            <div className='flex flex-col gap-6 mt-8'>
              {EXPERIENCE.map((exp: TExperience) => (
                <div
                  key={exp.id}
                  className={cn(
                    "rounded-3xl border border-white/10 bg-slate-700/30 backdrop-blur-xl shadow-lg p-6 hover:bg-slate-700/40 transition-colors duration-300"
                  )}
                >
                  <div className='flex items-start justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-white'>{exp.role}</h3>
                    <span className='px-3 py-1 text-xs text-cyan-300 rounded-full border border-cyan-500/30 bg-cyan-500/10'>
                      {exp.period}
                    </span>
                  </div>

                  <p className='text-slate-300 mb-3'>
                    <a
                      href={exp.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='underline decoration-transparent hover:decoration-sky-400 hover:text-white transition-colors'
                    >
                      {exp.company}
                    </a>{" "}
                    • <span className='text-slate-400'>{exp.location}</span>
                  </p>

                  <ul className='space-y-2 mb-3'>
                    {exp.highlights.map((h, i) => (
                      <li key={i} className='text-slate-400 text-sm'>
                        • {h}
                      </li>
                    ))}
                  </ul>

                  <div className='flex flex-wrap gap-2'>
                    {exp.tech.map((t) => (
                      <span key={t} className='px-2.5 py-1 text-xs text-blue-300 bg-blue-500/10 rounded-lg border border-blue-500/20'>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExperienceMobileDevice;
