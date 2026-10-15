import { useState } from "react";
import Icon from "./Icon.jsx";
import LinkExterno from "./LinkExterno.jsx";
import Titulo from "./Titulo.jsx";
import { FAQ } from "../data/faq.js";

export default function PerguntasFrequentes() {
  const [aberta, setAberta] = useState(0);
  return (
    <section id="faq" className="border-r-[5px] border-t border-line">
      <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[86px] flex flex-col gap-8">
        <Titulo>Perguntas frequentes</Titulo>
        <ul className="flex flex-col max-w-[900px] border-t border-hair">
          {FAQ.map((f, k) => {
            const on = aberta === k;
            return (
              <li key={f.p} className="border-b border-hair">
                <button id={`faq-${k}`} type="button" onClick={() => setAberta(on ? -1 : k)} aria-expanded={on} aria-controls={`faq-resp-${k}`}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left">
                  <span className="font-display font-bold text-[17px] sm:text-[18px]">{f.p}</span>
                  <Icon name={on ? "remove" : "add"} className="text-blue shrink-0" />
                </button>
                <div id={`faq-resp-${k}`} hidden={!on} className="pb-5 pr-8 flex flex-col gap-3">
                  <p className="text-[16px] leading-[1.6] text-muted">{f.r}</p>
                  {f.link && <LinkExterno href={f.link}>{f.rotulo}</LinkExterno>}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
