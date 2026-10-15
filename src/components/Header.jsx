import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "./Icon.jsx";
import { NAV } from "../data/navegacao.js";
import { IMAGENS } from "../data/imagens.js";
import { irPara } from "../utils/rolagem.js";

/* Link do menu: página (Link do router) ou âncora na mesma página (Contato). */
function ItemMenu({ item, ativo, aoClicar, className, children }) {
  if (item.ancora) {
    const rolar = (e) => { e.preventDefault(); aoClicar(); irPara(item.ancora); };
    return <a href={`#${item.ancora}`} onClick={rolar} className={className}>{children}</a>;
  }
  return <Link to={item.to} onClick={aoClicar} aria-current={ativo ? "page" : undefined} className={className}>{children}</Link>;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const fechar = () => setOpen(false);
  return (
    <header className="sticky z-30 bg-bg border-b border-line" style={{ top: "env(safe-area-inset-top, 0px)" }}>
      <div className="gutter mx-auto max-w-page flex items-center justify-between gap-6 py-5 lg:px-[82px]">
        <Link to="/" onClick={fechar} className="shrink-0">
          <img src={IMAGENS.logoEscuro} alt="CDI · Centro Acadêmico de Informática" className="logo-light h-[54px] w-[81px] object-contain" />
          <img src={IMAGENS.logoBranco} alt="CDI · Centro Acadêmico de Informática" className="logo-dark h-[54px] w-[81px] object-contain" />
        </Link>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV.map((item, i) => {
              const on = item.to === pathname;
              return (
                <li key={item.label} className={`flex items-center ${i > 0 ? "border-l border-fg ml-3 pl-3 xl:ml-4 xl:pl-4" : ""}`}>
                  <ItemMenu item={item} ativo={on} aoClicar={fechar}
                    className={`group flex items-center gap-2 py-1 font-display font-medium text-[14px] xl:text-[15px] uppercase tracking-[0.02em] text-fg hover:text-blue transition-colors border-b ${on ? "border-fg" : "border-transparent hover:border-blue"}`}>
                    <Icon name={item.icon} className="group-hover:text-blue" />
                    {item.label}
                  </ItemMenu>
                </li>
              );
            })}
          </ul>
        </nav>
        <button id="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="menu-mobile"
          className="lg:hidden flex items-center gap-2 rounded-md border border-line px-3 py-2 text-blue font-display font-semibold uppercase text-sm">
          <Icon name={open ? "close" : "menu"} /> Menu
        </button>
      </div>
      <nav id="menu-mobile" aria-label="Principal (celular)" hidden={!open} className="lg:hidden border-t border-hair">
        <ul className="gutter py-2">
          {NAV.map((item) => {
            const on = item.to === pathname;
            return (
              <li key={item.label}>
                <ItemMenu item={item} ativo={on} aoClicar={fechar}
                  className={`flex items-center gap-3 py-3 font-display font-medium uppercase text-[15px] ${on ? "text-blue" : "text-fg"}`}>
                  <Icon name={item.icon} className="text-blue" /> {item.label}
                </ItemMenu>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
