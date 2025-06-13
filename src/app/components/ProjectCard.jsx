import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectCard = () => {
  return (
    <Card className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-xl">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/3441c752-82eb-4e49-835e-87ae8fa40818.png')",
        }}
      ></div>

      {/* Overlay with blur and color */}
      <div className="relative z-10 bg-black/60 backdrop-blur-lg w-full h-full p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-white font-bold">
            E-Commerce Platform
          </CardTitle>
          <CardDescription className="uppercase text-sm tracking-widest text-gray-300">
            Full Stack Development
          </CardDescription>
          <CardAction className="mt-4 flex flex-wrap gap-3 justify-center">
            {["React", "Node.js", "MongoDB", "Stripe"].map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full"
              >
                {tech}
              </span>
            ))}
          </CardAction>
        </CardHeader>

        <CardFooter className="flex flex-col gap-4 mt-6">
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="View GitHub Repository"
          >
            <i className="fa-brands fa-github"></i> GitHub
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="View Live Demo"
          >
            <i className="fa-solid fa-up-right-from-square"></i> Live Demo
          </a>
        </CardFooter>
      </div>

      {/* Dark overlay under content */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
    </Card>
  );
};

export default ProjectCard;
