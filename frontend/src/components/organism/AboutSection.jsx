import Image from "next/image"
import imageAboutSection from "../../../public/png/aboutSection.png"
import sheetsAboutSection from "../../../public/svg/sheetsAboutSection.svg"


const AboutSection = () => {
    return (
        <div className="bg-white container-padding w-full min-h-screen flex flex-col-reverse md768:flex-row justify-center items-center gap-6 xl1440:py-[160px] md768:py-[80px] py-10 font-montserrat ">
            <div className="w-[237px] h-[261px] md768:w-[316px] md768:h-[348px] xl1440:w-[422px] xl1440:h-[464px] relative ">
                <Image src={imageAboutSection} alt="About Us" fill />
            </div>
            <div className="flex flex-col gap-4 md768:gap-10 md768:flex-1 relative">
                <div className="flex flex-col gap-2 md768:gap-4">
                    <p className="font-bold text-dark-gray">ACERCA DE LA CALCULADORA DE HUELLA DE CARBONO</p>
                    <h5 className="text-[clamp(18px,5.5vw,37px)]  text-transparent text-gradient-green">
                        Podés imprimirle un sello verde a tu ambiente laboral para transformarlo.
                    </h5>

                    <p className="text-[clamp(14.5px,2.5vw,29px)] font-extralight text-dark-gray">
                        Reducí el impacto ambiental en tu empresa con acciones como optimizar el uso de energía, gestionar residuos, y fomentar prácticas sostenibles en tu equipo.
                    </p>
                </div>
                <p className="text-[clamp(13px,2.5vw,18px)] font-light text-green-dark">
                    Implementar acciones para reducir la huella ecológica como hacer un uso más eficiente de la energía, o una correcta gestión de los residuos, mejora la eficiencia, reduce costos y motiva a tu personal, brindando una imagen positiva y consciente.                 </p>
                <p className="text-[clamp(13px,2.5vw,18px)] font-light text-green-dark">
                    La calculadora de huella de carbono de Co2llector permite identificar fácilmente oportunidades de mejora, a fin de promover buenas prácticas laborales, y posicionar a tu empresa u organización como referente en responsabilidad ambiental y compromiso con un futuro más verde.
                </p>
                <Image src={sheetsAboutSection} alt="Sheets" className="absolute hidden md768:block w-[100%] h-[100%] xl1440:w-[100%] xl1440:h-[100%] " style={{ opacity: 0.085 }} />
            </div>
        </div>
    )
}

export default AboutSection