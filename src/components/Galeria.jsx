import { useState } from "react";
import Icon from "./Icon.jsx";

/* Foto com setas para passar entre várias imagens. */
export default function Galeria({ fotos, label, className = "", id }) {
  const [i, setI] = useState(0);
  const n = fotos.length;
  return (
    <div className={`relative overflow-hidden bg-avatar ${className}`}>
      <img src={fotos[i]} alt={`${label}, foto ${i + 1} de ${n}`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      {n > 1 && (
        <>
          <button id={`${id}-anterior`} type="button" onClick={() => setI((i - 1 + n) % n)} aria-label="Foto anterior"
            className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center size-10 rounded-full bg-black/45 text-white hover:bg-black/65">
            <Icon name="chevron_left" />
          </button>
          <button id={`${id}-proxima`} type="button" onClick={() => setI((i + 1) % n)} aria-label="Próxima foto"
            className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center size-10 rounded-full bg-black/45 text-white hover:bg-black/65">
            <Icon name="chevron_right" />
          </button>
          <span className="absolute bottom-2 right-2 rounded-full bg-black/55 text-white text-xs font-medium px-2.5 py-1 tabular-nums">{i + 1}/{n}</span>
        </>
      )}
    </div>
  );
}
