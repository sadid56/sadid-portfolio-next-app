// @ts-nocheck

"use client";

import logo from "../../../assets/images/logo-name.png";
import "./navber.css";
import Image from "next/image";
import AnimatedHamburgerButton from "@/components/ui/Button/AnimatedHumberButton";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import { useNavbar } from "@/hooks/useNavbar";

const Navber = () => {
  const {
    isToggle,
    setIsToggle,
    scroll,
    navRef,
    active,
    setActive,
    links,
    handleLinkClick,
  } = useNavbar();

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
            <Image
              src={logo.src}
              alt="Logo"
              width={120}
              height={120}
              priority
              style={{ width: "auto", height: "auto" }}
            />
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
              {/* <div className="-ml-5">
                <Image width={120} height={120} src={logo} alt="" />
              </div> */}
              {links.map((nav, i) => (
                <motion.li
                  key={i + 1}
                  custom={i}
                  variants={navItemVariants}
                  // onClick={() => setIsToggle(false)}
                >
                  {/* */}
                  <Link
                    activeClass="active"
                    to={nav?.path}
                    spy={true}
                    onClick={handleLinkClick}
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
            <ContactInfo isToggle={isToggle} />
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
