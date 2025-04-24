import GlassContainer from "../atoms/GlassContainer";

const CARD1_TITLE = "SEAMOS TODOS PARTE DEL CAMBIO";
const CARD1_TEXT =
  "El planeta nos necesita, el cambio climático amenaza la sostenibilidad de la Tierra. Promovamos juntos acciones responsables para hacer la diferencia.";

const SacredTreesMapSection = () => {
  return (
    <div
      className="text-dark-gray container-padding pt-[110px] pb-[160px] flex  justify-end relative w-screen min-h-[calc(100vh)] overflow-hidden bg-cover bg-contain bg-no-repeat filter brightness-110 "
      style={{
        backgroundImage: "url('/images/bg-sacredTreesMapSection.jpg')",
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

export default SacredTreesMapSection;
