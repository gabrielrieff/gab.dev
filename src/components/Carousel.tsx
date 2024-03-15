import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

export function CarouselProject() {
  return (
    <section className="my-14 flex flex-col items-center gap-16 sm:p-2">
      <h2 className="text-5xl sm:text-3xl p-2 font-bold bg-gradient-to-r from-[#A530ED] to-[#E6C8F1] bg-clip-text text-transparent">
        Mais recentes projetos
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-[540px] h-[370px] xl:w-[490px] lg:w-[400px] lg:h-[320px] sm:w-[380px] sm:h-[250px]
             bg-[#190C26] border-[1px] border-[#2f1747] text-white group 
            rounded-xl flex items-end justify-center relative"
          >
            <Image
              alt=""
              src={item.image}
              width={504}
              height={422}
              className="rounded-t-xl xl:w-[460px] lg:w-[380px] sm:w-[360px]"
            />
            <div
              className="hidden group-hover:flex justify-between p-3 
              items-center absolute bg-gradient-to-r bottom-3
            from-[#B941E4] to-[#7C11BD] w-[90%] h-20 rounded-2xl"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">Image-schema</span>
                <span className="text-zinc-300 font-light">
                  Uma biblioteca de imagens
                </span>
              </div>
              <Link href={""}>
                <GoArrowUpRight
                  size={50}
                  className="rotate-180 hover:rotate-0 hover:text-zinc-400 transition-[1s]"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Image-schema",
    image: "/image-schema.png",
    description: "Projeto criado para ser algo parecido com o pintrest",
    technologies: ["React", "Firebase", "NextJS"],
  },
  {
    name: "Image-schema2",
    image: "/image-schema.png",
    description: "Projeto criado para ser algo parecido com o pintrest2",
    technologies: ["React", "Firebase", "NextJS"],
  },
];
