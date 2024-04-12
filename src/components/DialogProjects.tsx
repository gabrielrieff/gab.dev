import Image from "next/image";

import { DialogContent } from "./ui/dialog";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "./ui/carousel";
import { motion } from "framer-motion";

interface TecProps {
  tec: string;
  color: string;
}

interface ProjecPros {
  name: string;
  imageMain: string;
  imagesList: string[];
  Links: string[];
  descriptionBrief: string;
  descriptionMain: string;
  technologies: Array<TecProps>;
}

export function DialogProjects(item: ProjecPros) {
  return (
    <DialogContent className="max-w-[1200px] p-0 border-0">
      <div className="h-[800px] overflow-y-scroll scroll scroll-hidden">
        <div className="bg-[#35098A] pt-14 flex justify-center">
          <Image alt="name" src={item.imageMain} width={1100} height={900} />
        </div>
        <div className="p-3">
          <div className="flex flex-col gap-8">
            <h1 className="text-5xl font-semibold">{item.name}</h1>
            <span>{item.descriptionBrief}</span>

            <div className="flex gap-5">
              <Link
                href={item.Links[1]}
                target="_blank"
                className="bg-[#35098A] hover:bg-[#291a49] px-2 py-3 flex items-center justify-center gap-2 text-white rounded-md"
              >
                Acessar <AiOutlineGlobal size={20} />
              </Link>
              <Link
                href={item.Links[0]}
                target="_blank"
                className="bg-[#35098A] hover:bg-[#291a49] px-2 py-3 flex items-center justify-center gap-2 text-white rounded-md"
              >
                Repositorio <FaGithub size={20} />
              </Link>
            </div>
          </div>

          {/* <Carousel
              opts={{
                align: "start",
              }}
              className="flex max-w-[1200px] overflow-x-scroll scroll scroll-hidden mt-10"
            >
              <CarouselContent className="cursor-grab">
                {item.imagesList.map((img, index) => (
                  <CarouselItem key={index} className="max-w-[400px]">
                    <Image
                      key={index}
                      alt="a"
                      src={img}
                      width={400}
                      height={200}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
            </Carousel> */}

          <div className="mt-11 flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Descrição do projeto</h2>
            <div className="m-4">
              {item.descriptionMain.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold">Tecnologias utilizadas</h2>
            <div className="flex gap-2">
              {item.technologies.map((technique, index) => (
                <span
                  key={index}
                  className={`px-3 py-2 font-semibold bg-opacity-25 ${technique.color} border rounded-2xl`}
                >
                  {technique.tec}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-16 w-full bg-purple-500"></div>
      </div>
    </DialogContent>
  );
}
