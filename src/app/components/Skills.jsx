import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
  FaCss3Alt,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiFirebase, SiNextdotjs, SiThreedotjs } from "react-icons/si";

const Skills = () => {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 size={64} className="text-orange-500 drop-shadow-glow-orange" /> },
    { name: "CSS", icon: <FaCss3Alt size={64} className="text-blue-500 drop-shadow-glow-blue" /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={64} className="text-sky-400 drop-shadow-glow-sky" /> },
    { name: "JavaScript", icon: <FaJsSquare size={64} className="text-yellow-400 drop-shadow-glow-yellow" /> },
    { name: "React", icon: <FaReact size={64} className="text-cyan-400 drop-shadow-glow-cyan" /> },
    { name: "Node.js", icon: <FaNodeJs size={64} className="text-green-600 drop-shadow-glow-green" /> },
    { name: "MongoDB", icon: <SiMongodb size={64} className="text-green-500 drop-shadow-glow-green" /> },
    { name: "Python", icon: <FaPython size={64} className="text-yellow-300 drop-shadow-glow-yellow" /> },
    { name: "Firebase", icon: <SiFirebase size={64} className="text-yellow-500 drop-shadow-glow-yellow" /> },
    { name: "Next.js", icon: <SiNextdotjs size={64} className="text-white drop-shadow-glow-white" /> },
    { name: "Three.js", icon: <SiThreedotjs size={64} className="text-green-400 drop-shadow-glow-green" /> },
  ];

  // Custom glow effect classes (add these to your global CSS or Tailwind config)
  // .drop-shadow-glow-orange { filter: drop-shadow(0 0 16px #fb923c); }
  // .drop-shadow-glow-blue { filter: drop-shadow(0 0 16px #3b82f6); }
  // .drop-shadow-glow-sky { filter: drop-shadow(0 0 16px #38bdf8); }
  // .drop-shadow-glow-yellow { filter: drop-shadow(0 0 16px #fde047); }
  // .drop-shadow-glow-cyan { filter: drop-shadow(0 0 16px #22d3ee); }
  // .drop-shadow-glow-green { filter: drop-shadow(0 0 16px #22c55e); }
  // .drop-shadow-glow-white { filter: drop-shadow(0 0 16px #fff); }

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight">
            <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
              My Skills
            </span>
          </h2>
          <p className="text-lg text-gray-300">
            Technologies I work with
          </p>
          <div className="mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-green-400 rounded-full shadow-lg" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center items-center">
          {techStack.map((tech, index) => (
            <Card
              key={index}
              className="relative w-36 h-40 bg-gradient-to-br from-neutral-800 via-neutral-900 to-black text-white text-center shadow-2xl border border-neutral-700 rounded-2xl transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-glow"
              style={{
                boxShadow:
                  "0 4px 24px 0 rgba(0,0,0,0.7), 0 0 24px 0 rgba(56,189,248,0.15)",
              }}
            >
              <CardHeader className="flex flex-col items-center justify-center h-full">
                <div className="flex items-center justify-center mb-2">
                  {tech.icon}
                </div>
                <CardTitle className="text-base font-semibold mt-2 tracking-wide text-gradient bg-gradient-to-r from-sky-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  {tech.name}
                </CardTitle>
              </CardHeader>
              <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent hover:border-sky-400 transition-all duration-300" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
