import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill, RiBootstrapFill } from "react-icons/ri";
import {
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiThreedotjs,
  SiReacthookform,
} from "react-icons/si";
import { SiMui } from "react-icons/si";
const Skills = () => {
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill className="text-sky-400" />,
    },
    {
      name: "Bootstrap",
      icon: <RiBootstrapFill className="text-purple-600" />,
    },
    { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },
    { name: "Three.js", icon: <SiThreedotjs className="text-green-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white" />,
    },
    {
      name: "React Hook Forms",
      icon: <SiReacthookform className="text-pink-500" />,
    },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Material UI", icon: <SiMui className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-medium shadow-md hover:scale-105 transition-transform"
            >
              <span className="text-xl">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
