"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ButtonNavBar from "../atoms/ButtonNavBar";
import AnimatedLink from "../atoms/AnimatedLink";
import iconBrand from "../../../public/svg/iconBrand.svg";
import iconNavEmail from "../../../public/svg/icon-navEmail.svg";
import iconNavAvatar from "../../../public/svg/icon-navAvatar.svg";
import iconNavSearch from "../../../public/svg/icon-navSearch.svg";
import iconNavWorld from "../../../public/svg/icon-navWorld.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={` text-white w-full  flex justify-between items-center px-8 py-4   transition-shadow duration-300 glass-ui ${
        isScrolled
          ? " shadow-[0_0_30px_-10px_rgba(255,255,255,0.5)]"
          : "shadow-none"
      }`}
    >
      <div className="flex items-center gap-10">
        <Image
          src={iconBrand}
          alt="Icon Brand CO2llector"
          height={54}
          width={54}
        />
      </div>
      <div className="flex justify-center items-center gap-12 text-sm font-semibold">
        <AnimatedLink href="/projects" text="PROJECT" />
        <AnimatedLink href="/insights" text="INSIGHTS" />
        <AnimatedLink href="/blog" text="BLOG" />
        <AnimatedLink href="/map" text="MAP" />
        <AnimatedLink href="/learnmore" text="LEARN MORE" />
        <Image
          src={iconNavSearch}
          height={26}
          width={16}
          alt="icon navigation search"
        />
        <Image
          src={iconNavEmail}
          height={26}
          width={16}
          alt="icon navigation email"
        />
        <Image
          src={iconNavAvatar}
          height={26}
          width={16}
          alt="icon navigation profile"
        />
        <Image
          src={iconNavWorld}
          height={26}
          width={16}
          alt="icon navigation world"
        />
        <ButtonNavBar text="DONATE" classname="px-6 py-2.5 font-medium" />
      </div>
    </div>
  );
};

export default Navbar;
