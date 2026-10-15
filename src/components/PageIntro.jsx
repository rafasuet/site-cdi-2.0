import SectionTitle from "./SectionTitle.jsx";

/* Abertura das páginas internas: título com régua e texto de introdução. */
export default function PageIntro({ title, rule, text }) {
  return (
    <section className="border-b border-line">
      <div className="gutter mx-auto max-w-page pt-14 pb-12 sm:pt-[70px] sm:pb-16 lg:px-[74px] flex flex-col gap-8">
        <SectionTitle as="h1" rule={rule}>{title}</SectionTitle>
        <p className="text-[16px] sm:text-[18px] leading-[1.6] max-w-[987px]">{text}</p>
      </div>
    </section>
  );
}
