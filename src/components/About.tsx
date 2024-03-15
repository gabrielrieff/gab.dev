import { Card } from "./Card";

export function About() {
  return (
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
          Amo desenvolver software, porque é uma ótima maneira de resolver
          problemas e agregar valor na vida das pessoas, uma maneira de fazer a
          diferença na vida de alguém. Trabalho como desenvolvedor a
          proximamente 2 anos, comecei como desenvolvedor front-end, mas
          desenvolvi habilidades com back-end e banco de dados. 
        </p>
      </div>

      <Card />
    </section>
  );
}
