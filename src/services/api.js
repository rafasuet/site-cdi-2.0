/* Cliente da API do back-end.
   O endereço vem de VITE_API_URL (arquivo .env, ver .env.example). Sem ele,
   apiConfigurada é false e os hooks de src/hooks/useDados.js usam só os dados
   locais de src/data/. */
const BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");

export const apiConfigurada = BASE !== "";

/* Guarda a resposta de cada GET para que várias telas não repitam a mesma chamada. */
const cache = new Map();

export function get(caminho) {
  if (!cache.has(caminho)) {
    const req = fetch(`${BASE}${caminho}`, { headers: { Accept: "application/json" } })
      .then((r) => {
        if (!r.ok) throw new Error(`GET ${caminho}: HTTP ${r.status}`);
        return r.json();
      })
      .catch((e) => {
        cache.delete(caminho);
        throw e;
      });
    cache.set(caminho, req);
  }
  return cache.get(caminho);
}

/* Endpoints. O formato esperado de cada resposta é o mesmo dos arquivos em src/data/. */
export const buscarCardapio = () => get("/cardapio");
export const buscarCircular = () => get("/circular");
export const buscarProfessores = () => get("/professores");
export const buscarEventos = () => get("/eventos");
