import { useState } from "react";
import { SETORES, SETORES_POS } from "../data/guia.js";
import { IMAGENS } from "../data/imagens.js";

/* Mapa do campus com marcadores clicáveis e a lista de setores ao lado. */
export default function MapaInterativo() {
  const [sel, setSel] = useState(null);
  const alternar = (k) => setSel(sel === k ? null : k);
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,600px)_minmax(0,1fr)] items-start">
      <div className="flex flex-col gap-3">
        <div className="relative border border-line overflow-hidden">
          <img src={IMAGENS.mapaCampus} alt="Mapa aéreo do campus da FT com os setores numerados de 1 a 21" className="w-full h-auto block" />
          {SETORES.map((setor, k) => (
            <button key={setor} id={`mapa-ponto-${k + 1}`} type="button" onClick={() => alternar(k)} aria-pressed={sel === k}
              aria-label={`${k + 1}: ${setor}`} title={setor}
              style={{ left: `${SETORES_POS[k][0]}%`, top: `${SETORES_POS[k][1]}%` }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square transition-all ${sel === k ? "w-[8%] ring-4 ring-[#ffd400] bg-[#ffd400]/30 motion-safe:animate-pulse" : "w-[4.2%] hover:ring-2 hover:ring-white focus-visible:ring-2 focus-visible:ring-white"}`} />
          ))}
        </div>
        <p className="min-h-[28px] font-display font-bold text-[17px]" aria-live="polite">
          {sel === null ? <span className="text-muted font-body font-normal text-[15px]">Toque em um número no mapa ou na lista para encontrar o setor.</span>
            : <span><span className="text-blue">{sel + 1}.</span> {SETORES[sel]}</span>}
        </p>
      </div>
      <div className="flex flex-col gap-4 min-w-0">
        <h3 className="font-display font-extrabold uppercase text-blue text-[22px] sm:text-[25px]">Setores do campus</h3>
        <ol className="grid sm:grid-cols-2 gap-x-4 gap-y-1">
          {SETORES.map((s, k) => (
            <li key={s}>
              <button id={`setor-${k + 1}`} type="button" onClick={() => alternar(k)} aria-pressed={sel === k}
                className={`w-full flex items-center gap-3 rounded-[8px] px-2 py-1.5 text-left transition-colors ${sel === k ? "bg-blue text-onblue" : "hover:bg-slot"}`}>
                <span className={`grid place-items-center shrink-0 h-[28px] w-[28px] rounded-full font-display font-bold text-[14px] tabular-nums ${sel === k ? "bg-surface text-blue" : "bg-blue text-onblue"}`}>{k + 1}</span>
                <span className="font-display font-bold uppercase text-[14.5px] leading-tight">{s}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
