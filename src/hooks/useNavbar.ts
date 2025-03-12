import { useEffect, useState, useRef } from "react";

export const useNavbar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  const links = [
    { path: "home", label: "Home" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "services", label: "Services" },
  ];

  // Handle scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close navbar when clicking outside
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

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isToggle]);

  // Handle link click to close menu
  const handleLinkClick = () => {
    setActive(false);
    setIsToggle(false);
  };

  return {
    isToggle,
    setIsToggle,
    scroll,
    navRef,
    active,
    setActive,
    links,
    handleLinkClick,
  };
};
