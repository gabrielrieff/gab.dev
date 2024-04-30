import { DataProjects } from "./type";

export type typeProjects = DataProjects[];

export const data: typeProjects = [
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

    descriptionBrief: "Projeto criado para ser algo parecido com o pintrest",
    descriptionMain: `
        O image-schema é um projeto que de certa forma é uma abstração do pintrest, criei ele com o objetivo desenvolver 
        minhas habilidades como desenvolvedor, mas de uma maneira bem mais enxuta e simples.
    
        Vou citar algumas funcionalidades mais básicas, como, por exemplo, criar usuários, fazer login, salvar imagens 
        com título de descrição e listar as imagens salvas de forma aberta, dentre outras de uso mais interno do projeto.
    
        As tecnologias usadas foram ReactJS e Firebase, mas foi usado outras bibliotecas para auxiliar no desenvolvimento, 
        como, por exemplo, React hook forms, tailwind, entre outras.
    
        O projeto já está disponível para uso do público, mas está restrito a criação de usuários, pois ainda não existe uma 
        validação das imagens que o usuário tenta salvar, e ainda existem alguns pontos de melhoria e novas funcionalidades a desenvolver.`,
    technologies: [
      { tec: "React", color: "bg-react" },
      { tec: "Firebase", color: "bg-firebase" },
      { tec: "NextJS", color: "bg-next" },
    ],
  },
];
