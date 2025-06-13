import React from "react";
import ProjectCard from "./ProjectCard";

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-16"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">My Projects</h2>
        <p className="text-gray-600 text-base">
          Here are some of the projects I’ve worked on recently.
        </p>
      </div>

      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard />
        {/* You can duplicate <ProjectCard /> or map through a project array here */}
      </div>
    </section>
  );
};

export default Work;
