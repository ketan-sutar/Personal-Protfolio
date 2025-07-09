import React from "react";
import { Button } from "@/components/ui/button"; // Adjust if needed

const About = () => {
  return (
    <div>
      <section
        id="about"
        className="min-h-auto flex items-center justify-center bg-white px-6 py-12"
      >
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* About Me */}
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-3xl text-black font-bold mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m a passionate Computer Science & Engineering student with hands-on experience in Full-Stack Development. I’ve built responsive web apps through projects and internships, and I’m eager to keep learning and growing in both frontend and backend development.
            </p>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/3 flex justify-center">
            <img
              src="/ketanimg.jpeg" // replace with your actual image path
              alt="Ketan Sutar"
              className="w-auto h-auto object-cover  shadow-lg"
            />
          </div>

          {/* Education + Buttons */}
          <div className="md:w-1/3 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-3">Education</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                <strong>B.E.</strong> – Computer Science & Engineering<br />
                [Your College], [City] <br />
                [Expected Year]
              </li>
              <li>
                <strong>Diploma</strong> – Computer Engineering<br />
                [Polytechnic Name], [City] <br />
                [Year]
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="px-6 py-2 text-lg">Contact Me</Button>
              <Button variant="outline" className="px-6 py-2 text-lg border-primary text-primary hover:bg-primary/10">
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
