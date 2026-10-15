import { IMAGENS } from "./imagens.js";
import { LINKS } from "./links.js";

/* Cursos de tecnologia. Sem "img", o card mostra o ícone "icone". */
export const CURSOS = [
  {
    nome: "Bacharelado em Sistemas de Informação",
    texto: "O curso de S.I possui um papel fundamental em um mundo que viabiliza a rapidez da informação pois a compreensão dos sistemas informacionais é de extrema importância. O profissional qualificado pela área desenvolve duas principais habilidades: projetar e implantar os sistemas que integram o mundo digital.",
    info: [["schedule", "Período:", "Integral"], ["timer", "Carga horária:", "3.060 horas"], ["date_range", "Integralização:", "08 semestres"], ["groups", "Vagas:", "50"]],
    img: IMAGENS.cursoSI, imgLabel: "Ilustração de duas pessoas programando", link: LINKS.curriculoSI, botao: "Acesse o currículo pleno",
  },
  {
    nome: "Tecnologia em Análise e Desenvolvimento de Sistemas",
    texto: "O curso de T.A.D.S, têm como intuito formar profissionais com uma base sólida, de modo ao qual seja prático aplicar os conhecimentos teóricos na intensa vivência prática que o mundo da tecnologia proporciona.",
    info: [["dark_mode", "Período:", "Noturno"], ["timer", "Carga horária:", "2.010 horas"], ["date_range", "Integralização:", "06 semestres"], ["groups", "Vagas:", "50"]],
    img: IMAGENS.cursoTADS, imgLabel: "Ilustração de duas pessoas desenvolvendo sistemas", link: LINKS.curriculoTADS, botao: "Acesse o currículo pleno",
  },
  {
    nome: "Inteligência Artificial e Ciência de Dados",
    selo: "Novo curso",
    texto: "Forma profissionais capazes de transformar dados em conhecimento estratégico, com base sólida em aprendizado de máquina, processamento de dados e inteligência artificial. O oferecimento é compartilhado entre a Faculdade de Tecnologia e a Faculdade de Ciências Aplicadas.",
    info: [["schedule", "Período:", "Integral"], ["timer", "Carga horária:", "3.240 horas"], ["date_range", "Integralização:", "08 semestres"], ["groups", "Vagas:", "40"]],
    icone: "neurology", link: LINKS.cursoIA, botao: "Conheça o curso",
  },
];
