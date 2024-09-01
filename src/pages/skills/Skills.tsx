"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import skillsArray from "../../../public/skills.json";
import "./Skills.css";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Image from "next/image";
import Container from "@/components/Container/Container";
import LargeTitle from "@/components/LargeTitle/LargeTitle";
import { Element } from "react-scroll";

const Skills = () => {
  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"];
  const [currentTab, setCurrentTab] = useState("Expertise");
  const [isShowAnimation, setIsShowAnimation] = useState(false); // Corrected typo

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
    setIsShowAnimation(!isShowAnimation); // Corrected typo
  };

  return (
    <Element
     name="skills"
      id="skills"
      className="w-full h-[500px] flex flex-col items-center justify-center gap-16 overflow-hidden"
    >
      <SectionTitle color="Skills" text="" />
      <LargeTitle title="Skills" />

      {/* Skills tabs */}
      <motion.div
        ref={tabsRef}
        className="tabs flex flex-wrap gap-5 items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={tabsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {tabsArray.map((tab) => (
          <motion.button
            onClick={() => handleSetTabs(tab)}
            className={`tab-btn font-Georgian ${
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
        className="skills-container flex flex-wrap items-center justify-center gap-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={skillsInView || isShowAnimation ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            className="tooltip-container"
            whileHover={{ scale: 1.1}}
          >
            <motion.div className="tooltip">
              <div className="side">
                <div className="about font-Georgian">{skill.side}</div>
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
                    <Image
                      width={90}
                      height={90}
                      src={skill.logo}
                      objectFit="cover"
                      className="img object-cover rounded-full border-2 border-[#11c6cf]"
                      alt={skill.name}
                    />
                  </span>
                </div>
                <div className="text font-italic">{skill.name}</div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </Element>
  );
};

export default Skills;
