import GlassContainer from "../atoms/GlassContainer";

const CARD1_TITLE = "SEA USTED TAMBIÉN UN REFERENTE AMBIENTAL";
const CARD1_TEXT =
  "Conviértase en un líder en sostenibilidad. Inspire con su ejemplo y genere un impacto positivo en su equipo y en su comunidad.";
const LakeHighlightSection = () => {
  return (
    <div
      className="text-dark-gray container-padding pt-[110px] pb-[160px] flex  relative w-screen min-h-[calc(100vh)] overflow-hidden bg-cover  bg-no-repeat filter brightness-110 "
      style={{
        backgroundImage: "url('/images/bg-lakeHighlightSection.jpg')",
      }}
    >
      <GlassContainer
        className="h-max text-[clamp(0.70rem,2.5vw,1rem)] text-white "
        isCardShadow={true}
      >
        <h5 className="font-bold">{CARD1_TITLE}</h5>
        <p>{CARD1_TEXT}</p>
      </GlassContainer>
    </div>
  );
};

export default LakeHighlightSection;
