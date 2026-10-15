import { useEffect, useState } from "react";
import { apiConfigurada } from "../services/api.js";

/* Começa com os dados locais (reserva) e, se a API estiver configurada,
   troca pela resposta de buscar(). Se a chamada falhar, mantém a reserva. */
export function useApi(buscar, reserva) {
  const [dados, setDados] = useState(reserva);
  const [carregando, setCarregando] = useState(apiConfigurada);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (!apiConfigurada) return;
    let ativo = true;
    buscar()
      .then((d) => { if (ativo) setDados(d); })
      .catch((e) => { if (ativo) setErro(e); })
      .finally(() => { if (ativo) setCarregando(false); });
    return () => { ativo = false; };
  }, [buscar]);

  return { dados, carregando, erro };
}
