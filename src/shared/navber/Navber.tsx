"use client";
import { useEffect, useState, useRef } from "react";
import logo from "../../assets/images/logo-name.png";
import "./navber.css";
import Image from "next/image";
import AnimatedHamburgerButton from "@/components/ui/Button/AnimatedHumberButton";
import { Link } from "react-scroll";
import { LinkPreview } from "@/components/ui/linkPreview/LinkPreview";
import Icon from "@/components/Icon/Icon";
import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import ShineButton from "@/components/ui/Button/ShineButton";

const Navber = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  // nav links
  const links = [
    { path: "home", label: "Home" },
    { path: "experience", label: "Experience" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "services", label: "Services" },
  ];

  // handle scrolling for navbar style change
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

  // close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsToggle(false);
        setActive(false);
      }
    };
    if (isToggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isToggle]);

  // Framer Motion animations for navbar items
  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all ease-in duration-300 md:px-0`}
      >
        <div
          className={`flex justify-between items-center md:container mx-auto`}
          ref={navRef}
        >
          <div>
            <Image width={150} height={150} src={logo} alt="" />
          </div>
          {/* item list */}
          <div
            className={`${
              isToggle
                ? "sidebar-open w-[100%] md:w-[60%]"
                : "sidebar-closed w-[100%] md:w-[60%]"
            } flex justify-center gap-10 lg:gap-28 pt-20`}
          >
            {/* navbar items */}
            <motion.ul
              className="flex flex-col gap-10 uppercase cursor-pointer text-slate-300 text-sm md:text-lg font-medium"
              initial="hidden"
              animate={isToggle ? "visible" : "hidden"}
            >
              <div className="-ml-5">
                <Image width={120} height={120} src={logo} alt="" />
              </div>
              {links.map((nav, i) => (
                <motion.li
                  key={i + 1}
                  custom={i}
                  variants={navItemVariants}
                  onClick={() => setIsToggle(false)}
                >
                  <Link
                    activeClass="active"
                    to={nav?.path}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={`nav-link font-outfit ${
                      nav.path === "home" && !scroll ? "nav-link active" : ""
                    }`}
                  >
                    {nav.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* contact info */}
            <div>
              <h3 className="text-xl font-semibold text-slate-300 uppercase font-outfit">
                Contact Me
              </h3>
              <div className="flex flex-col md:flex-row mt-5 gap-2">
                <ShineButton text="Resume" animation={true} />
                <ShineButton
                  onClick={() => {
                    window.location.href = "mailto:sadidhasan56@gmail.com";
                  }}
                  text="Send Message"
                  animation={false}
                />
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
            setActive={setActive}
            active={active}
            setIsToggle={setIsToggle}
            isToggle={isToggle}
          />
      
        </div>
      </nav>
    </>
  );
};

export default Navber;
