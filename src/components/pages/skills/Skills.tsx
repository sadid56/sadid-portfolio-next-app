"use client";
import {useState } from "react";
import {  motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skillsArray from "../../../../public/skills.json";
import "./Skills.css";
import Image from "next/image";
import LargeTitle from "@/components/common/LargeTitle/LargeTitle";
import { Element } from "react-scroll";
import SectionTitle from "@/components/common/sectionTitle/SectionTitle";


const Skills = () => {
  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"];
  const [currentTab, setCurrentTab] = useState("Expertise");
  const [isShowAnimation, setIsShowAnimation] = useState(false); // Track animation state

  // Filter skills based on the current tab
  const filteredSkills = skillsArray.filter(
    (skill) => skill.category === currentTab
  );

  // Intersection Observer to trigger animations on scroll
  const { ref: tabsRef, inView: tabsInView } = useInView({
    threshold: 0.1,
  });

  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.1,
  });

  const handleSetTabs = (tab: string) => {
    setCurrentTab(tab);
    setIsShowAnimation(!isShowAnimation); // Trigger animation on tab change
  };

  return (
    // @ts-ignore
    <Element
      name="skills"
      id="skills"
      className="w-full container mx-auto  flex flex-col items-center justify-center gap-16 overflow-hidden mt-20 relative min-h-screen parent-div"
    >
      <SectionTitle color="Skills" text="_" />
      <LargeTitle title="Skills" />

      {/* Skills tabs */}
      <motion.div
        ref={tabsRef}
        className="tabs flex flex-wrap gap-5 items-center justify-center "
        initial={{ opacity: 0, y: 50 }}
        animate={tabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {tabsArray.map((tab) => (
          <motion.button
            onClick={() => handleSetTabs(tab)}
            className={`tab-btn font-outfit ${
              currentTab === tab ? "tab-active" : ""
            }`}
            key={tab}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {tab}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills container */}
      <motion.div
        ref={skillsRef}
        className="skills-container flex flex-wrap items-center justify-center gap-10 mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          skillsInView || isShowAnimation
            ? { opacity: 1, scale: 1 }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            className="tooltip-container"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              transition={{ duration: 1, delay: 2 }}
              className="tooltip"
            >
              <div className="side">
                <div className="about font-outfit">{skill.side}</div>
              </div>
            </motion.div>
            <motion.div className="text">
              <div className="icon">
                <div className="layer w-[70px] h-[70px] md:w-[100px] md:h-[100px]">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span className="p-2 md:p-3">
                    {/* Image with Skeleton Loader */}
                    <div className="w-[53px] h-[53px]  md:w-[75px] md:h-[75px] relative">

                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={100}
                        height={100}
                        priority
                        // layout="fill"
                        style={{ objectFit: "cover" }}
                        className="rounded-full border-2 border-[#11c6cf] transition-opacity duration-500 ease-in-out w-[53px] h-[53px]  md:w-[75px] md:h-[75px]"
                        quality={100}

                      />
                    </div>
                  </span>
                </div>
                <div className="text font-poppins font-italic">
                  {skill.name}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Element>
  );
};

export default Skills;
