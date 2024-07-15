import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapHorizentalScroll = (componentRef: React.RefObject<HTMLDivElement>, sliderRef: React.RefObject<HTMLDivElement>) => {
  let ctx = gsap.context(() => {
    let panels = gsap.utils.toArray(".panel") as HTMLElement[];
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sliderRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + sliderRef.current!.offsetWidth,
        markers: false,
      },
    });
  }, componentRef);

  return ctx;
};
