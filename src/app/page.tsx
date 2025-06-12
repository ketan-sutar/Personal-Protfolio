import Image from "next/image";
import Homesection from "@/app/components/Home";
import Worksection from "./components/Work";
import Skillsection from "./components/Skills";
import Aboutsection from "./components/About";
import Contactsection from "./components/Contact";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Homesection />
      <Aboutsection />
      <Worksection />
      <Skillsection />

      <Contactsection />
    </div>
  );
}
