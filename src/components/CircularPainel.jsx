import { useState } from "react";
import Icon from "./Icon.jsx";
import LinkExterno from "./LinkExterno.jsx";
import ProximoCircularTexto from "./ProximoCircularTexto.jsx";
import { useAgora } from "../hooks/useAgora.js";
import { useCircular } from "../hooks/useDados.js";
import { CIRCULAR_AO_VIVO } from "../data/circular.js";
import { IMAGENS } from "../data/imagens.js";
import { proximoCircular } from "../utils/circular.js";
import { ehFimDeSemana, paraMin } from "../utils/tempo.js";

const ABAS = [["horarios", "Horários", "schedule"], ["rotas", "Rotas", "route"], ["aovivo", "Ao vivo", "my_location"]];
const ROTAS = [["diurna", "Diurna · até 18h40", "sunny"], ["noturna", "Noturna · após 18h40", "dark_mode"]];

/* Painel do Circular com abas de horários, mapas das rotas e rastreamento ao vivo.
   "rota" e "aba" ficam na página para que os botões de fora possam abrir uma aba. */
export default function CircularPainel({ rota, setRota, aba, setAba }) {
  const agora = useAgora();
  const { dados: viagens } = useCircular();
  const [veiculo, setVeiculo] = useState(0);
  const p = proximoCircular(agora, viagens);
  const proxN = p.viagem ? p.viagem.n : null;
  const rotaAtual = rota || "diurna";
  return (
    <section id="circular-painel" className="scroll-mt-28">
      <div className="gutter mx-auto max-w-page py-14 lg:px-[94px] flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 rounded-[10px] bg-blue text-onblue px-5 py-4">
          <Icon name="directions_bus" className="!text-[30px]" />
          <p className="text-[16px] sm:text-[18px] flex-1 min-w-[220px]"><ProximoCircularTexto agora={agora} viagens={viagens} /></p>
        </div>
        <div className="flex gap-2 border-b border-line" role="tablist" aria-label="Circular">
          {ABAS.map(([k, t, ic]) => (
            <button key={k} id={`circular-aba-${k}`} type="button" role="tab" aria-selected={aba === k} onClick={() => setAba(k)}
              className={`flex items-center gap-2 px-4 h-11 -mb-px border-b-2 font-display font-bold text-[15px] ${aba === k ? "border-blue text-blue" : "border-transparent text-muted hover:text-fg"}`}>
              <Icon name={ic} className="!text-[20px]" /> {t}
            </button>
          ))}
        </div>

        {aba === "horarios" && (
          <div className="flex flex-col gap-3">
            <div className="overflow-x-auto rounded-[10px] border border-line">
              <table className="w-full min-w-[560px] text-[15px] tabular-nums text-center">
                <thead className="bg-band">
                  <tr>{["Ônibus", "Saída FT", "FCA", "FT (lateral)", "AABB", "Chegada FT"].map((h) => <th key={h} scope="col" className="py-2.5 px-2 font-display font-bold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {viagens.map((v) => {
                    const passou = !ehFimDeSemana(agora) && paraMin(v.ft) < agora.min;
                    const prox = v.n === proxN;
                    return (
                      <tr key={v.n} className={`border-t border-hair ${prox ? "bg-blue text-onblue font-bold" : passou ? "text-muted" : ""}`}>
                        <td className="py-2 px-2">{v.onibus}</td>
                        <td className="py-2 px-2 font-bold">{v.ft}</td>
                        <td className="py-2 px-2">{v.fca}</td>
                        <td className="py-2 px-2">{v.lateral}</td>
                        <td className="py-2 px-2">{v.aabb || "—"}</td>
                        <td className="py-2 px-2">{v.fim}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="text-[13px] text-muted">Dias úteis, das 6h40 às 23h50. Depois das 18h40 o ônibus segue a rota noturna, sem passar pela AABB. Horários sujeitos a alteração em feriados e férias.</p>
          </div>
        )}

        {aba === "rotas" && (
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              {ROTAS.map(([k, t, ic]) => (
                <button key={k} id={`rota-${k}`} type="button" onClick={() => setRota(k)} aria-pressed={rotaAtual === k}
                  className={`flex items-center gap-2 px-4 h-10 rounded-full border font-display font-bold text-[14px] ${rotaAtual === k ? "bg-blue text-onblue border-blue" : "border-line text-blue"}`}>
                  <Icon name={ic} className="!text-[18px]" /> {t}
                </button>
              ))}
            </div>
            <img src={IMAGENS.rotaCircular[rotaAtual]} alt={`Mapa da rota ${rotaAtual} do Circular Unicamp Limeira, com as paradas numeradas`}
              className="w-full h-auto rounded-[10px] border border-line bg-white" />
          </div>
        )}

        {aba === "aovivo" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {CIRCULAR_AO_VIVO.map((v, i) => (
                <button key={v.nome} id={`veiculo-${i}`} type="button" onClick={() => setVeiculo(i)} aria-pressed={veiculo === i}
                  className={`px-4 h-10 rounded-full border font-display font-bold text-[14px] ${veiculo === i ? "bg-blue text-onblue border-blue" : "border-line text-blue"}`}>{v.nome}</button>
              ))}
            </div>
            <p className="text-[14px] text-muted">Faz as saídas das {CIRCULAR_AO_VIVO[veiculo].horarios}.</p>
            <iframe key={veiculo} src={CIRCULAR_AO_VIVO[veiculo].url} title={`Localização em tempo real do ${CIRCULAR_AO_VIVO[veiculo].nome}`}
              className="w-full h-[460px] rounded-[10px] border border-line bg-band" loading="lazy" />
            <LinkExterno href={CIRCULAR_AO_VIVO[veiculo].url}>Abrir o mapa em tela cheia</LinkExterno>
          </div>
        )}
      </div>
    </section>
  );
}
