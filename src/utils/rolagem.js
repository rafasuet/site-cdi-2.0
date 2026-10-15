/* Rola suavemente até o elemento com o id dado (espera a página renderizar). */
export function irPara(id) {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 60);
}
