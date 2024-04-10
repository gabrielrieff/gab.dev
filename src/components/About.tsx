import { Card } from "./Card";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6 }}
      >
        <section
          className="flex items-center flex-col gap-10 mt-44 md:mt-32 max-w-[1220px] p-2"
          id="sobre"
        >
          <div className="text-white">
            <span className="text-2xl lg:text-xl md:text-lg sm:text-base font-bold">
              Olá, meu nome é Gabriel
            </span>
            <h1
              className="text-[96px] lg:text-[76px] md:text-[56px] sm:text-[36px] 
        font-bold bg-gradient-to-r from-[#A530ED] to-[#E6C8F1] bg-clip-text text-transparent"
            >
              Sou desenvolvedor.
            </h1>
            <span className="text-3xl lg:text-2xl md:text-xl sm:text-sm font-light">
              Trabalho com desenvolvimento de software web full stack.
            </span>
          </div>

          <div className="p-3 flex flex-col items-center gap-5 mt-10 about">
            <h2 className="text-[#A530ED] font-semibold text-2xl">
              Um pouco sobre mim
            </h2>

            <p className="font-light text-white">
              Sou um desenvolvedor que ama resolver problemas e buscar por
              melhorias por meio de software. Experiente em desenvolvimento web,
              com foco principal em front-end, mas tenho experiencia com
              back-end. Uma pessoa que trabalha muito bem em grupo, consistente
              e sempre aberto a mudanças. Buscando por uma nova oportunidade de
              agregar valor e aprender muito.
            </p>
          </div>
        </section>
      </motion.div>
      <Card />
    </>
  );
}
