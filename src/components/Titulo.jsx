/* Título azul em caixa alta usado nas seções. */
export default function Titulo({ children, as: Tag = "h2", className = "" }) {
  return <Tag className={`font-display font-extrabold uppercase text-blue text-[28px] sm:text-[40px] leading-tight ${className}`}>{children}</Tag>;
}
