import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export function Header() {
  return (
    <header className="flex items-center gap-10 mt-4 max-w-[1220px]">
      <Link href={"/"} className="font-semibold text-4xl">
        <span className="">Gab</span>
        <span className="text-[#0085FF]">.dev</span>
      </Link>

      <section className="bg-zinc-100 rounded-3xl px-4 py-2 w-[500px] md:w-[300px] flex justify-evenly gap-6 sm:hidden">
        <Link className="hover:text-[#0085FF] font-medium" href={"#sobre"}>
          Sobre
        </Link>
        <Link className="hover:text-[#0085FF] font-medium" href={"#projetos"}>
          Projetos
        </Link>
        <Link
          className="hover:text-[#0085FF] font-medium"
          href={"#habilidades"}
        >
          Habilidades
        </Link>
      </section>

      <section className="flex gap-5">
        <Link href={"https://github.com/gabrielrieff"} target="_blank">
          <BsGithub size={30} className="hover:text-zinc-700" />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/gabriel-rieff/"}
          target="_blank"
        >
          <BsLinkedin size={30} className="hover:text-zinc-700" />
        </Link>
      </section>
    </header>
  );
}
