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
            <PiBrainThin size={50} />
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
              Busco aumentar meus conhecimentos sobre as minhas tecnolgias de
              desenvolvimento, para sempre resolver os problemas da melhor
              maneira.
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
            <GiSkills size={50} />
            <CardTitle>Habilidades</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Ótimo com trabalho em equipe, sempre buscando interagir e tirar
              dúvidas. Proativo, buscando resolver problemas e adquirir mais
              conhecimento.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
