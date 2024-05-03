import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-10 mt-4 max-w-[1220px]"
    >
      <Link href={"/"} className="font-semibold text-4xl sm:hidden">
        <span>gab</span>
        <span className="text-purple-500">.dev</span>
      </Link>

      <Menubar>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link
              href={"#sobre"}
              className="hover:text-purple-500 cursor-pointer transition-[0.3s]"
            >
              Sobre
            </Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link
              href={"#habilidades"}
              className="hover:text-purple-500 cursor-pointer transition-[0.3s]"
            >
              Habilidades
            </Link>
          </MenubarTrigger>
          <MenubarTrigger asChild>
            <Link
              href={"#projetos"}
              className="hover:text-purple-500 cursor-pointer transition-[0.3s]"
            >
              Projetos
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>

      <section className="flex gap-5">
        <Link href={"https://github.com/gabrielrieff"} target="_blank">
          <BsGithub
            size={30}
            className="hover:text-purple-500  cursor-pointer transition-[0.3s]"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gabriel-rieff/"}
          target="_blank"
        >
          <BsLinkedin
            size={30}
            className="hover:text-purple-500  cursor-pointer transition-[0.3s]"
          />
        </Link>
      </section>
    </motion.header>
  );
}
