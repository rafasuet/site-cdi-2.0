import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { irPara } from "../utils/rolagem.js";

/* A cada navegação: rola até a âncora (ex.: /campus#cardapio) ou volta ao topo. */
export default function RolagemAutomatica() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) irPara(decodeURIComponent(hash.slice(1)));
    else window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);
  return null;
}
