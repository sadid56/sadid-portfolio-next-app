"use client";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo-name.png";
import "./navber.css";
import Image from "next/image";
import AnimatedHamburgerButton from "@/components/ui/AnimatedHumberButton/AnimatedHumberButton";

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

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
      setIsToggle(false); // Close the sidebar after clicking
    }
  };

  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 transition-all ease-in duration-300 px-3 md:px-0`}
      >
        <div className={`flex justify-between items-center max-w-7xl mx-auto`}>
          <div className="">
            <Image width={150} height={150} src={logo} alt="" />
          </div>
          {/* item list */}
          <div
            className={` ${
              isToggle ? "sidebar-open w-[60%]" : "sidebar-closed w-[60%]"
            } flex justify-center gap-10`}
          >
            {/* navber items */}
            <ul className="flex flex-col gap-10 uppercase text-sm cursor-pointer  text-slate-300  text-[12px] font-medium ">
              <div className="-ml-5">
                <Image width={120} height={120} src={logo} alt="" />
              </div>
              {links.map((nav, i) => (
                <li key={i + 1}>
                  <span
                    onClick={() => handleScrollToSection(nav.path)}
                    className={`nav-link ${
                      nav.path === "home" && !scroll ? "nav-link active" : ""
                    }`}
                  >
                    {nav.label}
                  </span>
                </li>
              ))}
            </ul>
            {/* contact info */}
            <div>
              <h3 className="text-3xl font-semibold text-slate-300">
                Contact Me
              </h3>
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
