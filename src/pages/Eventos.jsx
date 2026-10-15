import Galeria from "../components/Galeria.jsx";
import Icon from "../components/Icon.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import PageIntro from "../components/PageIntro.jsx";
import Titulo from "../components/Titulo.jsx";
import { useEventos } from "../hooks/useDados.js";
import { TEXTO_EVENTOS } from "../data/eventos.js";
import { IMAGENS } from "../data/imagens.js";
import { LINKS } from "../data/links.js";

export default function Eventos() {
  const { dados: proximos } = useEventos();
  return (
    <>
      <PageIntro title="Eventos" text="Fique por dentro dos principais eventos da FT!" />
      <section className="border-l-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[95px] flex flex-col gap-12">
          <div className="flex flex-col gap-5">
            <Titulo>Eventos já realizados</Titulo>
            <p className="text-[16px] leading-[1.6] text-justify max-w-[923px]">{TEXTO_EVENTOS}</p>
          </div>
          <div className="grid gap-x-[85px] gap-y-14 md:grid-cols-2 max-w-[1108px]">
            {Object.entries(IMAGENS.realizados).map(([t, fotos], k) => (
              <figure key={t} className="flex flex-col gap-7">
                <figcaption className="font-display font-extrabold uppercase text-blue text-[22px] sm:text-[25px]">{t}</figcaption>
                <Galeria id={`galeria-${k}`} fotos={fotos} label={t} className="w-full aspect-[511/331]" />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="border-r-[5px] border-t border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-20 lg:px-[74px] flex flex-col gap-8">
          <Titulo>Eventos que ainda ocorrerão</Titulo>
          <p className="text-[16px] leading-[1.6] max-w-[65ch]">Acompanhe o nosso mural para ficar por dentro dos próximos eventos que ocorrerão.</p>
          {proximos.length === 0 ? (
            <div className="rounded-[10px] border border-dashed border-inkline bg-surface px-6 py-12 flex flex-col items-center gap-4 text-center max-w-[1282px]">
              <Icon name="event_upcoming" className="!text-[44px] text-blue" />
              <p className="font-display font-extrabold uppercase text-[20px]">Não há eventos no momento</p>
              <p className="text-[15px] text-muted max-w-[52ch]">Quando o CDI anunciar um novo evento, ele aparece aqui com local, data e o link de inscrição. Enquanto isso, siga o <a className="text-blue underline underline-offset-2" href={LINKS.instagram} target="_blank" rel="noopener">@cdi.unicamp</a>.</p>
            </div>
          ) : (
            <ul className="grid gap-x-[38px] gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
              {proximos.map((ev, k) => (
                <li key={ev.id ?? k} className="flex flex-col rounded-[10px] border border-inkline bg-surface p-[7px] pb-0 overflow-hidden">
                  <img src={ev.imagem} alt={`Arte de ${ev.nome}`} className="w-full aspect-[383/230] rounded-[10px] object-cover bg-avatar" />
                  <div className="flex flex-col gap-4 px-[15px] pt-7 flex-1">
                    <h3 className="font-display font-extrabold uppercase text-[20px]">{ev.nome}</h3>
                    <p className="text-[17px] leading-snug">{ev.descricao}</p>
                    <dl className="text-[17px] leading-snug">
                      <div className="flex gap-1.5"><dt className="font-bold">LOCAL:</dt><dd>{ev.local}</dd></div>
                      <div className="flex gap-1.5"><dt className="font-bold">DATA:</dt><dd>{ev.data}</dd></div>
                    </dl>
                    <LinkBtn id={`inscricao-${k}`} href={ev.link} className="mt-auto self-center w-full max-w-[259px] h-[49px] rounded-t-[11px] bg-blue text-onblue font-bold text-[15px] uppercase">Inscreva-se</LinkBtn>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
