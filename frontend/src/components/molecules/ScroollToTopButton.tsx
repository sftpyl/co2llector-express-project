"use client";
import { useEffect, useState } from "react";
import ButtonNavBar from "../atoms/ButtonNavBar";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState("⬆");
  const [textOnHover, setTextOnHover] = useState("⬆ ");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };

    const handleResize = () => {
      const isSmall = window.innerWidth < 640;
      setText(isSmall ? "⬆" : "⬆ ");
      setTextOnHover(isSmall ? "⬆" : "⬆");
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <ButtonNavBar
      text={text}
      textOnHover={textOnHover}
      fontSize="text-md"
      onClick={scrollToTop}
      classname="w-[55px] h-[52px] rounded-[20px] p-0!"
    />
  );
};

export default ScrollToTopButton;
