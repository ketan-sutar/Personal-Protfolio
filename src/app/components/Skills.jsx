import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiFirebase, SiNextdotjs } from "react-icons/si";

const Skills = () => {
  const techStack = [
    { name: "HTML", icon: <FaHtml5 size={64} className="text-orange-500" /> },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssFill size={64} className="text-sky-400" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare size={64} className="text-yellow-400" />,
    },
    { name: "React", icon: <FaReact size={64} className="text-cyan-400" /> },
    {
      name: "Node.js",
      icon: <FaNodeJs size={64} className="text-green-600" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb size={64} className="text-green-500" />,
    },
    {
      name: "Python",
      icon: <FaPython size={64} className="text-yellow-300" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase size={64} className="text-yellow-500" />,
    },
    { name: "Next.js", icon: <SiNextdotjs size={64} className="text-white" /> },
  ];

  return (
    <section id="skills" className="min-h-screen bg-white py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">My Skills</h2>
        <p className="text-gray-600">Technologies I work with</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center items-center p-6 bg-neutral-900">
        {techStack.map((tech, index) => (
          <Card
            key={index}
            className="w-48 bg-black text-white text-center shadow-lg border-none"
          >
            <CardHeader className="flex flex-col items-center justify-center">
              {tech.icon}
              <CardTitle className="text-lg mt-2">{tech.name}</CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
