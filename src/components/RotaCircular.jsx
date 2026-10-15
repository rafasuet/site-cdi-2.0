import { useState } from "react";
import Icon from "./Icon.jsx";

const OPCOES = [["Diurna", "sunny", "diurna"], ["Noturna", "dark_mode", "noturna"]];

/* Botão "Ver rota" com menu para escolher a rota diurna ou noturna. */
export default function RotaCircular({ onEscolher }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full max-w-[429px]">
      <button id="circular-rota" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="circular-rota-menu"
        className="w-full h-[46px] rounded-[11px] bg-blue text-onblue font-display font-bold text-[18px] sm:text-[20px] uppercase flex items-center justify-center gap-2 hover:brightness-110 transition">
        Ver rota <Icon name={open ? "expand_less" : "expand_more"} />
      </button>
      <ul id="circular-rota-menu" hidden={!open} className="absolute right-0 top-full z-10 w-[170px] rounded-b-[20px] bg-surface shadow-lg px-4 py-2">
        {OPCOES.map(([t, ic, key], k) => (
          <li key={t} className={k ? "border-t border-fg" : ""}>
            <button id={`rota-menu-${key}`} type="button" onClick={() => { setOpen(false); onEscolher(key); }}
              className="w-full flex items-center justify-between py-2 font-display text-[18px] sm:text-[20px] text-fg hover:text-blue">
              {t} <Icon name={ic} className="text-blue" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
