import { LINKS } from "./links.js";

/* Setores do mapa do campus, na ordem dos números da imagem. */
export const SETORES = ["Portaria Principal", "Biblioteca / Laboratórios de Informática", "Laboratório de Telecomunicações", "Laboratório Físico-Químico", "Laboratório de Topografia", "Laboratório de Microbiologia", "Serviços de Saúde", "Salas de Aulas (SA's)", "Santander", "Planta Física", "Administração", "Lab. Construção Civil | Geologia | Solos", "CAT", "SAE", "Pós-Graduação", "Portaria Lateral | Ponto de Ônibus", "Pavilhão (PA's)", "Quadras Poliesportivas", "Restaurante Universitário", "Cantina", "COTIL"];

/* Posição de cada número no mapa (em % da largura e da altura da imagem 1024×770). */
export const SETORES_POS = [[22, 49.5], [40.8, 45.7], [29.3, 68], [39.6, 59.4], [39.6, 67.5], [48.8, 65.6], [48.3, 58.4], [42.3, 39.2], [41.4, 32.9], [58.3, 43.9], [58.3, 37], [67.4, 34.4], [75.4, 31.7], [75.4, 37.4], [80.6, 42.5], [75.2, 53.9], [86, 30.8], [76.3, 16.9], [60.1, 17], [53.3, 30.8], [45.2, 13.5]];

export const ENDERECO = "Rua Paschoal Marmo, 1888 · Limeira-SP · CEP 13484-332";

export const TEXTO_HORAS = [
  "Em todos os nossos cursos, as horas complementares desempenham um papel fundamental no enriquecimento da sua formação acadêmica. Estas horas podem ser obtidas por meio de diversas atividades, como participação em palestras inspiradoras, visitas técnicas empolgantes, envolvimento em projetos de monitoria e muito mais.",
  "Ao clicar no botão abaixo você será redirecionado à página de catálogos de cursos. Basta acessar o seu que você conseguirá encontrar informações detalhadas sobre a quantidade de horas complementares necessárias para a conclusão do seu curso e orientações sobre como conquistá-las.",
];

export const TEXTO_EXTENSAO = "Os projetos de extensão são uma excelente oportunidade para aplicar o conhecimento adquirido em sala de aula em situações reais, contribuindo para a sociedade e desenvolvendo habilidades práticas. Eles promovem a interação entre a universidade e a comunidade, permitindo que os alunos atuem em diferentes áreas e contextos, enriquecendo sua formação profissional e cidadã.";

export const WHATS = [
  { titulo: ["Estágio", "e vagas"], texto: "Para ficar por dentro das principais vagas na área de tecnologia entre no nosso grupo do WhatsApp", botao: "Clique para entrar no grupo", link: LINKS.grupoVagas },
  { titulo: ["Grupos de", "matérias"], texto: "Pensando em facilitar a sua vida, caro aluno, o CDI criou um grupo no WhatsApp para cada matéria", botao: "Clique para saber mais", link: LINKS.gruposMaterias },
];

/* Serviços úteis para o aluno (site da FT e DEAPE). */
export const SERVICOS = [
  { icone: "calendar_month", titulo: "Disciplinas e salas", texto: "Consulte os horários das disciplinas e em que sala cada aula acontece.", link: LINKS.salas, rotulo: "Ver horários e salas" },
  { icone: "wifi", titulo: "Wi-Fi na FT", texto: "Use as redes eduroam ou ft com o seu usuário da Unicamp. Há cobertura nos laboratórios, no Pavilhão (PAs) e nas salas de aula (SAs).", link: LINKS.wifi, rotulo: "Como se conectar" },
  { icone: "apps", titulo: "Microsoft 365 e Azure", texto: "Pelo convênio da Unicamp, alunos acessam o Office 365 e softwares do Azure Education com o login da DAC.", link: LINKS.microsoft, rotulo: "Ver o convênio" },
  { icone: "work", titulo: "Estágios", texto: "As vagas e o cadastro de currículo ficam no Carreiras Unicamp, sistema da DEAPE.", link: LINKS.carreiras, rotulo: "Abrir o Carreiras Unicamp" },
  { icone: "school", titulo: "TCC e estágio supervisionado", texto: "Prazos do semestre, regulamento do TCC de BSI e TADS e formulários.", link: LINKS.tccEstagio, rotulo: "Ver prazos e normas" },
  { icone: "volunteer_activism", titulo: "Bolsas e Serviço Social", texto: "A DEAPE oferece bolsas e auxílios de moradia, alimentação e transporte. Há atendimento de assistente social na própria FT.", link: LINKS.servicoSocial, rotulo: "Saber como agendar" },
  { icone: "psychology_alt", titulo: "Orientação educacional", texto: "Ajuda com organização dos estudos, motivação, dúvidas sobre o curso e currículo. Atendimento presencial na FT ou remoto.", link: LINKS.orientacao, rotulo: "Agendar atendimento" },
  { icone: "favorite", titulo: "Apoio psicológico (SAPPE)", texto: "Atendimento psicológico e psiquiátrico gratuito para estudantes. O contato inicial é por e-mail: sappeass@unicamp.br.", link: LINKS.sappe, rotulo: "Ver como funciona" },
  { icone: "local_library", titulo: "Biblioteca", texto: "Acervo, renovação e reserva de livros, bases de dados e acesso a periódicos.", link: LINKS.biblioteca, rotulo: "Ir para a biblioteca" },
  { icone: "diversity_3", titulo: "Organizações estudantis", texto: "Conheça as outras organizações estudantis da FT, como atlética, empresa júnior e centro acadêmico.", link: LINKS.organizacoes, rotulo: "Abrir o guia (PDF)" },
];

export const OPORTUNIDADES = [
  { titulo: "Intercâmbio", texto: "Trata-se de uma parceria firmada por convênio/acordo acadêmico internacional entre a UNICAMP e uma instituição de ensino estrangeira que tem como objetivo a obtenção de diploma de graduação reconhecido nas duas instituições. O acordo prevê a realização de parte do curso no Brasil e parte no exterior, e as condições para participação são definidas entre as instituições. O aluno formado por um programa de dupla diplomação fica habilitado a exercer sua profissão em ambos os países. Para se inscrever, acompanhe os editais divulgados no site da DERI (Diretoria Executiva de Relações Internacionais).", link: LINKS.intercambio, rotulo: "Site da DERI" },
  { titulo: "Iniciação científica e tecnológica", texto: "Os Programas de Iniciação Científica e Tecnológica da Unicamp atendem alunos de graduação, colocando-os em contato direto com grupos e linhas de pesquisa para proporcionar aprendizagem de técnicas e métodos científicos. Visa estimular o desenvolvimento pessoal, profissional e o pensamento crítico; o aluno é orientado por um docente pesquisador experiente e atuante em sua área do conhecimento.", link: LINKS.iniciacao, rotulo: "Programas PIBIC / PIBITI" },
];
