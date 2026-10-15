import { IMAGENS } from "../data/imagens.js";

/* Pinguim espiando por cima das faixas da página Vida no campus. */
export default function Pinguim() {
  return (
    <div className="gutter mx-auto max-w-page flex justify-end">
      <div className="mr-[8%] w-[200px] h-[152px] overflow-hidden rounded-t-[16px] bg-white">
        <img src={IMAGENS.pinguim} alt="" className="w-full h-full object-cover object-top" />
      </div>
    </div>
  );
}
