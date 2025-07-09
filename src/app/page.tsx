import Image from "next/image";
import Homesection from "@/app/components/Home";
import Worksection from "./components/Work";
import Skillsection from "./components/Skills";
import Aboutsection from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth bg-[#0B0620]">
      <Homesection />
      <Aboutsection />

      <Skillsection />
      <Worksection />
      <Contact />
      <Footer/>
    </div>
  );
}
