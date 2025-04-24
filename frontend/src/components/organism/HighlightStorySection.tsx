import GlassContainer from "../atoms/GlassContainer";

const CARD1_TITLE = "CONCIENCIA AMBIENTAL";
const CARD1_TEXT = "Todo tu equipo puede ser parte del cambio utilizando Co2llector.";

const HighlightStorySection = () => {
  return (
    <div
      className="text-dark-gray container-padding pt-[110px] pb-[160px] flex justify-end relative w-screen min-h-[calc(100vh)] overflow-hidden bg-cover bg-contain bg-no-repeat filter brightness-110 "
      style={{
        backgroundImage: "url('/images/bg-highlightStorySection.jpg')",
      }}
    >
      <GlassContainer className="h-max text-[clamp(0.70rem,2.5vw,1rem)] text-white " isCardShadow={true}>
        <h5 className="font-bold">{CARD1_TITLE}</h5>
        <p>{CARD1_TEXT}</p>
      </GlassContainer>
    </div>
  );
};

export default HighlightStorySection;
