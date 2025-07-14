export const dynamic = "force-dynamic";

import * as motion from "motion/react-client";
import "./Skills.css";
import Image from "next/image";
import LargeTitle from "@/components/global/LargeTitle";
import SectionTitle from "@/components/global/SectionTitle";
import { getFilteredSkills } from "./filterdSkills";
import Link from "next/link";

const Skills = ({ skill = "Expertise" }: { skill: string }) => {
  const tabsArray = ["Expertise", "Comfortable", "Familiar", "Tools"];

  const filteredSkills = getFilteredSkills(skill);

  return (
    <div
      id="skills"
      className="w-full container mx-auto  flex flex-col items-center justify-center gap-16 overflow-hidden relative min-h-screen parent-div px-4 md:px-0"
    >
      <SectionTitle color="Skills" text="_" />
      <LargeTitle title="Skills" />

      {/* Skills tabs */}
      <motion.div
        className="tabs flex flex-wrap gap-5 items-center justify-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {tabsArray.map((tab) => (
          <Link
            scroll={false}
            className={`tab-btn font-montserrat ${
              skill === tab ? "tab-active" : ""
            }`}
            href={`?skill=${tab}`}
            key={tab}
          >
            {tab}
          </Link>
        ))}
      </motion.div>

      {/* Skills container */}
      <motion.div
        className="skills-container flex flex-wrap items-center justify-center gap-10 mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
      >
        {filteredSkills.map((skill, i) => (
          <motion.div
            key={i}
            className="tooltip-container"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              transition={{ duration: 1, delay: 2 }}
              className="tooltip"
            >
              <div className="side">
                <div className="about font-montserrat">{skill.side}</div>
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
    </div>
  );
};

export default Skills;
