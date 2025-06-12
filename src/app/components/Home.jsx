import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex items-center justify-center bg-white text-black"
      >
        <div>
          <h1>Hi! I’m Ketan Sutar 👋 </h1>
          <h1>Full-stack web developer specialized in MERN & Next.js, based in India</h1>
        </div>
        <div>
          <p>
            I’m a full-stack JavaScript developer with expertise in React.js,
            Next.js, Node.js, and MongoDB. With hands-on experience building
            scalable web apps.
          </p>
        </div>
        <div>
          <Button>Connect with me -</Button>
          <Button variant="outline">my resume </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
