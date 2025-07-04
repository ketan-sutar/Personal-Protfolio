import { Button } from "@/components/ui/button";
import React from "react";
import ContactForm from "./ContactForm";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaSkype,
  FaGoogle,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 py-16"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-yellow-400">
            Connect With Me
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
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

          {/* Instagram */}
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-pink-600 font-semibold shadow hover:scale-105 transition"
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl" />
              Instagram
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
              sutarketan35@gmail.com
            </a>
          </Button>
        </div>

        {/* Avatar */}
        <div className="mt-10 mb-5">
          <img
            src="/connectmeimg.png"
            alt="Avatar"
            className="w-40 h-auto rounded-xl"
          />
        </div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
