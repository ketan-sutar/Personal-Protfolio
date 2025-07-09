"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaGoogle } from "react-icons/fa";

const Contact = () => {
  const router = useRouter();

  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16"
      >
        {/* Main CTA Text */}
        <div className="text-center mb-12">
          <p className="text-2xl sm:text-3xl font-semibold text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Got an idea or want to start a new project? Let’s collaborate and
            make something great together.
          </p>
        </div>

        {/* Divider with Get in Touch Button */}
        <div className="relative w-full max-w-2xl flex items-center justify-center my-6">
          <hr className="w-full border-gray-600" />
          <Button
            className="absolute right-0 transform translate-y-1/2 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow hover:bg-yellow-600 transition"
            onClick={() => router.push("/contactform")}  // <-- navigate here
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Buttons */}
        <div
          id="contact-links"
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {/* LinkedIn */}
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-blue-700 font-semibold shadow hover:scale-105 transition"
          >
            <a
              href="https://www.linkedin.com/in/ketan-sutar-33b39223a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
              LinkedIn
            </a>
          </Button>

          {/* Gmail */}
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-red-600 font-semibold shadow hover:scale-105 transition"
          >
            <a href="mailto:sutarketan35@gmail.com">
              <FaGoogle className="text-xl" />
              Email Me
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
