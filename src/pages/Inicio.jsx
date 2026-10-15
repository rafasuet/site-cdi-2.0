import { useState } from "react";
import AcessoRapido from "../components/AcessoRapido.jsx";
import Dots from "../components/Dots.jsx";
import FacaParte from "../components/FacaParte.jsx";
import Icon from "../components/Icon.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import Titulo from "../components/Titulo.jsx";
import { CURSOS } from "../data/cursos.js";
import { IMAGENS } from "../data/imagens.js";
import { LUGARES, MISSOES, SOBRE } from "../data/inicio.js";
import { MEMBROS } from "../data/membros.js";

export default function Inicio() {
  const [missao, setMissao] = useState(0);
  const [pag, setPag] = useState(0);
  const n = MISSOES.length;
  const paginas = Math.ceil(IMAGENS.visitas.length / 4);
  return (
    <>
      <AcessoRapido />
      <section id="sobre" className="border-b border-line border-l-[5px]">
        <div className="gutter mx-auto max-w-page py-14 sm:py-[90px] lg:pl-[136px] grid gap-10 lg:grid-cols-[minmax(0,748px)_351px] lg:justify-between lg:pr-[100px] items-center">
          <div className="flex flex-col gap-10 min-w-0">
            <SectionTitle as="h1">Sobre nós</SectionTitle>
            <div className="flex flex-col gap-4 text-[18px] sm:text-[22px] leading-[1.45] max-w-[65ch]">
              {SOBRE.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
            </div>
          </div>
          <div className="mx-auto size-[240px] sm:size-[351px] rounded-full overflow-hidden bg-band grid place-items-end justify-center">
            <img src={IMAGENS.mascote} alt="Pinguim mascote do CDI" className="h-[92%] w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="relative border-r-[5px] border-line overflow-hidden">
        <img src={IMAGENS.fotoEquipe} alt="Estudantes reunidos em um evento do CDI" className="absolute inset-0 h-full w-full object-cover" />
        <div className="relative gutter mx-auto max-w-page py-10 sm:py-7 flex justify-end min-h-[520px] sm:min-h-[742px] items-start lg:pr-[36px]">
          <div className="bg-glass backdrop-blur-[2px] rounded-[10px] w-full max-w-[552px] px-6 sm:px-12 py-7 flex flex-col gap-6 mt-24 sm:mt-0">
            <Titulo>O que é o CDI?</Titulo>
            <span className="block h-[2px] w-full max-w-[393px] bg-line" />
            <div className="flex flex-col gap-4 text-[17px] sm:text-[22px] leading-[1.45]">
              {SOBRE.map((p) => <p key={p.slice(0, 12)}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Missão, visão e valores" className="border-y border-line border-l-[5px]">
        <div className="gutter mx-auto max-w-page py-12 flex flex-col gap-8">
          <SectionTitle center>Missões</SectionTitle>
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-8 lg:px-[37px]">
            <button id="missao-anterior" type="button" onClick={() => setMissao((missao - 1 + n) % n)} aria-label="Anterior" className="text-blue p-2 rounded-full hover:bg-slot">
              <Icon name="arrow_back_ios" className="!text-[40px] sm:!text-[64px]" />
            </button>
            <div className="text-center min-h-[140px] flex flex-col items-center justify-center gap-3" aria-live="polite">
              <p className="font-display font-semibold uppercase tracking-[0.12em] text-sm text-blue">{MISSOES[missao].titulo}</p>
              <p className="font-medium text-[18px] sm:text-[24px] leading-[1.4] max-w-[838px]">{MISSOES[missao].texto}</p>
            </div>
            <button id="missao-proxima" type="button" onClick={() => setMissao((missao + 1) % n)} aria-label="Próxima" className="text-blue p-2 rounded-full hover:bg-slot">
              <Icon name="arrow_forward_ios" className="!text-[40px] sm:!text-[64px]" />
            </button>
          </div>
          <div className="flex justify-center sm:justify-end lg:pr-[30px]">
            <Dots count={n} active={missao} onPick={setMissao} labels={MISSOES.map((x) => x.titulo)} prefix="missao-dot" />
          </div>
        </div>
      </section>

      <section id="lugares" className="border-r-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-[90px] flex flex-col gap-12">
          <Titulo className="text-center">Estamos em todos os lugares...</Titulo>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,647px)_auto_minmax(0,1fr)] lg:gap-12 lg:pl-[34px] items-start">
            <div className="flex flex-col gap-6 items-center">
              <div className="grid grid-cols-2 gap-3 sm:gap-[18px] w-full">
                {IMAGENS.visitas.slice(pag * 4, pag * 4 + 4).map((src) => (
                  <img key={src} src={src} alt="Estudantes do CDI em uma visita técnica" loading="lazy" className="aspect-[318/324] w-full object-cover bg-avatar" />
                ))}
              </div>
              <Dots count={paginas} active={pag} onPick={setPag} prefix="visitas-dot" big />
            </div>
            <span className="hidden lg:block w-[2px] self-stretch bg-line" />
            <div className="flex flex-col gap-8 min-w-0">
              <h3 className="font-display font-extrabold uppercase text-blue text-[24px] sm:text-[30px]">Lugares que já visitamos</h3>
              <ul className="flex flex-col gap-9">
                {LUGARES.map((l) => (
                  <li key={l} className="flex items-center gap-4 font-display font-extrabold uppercase text-[22px] sm:text-[30px]">
                    <img src={IMAGENS.check} alt="" className="w-6 h-auto" /> {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-l-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-[90px] flex flex-col gap-12 lg:px-[60px]">
          <Titulo className="text-center">Cursos de tecnologia</Titulo>
          {CURSOS.map((c, k) => (
            <article key={c.nome} className="rounded-[20px] border border-line bg-surface">
              <div className={`grid gap-8 p-6 sm:p-10 items-center ${k % 2 ? "lg:grid-cols-[minmax(0,1fr)_422px]" : "lg:grid-cols-[428px_minmax(0,1fr)]"}`}>
                {c.img
                  ? <img src={c.img} alt={c.imgLabel} loading="lazy" className={`w-full max-w-[428px] mx-auto object-contain ${k % 2 ? "lg:order-2" : ""}`} />
                  : <div aria-hidden="true" className={`grid place-items-center w-full max-w-[428px] aspect-[428/300] lg:aspect-[428/415] mx-auto rounded-[16px] bg-band ${k % 2 ? "lg:order-2" : ""}`}>
                      <Icon name={c.icone} className="!text-[140px] sm:!text-[180px] text-blue" />
                    </div>}
                <div className="flex flex-col gap-5 min-w-0">
                  {c.selo && <span className="self-start rounded-full bg-blue text-onblue font-display font-bold uppercase tracking-[0.08em] text-xs px-3 py-1">{c.selo}</span>}
                  <h3 className="font-display font-extrabold text-blue text-[24px] sm:text-[28px] leading-tight">{c.nome}</h3>
                  <p className="text-[15px] leading-[1.6] text-justify max-w-[65ch]">{c.texto}</p>
                  <dl className="flex flex-col gap-1.5 text-[16px]">
                    {c.info.map(([icon, key, v]) => (
                      <div key={key} className="flex items-center gap-2.5">
                        <Icon name={icon} className="text-blue !text-[18px]" />
                        <dt className="font-bold">{key}</dt><dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <LinkBtn href={c.link} className="self-start mt-2 h-[46px] px-8 rounded-[11px] bg-blue text-onblue font-bold text-[15px]">
                    {c.botao}
                  </LinkBtn>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-r-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-[90px] flex flex-col gap-12 lg:px-[84px]">
          <Titulo>Nossos membros</Titulo>
          {MEMBROS.map((g) => (
            <div key={g.grupo} className="flex flex-col gap-8">
              <h3 className="font-display font-extrabold uppercase text-blue text-[20px] sm:text-[25px]">{g.grupo}</h3>
              <ul className="grid gap-x-10 gap-y-10 md:grid-cols-2 max-w-[1000px] lg:pl-[17px]">
                {g.pessoas.map((p) => (
                  <li key={p.nome} className="flex items-center gap-6 sm:gap-11">
                    <img src={p.foto} alt={`Foto de ${p.nome}`} loading="lazy" className="shrink-0 size-[96px] sm:size-[130px] rounded-full object-cover bg-avatar" />
                    <div className="flex flex-col gap-1.5 text-[16px] min-w-0">
                      <p className="font-bold text-[17px]">{p.nome}</p>
                      {p.funcao && <p><b className="text-blue">Função:</b> {p.funcao}</p>}
                      <p><b className="text-blue">Área:</b> {g.grupo}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <FacaParte />
    </>
  );
}
