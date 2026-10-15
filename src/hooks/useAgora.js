import { useEffect, useState } from "react";
import { horaSP } from "../utils/tempo.js";

/* Hora de Limeira, atualizada a cada 30 s. */
export function useAgora() {
  const [agora, setAgora] = useState(horaSP);
  useEffect(() => {
    const t = setInterval(() => setAgora(horaSP()), 30000);
    return () => clearInterval(t);
  }, []);
  return agora;
}
