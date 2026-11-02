export type Language = "en" | "pt";

export const content = {
  en: {
    nav: ["About", "Experience", "Projects", "Skills", "Contact"],
    available: "Open to opportunities",
    scroll: "Scroll to explore",
    selected: "04 selected",
    eyebrow: "BACKEND DEVELOPER · COMPUTER SCIENCE STUDENT",
    intro: "I build reliable software,\nfrom cloud systems to compilers.",
    summary:
      "Backend developer based in Curitiba, Brazil. I work with Python, TypeScript and AWS to make production systems faster, more reliable and easier to operate.",
    cta: "Explore my work",
    contact: "Get in touch",
    location: "Curitiba, Brazil",
    aboutLabel: "A little about me",
    aboutTitle:
      "Curious about how things work — and how to make them work better.",
    aboutText:
      "I’m a Computer Science student at PUCPR and a backend developer at SmartLy. My work spans production APIs, cloud infrastructure, IoT platforms and event-driven systems. Outside work, I build projects that take me closer to the fundamentals: programming languages, distributed systems and the craft of software engineering.",
    education: "Computer Science · PUCPR · 100% scholarship",
    expLabel: "Where I’ve made an impact",
    expTitle: "Experience",
    current: "Backend Developer",
    intern: "Backend Developer Intern",
    present: "Present",
    currentBullets: [
      "Consolidating AWS Lambda functions into a FastAPI service and repository architecture, cutting deployment time from ~12 to 5 minutes and endpoint latency from 7–10 seconds to ~1.5 seconds.",
      "Redesigned AWS networking with a NAT Gateway and EC2 bastion, reducing monthly network costs by ~64% (US$90 to US$32).",
      "Restructuring the production IoT platform’s MySQL schema to improve domain modeling, data integrity and migration compatibility.",
    ],
    internBullets: [
      "Cut AWS costs by 20%, including a 75% reduction in CloudWatch spend by identifying unused IoT Core logs.",
      "Introduced Amazon SQS event-driven processing for peaks above 40,000 notifications per day.",
      "Created a FastAPI test suite with pytest and Testcontainers: 120 integration and 300 unit tests.",
      "Resolved Lambda edge cases using CloudWatch metrics, reducing average errors from 113 to 5 per five-minute interval.",
    ],
    projectsLabel: "Selected work",
    projectsTitle: "Projects built with purpose.",
    projectLink: "View repository",
    live: "Visit site",
    skillsLabel: "My toolkit",
    skillsTitle: "Tools I use to solve problems.",
    contactLabel: "Have a project in mind?",
    contactTitle: "Let’s build something thoughtful.",
    contactText:
      "I’m always happy to talk about backend engineering, cloud systems or a good technical challenge.",
    footer: "Designed and built by Lucas Narloch",
    top: "Back to top",
    projects: [
      {
        name: "AgentIAM",
        category: "AI AGENT SECURITY",
        description:
          "An open-source CLI that enforces capability-based policies for AI coding agents. Intercepts Git, GitHub CLI and AWS actions, evaluates them against policy, and records an audit trail.",
        tags: ["TypeScript", "Node.js", "Security", "CLI"],
        link: "https://github.com/LucasNarlochZ/agent-iam",
        visual: "agent",
      },
      {
        name: "Learning in Chaos",
        category: "EDUCATIONAL SIMULATION",
        description:
          "A browser-based incident simulator where players investigate ambiguous production symptoms, test hypotheses and learn system design through consequences and postmortems.",
        tags: ["TypeScript", "React", "Systems Design", "Open Source"],
        link: "https://github.com/LucasNarlochZ/learning-in-chaos",
        visual: "chaos",
      },
      {
        name: "PocScript",
        category: "COMPILER & LANGUAGE DESIGN",
        description:
          "A programming language and compiler in C, with a staged pipeline from lexical analysis and parsing through semantic checks and LLVM IR to native executables.",
        tags: ["C", "LLVM IR", "NASM", "Compiler Design"],
        link: "https://github.com/LucasNarlochZ/PocScript",
        visual: "code",
      },
      {
        name: "Sunlog.dev",
        category: "FULL-STACK PLATFORM",
        description:
          "A platform for developers to publish project devlogs and share technical decisions. Includes a REST API, asynchronous processing, 100+ automated tests and AWS deployment with observability.",
        tags: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
        link: "https://github.com/LucasNarlochZ/Sunlog.dev",
        live: "https://sunlog.dev",
        visual: "sun",
      },
    ],
  },
  pt: {
    nav: ["Sobre", "Experiência", "Projetos", "Habilidades", "Contato"],
    available: "Aberto a oportunidades",
    scroll: "Role para explorar",
    selected: "04 selecionados",
    eyebrow: "DESENVOLVEDOR BACKEND · ESTUDANTE DE CIÊNCIA DA COMPUTAÇÃO",
    intro: "Crio software confiável,\nde sistemas em nuvem a compiladores.",
    summary:
      "Desenvolvedor backend em Curitiba, Brasil. Trabalho com Python, TypeScript e AWS para tornar sistemas em produção mais rápidos, confiáveis e fáceis de operar.",
    cta: "Conheça meu trabalho",
    contact: "Entre em contato",
    location: "Curitiba, Brasil",
    aboutLabel: "Um pouco sobre mim",
    aboutTitle:
      "Curioso sobre como as coisas funcionam — e como fazê-las funcionar melhor.",
    aboutText:
      "Sou estudante de Ciência da Computação na PUCPR e desenvolvedor backend na SmartLy. Meu trabalho envolve APIs em produção, infraestrutura em nuvem, plataformas IoT e sistemas orientados a eventos. Fora do trabalho, crio projetos que me aproximam dos fundamentos: linguagens de programação, sistemas distribuídos e engenharia de software.",
    education: "Ciência da Computação · PUCPR · bolsa integral",
    expLabel: "Impacto que já gerei",
    expTitle: "Experiência",
    current: "Desenvolvedor Backend",
    intern: "Estagiário de Desenvolvimento Backend",
    present: "Atual",
    currentBullets: [
      "Consolidação de funções AWS Lambda em uma aplicação FastAPI organizada em serviços e repositórios, reduzindo o deploy de ~12 para 5 minutos e a latência de endpoints de 7–10 segundos para ~1,5 segundo.",
      "Redesenho da rede AWS com NAT Gateway e bastion EC2, reduzindo os custos mensais de rede em ~64% (US$90 para US$32).",
      "Reestruturação do esquema MySQL da plataforma IoT em produção para aprimorar o domínio, a integridade dos dados e a compatibilidade das migrações.",
    ],
    internBullets: [
      "Reduzi os custos AWS em 20%, incluindo 75% no CloudWatch, identificando logs IoT Core sem uso.",
      "Introduzi processamento assíncrono orientado a eventos com Amazon SQS para picos acima de 40 mil notificações por dia.",
      "Criei uma suíte de testes FastAPI com pytest e Testcontainers: 120 testes de integração e 300 unitários.",
      "Corrigi casos extremos em Lambdas com métricas do CloudWatch, reduzindo erros médios de 113 para 5 por intervalo de cinco minutos.",
    ],
    projectsLabel: "Trabalhos selecionados",
    projectsTitle: "Projetos feitos com propósito.",
    projectLink: "Ver repositório",
    live: "Visitar site",
    skillsLabel: "Meu conjunto de ferramentas",
    skillsTitle: "Tecnologias que uso para resolver problemas.",
    contactLabel: "Tem um projeto em mente?",
    contactTitle: "Vamos criar algo bem pensado.",
    contactText:
      "Estou sempre aberto a conversar sobre backend, sistemas em nuvem ou um bom desafio técnico.",
    footer: "Projetado e desenvolvido por Lucas Narloch",
    top: "Voltar ao início",
    projects: [
      {
        name: "AgentIAM",
        category: "SEGURANÇA DE AGENTES DE IA",
        description:
          "CLI open source que aplica políticas baseadas em capacidades para agentes de programação. Intercepta ações de Git, GitHub CLI e AWS, avalia as regras e registra uma trilha de auditoria.",
        tags: ["TypeScript", "Node.js", "Segurança", "CLI"],
        link: "https://github.com/LucasNarlochZ/agent-iam",
        visual: "agent",
      },
      {
        name: "Learning in Chaos",
        category: "SIMULAÇÃO EDUCACIONAL",
        description:
          "Simulador de incidentes no navegador: jogadores investigam sintomas ambíguos de produção, testam hipóteses e aprendem design de sistemas com as consequências e postmortems.",
        tags: ["TypeScript", "React", "Sistemas", "Open Source"],
        link: "https://github.com/LucasNarlochZ/learning-in-chaos",
        visual: "chaos",
      },
      {
        name: "PocScript",
        category: "COMPILADORES E LINGUAGENS",
        description:
          "Linguagem de programação e compilador em C, com pipeline que vai da análise léxica e sintática à análise semântica, LLVM IR e geração de executáveis nativos.",
        tags: ["C", "LLVM IR", "NASM", "Compiladores"],
        link: "https://github.com/LucasNarlochZ/PocScript",
        visual: "code",
      },
      {
        name: "Sunlog.dev",
        category: "PLATAFORMA FULL STACK",
        description:
          "Plataforma para desenvolvedores publicarem devlogs de projetos e compartilharem decisões técnicas. Inclui API REST, processamento assíncrono, mais de 100 testes e deploy AWS com observabilidade.",
        tags: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
        link: "https://github.com/LucasNarlochZ/Sunlog.dev",
        live: "https://sunlog.dev",
        visual: "sun",
      },
    ],
  },
};

export const skills = [
  "Python",
  "TypeScript",
  "Node.js",
  "FastAPI",
  "AWS",
  "Terraform",
  "PostgreSQL",
  "MySQL",
  "React",
  "Docker",
  "SQS",
  "pytest",
  "C",
  "Linux",
  "CI/CD",
  "Observability",
];
