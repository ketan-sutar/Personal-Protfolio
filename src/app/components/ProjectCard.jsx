// components/ProjectCard.js
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#1f2a48] to-[#2c3e50] text-white p-8 rounded-3xl shadow-xl max-w-3xl mx-auto transform ">
      <h2 className="text-2xl font-bold mb-1 text-center">
        E-Commerce Platform
      </h2>
      <p className="text-sm text-gray-300 text-center mb-4">
        FULL STACK DEVELOPMENT
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {["React", "Node.js", "MongoDB", "Stripe"].map((tech) => (
          <span
            key={tech}
            className="bg-[#374151] text-sm px-3 py-1 rounded-full text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FaGithub />
          GitHub
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          <FiExternalLink />
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
