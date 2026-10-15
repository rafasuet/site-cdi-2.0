import { ehFimDeSemana, paraMin } from "./tempo.js";

/* Próxima saída do Circular a partir da FT, dada a hora atual e a tabela de viagens. */
export function proximoCircular(agora, viagens) {
  if (ehFimDeSemana(agora)) return { semServico: true };
  const prox = viagens.find((v) => paraMin(v.ft) >= agora.min);
  return prox ? { viagem: prox, espera: paraMin(prox.ft) - agora.min } : { encerrado: true };
}
