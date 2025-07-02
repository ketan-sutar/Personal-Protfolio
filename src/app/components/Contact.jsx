import { Button } from "@/components/ui/button";
import React from "react";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-green-200"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Interested in collaborating?
          </h2>
          <h2 className="text-3xl font-bold mb-4">
            Connect With Me
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold border-primary text-primary hover:bg-primary/10 transition"
          >
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"
                />
              </svg>
              GitHub
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold border-blue-600 text-blue-600 hover:bg-blue-600/10 transition"
          >
            <a
              href="https://www.linkedin.com/in/ketan-sutar-33b39223a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.043 0 3.604 2.004 3.604 4.609v5.587z"
                />
              </svg>
              LinkedIn
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 px-6 py-3 text-lg font-semibold border-red-500 text-red-500 hover:bg-red-500/10 transition"
          >
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"
                />
              </svg>
              sutarketan35@gmail.com
            </a>
          </Button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          {/* Use next/image for proper image handling in Next.js */}
          {/* Place your image in the /public directory and use a relative path */}
          <img
            src="/connectmeimg.png"
            alt="Connect with me"
            className="w-64 h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>
      <ContactForm/>
    </div>
  );
};

export default Contact;
