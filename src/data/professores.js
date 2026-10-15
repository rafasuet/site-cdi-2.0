import { img } from "./imagens.js";

export const INTRO_PROF = "Aqui você vai conhecer os professores da Faculdade de Tecnologia da Unicamp. Temos os melhores professores do Brasil, com as melhores qualificações e uma excelente base de conhecimento, podendo contar com seus diplomas internacionais como mestrados, doutorados e pós-graduações.";

/* Lista de docentes de BSI e TADS no site da FT. Áreas tiradas das páginas da FT
   (perfil do docente e lista de orientadores da pós-graduação) e do site antigo.
   Com a API configurada, vem de GET /professores. */
const p = (nome, foto, email, id, area, perfil) => ({
  nome, foto: img(`professores/${foto}.jpg`), email, area,
  link: id ? `http://lattes.cnpq.br/${id}` : perfil,
  rotulo: id ? "Currículo Lattes" : "Perfil na FT",
});

export const PROFESSORES = [
  p("Ana Estela Antunes da Silva", "ana-estela", "aeasilva@ft.unicamp.br", "9070607576528017", "Aprendizado de máquina, mineração de dados e de textos e sistemas inteligentes de tomada de decisão"),
  p("André Franceschi de Angelis", "salesiano-foto-0", "andre@ft.unicamp.br", "8382118396658129", "Redes complexas e matemática concreta"),
  p("André Leon Sampaio Gradvohl", "andre-leon-0", "gradvohl@ft.unicamp.br", "9343261628675642", "Computação de alto desempenho, sistemas distribuídos, segurança da informação e previsão de clima espacial"),
  p("Antônio Carlos Zambon", "zambon-1", "zambon@ft.unicamp.br", "6938680728798425", "Engenharia do conhecimento, simulação, apoio à decisão, custos e controladoria"),
  p("Celmar Guimarães da Silva", "celmar-0", "celmar@ft.unicamp.br", "5243256763404267", "Visualização de informação e interação humano-computador"),
  p("Gisele Busichia Baioco", "gisel-2", "gisele@ft.unicamp.br", "0016546400683999"),
  p("Guilherme Palermo Coelho", "guilhermepcoelho-quad", "guilherme@ft.unicamp.br", "0597865875425201", "Computação bio-inspirada, otimização (mono e multi-objetivo), redes neurais artificiais, ensembles e agrupamento de dados"),
  p("Ieda Geriberto Hidalgo", "ieda-0", "iedahidalgo@ft.unicamp.br", "1913450752136533", "Sistemas de apoio à decisão, geração de energia renovável, otimização, previsão e simulação de sistemas"),
  p("João Roberto Bertini Junior", "bertini", "bertini@ft.unicamp.br", "1627235547325264", "Aprendizado de máquina e mineração de dados"),
  p("Lívia Couto Ruback Rodrigues", "foto-livia", "liviacr@ft.unicamp.br", "5717311679602180", "Redes complexas, análise de redes sociais, desinformação e computação social"),
  p("Luis Augusto Angelotti Meira", "meira", "meira@ft.unicamp.br", "7266558656801036", "Teoria da computação: roteamento de veículos, otimização combinatória, algoritmos de aproximação e grafos"),
  p("Luiz Camolesi Júnior", "camolesi-0", "camolesi@ft.unicamp.br", "9002330620493052"),
  p("Marco Antonio G. de Carvalho", "foto-magic-0", "magic@ft.unicamp.br", "6366443994619479", "Processamento de imagens, visão computacional, reconhecimento de padrões e recuperação da informação"),
  p("Marcos Augusto Francisco Borges", "borges", "marcosborges@ft.unicamp.br", "8433486304141432", "Pensamento computacional, jogos educativos, empreendedorismo e gestão ágil de TI"),
  p("Marli de Freitas Gomes Hernandez", "marli", "marlih@ft.unicamp.br", "2014304463458284"),
  p("Pedro Ivo Garcia Nunes", "pedro-ivo", "pedrogn@unicamp.br", null, null, "https://www.ft.unicamp.br/pt-br/docentes/pedro-ivo-garcia-nunes"),
  p("Plínio Roberto Souza Vilela", "photoplinio", "plinio@ft.unicamp.br", "3674036702112123", "Teste de software, engenharia de software e algoritmos para roteamento de veículos"),
  p("Ricardo Ferreira Vilela", "ricardo-vilela", "rfvilela@unicamp.br", "8600995663741394", "Engenharia e qualidade de software: teste, engenharia de software baseada em busca e IA aplicada à engenharia de software"),
  p("Ulisses Martins Dias", "ulises", "ulisses@ft.unicamp.br", "4926594438458702", "Biologia computacional e bioinformática"),
  p("Varese S. Timóteo", "varese", "varese@ft.unicamp.br", "7138726557754661", "Desenvolvimento de software, protocolos e sistemas de comunicação móvel"),
  p("Vitor Rafael Coluci", "victor", "vitor@ft.unicamp.br", "5495322642019035", "Física computacional e algoritmos de simulação"),
];
