import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-[#0B0620] text-foreground transition-colors duration-300"
      >
        <div className="max-w-2xl w-full flex flex-col gap-8 items-center px-6 py-12 rounded-2xl shadow-lg bg-black/60 backdrop-blur-md">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-gray-100">
              Hi! I’m <span className="text-primary">Ketan Sutar</span> <span role="img" aria-label="waving hand">👋</span>
            </h1>
            <h2 className="text-lg md:text-2xl font-medium mt-2 text-gray-200">
              Full-stack web developer specialized in <span className="text-primary font-semibold">MERN</span> &amp; <span className="text-primary font-semibold">Next.js</span>, based in India
            </h2>
          </div>
          <div className="text-center">
            <p className="text-base md:text-lg text-gray-300">
              I’m a full-stack JavaScript developer with expertise in <span className="font-semibold text-primary">React.js</span>, <span className="font-semibold text-primary">Next.js</span>, <span className="font-semibold text-primary">Node.js</span>, and <span className="font-semibold text-primary">MongoDB</span>. <br />
              With hands-on experience building scalable web apps.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button size="lg" className="px-8 py-2 text-lg font-semibold shadow-md text-gray-100">
              Connect with me
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-2 text-lg font-semibold border-primary text-primary hover:bg-primary/10 shadow-md"
            >
              My Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
