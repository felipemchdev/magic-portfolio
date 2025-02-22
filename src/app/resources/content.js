import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Felipe",
  lastName: "Machado",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desenvolvedor Back-End",
  avatar: "/images/avatar.jpg",
  location: "America/Sao_Paulo", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Português", "Inglês","Espanhol"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/felipemchdev",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/felipemchdev/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:felipe.mch.alt@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portifolio pra demonstrar minhas experiências como ${person.role}`,
  headline: <>Felipe, Desenvolvedor Back-End </>,
  subline: (
    <>
      Me chamo {person.firstName}, atualmente atuando e me desenvolvendo como dev <InlineCode>Back-End</InlineCode>, e aqui posto projetos pessoais. 
      <br /> Atualmente estou fazendo projetos com foco em API's.
    </>
  ),
};

const about = {
  label: "About",
  title: "Sobre mim",
  description: `Sou ${person.name}, ${person.role} nascido no ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/felipe-machado-agenda",
  },
  intro: {
    display: true,
    title: "Sobre Mim",
    description: (
      <>
        Sou uma pessoa apaixonada pela tecnologia, com essa paixão nascida em 2017, devido a meu pai me dar 
        um Arduino UNO pra desenvolver projetos como robôs e barcos de controle remoto.
        Desde então, me apaixonei pela programação e tornei isso como um objetivo de vida, ser um progamador.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experiência Profissional",
    experiences: [
      {
        company: "Serasa Experian",
        timeframe: "2024 - Atualmente",
        role: "Aprendiz em Engenharia de Software/Dados",
        achievements: [
          <>
            Contribui com reparos de códigos, implementação de otimizações e redução de custo ,
            além de implementação de novos modelos de dados.
          </>,
          <>
            Uso de Python para o desenvolvimento -
            Cultura DevOps -
            Git CI/CD -
            AWS.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
          
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Educação",
    institutions: [
      {
        name: "Centro Universitário Central Paulista",
        timeframe: "2024 - Atualmente",
        description: <>Bacharelado em Engenharia da Computação.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "- Python",
        description: <>Habilidade de desenvolvimento de aplicativos e API's.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- MySQL",
        description: <>Bancos de dados relacionais.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Flutter",
        description: <>Construção de Aplicativos Mobile.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Express API",
        description: <>Construção de APIs com Express.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Node.js",
        description: <>Construção de APIs com Node.js.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- React",
        description: <>Construção de Aplicativos Web com React.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- TypeScript",
        description: <>Construção de Aplicativos Web com TypeScript.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Next.js",
        description: <>Construção de Aplicativos Web com React.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Git CI/CD",
        description: <>Versionamento CI/CD.</>,
        // optional: leave the array empty if you don't want to display images
      },
      {
        title: "- Agile Methods",
        description: <>Metodologia Scrum, Kanban.</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };

