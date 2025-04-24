import ButtonNavBar from "../atoms/ButtonNavBar";
import sheetsAboutSection from "../../../public/svg/sheetsAboutSection.svg";
import Image from "next/image";

const ContributionInfoSection = () => {
  return (
    <div className="text-white bg-gradient-green container-padding pt-[110px] pb-[160px] flex flex-col md768:flex-row justify-end gap-14 relative w-screen min-h-[calc(100vh)] ">
      <div className="flex flex-col gap-10 flex-1 relative">
        <Image
          src={sheetsAboutSection}
          alt="Sheets"
          className="absolute -top-40 hidden md768:block w-[100%] h-[100%] xl1440:w-[100%] xl1440:h-[100%] "
          style={{ opacity: 0.15 }}
        />
        <div>
          <h5 className="uppercase text-[clamp(1.40rem,2.5vw,1.8125rem)] font-light">
            How can you contribute.
          </h5>
        </div>
        <div className="flex flex-col gap-8 text-[clamp(0.82rem,2.5vw,1.125rem)]">
          <p>
            Georeferencing and registering sacred trees in Southeast Asia
            through crowdsourcing on a web platform can have numerous benefits
            for cultural conservation. By registering these trees and their
            associated cultural practices, we can help preserve traditional
            beliefs and practices that have been passed down through
            generations.
          </p>
          <p>
            This can lead to the identification and preservation of culturally
            significant sites, which in turn can promote a sense of pride in
            cultural heritage. By involving communities in the registration
            process, we can raise awareness about the importance of sacred trees
            and promote a sense of cultural diversity.
          </p>
          <p>
            This can also serve as an educational resource for students,
            scholars, and the general public, while also creating economic
            opportunities for local communities. Overall, registering sacred
            trees can help preserve cultural heritage and promote understanding
            and appreciation of cultural diversity, which is essential for
            maintaining a healthy and thriving global community.
          </p>
        </div>
        <div>
          <ButtonNavBar text="READ MORE" classname="w-max px-6 py-2.5" />
        </div>
      </div>

      {/** SEGUNDA COLUMNA */}
      <div className="flex flex-col gap-10 flex-1 relative">
        <Image
          src={sheetsAboutSection}
          alt="Sheets"
          className="absolute hidden md768:block w-[100%] h-[100%] xl1440:w-[100%] xl1440:h-[100%] "
          style={{ opacity: 0.15 }}
        />

        <div>
          <h5 className="uppercase text-[clamp(1.40rem,2.5vw,1.8125rem)] font-light">
            How did this project come about?
          </h5>
        </div>
        <div className="flex flex-col gap-8 text-[clamp(0.82rem,2.5vw,1.125rem)]">
          <p>
            Creating a web platform for crowdsourcing the geotagging and logging
            of sacred trees in Southeast Asia would have significant benefits
            for conservation efforts in the region. By compiling and verifying
            data on the locations of these sacred trees, the platform would help
            raise awareness of their cultural and ecological significance and
            provide valuable information for conservationists and researchers.
          </p>
          <p>
            Furthermore, the platform would enable local communities to take an
            active role in the conservation of their cultural and natural
            heritage and help promote sustainable development practices.
          </p>
          <p>
            Ultimately, the success of this initiative will depend on the active
            participation and commitment of stakeholders.
          </p>
          <p>Would you like to know more? Go to project details.</p>
        </div>
        <div className="z-50!">
          <ButtonNavBar text="DISCOVER ME" classname="w-max px-6 py-2.5 " />
        </div>
      </div>
    </div>
  );
};

export default ContributionInfoSection;
