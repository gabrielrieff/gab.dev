import { motion } from "framer-motion";
import { skills } from "~/app/service/db-skill";

export function Skill() {
  return (
    <section
      className="flex items-center justify-center flex-row flex-wrap gap-10 mt-11 max-w-[1220px] p-2"
      id="habilidades"
    >
      {skills.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
          key={index}
          className="text-white"
        >
          <motion.div
            whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-2"
          >
            <div className="bg-[#140C1C] hover:bg-[#2a1454] border-[#8750f7] border p-4 rounded-lg transition-[0.3]">
              {item.ico}
            </div>
            <span className="font-semibold">{item.skill}</span>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
