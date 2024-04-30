import { FaFigma, FaReact } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export const skills = [
  {
    ico: <IoLogoJavascript size={60} className="text-[#EFD81D]" />,
    skill: "Javascript",
  },
  {
    ico: <IoLogoHtml5 size={60} className="text-[#F75421]" />,
    skill: "HTML",
  },
  { ico: <IoLogoCss3 size={60} className="text-[#004AE1]" />, skill: "CSS" },
  {
    ico: <SiTypescript size={60} className="text-[#0076C6]" />,
    skill: "Typecript",
  },
  {
    ico: <IoLogoNodejs size={60} className="text-[#609941]" />,
    skill: "NodeJS",
  },
  { ico: <FaReact size={60} className="text-[#5ED3F3]" />, skill: "React" },
  { ico: <FaFigma size={60} className="text-[#9D56F7]" />, skill: "Figma" },
];
