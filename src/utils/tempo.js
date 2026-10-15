/* Hora de Limeira (America/Sao_Paulo): dia da semana, minutos desde 0h e data ISO. */
export function horaSP() {
  const d = new Date(new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" }));
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return { dia: d.getDay(), min: d.getHours() * 60 + d.getMinutes(), iso };
}

export const paraMin = (h) => { const [a, b] = h.split(":").map(Number); return a * 60 + b; };

export const formataEspera = (m) => (m < 60 ? `em ${m} min` : `em ${Math.floor(m / 60)} h ${String(m % 60).padStart(2, "0")} min`);

export const ehFimDeSemana = (agora) => agora.dia === 0 || agora.dia === 6;

/* Depois das 14h o site mostra o jantar; antes, o almoço. */
export const refeicaoAtual = (agora) => (agora.min >= 14 * 60 ? "jantar" : "almoco");
