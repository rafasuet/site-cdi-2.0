import Icon from "./Icon.jsx";
import LinkBtn from "./LinkBtn.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { AREAS } from "../data/membros.js";
import { LINKS } from "../data/links.js";

export default function FacaParte() {
  return (
    <section id="faca-parte" className="border-l-[5px] border-t border-line">
      <div className="gutter mx-auto max-w-page py-14 sm:py-[90px] lg:px-[84px] flex flex-col gap-10">
        <div className="flex flex-col gap-5 max-w-[760px]">
          <SectionTitle>Faça parte do CDI</SectionTitle>
          <p className="text-[17px] sm:text-[19px] leading-[1.55]">O CDI é feito por alunos que querem melhorar a experiência de quem estuda tecnologia na FT. Conheça as áreas e escolha onde você mais combina.</p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {AREAS.map((a) => (
            <li key={a.area} className="flex flex-col gap-3 rounded-[10px] border border-line bg-surface p-6">
              <span className="grid place-items-center size-11 rounded-full bg-band text-blue"><Icon name={a.icone} /></span>
              <h3 className="font-display font-extrabold text-[18px] leading-tight">{a.area}</h3>
              <p className="text-[15px] leading-[1.55] text-muted">{a.texto}</p>
            </li>
          ))}
          <li className="grad-card rounded-[10px] text-onblue p-6 flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-extrabold text-[22px] leading-tight">Processo seletivo</h3>
              <p className="text-[15px] leading-[1.55]">As inscrições são divulgadas no nosso Instagram. Ative as notificações para não perder.</p>
            </div>
            <LinkBtn href={LINKS.instagram} className="h-[46px] rounded-[10px] bg-surface text-blue font-bold text-[15px] gap-2">
              <Icon name="notifications_active" className="!text-[20px]" /> Seguir @cdi.unicamp
            </LinkBtn>
          </li>
        </ul>
      </div>
    </section>
  );
}
