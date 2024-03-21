import { FaFigma, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
} from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

export function Skill() {
  const listSkill = [
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
  return (
    <section className="flex items-center justify-center flex-row flex-wrap gap-10 mt-11 max-w-[1220px] p-2">
      {listSkill.map((item, index) => (
        <div
          key={index}
          className="text-white flex flex-col items-center gap-2"
        >
          <div className="bg-[#140C1C] hover:bg-[#2a1454] hover:border-[#8750f7] hover:border hover:p-[15px] p-4 rounded-lg">
            {item.ico}
          </div>
          <span className="font-semibold">{item.skill}</span>
        </div>
      ))}
    </section>
  );
}
