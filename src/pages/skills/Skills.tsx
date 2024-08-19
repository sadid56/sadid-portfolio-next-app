"use client"
import { useState } from "react";
import skillsArray from "../../../public/skills.json";
import "./Skills.css";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Image from "next/image";
import Container from "@/components/Container/Container";
import LargeTitle from "@/components/LargeTitle/LargeTitle";


const Skills = () => {
  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"];
  const [currentTab, setCurrentTab] = useState("Expertise");

  // Filter skills based on the current tab
  const filteredSkills = skillsArray.filter(
    (skill) => skill.category === currentTab
  );

  return (
    <Container id="skills" className=" w-full h-[500px] flex flex-col items-center justify-center gap-16 overflow-hidden">
      <SectionTitle color="Skills" text=""/>
      <LargeTitle title="Skills"/>
      {/* Skills tabs */}
      <div className="tabs flex flex-wrap gap-5 items-center justify-center">
        {tabsArray.map((tab) => (
          <button
            onClick={() => setCurrentTab(tab)}
            className={`tab-btn font-Georgian ${
              currentTab === tab ? "tab-active" : ""
            }`}
            key={tab}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills container */}
      <div className="skills-container flex flex-wrap items-center justify-center gap-10">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="tooltip-container"
          >
            <div className="tooltip">
              <div className="side">
                <div className="about font-Georgian">{skill.side}</div>
              </div>
            </div>
            <div className="text">
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
                      className=" img  object-cover rounded-full border-2 border-[#11c6cf]"
                      alt={skill.name}
                    />
                  </span>
                </div>
                <div className="text font-italic">{skill.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
