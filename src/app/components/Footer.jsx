"use client"; // if using app directory (Next 13+), else ignore this line

import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black w-full h-auto flex justify-center">
      <footer className="bg-yellow-600 text-white py-4 m-2 rounded-4xl w-full max-w-[calc(100%-1.5rem)] mx-3">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm">
          <p className="mb-2 sm:mb-0">
            &copy; {new Date().getFullYear()} All rights reserved. Built with
            ❤️ by Ketan Sutar
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-gray-300 transition"
          >
            <FaArrowUp />
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;