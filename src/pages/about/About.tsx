"use client";
import React from "react";

interface PersonalInfo {
  name: string;
  designation: string;
  address: string;
  age: number;
  hobbies: string;
}

interface EducationInfo {
  degree: string;
  institute: string;
  department: string;
  gpa?: string;
  cgpa?: string;
}

interface UserData {
  personalInfo: PersonalInfo;
  educationInfo: EducationInfo[];
  description: string;
}

const userData: UserData = {
  personalInfo: {
    name: "Sadid Hasan",
    designation: "Full Stack Web Developer",
    address: "Bogura, Bangladesh",
    age: 21,
    hobbies: "Coding, Gaming, Movies",
  },
  educationInfo: [
    {
      degree: "Bachelor of Social Science (BSS)",
      institute: "Azizul Haque College, Bogura",
      department: "Sociology - 1st year",
      cgpa: "Pending",
    },
    {
      degree: "Higher Secondary School Certificate (HSC)",
      institute: "Rural Development Academy, Bogura",
      department: "Science",
      gpa: "5.00",
    },
  ],
  description:
    "A passionate full stack developer with a deep love for coding, gaming, and watching movies. Always eager to learn and take on new challenges.",
};

const About = () => {
  return (
    <div id="about" className="relative rounded-lg bg-slate-900 p-4">
      {/* Header */}
      <div className="relative flex text-center mb-5">
        <div className="flex pl-3.5 pt-3">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20"
          >
            <circle r="12" cy="12" cx="12"></circle>
          </svg>
        </div>
        <span className="absolute inset-x-0 top-2 text-xs text-slate-500">
          About.tsx
        </span>
      </div>

      {/* Personal Info */}
      <div className="space-y-1.5 px-5 pb-10">
        <p className="font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">h1</span>
          <span className="text-slate-500">
            {" "}
            <span>
              <span className="text-yellow-100 font-medium">className</span>
              <span className="text-pink-500 font-medium">=</span>
            <span className="text-green-200">"font-medium text-lg font-outfit text-slate-50"</span>{" "}
            </span>{" "}
            &gt;
          </span>
          <span>Personal Info:</span>
          <span className="text-slate-500">&lt;</span>
          <span className="text-pink-400">/h1</span>
          <span className="text-slate-500">&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Name&gt;</span>
          <span className="text-blue-400">{userData.personalInfo.name}</span>
          <span className="text-slate-500">&lt;/Name&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Designation&gt;</span>
          <span className="text-blue-400">
            {userData.personalInfo.designation}
          </span>
          <span className="text-slate-500">&lt;/Designation&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Address&gt;</span>
          <span className="text-blue-400">{userData.personalInfo.address}</span>
          <span className="text-slate-500">&lt;/Address&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Age&gt;</span>
          <span className="text-blue-400">{userData.personalInfo.age}</span>
          <span className="text-slate-500">&lt;/Age&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Hobbies&gt;</span>
          <span className="text-blue-400">{userData.personalInfo.hobbies}</span>
          <span className="text-slate-500">&lt;/Hobbies&gt;</span>
        </p>

        {/* Education Info */}
        {userData.educationInfo.map((edu, index) => (
          <div key={index}>
            <p className="font-mono text-xs tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;Education&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;Degree&gt;</span>
              <span className="text-blue-400">{edu.degree}</span>
              <span className="text-slate-500">&lt;/Degree&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;Institute&gt;</span>
              <span className="text-blue-400">{edu.institute}</span>
              <span className="text-slate-500">&lt;/Institute&gt;</span>
            </p>
            <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
              <span className="text-slate-500">&lt;Department&gt;</span>
              <span className="text-blue-400">{edu.department}</span>
              <span className="text-slate-500">&lt;/Department&gt;</span>
            </p>
            {edu.gpa ? (
              <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;GPA&gt;</span>
                <span className="text-blue-400">{edu.gpa}</span>
                <span className="text-slate-500">&lt;/GPA&gt;</span>
              </p>
            ) : (
              <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
                <span className="text-slate-500">&lt;CGPA&gt;</span>
                <span className="text-blue-400">{edu.cgpa}</span>
                <span className="text-slate-500">&lt;/CGPA&gt;</span>
              </p>
            )}
          </div>
        ))}

        {/* Description */}
        <p className="font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;Description&gt;</span>
        </p>
        <p className="ml-3 font-mono text-xs tracking-wide text-violet-400">
          {userData.description}
        </p>
        <p className="font-mono text-xs tracking-wide text-violet-400">
          <span className="text-slate-500">&lt;/Description&gt;</span>
        </p>
      </div>
    </div>
  );
};

// HeadingTag

export default About;
