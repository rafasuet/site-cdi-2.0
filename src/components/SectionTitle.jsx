import Titulo from "./Titulo.jsx";

/* Título com a régua azul embaixo. */
export default function SectionTitle({ children, center = false, as = "h2", rule = "w-[180px] sm:w-[282px]" }) {
  return (
    <div className={`flex flex-col gap-4 ${center ? "items-center text-center" : ""}`}>
      <Titulo as={as}>{children}</Titulo>
      <span className={`block h-[2px] max-w-full bg-line ${rule}`} />
    </div>
  );
}
