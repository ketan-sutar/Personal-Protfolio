import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    type: "Full Stack Development",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    type: "Frontend",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Chat App",
    type: "Full Stack",
    tech: ["React", "Firebase", "Socket.io"],
    github: "#",
    live: "#",
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-auto bg-grey-800 flex flex-col items-center justify-center px-4 py-24"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg tracking-tight">
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-green-400 rounded-full shadow-lg" />
      </div>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-10">
        {projects.map((project, idx) => (
          <div key={idx} className="min-h-[400px] h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <a
        href="#"
        className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white transition font-semibold shadow-lg"
      >
        See more
        <span className="ml-1 text-lg">➡️</span>
      </a>
    </section>
  );
};

export default Work;
