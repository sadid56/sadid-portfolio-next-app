"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import usePageScroll from "@/hooks/usePageScroll";
import ShinnyButton from "@/components/ui/ShinnyButton";
import Link from "next/link";
import LINKS from "@/constant/links";
import socialLinks from "@/data/socialLinks";
import { Drawer } from "vaul";
import { IconX } from "@tabler/icons-react";

const Navber = () => {
  const handleScroll = usePageScroll();
  const [open, setOpen] = useState(false);

  const links = [
    { path: "#experience", label: "Experience" },
    { path: "#projects", label: "Projects" },
  ];

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
          <div className='hidden md:flex items-center gap-6'>
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
            <Link target='_blank' href={LINKS.blog}>
              <ShinnyButton>BLOGS</ShinnyButton>
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className='md:hidden text-white pr-5 z-[70] relative'>
            <Drawer.Root open={open} onOpenChange={setOpen} direction='bottom' shouldScaleBackground>
              <Drawer.Trigger asChild>
                <div className='md:hidden text-white z-[70] relative'>
                  <label className='hamburger'>
                    <svg viewBox='0 0 32 32'>
                      <path
                        className='line line-top-bottom'
                        d='M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22'
                      ></path>
                      <path className='line' d='M7 16 27 16'></path>
                    </svg>
                  </label>
                </div>
              </Drawer.Trigger>

              <Drawer.Portal>
                <Drawer.Overlay className='fixed inset-0 bg-black/20 backdrop-blur-[10px] z-[999]' />
                <Drawer.Content className='fixed bottom-0 left-0 right-0 z-[1000] mt-4 flex h-auto flex-col rounded-t-[30px] bg-mainBgColor border-t border-white/10'>
                  {/* Handle */}
                  <Drawer.Title className='sr-only' />
                  <div className='mx-auto mt-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-gray-300/50' />

                  {/* Close Button */}
                  <button
                    onClick={() => setOpen(false)}
                    className='absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors'
                    aria-label='Close menu'
                  >
                    <IconX className='w-5 h-5 text-white' />
                  </button>

                  <div className='p-6 pt-8'>
                    {/* Mobile Logo */}
                    <div className='flex justify-center'>
                      <Image src='/logo-name.png' alt='Logo' width={140} height={140} priority style={{ width: "auto", height: "auto" }} />
                    </div>

                    {/* Links */}
                    <div className='flex flex-col items-center gap-2 my-20'>
                      {links.map((link, idx) => (
                        <Drawer.Close key={idx} asChild>
                          <button
                            onClick={(e) => handleScroll(e, link.path)}
                            className=' font-semibold text-white uppercase font-montserrat tracking-wide py-2 px-4 hover:text-cyan-300 transition-colors'
                          >
                            {link.label}
                          </button>
                        </Drawer.Close>
                      ))}

                      <Drawer.Close asChild>
                        <Link href={LINKS.blog} className='mt-2'>
                          <ShinnyButton>BLOGS</ShinnyButton>
                        </Link>
                      </Drawer.Close>
                    </div>

                    {/* Social Links */}
                    <div className='flex justify-center gap-4 mt-8 pt-8 border-t border-white/10'>
                      {socialLinks.map(({ Icon, href, label, color }) => (
                        <Drawer.Close key={label} asChild>
                          <Link
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='p-3 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-600/80 transition-all duration-300 hover:scale-110 hover:bg-slate-800/50 hover:border-slate-600 hover:shadow-lg hover:shadow-slate-500/10'
                            aria-label={label}
                          >
                            <Icon className={cn("w-6 h-6 text-slate-300 transition-colors", color)} />
                          </Link>
                        </Drawer.Close>
                      ))}
                    </div>
                  </div>

                  {/* Safe area for mobile devices */}
                  <div className='h-8' />
                </Drawer.Content>
              </Drawer.Portal>
            </Drawer.Root>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
