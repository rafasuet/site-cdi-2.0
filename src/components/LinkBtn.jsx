/* Link externo com aparência de botão (abre em nova aba). */
export default function LinkBtn({ href, children, className = "", id }) {
  return (
    <a id={id} href={href} target="_blank" rel="noopener"
      className={`inline-flex items-center justify-center text-center transition hover:brightness-110 ${className}`}>
      {children}
    </a>
  );
}
