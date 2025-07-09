import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-foreground transition-colors duration-300"
      >
        <div className="max-w-2xl w-full flex flex-col gap-8 items-center px-6 py-12 rounded-2xl shadow-lg backdrop-blur-md">
          <div className="text-center w-full">
            <h1 className="text-8xl font-extrabold mb-2 tracking-tight text-gray-100 whitespace-nowrap">
              Ketan Sutar
            </h1>
            <h2 className="text-lg md:text-2xl font-medium mt-2 text-gray-200">
              Building Full-Stack Magic with MERN & Next.js
            </h2>
            <h2>based in Mumbai, India</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
