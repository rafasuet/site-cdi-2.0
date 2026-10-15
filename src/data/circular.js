/* CIRCULAR UNICAMP LIMEIRA (Prefeitura Universitária). Dias úteis.
   Colunas: saída FT, FCA, FT (lateral), AABB, chegada FT (ponto final).
   Até 18h40 roda a rota diurna (passa pela AABB); depois, a noturna.
   Com a API configurada, vem de GET /circular. */
export const CIRCULAR = [
  ["A", "06:40", "06:55", "07:00", "07:10", "07:20"], ["B", "07:00", "07:15", "07:20", "07:30", "07:40"],
  ["A", "07:20", "07:35", "07:40", "07:50", "08:00"], ["B", "07:40", "07:55", "08:00", "08:10", "08:20"],
  ["A", "08:00", "08:15", "08:20", "08:30", "08:40"], ["A", "12:00", "12:15", "12:20", "12:30", "12:40"],
  ["B", "12:20", "12:35", "12:40", "12:50", "13:00"], ["A", "12:40", "12:55", "13:00", "13:10", "13:20"],
  ["B", "13:00", "13:15", "13:20", "13:30", "13:40"], ["A", "13:20", "13:35", "13:40", "13:50", "14:00"],
  ["B", "13:40", "13:55", "14:00", "14:10", "14:20"], ["B", "17:30", "17:45", "17:50", "18:00", "18:10"],
  ["A", "18:00", "18:15", "18:20", "18:30", "18:40"], ["B", "18:30", "18:45", "18:50", null, "19:05"],
  ["A", "19:00", "19:15", "19:20", null, "19:35"], ["A", "21:30", "21:45", "21:50", null, "22:05"],
  ["B", "22:00", "22:15", "22:20", null, "22:35"], ["A", "22:30", "22:45", "22:50", null, "23:05"],
  ["B", "23:00", "23:15", "23:20", null, "23:35"], ["A", "23:15", "23:30", "23:35", null, "23:50"],
].map(([onibus, ft, fca, lateral, aabb, fim], i) => ({ n: i + 1, onibus, ft, fca, lateral, aabb, fim }));

/* Rastreamento ao vivo (Fleetmap), links públicos da página da Prefeitura. */
export const CIRCULAR_AO_VIVO = [
  { nome: "Veículo 1", horarios: "06:40 · 07:00 · 07:40", url: "https://eta.fleetmap.io/pt?token=vlha2ycc24s7wve54pe2ob" },
  { nome: "Veículo 2", horarios: "07:20 · 08:00 · 12:20 · 13:00 · 13:40 · 17:30 · 18:00 · 18:30 · 19:00", url: "https://eta.fleetmap.io/pt?token=1lg2i90gsswap3zt5pvqg" },
  { nome: "Veículo 3", horarios: "12:00 · 12:40 · 13:20 · 21:30 · 22:00 · 22:30 · 23:00 · 23:15", url: "https://eta.fleetmap.io/?token=xby6397c0t7xpdcm1mt3f" },
];
