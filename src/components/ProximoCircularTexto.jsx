import { proximoCircular } from "../utils/circular.js";
import { formataEspera } from "../utils/tempo.js";

/* Frase com a próxima saída do Circular a partir da FT. */
export default function ProximoCircularTexto({ agora, viagens, compacto = false }) {
  const p = proximoCircular(agora, viagens);
  if (p.semServico) return <span>Não circula aos fins de semana.</span>;
  if (p.encerrado) return <span>Encerrado por hoje. Primeira saída amanhã às {viagens[0]?.ft ?? "06:40"}.</span>;
  return compacto
    ? <span><b className="tabular-nums">{p.viagem.ft}</b> · {formataEspera(p.espera)}</span>
    : <span>Próxima saída da FT às <b className="tabular-nums">{p.viagem.ft}</b>, {formataEspera(p.espera)} (ônibus {p.viagem.onibus}).</span>;
}
