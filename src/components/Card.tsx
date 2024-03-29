import { GiSkills } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiBrainThin } from "react-icons/pi";

export function Card() {
  return (
    <section className="flex justify-center flex-wrap gap-10 p-2 mt-6 translate-x-[700px] opacity-0 cards">
      <div className="bg-[#140C1C] text-white w-[300px] p-3 rounded-md flex flex-col items-center gap-5">
        <div className="h-16 w-16 flex items-center justify-center">
          <PiBrainThin size={50} className="text-[#5d5cdc]" />
        </div>

        <h2 className="font-semibold text-lg">UI/UX Design</h2>

        <p className="font-light text-[12px] text-center">
          Sempre em buscar de desenvolver minhas habilidade de UI/UX para trazer
          a melhor experiencia para o usuario
        </p>
      </div>

      <div className="bg-[#140C1C] text-white w-[300px] p-3 rounded-md flex flex-col items-center gap-5">
        <div className="h-16 w-16 relative flex items-center justify-center">
          <LiaLaptopCodeSolid size={50} />
        </div>

        <h2 className="font-semibold text-lg">Developer</h2>

        <p className="font-light text-[12px] text-center">
          Focado em aprender as melhores maneiras de solucionar problemas da
          forma mais simples possivel, com bastante foco em perfomasse
        </p>
      </div>

      <div className="bg-[#140C1C] text-white w-[300px] p-3 rounded-md flex flex-col items-center gap-5">
        <div className="h-16 w-16 relative flex items-center justify-center">
          <GiSkills size={50} className="text-[#5d5cdc]" />
        </div>

        <h2 className="font-semibold text-lg">Habilidades</h2>

        <p className="font-light text-[12px] text-center">
          Busca constante para melhora das minhas habilidades como
          desenvolvedor, e como parte de uma equipe, melhoria de comunicação e
          criação de códigos simples
        </p>
      </div>
    </section>
  );
}
