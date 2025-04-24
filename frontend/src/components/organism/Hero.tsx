import GlassContainer from "../atoms/GlassContainer";
import ButtonNavBar from "../atoms/ButtonNavBar";
import separateSection from "../../../public/svg/separateSection.svg";
import Image from "next/image";
// 🧾 TEXTOS PRINCIPALES
const HERO_TITLE = "Calculadora de Huella de Carbono para Empresas";
const HERO_DESCRIPTION =
  "Medí el impacto ambiental que genera tu trabajo. Usá esta herramienta gratuita para conocer y mejorar tu desempeño sostenible.";
const HERO_BUTTON = "MIDE TU HUELLA ";
const HERO_BUTTON_TEXT = "CONOCE MAS";

// 🧾 CARDS DE ABAJO
const CARD1_TITLE = "ESG";
const CARD1_TEXT =
  "Evalúa el compromiso ambiental, social y de gobernanza de tu empresa, organismo de gobierno, u organización para medir su sostenibilidad y responsabilidad";

const CARD2_TITLE = "COMPROMETETE";
const CARD2_TEXT =
  "Las iniciativas sostenibles promueven prácticas responsables que cuidan el ambiente, impulsan la equidad y mejoran la gestión empresarial y gubernamental.";

const Hero = () => {
  return (
    <div
      className="relative w-screen min-h-[calc(100vh+8rem)] overflow-hidden bg-cover bg-center bg-no-repeat filter  "
      style={{
        backgroundImage: "url('/images/bg-section-hero.jpg')",
      }}
    >
      <div className="w-full flex flex-col gap-9 justify-between items-start pt-[100px] pb-[50px] text-white container-padding">
        <GlassContainer className="gap-3" isCardShadow={true}>
          <h1 className="text-[clamp(1.25rem,3vw,3rem)] font-medium whitespace-pre-line leading-[1.2]">
            {HERO_TITLE}
          </h1>
          <p className="text-[clamp(0.90rem,2.5vw,1.40rem)] font-light">
            {HERO_DESCRIPTION}
          </p>
          <div className="flex w-full justify-between items-center">
            <ButtonNavBar
              text={HERO_BUTTON}
              width="w-max"
              classname="t px-2 py-2 md:px-6 sm:py-2.5 text-xs md:text-base"
            />
            <p className=" font-bold text-2xl">{HERO_BUTTON_TEXT}</p>
          </div>
        </GlassContainer>

        <div className="flex flex-col sm:flex-row w-full gap-6 items-stretch">
          <GlassContainer className="basis-full sm:basis-1/2 text-[clamp(0.70rem,2.5vw,1rem)] ">
            <h5>{CARD1_TITLE}</h5>
            <p>{CARD1_TEXT}</p>
          </GlassContainer>
          <GlassContainer className="basis-full sm:basis-1/2 text-[clamp(0.70rem,2.5vw,1rem)] ">
            <h5>{CARD2_TITLE}</h5>
            <p>{CARD2_TEXT}</p>
          </GlassContainer>
        </div>
      </div>
      <Image
        src={separateSection}
        alt="separador"
        className="absolute -bottom-40 left-0 w-full  "
        style={{ filter: "brightness(1)" }}
      />
    </div>
  );
};

export default Hero;
