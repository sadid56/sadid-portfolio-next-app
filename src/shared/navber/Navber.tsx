"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo-name.png";
import "./navber.css";
import Image from "next/image";
import AnimatedHamburgerButton from "@/components/ui/AnimatedHumberButton/AnimatedHumberButton";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import Icon from "@/components/Icon/Icon";
import { IconBrandDiscord, IconBrandFacebook, IconBrandLinkedin } from "@tabler/icons-react";
import { EncryptButton } from "./EncrpButton";

const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  // navs links
  const links = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "experience", label: "Experience" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "services", label: "Services" },
  ];

  // define a home screen height
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all ease-in duration-300 md:px-0`}
      >
        <div className={`flex justify-between items-center md:container mx-auto`}>
          <div className="">
            <Image width={150} height={150} src={logo} alt="" />
          </div>
          {/* item list */}
          <div
            className={` ${
              isToggle ? "sidebar-open w-[100%] md:w-[60%]" : "sidebar-closed w-[100%] md:w-[60%]"
            } flex justify-center gap-10 pt-20`}
          >
            {/* navber items */}
            <ul className="flex flex-col gap-10 uppercase text-sm cursor-pointer  text-slate-300  text-[12px] font-medium ">
              <div className="-ml-5">
                <Image width={120} height={120} src={logo} alt="" />
              </div>
              {links.map((nav, i) => (
                <li key={i + 1}>
                  <Link
                    // onClick={() => setIsToggle(false)}
                    activeClass="active"
                    to={nav?.path}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    // onSetActive={handleSetActive}
                    className={`nav-link ${
                      nav.path === "home" && !scroll ? "nav-link active" : ""
                    }`}
                  >
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* contact info */}
            <div>
              <h3 className="text-xl font-semibold text-slate-300 uppercase">
                Contact Me
              </h3>
              <div className="flex flex-col md:flex-row mt-5 gap-2">
                
  
        <button className="inline-flex h-10 md:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none uppercase">
          Resume
        </button>
        <EncryptButton/>
  
      
              </div>
              <div className="flex gap-3 items-center mt-5 ml-1">
            <LinkPreview url="https://www.facebook.com/sadidhasan.hasan.5">
              <Icon Icon={IconBrandFacebook} widht={2} />
            </LinkPreview>
            <LinkPreview url="https://discord.com/users/1151169623149002752/">
              <Icon Icon={IconBrandDiscord} widht={2} />
            </LinkPreview>
            <LinkPreview url="https://www.linkedin.com/in/mr-sadid/">
              <Icon Icon={IconBrandLinkedin} widht={2} />
            </LinkPreview>
          </div>
            </div>
          </div>

          {/* condition bar in mobile device */}
          <AnimatedHamburgerButton
            setIsToggle={setIsToggle}
            isToggle={isToggle}
          />
        </div>
      </nav>
    </>
  );
};

export default Navber;
