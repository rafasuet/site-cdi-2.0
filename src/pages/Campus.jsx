import { useState } from "react";
import CardapioRU from "../components/CardapioRU.jsx";
import CircularPainel from "../components/CircularPainel.jsx";
import Icon from "../components/Icon.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import Pinguim from "../components/Pinguim.jsx";
import RotaCircular from "../components/RotaCircular.jsx";
import Titulo from "../components/Titulo.jsx";
import { INTERCAMP_DICAS, INTERCAMP_HORARIOS, REFEICOES } from "../data/campus.js";
import { IMAGENS } from "../data/imagens.js";
import { LINKS } from "../data/links.js";
import { irPara } from "../utils/rolagem.js";

const BTN = "h-[46px] rounded-[11px] bg-blue text-onblue font-display font-bold text-[18px] sm:text-[20px]";

export default function Campus() {
  const [rota, setRota] = useState(null);
  const [aba, setAba] = useState("horarios");
  const abrir = (a) => { setAba(a); irPara("circular-painel"); };
  const escolherRota = (r) => { setRota(r); abrir("rotas"); };
  return (
    <>
      <section className="border-b border-line">
        <div className="gutter mx-auto max-w-page pt-14 pb-6 sm:pt-[110px] lg:px-[92px] flex flex-col gap-10">
          <h1 className="font-display font-extrabold uppercase text-blue text-[26px] sm:text-[35px] leading-tight">Você não vai querer perder o bandeco, né?!</h1>
          <div className="grid gap-8 grid-cols-[minmax(0,1fr)] lg:grid-cols-[312px_minmax(0,1fr)] items-start">
            <ul className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1 lg:gap-[41px]">
              {REFEICOES.map((r) => (
                <li key={r.nome} className="rounded-[10px] border border-line bg-surface shadow-[0_6px_4px_rgba(0,0,0,0.25)] px-8 pt-7 pb-10 flex flex-col gap-7">
                  <div className="flex flex-col items-center gap-2">
                    <h2 className="font-display font-extrabold uppercase text-blue text-[22px] sm:text-[25px] text-center">{r.nome}</h2>
                    <span className="block h-[3px] w-full max-w-[229px] bg-line rounded-full" />
                  </div>
                  <dl className="flex flex-col gap-5 font-medium text-[18px] sm:text-[20px]">
                    <div className="flex gap-1.5"><dt>Horário:</dt><dd className="font-bold tabular-nums">{r.horario}</dd></div>
                    <div className="flex gap-1.5"><dt>Valor:</dt><dd className="font-bold tabular-nums">{r.valor}</dd></div>
                  </dl>
                </li>
              ))}
            </ul>
            <CardapioRU />
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-[1100px]">
            <div className="flex gap-4">
              <Icon name="weekend" className="text-blue !text-[28px] shrink-0" />
              <div className="flex flex-col gap-1.5 text-[15px] leading-[1.55]">
                <p className="font-display font-extrabold uppercase text-[16px]">Fim de semana</p>
                <p>Abre o restaurante do Campus II (FCA). Sábado: café 8h–9h, almoço 11h30–13h30 e jantar 18h–19h. Domingo e feriado: café 8h–9h e almoço 11h30–13h30.</p>
                <a href={LINKS.ruHorarios} target="_blank" rel="noopener" className="self-start font-bold text-blue underline underline-offset-4">Horários oficiais</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Icon name="credit_card" className="text-blue !text-[28px] shrink-0" />
              <div className="flex flex-col gap-1.5 text-[15px] leading-[1.55]">
                <p className="font-display font-extrabold uppercase text-[16px]">Como pagar</p>
                <p>A refeição é descontada da sua carteirinha. Para colocar crédito, use as estações de recarga ao lado das entradas dos restaurantes, com dinheiro ou PIX pelo app Unicamp Serviços.</p>
                <a href={LINKS.ruRecarga} target="_blank" rel="noopener" className="self-start font-bold text-blue underline underline-offset-4">Como recarregar</a>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-10"><Pinguim /></div>
      </section>

      <section className="bg-band">
        <div className="gutter mx-auto max-w-page py-14 lg:px-[79px] grid gap-10 lg:grid-cols-[minmax(0,600px)_429px] lg:justify-between items-center">
          <div className="flex flex-col gap-4 min-w-0">
            <h2 className="font-display font-extrabold text-blue text-[64px] sm:text-[100px] leading-none lg:pl-[80px]">Intercamp</h2>
            <p className="text-[18px] sm:text-[20px] leading-snug text-justify">O ônibus intercamp é um transporte gratuito cedido pela UNICAMP que possibilita que a comunidade da UNICAMP em Limeira (FT, FCA e Cotil) tenha acesso às atividades que ocorrem no campus de Barão Geraldo.</p>
          </div>
          <div className="flex flex-col gap-[54px] w-full max-w-[429px]">
            <LinkBtn href={LINKS.intercampHorarios} className={BTN}>Clique para consultar horários</LinkBtn>
            <LinkBtn href={LINKS.intercampReserva} className={BTN}>Clique para fazer a reserva</LinkBtn>
          </div>
        </div>
        <div className="gutter mx-auto max-w-page pb-14 lg:px-[79px] grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <ul className="flex flex-col gap-3 text-[15px] sm:text-[16px] leading-[1.55]">
            {INTERCAMP_DICAS.map(([ic, t]) => (
              <li key={ic} className="flex gap-3"><Icon name={ic} className="text-blue !text-[22px] shrink-0 mt-0.5" /><span>{t}</span></li>
            ))}
          </ul>
          <div className="rounded-[10px] border border-line bg-surface p-5 overflow-x-auto">
            <table className="w-full text-[15px] tabular-nums">
              <caption className="text-left font-display font-extrabold uppercase text-[16px] pb-3">Horários de saída (dias úteis)</caption>
              <tbody>
                {INTERCAMP_HORARIOS.map((h, k) => (
                  <tr key={h.trajeto} className={k < INTERCAMP_HORARIOS.length - 1 ? "border-b border-hair" : ""}>
                    <th scope="row" className="text-left font-bold py-2 pr-4 align-top whitespace-nowrap">{h.trajeto}</th>
                    <td className="py-2">{h.saidas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-[13px] text-muted pt-2">Em Campinas, o ponto é o estacionamento da Biblioteca Central (BCCL). Confira mudanças na página oficial antes de viajar.</p>
          </div>
        </div>
      </section>

      <div className="pt-[100px]"><Pinguim /></div>

      <section className="bg-band">
        <div className="gutter mx-auto max-w-page py-14 lg:px-[94px] grid gap-10 lg:grid-cols-[minmax(0,600px)_429px] lg:justify-between items-center">
          <div className="flex flex-col gap-4 min-w-0">
            <h2 className="font-display font-extrabold text-blue text-[64px] sm:text-[100px] leading-none text-center lg:max-w-[487px] lg:mx-[80px]">Circular</h2>
            <p className="text-[18px] sm:text-[20px] leading-snug text-justify">O Circular Unicamp liga o Campus I (FT), o Campus II (FCA) e a AABB, em dias úteis, das 6h40 às 23h55. Basta mostrar a carteirinha da Unicamp para embarcar.</p>
            <button id="circular-ao-vivo" type="button" onClick={() => abrir("aovivo")} className="self-start inline-flex items-center gap-1.5 font-bold text-blue underline underline-offset-4 text-[16px]">
              <Icon name="my_location" className="!text-[18px]" /> Ver o ônibus em tempo real
            </button>
          </div>
          <div className="flex flex-col gap-[130px] w-full max-w-[429px]">
            <RotaCircular onEscolher={escolherRota} />
            <button id="circular-ver-horarios" type="button" onClick={() => abrir("horarios")} className={`${BTN} uppercase hover:brightness-110 transition`}>Ver os horários</button>
          </div>
        </div>
      </section>
      <CircularPainel rota={rota} setRota={setRota} aba={aba} setAba={setAba} />

      <section>
        <div className="gutter mx-auto max-w-page py-16 sm:py-[150px] lg:px-[78px] flex flex-col gap-11">
          <Titulo>Conheça um pouco mais da FT</Titulo>
          <a href={LINKS.videoFT} target="_blank" rel="noopener" className="group relative grid place-items-center w-full max-w-[740px] aspect-[740/395] overflow-hidden bg-black">
            <img src={IMAGENS.capaVideo} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition" />
            <span className="relative flex flex-col items-center gap-3 text-white text-center px-6">
              <span className="grid place-items-center size-[76px] rounded-full bg-blue group-hover:scale-105 transition"><Icon name="play_arrow" className="!text-[48px]" /></span>
              <span className="font-display font-extrabold text-[18px] sm:text-[22px]">Assistir ao vídeo sobre o campus no YouTube</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
