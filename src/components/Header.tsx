import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Header() {
  return (
    <header className="flex items-center gap-10 mt-4 max-w-[1220px]">
      <Link href={"/"} className="font-semibold text-4xl">
        <span className="text-white">Gab</span>
        <span className="text-[#A530ED]">.dev</span>
      </Link>

      <section className="text-white font-medium rounded-3xl px-4 py-2 w-[500px] md:w-[300px] flex justify-evenly gap-6 sm:hidden">
        <Link href={"#sobre"} className="hover:text-purple-400">
          Sobre
        </Link>
        <Link href={"#habilidades"} className="hover:text-purple-400">
          Habilidades
        </Link>
        <Link href={"#projetos"} className="hover:text-purple-400">
          Projetos
        </Link>
      </section>

      <section className="flex gap-5">
        <Link href={"https://github.com/gabrielrieff"} target="_blank">
          <BsGithub size={30} className="text-white hover:text-purple-400" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gabriel-rieff/"}
          target="_blank"
        >
          <BsLinkedin size={30} className="text-white hover:text-purple-400" />
        </Link>
      </section>
    </header>
  );
}
