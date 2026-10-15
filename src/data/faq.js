import { LINKS } from "./links.js";

/* Perguntas frequentes (página Guia). "link" e "rotulo" são opcionais. */
export const FAQ = [
  { p: "Onde vejo o horário e a sala das minhas aulas?", r: "No sistema de alocação de salas da FT, que mostra as disciplinas, os horários e a sala de cada turma.", link: LINKS.salas, rotulo: "Abrir horários e salas" },
  { p: "Quanto custa o bandeco e como eu pago?", r: "Para alunos, o café da manhã custa R$ 2,00 e o almoço e o jantar, R$ 3,00. O valor é descontado da sua carteirinha, que você recarrega nas estações ao lado da entrada dos restaurantes, com dinheiro ou PIX pelo app Unicamp Serviços.", link: LINKS.ruRecarga, rotulo: "Como recarregar" },
  { p: "Como vou da FT para o campus de Barão Geraldo?", r: "Pelo Intercamp (linha 98). Alunos de graduação de Limeira têm 60 viagens por semestre. A reserva é feita até 23h59 do dia útil anterior, com o mesmo login da DAC.", link: LINKS.intercampReserva, rotulo: "Reservar o Intercamp" },
  { p: "Tem ônibus entre a FT e a FCA?", r: "Sim, o Circular Unicamp, nos dias úteis, das 6h40 às 23h50. Basta mostrar a carteirinha. Os horários e o próximo ônibus estão na página Vida no campus." },
  { p: "Como me conecto ao Wi-Fi?", r: "Use a rede eduroam ou a rede ft com o seu usuário da Unicamp. Há cobertura nos laboratórios, no Pavilhão (PAs) e nas salas de aula (SAs).", link: LINKS.wifi, rotulo: "Tutoriais de conexão" },
  { p: "Tenho acesso ao Office e a outros programas?", r: "Sim. Pelo convênio da Unicamp com a Microsoft, alunos usam o Microsoft 365 (Word, Excel, PowerPoint, OneDrive) e softwares do Azure Education com o login da DAC.", link: LINKS.microsoft, rotulo: "Ver o convênio" },
  { p: "Preciso de ajuda financeira para me manter na faculdade. Onde procuro?", r: "A DEAPE oferece bolsas e auxílios de moradia, alimentação e transporte. Há uma assistente social que atende na própria FT, com agendamento por e-mail.", link: LINKS.servicoSocial, rotulo: "Saber como agendar" },
  { p: "Onde encontro apoio psicológico?", r: "No SAPPE, que oferece atendimento psicológico e psiquiátrico gratuito a estudantes. O primeiro contato é pelo e-mail sappeass@unicamp.br.", link: LINKS.sappe, rotulo: "Ver como funciona" },
  { p: "Como faço iniciação científica?", r: "Procure um professor cuja área de pesquisa combine com o seu interesse. Na página Professores dá para buscar por área. As bolsas são dos programas PIBIC e PIBITI.", link: LINKS.iniciacao, rotulo: "Programas PIBIC / PIBITI" },
  { p: "Onde procuro vagas de estágio?", r: "No Carreiras Unicamp, sistema da DEAPE para vagas e currículos, e no grupo de vagas do CDI no WhatsApp.", link: LINKS.carreiras, rotulo: "Abrir o Carreiras Unicamp" },
  { p: "Com quem falo sobre dúvidas do curso?", r: "Com a Secretaria de Coordenação de Cursos, pelo e-mail secgrad@ft.unicamp.br. O CDI também pode ajudar a encaminhar sua dúvida." },
];
