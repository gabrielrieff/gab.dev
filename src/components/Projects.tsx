import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { DialogProjects } from "./DialogProjects";
import { motion } from "framer-motion";
import { data } from "~/app/service/db";

export function Projects() {
  return (
    <section
      className="my-14 max-w-[1200px] flex flex-col items-center gap-16 sm:p-2"
      id="projetos"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-5xl sm:text-3xl p-2 font-bold bg-gradient-to-r from-purple-800 to-purple-400 bg-clip-text text-transparent">
          Mais recentes projetos
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-5">
        {data.map((item, index) => (
          <motion.div
            initial={
              index / 2 === 0
                ? { x: -200, opacity: 0 }
                : { x: +200, opacity: 0 }
            }
            whileInView={{ x: 0, opacity: 1 }}
            exit={
              index / 2 === 0
                ? { x: -200, opacity: 0 }
                : { x: +200, opacity: 0 }
            }
            whileHover={{ scale: [null, 1.1, 1.05] }}
            transition={{ duration: 0.5 }}
            key={index}
            className="w-[540px] h-[370px] xl:w-[490px] lg:w-[400px] lg:h-[320px] sm:w-[380px] sm:h-[250px]
             bg-purple-950 border-[1px] text-white group 
            rounded-xl flex items-end justify-center relative"
          >
            <Image
              alt=""
              src={
                item.imageMain.startsWith("./")
                  ? `/${item.imageMain.slice(2)}`
                  : item.imageMain
              }
              width={504}
              height={422}
              className="rounded-t-xl xl:w-[460px] lg:w-[380px] sm:w-[360px]"
            />
            <div
              className="hidden group-hover:flex justify-between p-3 
              items-center absolute bg-gradient-to-r bottom-3
              from-purple-800 to-purple-400 w-[90%] h-20 rounded-2xl"
            >
              <div className="flex flex-col gap-2 w-2/3">
                <span className="text-xl font-semibold">{item.name}</span>
                <span className="text-zinc-300 font-light text truncate">
                  {item.descriptionBrief}
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    initial={{ rotate: 180 }}
                    whileHover={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GoArrowUpRight
                      size={50}
                      className="hover:text-black transition-[1s]"
                    />
                  </motion.button>
                </DialogTrigger>
                <DialogProjects
                  descriptionBrief={item.descriptionBrief}
                  descriptionMain={item.descriptionMain}
                  imageMain={item.imageMain}
                  Links={item.Links!}
                  name={item.name}
                  technologies={item.technologies}
                />
              </Dialog>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
