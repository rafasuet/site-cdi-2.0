import Icon from "./Icon.jsx";

/* Link sublinhado com o ícone de "abrir em nova aba". */
export default function LinkExterno({ href, children, className = "text-[15px]", iconeClassName = "!text-[16px]" }) {
  return (
    <a href={href} target="_blank" rel="noopener" className={`self-start inline-flex items-center gap-1.5 font-bold text-blue underline underline-offset-4 ${className}`}>
      {children} <Icon name="open_in_new" className={iconeClassName} />
    </a>
  );
}
