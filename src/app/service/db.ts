import { DataProjects } from "./type";

export const data: DataProjects[] = [
  {
    name: "Image-schema",
    imageMain: "./image-schema.png",
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

  {
    name: "dev-crud",
    imageMain: "./dev-crud.png",
    Links: [
      "https://github.com/gabrielrieff/dev-crud-front",
      "https://dev-crud.vercel.app/",
    ],

    descriptionBrief:
      "Tem como objeto ajudar a organizar as tarefas do seu dia, de forma simples, rapida e objetiva.",
    descriptionMain: `
    Uma lista de tarefas diárias bem completa, com usuário e autenticação. É algo aparentemente simples, mas consegui desenvolver 
    bastante minhas habilidades, principalmente com desenvolvimento back-end que venho estudando bastante. Está é uma ferramenta 
    que estou usando diariamente, esta me ajudando muito a organizar minhas tarefas do dia e não esquecer o que devo fazer.

    Agora, falando sobre as tecnologias utilizadas, no back-end foram node.js, express, typescript e PostgreSQL, agora no 
    front-end react.js, next.js e tailwind.`,
    technologies: [
      { tec: "React", color: "bg-react" },
      { tec: "Nextjs", color: "bg-next" },
      { tec: "tailwind", color: "bg-tailwind" },
      { tec: "Nodejs", color: "bg-node" },
      { tec: "Typescript", color: "bg-ts" },
      { tec: "PostgreSQL", color: "bg-postgre" },
    ],
  },
];
