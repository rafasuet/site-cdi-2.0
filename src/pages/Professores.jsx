import { useState } from "react";
import Icon from "../components/Icon.jsx";
import LinkBtn from "../components/LinkBtn.jsx";
import PageIntro from "../components/PageIntro.jsx";
import { useProfessores } from "../hooks/useDados.js";
import { INTRO_PROF } from "../data/professores.js";

/* Minúsculas e sem acentos, para a busca ignorar "á", "ç" etc. */
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export default function Professores() {
  const [busca, setBusca] = useState("");
  const { dados: professores } = useProfessores();
  const lista = professores.filter((x) => norm(x.nome + " " + (x.area || "")).includes(norm(busca)));
  return (
    <>
      <PageIntro title="Conheça os nossos professores" rule="w-[280px] sm:w-[837px]" text={INTRO_PROF} />
      <section className="border-l-[5px] border-line">
        <div className="gutter mx-auto max-w-page py-14 sm:py-16 lg:px-[61px] flex flex-col gap-10">
          <label htmlFor="busca-professor" className="flex items-center gap-3 max-w-[828px] rounded-[10px] border border-line bg-surface px-4 h-[50px]">
            <Icon name="search" className="text-blue" />
            <input id="busca-professor" type="search" value={busca} onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar por nome ou área de pesquisa" className="flex-1 min-w-0 bg-transparent outline-none text-[16px] placeholder:text-muted" />
            <span className="text-sm text-muted tabular-nums shrink-0">{lista.length} de {professores.length}</span>
          </label>
          <ul className="flex flex-col gap-10">
            {lista.map((x) => (
              <li key={x.nome} className="grid grid-cols-[110px_minmax(0,1fr)] sm:grid-cols-[237px_minmax(0,1fr)] max-w-[828px] rounded-[10px] border border-line bg-surface overflow-hidden">
                <img src={x.foto} alt={`Foto de ${x.nome}`} loading="lazy" className="w-full h-full min-h-[150px] sm:min-h-[245px] object-cover object-top bg-avatar" />
                <div className="flex flex-col gap-4 p-4 sm:px-7 sm:py-[18px] min-w-0">
                  <h2 className="font-display font-extrabold text-blue text-[22px] sm:text-[30px] leading-tight">{x.nome}</h2>
                  {x.area && (
                    <div className="text-[15px] sm:text-[16px] leading-snug">
                      <p className="font-bold uppercase">Área de pesquisa</p>
                      <p>{x.area}</p>
                    </div>
                  )}
                  <p className="flex items-center gap-2 text-[14px] sm:text-[15px] text-muted min-w-0">
                    <Icon name="mail" className="!text-[18px] text-blue shrink-0" />
                    <span className="select-all break-all">{x.email}</span>
                  </p>
                  <LinkBtn href={x.link} className="mt-auto self-start h-[29px] px-6 sm:w-[223px] rounded-[20px] bg-blue text-onblue font-bold text-[13px] uppercase">
                    {x.rotulo}
                  </LinkBtn>
                </div>
              </li>
            ))}
            {lista.length === 0 && <li className="text-muted">Nenhum professor encontrado para “{busca}”.</li>}
          </ul>
        </div>
      </section>
    </>
  );
}
