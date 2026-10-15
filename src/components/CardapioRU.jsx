import { useState } from "react";
import Icon from "./Icon.jsx";
import { useAgora } from "../hooks/useAgora.js";
import { useCardapio } from "../hooks/useDados.js";
import { CAMPOS_PRATO } from "../data/cardapio.js";
import { LINKS } from "../data/links.js";
import { refeicaoAtual } from "../utils/tempo.js";

export default function CardapioRU() {
  const agora = useAgora();
  const { dados: cardapio } = useCardapio();
  const [diaEscolhido, setDiaEscolhido] = useState(null);
  const [refeicao, setRefeicao] = useState(() => refeicaoAtual(agora));
  // Sem escolha do usuário, abre no dia de hoje (ou no primeiro dia da lista).
  const dia = cardapio.dias.find((d) => d.data === diaEscolhido)
    ?? cardapio.dias.find((d) => d.data === agora.iso)
    ?? cardapio.dias[0];
  const menu = dia?.[refeicao];
  return (
    <div id="cardapio" className="w-full rounded-[10px] border border-line bg-surface flex flex-col scroll-mt-28">
      <div className="flex flex-wrap items-center justify-between gap-4 px-5 sm:px-7 pt-6">
        <h2 className="font-display font-extrabold uppercase text-blue text-[22px] sm:text-[26px] flex items-center gap-2">
          <Icon name="restaurant_menu" /> Cardápio
        </h2>
        <div className="flex rounded-full border border-line p-1" role="tablist" aria-label="Refeição">
          {[["almoco", "Almoço"], ["jantar", "Jantar"]].map(([k, t]) => (
            <button key={k} id={`refeicao-${k}`} type="button" role="tab" aria-selected={refeicao === k} onClick={() => setRefeicao(k)}
              className={`px-4 h-9 rounded-full font-display font-bold text-[15px] transition-colors ${refeicao === k ? "bg-blue text-onblue" : "text-blue hover:bg-slot"}`}>{t}</button>
          ))}
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto px-5 sm:px-7 pt-5 pb-1" role="tablist" aria-label="Dia">
        {cardapio.dias.map((d, i) => (
          <button key={d.data} id={`cardapio-dia-${i}`} type="button" role="tab" aria-selected={d === dia} onClick={() => setDiaEscolhido(d.data)}
            className={`shrink-0 flex flex-col items-center w-[64px] py-2 rounded-[10px] border transition-colors ${d === dia ? "bg-blue text-onblue border-blue" : "border-hair hover:border-line"}`}>
            <span className="font-display font-bold uppercase text-[12px] tracking-[0.06em]">{d.data === agora.iso ? "Hoje" : d.rotulo}</span>
            <span className="font-display font-extrabold text-[17px] tabular-nums">{d.dia.slice(0, 2)}</span>
          </button>
        ))}
      </div>
      <div className="px-5 sm:px-7 py-6 flex-1">
        {!menu ? (
          <div className="h-full min-h-[200px] grid place-items-center text-center text-muted">
            <p className="max-w-[40ch]">Não há {refeicao === "jantar" ? "jantar" : "almoço"} neste dia.</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {[["padrao", "Cardápio padrão", "restaurant"], ["vegano", "Cardápio vegano", "eco"]].map(([k, t, ic]) => (
              <div key={k} className="flex flex-col gap-3 min-w-0">
                <p className="flex items-center gap-2 font-display font-extrabold uppercase text-[15px] tracking-[0.04em] pb-2 border-b-2 border-line">
                  <Icon name={ic} className="text-blue !text-[20px]" /> {t}
                </p>
                <dl className="flex flex-col gap-2.5">
                  {CAMPOS_PRATO.map(([campo, rot]) => (
                    <div key={campo} className={campo === "principal" ? "pb-1" : ""}>
                      <dt className="text-[12px] font-bold uppercase tracking-[0.06em] text-muted">{rot}</dt>
                      <dd className={campo === "principal" ? "font-display font-extrabold text-[19px] leading-snug" : "text-[15px]"}>{menu[k][campo]}</dd>
                    </div>
                  ))}
                </dl>
                <p className="text-[12.5px] text-muted leading-snug">{menu[k].nota}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="border-t border-hair px-5 sm:px-7 py-4 flex flex-wrap gap-x-6 gap-y-2 items-center justify-between text-[14px]">
        <p><b>Café da manhã:</b> {cardapio.cafe}</p>
        <p className="text-muted">
          {dia?.fds ? "Fim de semana: refeições no restaurante do Campus II (FCA). " : ""}Cardápio sujeito a alterações ·{" "}
          <a href={LINKS.cardapio} target="_blank" rel="noopener" className="text-blue underline underline-offset-2">fonte: Prefeitura Universitária</a>
        </p>
      </div>
    </div>
  );
}
