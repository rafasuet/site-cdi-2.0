/* Bolinhas de paginação (carrosséis da página inicial). */
export default function Dots({ count, active, onPick, labels, prefix, big = false }) {
  return (
    <div className={`flex ${big ? "gap-5" : "gap-[19px]"}`} role="group">
      {Array.from({ length: count }).map((_, k) => (
        <button key={k} id={`${prefix}-${k}`} type="button" onClick={() => onPick(k)}
          aria-label={labels ? labels[k] : `Página ${k + 1}`} aria-current={k === active}
          className={`rounded-full border-2 border-line transition-colors ${big ? "h-[34px] w-[37px]" : "size-6"} ${k === active ? "bg-blue" : "bg-transparent"}`} />
      ))}
    </div>
  );
}
