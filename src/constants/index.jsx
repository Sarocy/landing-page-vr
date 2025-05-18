import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Ferramentas", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Planos", href: "#" },
  { label: "Depoimentos", href: "#" },
];

export const testimonials = [
  {
    user: "João Dantas",
    company: "Stellar Solutions",
    image: user1,
    text: "Estou extremamente satisfeito com os serviços prestados. A equipe foi ágil, profissional e entregou resultados além das minhas expectativas.",
  },
  {
    user: "Joana Andrade",
    company: "Horizonte Azul Tech",
    image: user2,
    text: "Não poderia estar mais feliz com o resultado do nosso projeto. A criatividade e a capacidade de resolução de problemas da equipe foram fundamentais para dar vida à nossa visão.",
  },
  {
    user: "David Guimarães",
    company: "Quantum Inovações",
    image: user3,
    text: "Trabalhar com esta empresa foi um prazer. Sua atenção aos detalhes e compromisso com a excelência são louváveis. Eu os recomendo fortemente a qualquer pessoa que procure um serviço de primeira qualidade.",
  },
  {
    user: "Ruan Victor",
    company: "Fusion Dynamics",
    image: user4,
    text: "Trabalhar com a equipe da XYZ Company foi um divisor de águas para o nosso projeto. Sua atenção aos detalhes e soluções inovadoras nos ajudaram a atingir nossos objetivos mais rápido do que pensávamos ser possível. Somos gratos por sua expertise e profissionalismo!",
  },
  {
    user: "Miguel Viana",
    company: "Visionary SA",
    image: user5,
    text: "Estou impressionado com o nível de profissionalismo e dedicação demonstrado pela equipe. Eles conseguiram superar nossas expectativas e entregar resultados excepcionais.",
  },
  {
    user: "Emilia Medeiros",
    company: "Synergy Systems",
    image: user6,
    text: "A equipe se esforçou ao máximo para garantir o sucesso do nosso projeto. Sua expertise e dedicação são incomparáveis. Espero trabalhar com eles novamente no futuro.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Arrastar e soltar elementos",
    description:
      "Crie e organize facilmente seus ambientes de RV com uma interface de arrastar e soltar fácil de usar.",
  },
  {
    icon: <Fingerprint />,
    text: "Compatibilidade multiplataforma",
    description:
      "Crie aplicativos de RV que funcionem perfeitamente em diversas plataformas, incluindo dispositivos móveis, desktops e headsets de RV.",
      
  },
  {
    icon: <ShieldHalf />,
    text: "Modelos integrados",
    description:
      "Inicie seus projetos de RV com uma variedade de modelos integrados para diferentes tipos de aplicativos e ambientes.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pré-visualização em tempo real",
    description:
      "Visualize seu aplicativo de RV em tempo real enquanto faz alterações, permitindo iterações e ajustes rápidos.",
  },
  {
    icon: <PlugZap />,
    text: "Ferramentas de colaboração",
    description:
      "Trabalhe junto com sua equipe em tempo real em projetos de realidade virtual, permitindo uma colaboração fluida e o compartilhamento de ideias.",
  },
  {
    icon: <GlobeLock />,
    text: "Dashboard analítico",
    description:
      "Obtenha insights valiosos sobre interações e comportamento do usuário em seus aplicativos de RV com um painel de análise integrado.",
  },
];

export const checklistItems = [
  {
    title: "Merge facilitado",
    description:
      "Acompanhe o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Revise código sem se preocupar",
    description:
      "Acompanhe o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Assistente de IA para reduzir tempo",
    description:
      "Acompanhe o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
  {
    title: "Compartilhe trabalho em minutos",
    description:
      "Acompanhe o desempenho dos seus aplicativos de RV e obtenha insights sobre o comportamento do usuário.",
  },
];

export const pricingOptions = [
  {
    title: "Grátis",
    price: "R$0",
    features: [
      "Compartilhamento privado de quadros",
      "5 Gb de armazenamento",
      "Análise web",
      "Modo privado",

    ],
  },
  {
    title: "Pro",
    price: "R$10",
    features: [
      "Compartilhamento privado de quadros",
      "10 Gb de armazenamento",
      "Análise web (Avançado)",
      "Modo privado",
    ],
  },
  {
    title: "Empresarial",
    price: "R$200",
    features: [
      "Compartilhamento privado de quadros",
      "Armazenamento ilimitado",
      "Rede de alto desempenho",
      "Modo privado",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Primeiros Passos" },
  { href: "#", text: "Documentação" },
  { href: "#", text: "Tutoriais" },
  { href: "#", text: "Referência da API" },
  { href: "#", text: "Fóruns da Comunidade" },
];

export const platformLinks = [
  { href: "#", text: "Recursos" },
  { href: "#", text: "Dispositivos Compatíveis" },
  { href: "#", text: "Requisitos do Sistema" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Notas de Versão" },
];

export const communityLinks = [
  { href: "#", text: "Eventos" },
  { href: "#", text: "Encontros" },
  { href: "#", text: "Conferências" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Vagas" },
];
