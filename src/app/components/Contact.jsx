import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-green-200"
      >
        <div>
          <p>*Html* react* next*taiwlindcss*nodejs*python*mongodb*</p>
          <h2 className="text-3xl font-bold mb-4">
            Interested in collaborating?
          </h2>

          <h3>Let's build something together.</h3>
          <h6>"Frontend Projects", "Full Stack Solutions", "React Apps"...</h6>
        </div>
        <div>
          <Button>Github</Button>
          <Button>Linkdein</Button>
        </div>
        <div>
          <Button>Contact Me</Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
