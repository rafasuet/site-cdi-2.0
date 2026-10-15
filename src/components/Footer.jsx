import { useState } from "react";
import { LINKS } from "../data/links.js";
import { IMAGENS } from "../data/imagens.js";

export default function Footer() {
  const [copiado, setCopiado] = useState(false);
  const copiar = () => {
    const ok = () => { setCopiado(true); setTimeout(() => setCopiado(false), 1800); };
    try { navigator.clipboard.writeText(LINKS.email).then(ok, () => {}); } catch { /* sem acesso à área de transferência */ }
  };
  const item = "flex items-center gap-4 min-w-0 hover:underline underline-offset-4";
  return (
    <footer id="contato" className="bg-foot text-onfoot scroll-mt-28">
      <div className="gutter mx-auto max-w-page py-12 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between lg:pl-[148px] lg:pr-[60px]">
        <img src={IMAGENS.logoBranco} alt="CDI" className="h-[69px] w-[97px] object-contain" />
        <div className="flex flex-col gap-6 min-w-0">
          <h2 className="font-display font-extrabold text-[26px] sm:text-[30px]">CONTATE-NOS</h2>
          <ul className="flex flex-col gap-5 text-[16px] sm:text-[18px]">
            <li><a href={LINKS.instagram} target="_blank" rel="noopener" className={item}><img src={IMAGENS.redes.instagram} alt="" className="size-5 shrink-0" />@cdi.unicamp</a></li>
            <li className="flex items-center gap-4 min-w-0">
              <img src={IMAGENS.redes.gmail} alt="" className="size-5 shrink-0" />
              <span className="select-all break-all">{LINKS.email}</span>
              <button id="copiar-email" type="button" onClick={copiar} className="shrink-0 text-sm rounded px-2 py-0.5 underline underline-offset-4 opacity-80 hover:opacity-100">
                {copiado ? "Copiado" : "Copiar"}
              </button>
            </li>
            <li><a href={LINKS.linkedin} target="_blank" rel="noopener" className={item}><img src={IMAGENS.redes.linkedin} alt="" className="size-5 shrink-0" />CDI-FT Unicamp</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
