import { img } from "./imagens.js";

const m = (nome, foto, funcao) => ({ nome, foto: img(`membros/${foto}.jpg`), funcao });

export const MEMBROS = [
  { grupo: "Presidência", pessoas: [m("Leonardo Bonfá", "leonardo-bonfa", "Presidente"), m("Samuel Germiniani", "samuel-germiniani", "Vice-presidente")] },
  { grupo: "Assuntos Acadêmicos e Estudantis", pessoas: [m("Maria Eduarda Gomes", "maria-eduarda-gomes"), m("João Pedro Mamede", "joao-pedro-mamede"), m("Phillipi Poloni", "phillipi-poloni")] },
  { grupo: "Comunicação e Marketing", pessoas: [m("Daniel Matias", "daniel-matias"), m("Thiago Nakaba", "thiago-nakaba")] },
  { grupo: "Eventos e Relações Externas", pessoas: [m("Raíssa Souza", "raissa-souza"), m("Rafael Ozório", "rafael-ozorio")] },
  { grupo: "Produtos", pessoas: [m("Adriano Kenzo Camargo", "adriano-kenzo-camargo"), m("Isadora Celestino", "isadora-celestino")] },
  { grupo: "Projetos", pessoas: [m("Gabriel Felix", "gabriel-felix"), m("Rafael Suetsugu", "rafael-suetsugu"), m("Erik Amorim", "erik-amorim"), m("Kaue Samuel Oliveira", "kaue-samuel-oliveira"), m("Pedro Kenwa", "pedro-kenwa")] },
  { grupo: "Recursos Humanos", pessoas: [m("Maria Luiza Tavares", "maria-luiza-tavares"), m("Maria Clara Muharem", "maria-clara-muharem")] },
];

/* Áreas do CDI (seção "Faça parte do CDI"). */
export const AREAS = [
  { area: "Presidência", icone: "flag", texto: "Coordena o centro acadêmico, representa os alunos junto à direção e às coordenações de curso." },
  { area: "Assuntos Acadêmicos e Estudantis", icone: "school", texto: "Leva dúvidas e demandas dos alunos sobre disciplinas, grade e vida acadêmica." },
  { area: "Comunicação e Marketing", icone: "campaign", texto: "Cuida do Instagram, das artes e da divulgação dos eventos." },
  { area: "Eventos e Relações Externas", icone: "handshake", texto: "Organiza palestras, integrações e visitas técnicas e faz o contato com empresas." },
  { area: "Produtos", icone: "checkroom", texto: "Desenvolve os produtos do CDI, como camisetas e itens do centro acadêmico." },
  { area: "Projetos", icone: "code", texto: "Desenvolve projetos de tecnologia para a comunidade, como este site." },
  { area: "Recursos Humanos", icone: "diversity_3", texto: "Cuida do processo seletivo, da integração e do acompanhamento dos membros." },
];
