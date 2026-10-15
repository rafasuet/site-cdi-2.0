/* Ícone do Material Symbols; "name" é o nome do ícone (ex.: "event", "school"). */
export default function Icon({ name, className = "" }) {
  return <span className={`ms ${className}`} aria-hidden="true">{name}</span>;
}
