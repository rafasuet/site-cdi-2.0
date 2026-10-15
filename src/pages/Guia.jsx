import { Fragment } from "react";
import Icon from "../components/Icon.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import LinkExterno from "../components/LinkExterno.jsx";
import MapaInterativo from "../components/MapaInterativo.jsx";
import PageIntro from "../components/PageIntro.jsx";
import PerguntasFrequentes from "../components/PerguntasFrequentes.jsx";
import Titulo from "../components/Titulo.jsx";
import { ENDERECO, OPORTUNIDADES, SERVICOS, TEXTO_EXTENSAO, TEXTO_HORAS, WHATS } from "../data/guia.js";
import { IMAGENS } from "../data/imagens.js";
import { LINKS } from "../data/links.js";

export default function Guia() {
  return (
    <>
      <PageIntro title="Guia para ingressantes" rule="w-[280px] sm:w-[837px]" text="Chegou no campus e se sentiu perdido? O CDI te ajuda!" />

      <section id="mapa" className="border-r-[5px] border-line scroll-mt-28">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[52px] flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <Titulo>Mapa do campus</Titulo>
            <a href={LINKS.comoChegar} target="_blank" rel="noopener" className="self-start inline-flex items-center gap-2 text-[16px] hover:text-blue">
              <Icon name="location_on" className="text-blue" />
              <span>{ENDERECO}</span>
            </a>
          </div>
          <MapaInterativo />
        </div>
      </section>

      <section className="border-l-[5px] border-t border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[86px] flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Titulo>Serviços para o aluno</Titulo>
            <p className="text-[16px] leading-[1.6] max-w-[65ch]">Os links que você mais vai usar no dia a dia da FT, reunidos em um só lugar.</p>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {SERVICOS.map((s) => (
              <li key={s.titulo} className="flex flex-col gap-3 rounded-[10px] border border-line bg-surface p-6">
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center size-10 rounded-full bg-band text-blue shrink-0"><Icon name={s.icone} /></span>
                  <h3 className="font-display font-extrabold text-[18px] leading-tight">{s.titulo}</h3>
                </div>
                <p className="text-[15px] leading-[1.55] text-muted flex-1">{s.texto}</p>
                <LinkExterno href={s.link}>{s.rotulo}</LinkExterno>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-r-[5px] border-y border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[86px] flex flex-col gap-14">
          <div className="flex flex-col gap-8">
            <Titulo>Eletivas e horas complementares</Titulo>
            <div className="flex flex-col gap-4 text-[16px] leading-[1.6] text-justify max-w-[923px]">
              {TEXTO_HORAS.map((t) => <p key={t.slice(0, 12)}>{t}</p>)}
            </div>
            <LinkBtn href={LINKS.catalogoCursos} className="self-start min-h-[50px] px-8 rounded-[11px] border border-line bg-slot text-blue font-bold text-[15px]">
              Clique para acessar os catálogos de cursos
            </LinkBtn>
          </div>

          <div className="flex flex-col gap-8">
            <Titulo>Projetos de extensão</Titulo>
            <p className="text-[16px] leading-[1.6] text-justify max-w-[923px]">{TEXTO_EXTENSAO}</p>
            <LinkBtn href={LINKS.projetosExtensao} className="self-start min-h-[50px] px-8 rounded-[11px] border border-line bg-slot text-blue font-bold text-[15px]">
              Conheça os projetos de extensão
            </LinkBtn>
          </div>

          <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] items-stretch lg:px-4">
            {WHATS.map((w, k) => (
              <Fragment key={w.botao}>
                {k === 1 && <span className="hidden md:block w-[1px] bg-line" />}
                <article className="grad-card rounded-[6px] text-onblue px-8 py-10 flex flex-col items-center gap-8 text-center max-w-[504px] w-full mx-auto">
                  <h3 className="font-display font-bold text-[52px] sm:text-[72px] leading-[1.05]">{w.titulo[0]}<br />{w.titulo[1]}</h3>
                  <p className="text-[15px] leading-snug max-w-[40ch]">{w.texto}</p>
                  <LinkBtn href={w.link} className="h-[50px] w-full max-w-[359px] rounded-[6px] bg-surface text-blue font-bold text-[15px]">
                    {w.botao}
                  </LinkBtn>
                </article>
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="border-l-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[152px] grid gap-12 lg:grid-cols-[minmax(0,676px)_420px] lg:justify-between items-center">
          <div className="flex flex-col gap-14 min-w-0">
            {OPORTUNIDADES.map((o) => (
              <div key={o.titulo} className="flex flex-col gap-5">
                <h2 className="font-display font-extrabold uppercase text-blue text-[24px] sm:text-[30px] leading-tight">{o.titulo}</h2>
                <p className="text-[16px] leading-[1.6] text-justify">{o.texto}</p>
                <LinkExterno href={o.link} className="" iconeClassName="!text-[18px]">{o.rotulo}</LinkExterno>
              </div>
            ))}
          </div>
          <img src={IMAGENS.globo} alt="Ilustração de um avião contornando o globo" className="w-full max-w-[420px] mx-auto h-auto" />
        </div>
      </section>
      <PerguntasFrequentes />
    </>
  );
}
