import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Project } from "./Project";

export function CarouselProject() {
  return (
    <section className="my-14 max-w-[1200px] flex flex-col items-center gap-16 sm:p-2">
      <h2 className="text-5xl sm:text-3xl p-2 font-bold bg-gradient-to-r from-[#A530ED] to-[#E6C8F1] bg-clip-text text-transparent">
        Mais recentes projetos
      </h2>

      <div className="flex flex-wrap justify-center gap-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className="w-[540px] h-[370px] xl:w-[490px] lg:w-[400px] lg:h-[320px] sm:w-[380px] sm:h-[250px]
             bg-[#190C26] border-[1px] border-[#2f1747] text-white group 
            rounded-xl flex items-end justify-center relative"
          >
            <Image
              alt=""
              src={item.imageMain}
              width={504}
              height={422}
              className="rounded-t-xl xl:w-[460px] lg:w-[380px] sm:w-[360px]"
            />
            <div
              className="hidden group-hover:flex justify-between p-3 
              items-center absolute bg-gradient-to-r bottom-3
            from-[#B941E4] to-[#7C11BD] w-[90%] h-20 rounded-2xl"
            >
              <div className="flex flex-col gap-2 w-2/3">
                <span className="text-xl font-semibold">{item.name}</span>
                <span className="text-zinc-300 font-light text truncate">
                  {item.descriptionBrief}
                </span>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <button>
                    <GoArrowUpRight
                      size={50}
                      className="rotate-180 hover:rotate-0 hover:text-zinc-400 transition-[1s]"
                    />
                  </button>
                </DialogTrigger>
                <Project
                  descriptionBrief={item.descriptionBrief}
                  descriptionMain={item.descriptionMain}
                  imageMain={item.imageMain}
                  Links={item.Links!}
                  imagesList={item.imagesList}
                  name={item.name}
                  technologies={item.technologies}
                />
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Image-schema",
    imageMain: "/image-schema.png",
    imagesList: [
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
    ],
    Links: [
      "https://github.com/gabrielrieff/imagens-schema",
      "https://imagens-schema.vercel.app/",
    ],

    descriptionBrief: `Projeto criado para ser algo parecido com o pintrest`,
    descriptionMain: `
    O image-schema é um projeto que de certa forma é uma abstração do pintrest, criei ele com o objetivo desenvolver 
    minhas habilidades como desenvolvedor, mas de uma maneira bem mais enxuta e simples.

    Vou citar algumas funcionalidades mais básicas, como, por exemplo, criar usuários, fazer login, salvar imagens 
    com título de descrição e listar as imagens salvas de forma aberta, dentre outras de uso mais interno do projeto.

    As tecnologias usadas foram ReactJS e Firebase, mas foi usado outras bibliotecas para auxiliar no desenvolvimento, 
    como, por exemplo, React hook forms, tailwind, entre outras.

    O projeto já está disponível para uso do público, mas está restrito a criação de usuários, pois ainda não existe uma 
    validação das imagens que o usuário tenta salvar, e ainda existem alguns pontos de melhoria e novas funcionalidades a desenvolver.`,
    technologies: ["React", "Firebase", "NextJS"],
  },
  {
    name: "Image-schema",
    imageMain: "/image-schema.png",
    imagesList: [
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
    ],
    Links: [
      "https://github.com/gabrielrieff/imagens-schema",
      "https://imagens-schema.vercel.app/",
    ],

    descriptionBrief: `Projeto criado para ser algo parecido com o pintrest`,
    descriptionMain: `
    O image-schema é um projeto que de certa forma é uma abstração do pintrest, criei ele com o objetivo desenvolver 
    minhas habilidades como desenvolvedor, mas de uma maneira bem mais enxuta e simples.

    Vou citar algumas funcionalidades mais básicas, como, por exemplo, criar usuários, fazer login, salvar imagens 
    com título de descrição e listar as imagens salvas de forma aberta, dentre outras de uso mais interno do projeto.

    As tecnologias usadas foram ReactJS e Firebase, mas foi usado outras bibliotecas para auxiliar no desenvolvimento, 
    como, por exemplo, React hook forms, tailwind, entre outras.

    O projeto já está disponível para uso do público, mas está restrito a criação de usuários, pois ainda não existe uma 
    validação das imagens que o usuário tenta salvar, e ainda existem alguns pontos de melhoria e novas funcionalidades a desenvolver.`,
    technologies: ["React", "Firebase", "NextJS"],
  },
  {
    name: "Image-schema",
    imageMain: "/image-schema.png",
    imagesList: [
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
      "/image-schema.png",
    ],
    Links: [
      "https://github.com/gabrielrieff/imagens-schema",
      "https://imagens-schema.vercel.app/",
    ],

    descriptionBrief: `Projeto criado para ser algo parecido com o pintrest`,
    descriptionMain: `
    O image-schema é um projeto que de certa forma é uma abstração do pintrest, criei ele com o objetivo desenvolver 
    minhas habilidades como desenvolvedor, mas de uma maneira bem mais enxuta e simples.

    Vou citar algumas funcionalidades mais básicas, como, por exemplo, criar usuários, fazer login, salvar imagens 
    com título de descrição e listar as imagens salvas de forma aberta, dentre outras de uso mais interno do projeto.

    As tecnologias usadas foram ReactJS e Firebase, mas foi usado outras bibliotecas para auxiliar no desenvolvimento, 
    como, por exemplo, React hook forms, tailwind, entre outras.

    O projeto já está disponível para uso do público, mas está restrito a criação de usuários, pois ainda não existe uma 
    validação das imagens que o usuário tenta salvar, e ainda existem alguns pontos de melhoria e novas funcionalidades a desenvolver.`,
    technologies: ["React", "Firebase", "NextJS"],
  },
];
