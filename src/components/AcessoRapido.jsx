import { Link } from "react-router-dom";
import Icon from "./Icon.jsx";
import ProximoCircularTexto from "./ProximoCircularTexto.jsx";
import { useAgora } from "../hooks/useAgora.js";
import { useCardapio, useCircular } from "../hooks/useDados.js";
import { LINKS } from "../data/links.js";
import { refeicaoAtual } from "../utils/tempo.js";

const CARD = "flex items-start gap-3 rounded-[10px] border border-line bg-surface px-4 py-3.5 text-left hover:bg-slot transition-colors min-w-0";

/* Conteúdo de cada card: ícone redondo, título e linha de apoio. */
function Item({ icone, titulo, children }) {
  return (
    <>
      <span className="grid place-items-center size-10 rounded-full bg-blue text-onblue shrink-0"><Icon name={icone} className="!text-[22px]" /></span>
      <span className="flex flex-col min-w-0">
        <span className="font-display font-extrabold text-[15px] leading-tight">{titulo}</span>
        <span className="text-[13.5px] text-muted leading-snug">{children}</span>
      </span>
    </>
  );
}

/* Faixa de atalhos no topo da página inicial. */
export default function AcessoRapido() {
  const agora = useAgora();
  const { dados: cardapio } = useCardapio();
  const { dados: viagens } = useCircular();
  const hoje = cardapio.dias.find((d) => d.data === agora.iso);
  const refeicao = refeicaoAtual(agora);
  const pratoHoje = hoje?.[refeicao]?.padrao.principal ?? null;
  return (
    <section aria-label="Acesso rápido" className="border-b border-line bg-band">
      <div className="gutter mx-auto max-w-page py-5 lg:px-[82px]">
        <ul className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <li><Link id="rapido-cardapio" to="/campus#cardapio" className={`${CARD} w-full`}>
            <Item icone="restaurant" titulo={refeicao === "jantar" ? "Jantar de hoje" : "Almoço de hoje"}>{pratoHoje || "Ver o cardápio da semana"}</Item></Link></li>
          <li><Link id="rapido-circular" to="/campus#circular-painel" className={`${CARD} w-full`}>
            <Item icone="directions_bus" titulo="Próximo Circular"><ProximoCircularTexto agora={agora} viagens={viagens} compacto /></Item></Link></li>
          <li><a href={LINKS.intercampReserva} target="_blank" rel="noopener" className={CARD}>
            <Item icone="airport_shuttle" titulo="Reservar Intercamp">Até 23h59 do dia anterior</Item></a></li>
          <li><a href={LINKS.salas} target="_blank" rel="noopener" className={CARD}>
            <Item icone="meeting_room" titulo="Horários e salas">Onde é a sua aula</Item></a></li>
          <li><Link id="rapido-mapa" to="/guia#mapa" className={`${CARD} w-full`}>
            <Item icone="map" titulo="Mapa do campus">Ache PAs, SAs e o RU</Item></Link></li>
          <li><a href={LINKS.gruposMaterias} target="_blank" rel="noopener" className={CARD}>
            <Item icone="forum" titulo="Grupos de matérias">WhatsApp de cada disciplina</Item></a></li>
        </ul>
      </div>
    </section>
  );
}
