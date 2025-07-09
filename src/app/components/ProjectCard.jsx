// components/ProjectCard.jsx
"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, type, tech, github, live }) => {
  return (
    <Card
      isFooterBlurred
      className="flex flex-col justify-between h-full w-full rounded-xl overflow-hidden shadow-lg bg-gray-800 text-white"
    >
      <CardHeader className="absolute z-10 top-2 left-4 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{type}</p>
        <h4 className="text-white/90 font-medium text-xl">{title}</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {tech.map((item) => (
            <span
              key={item}
              className="bg-white/20 text-xs px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </CardHeader>

      <Image
        removeWrapper
        alt="project image"
        className="z-0 w-full h-full object-cover"
        src="https://heroui.com/images/card-example-2.jpeg"
      />

      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 px-6 py-4">
        <div className="flex flex-col sm:flex-row w-full justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            >
              <FaGithub />
              GitHub
            </a>
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            >
              <FiExternalLink />
              Live Demo
            </a>
          </div>

          
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
