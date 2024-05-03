import { motion } from "framer-motion";
import { GiSkills } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiBrainThin } from "react-icons/pi";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Softskill() {
  return (
    <section className="flex flex-row lg:flex-wrap justify-center gap-10 p-2 mt-14 max-w-[1220px]">
      <motion.div
        initial={{
          opacity: 0,
          x: -150,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -150 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <PiBrainThin size={50} className="text-[#5d5cdc]" />
            <CardTitle>UI/UX Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Sempre em buscar de desenvolver minhas habilidade de UI/UX para
              trazer a melhor experiencia para o usuario
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: +150,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: +150 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <LiaLaptopCodeSolid size={50} />
            <CardTitle>Developer</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Focado em aprender as melhores maneiras de solucionar problemas da
              forma mais simples possivel, com bastante foco em perfomasse
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          x: +150,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: +150 }}
        transition={{ duration: 0.6 }}
      >
        <Card>
          <CardHeader>
            <GiSkills size={50} className="text-[#5d5cdc]" />
            <CardTitle>Habilidades</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Busca constante para melhora das minhas habilidades como
              desenvolvedor, e como parte de uma equipe, melhoria de comunicação
              e criação de códigos simples
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
