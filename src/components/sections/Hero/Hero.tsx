export const dynamic = "force-static";

import { LinkPreview } from "@/components/ui/LinkPreview";
import Icon from "@/components/global/Icon";
import { IconBrandDiscord, IconBrandFacebook, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import CenterVideo from "@/components/sections/Hero/HeroCenterVideo";
import styles from "@/styles/helo.module.css";
import { HeroParallaxItems } from "./HerroParallaxItems";
import { Suspense } from "react";

const Hero = () => {
  const SECTION_HEIGHT = 1600;

  return (
    <header id='home'>
      <div style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }} className='relative w-full'>
        <Suspense>
          <CenterVideo />
        </Suspense>
        <Suspense>
          <HeroParallaxItems />
        </Suspense>
        {/* hero bottom  overlay */}
        <div className='absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-mainBgColor' />
        {/* right side scroll icon */}
        <div className='fixed bottom-5 right-3 md:right-5 flex-col items-center gap-10 flex'>
          <div className='flex flex-col gap-3 items-center '>
            <LinkPreview url='https://github.com/sadid56/'>
              <Icon Icon={IconBrandGithub} widht={2} />
            </LinkPreview>
            <LinkPreview url='https://www.facebook.com/sadidhasanx'>
              <Icon Icon={IconBrandFacebook} widht={2} />
            </LinkPreview>
            <LinkPreview url='https://discord.com/users/1151169623149002752/'>
              <Icon Icon={IconBrandDiscord} widht={2} />
            </LinkPreview>
            <LinkPreview url='https://www.linkedin.com/in/mr-sadid/'>
              <Icon Icon={IconBrandLinkedin} widht={2} />
            </LinkPreview>
          </div>
          <div className='relative'>
            <p className='text-slate-300 text-sm absolute rotate-90 -right-1 top-8 font-poppins'>
              <small>Scroll</small>
            </p>
            <div className={styles?.arrow}></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
