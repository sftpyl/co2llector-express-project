"use client";
import ScrollToTopButton from "../molecules/ScroollToTopButton";

const columns = [
  {
    title: "INFORMATIONS",
    items: [
      "Traffic report",
      "F.A.Q.",
      "Privacy Policy",
      "About the Map",
      "Blogging Guidelines",
      "Terms of Service",
    ],
  },
  {
    title: "SERVICES",
    items: [
      "About Us",
      "Contact Us",
      "Consulting",
      "Afilliate Program",
      "Adversting",
    ],
  },
  {
    title: "CONNECT",
    items: ["Instagram", "Twitter", "Facebook", "YouTube", "LinkedIn"],
  },
];

const FooterColumn = ({ title, items }: { title: string; items: string[] }) => (
  <div className="relative flex gap-2.5">
    <p className="absolute rotate-90 origin-top-left backdrop-blur-2xl">
      {title}
    </p>
    <ul className="pl-2.5 flex flex-col gap-[18px]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="w-screen flex flex-col justify-center items-center relative overflow-hidden">

        <img
          src="/images/bg-FooterSection.jpg"
          alt="background Footer"
          className="absolute w-full h-full"
        />
      <div className="text-white relative  w-full flex flex-col justify-between items-center bg-black/40 backdrop-blur-xs bg-cover bg-no-repeat filter brightness-110">
        <div className="flex justify-between items-start py-[60px] w-full text-sm gap-8 flex-wrap container-padding">
          {columns.map((col, index) => (
            <FooterColumn key={index} title={col.title} items={col.items} />
          ))}
        </div>

        <div className="w-full flex justify-between items-center text-[22px]  py-5 px-8">
          <p>© 2025 CO2llector | All rights reserved</p>
          <ScrollToTopButton />
        </div>
      </div>
    </div>
  );
};

export default Footer;
