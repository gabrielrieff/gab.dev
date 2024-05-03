import { motion } from "framer-motion";
import { Softskill } from "./Card";

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
          <div>
            <span className="text-2xl lg:text-xl md:text-lg sm:text-base font-bold">
              Olá, meu nome é Gabriel
            </span>
            <h1
              className="text-[90px] lg:text-[76px] md:text-[56px] sm:text-[36px] 
        font-bold bg-gradient-to-r from-purple-800 to-purple-400 bg-clip-text text-transparent"
            >
              desenvolvedor full stack.
            </h1>
            <span className="text-3xl lg:text-2xl md:text-xl sm:text-sm font-light">
              Trabalho com desenvolvimento de software web.
            </span>
          </div>

          <div className="p-3 flex flex-col items-center gap-5 mt-10 about">
            <h2 className="text-[#A530ED] font-semibold text-2xl">
              Um pouco sobre mim
            </h2>

            <p className="font-light w-full text-left">
              Profissional atuando no mercado há 2 anos na área de
              desenvolvimento de software, trabalhando em equipe e resolvendo
              problemas.
            </p>
            <p className="font-light w-full text-left">
              Desenvolvedor full stack, atualmente com conhecimento maior no
              desenvolvimento front-end utilizando html, css, typescript,
              reactjs, nextjs, e com menor experiência no back-end, utilizando
              nodejs, typescript e postgreSQL, porém, estudando para aperfeiçoar
              meus conhecimentos e adquirir maior experiência na área, buscando
              crescimento para me tornar um profissional completo.
            </p>
          </div>
        </section>
      </motion.div>
      <Softskill />
    </>
  );
}
