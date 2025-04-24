"use client";
import Link from "next/link";
import { useState } from "react";

interface ButtonNavBarProps {
  text: string;
  textOnHover?: string;
  icon?: React.ReactNode;
  iconHover?: React.ReactNode;
  href?: string;
  width?: string;
  fontSize?: string;
  onClick?: () => void;
  classname?: string;
}

const ButtonNavBar = ({
  text,
  textOnHover,
  icon,
  iconHover,
  href,
  width,
  fontSize,
  onClick,
  classname,
}: ButtonNavBarProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`flex justify-between items-center px-2 py-0.5 rounded-[20px] border-[0.5px] border-white cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:text-black ${classname} ${width} ${fontSize} ${
        isHovered ? "flex-row-reverse" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(icon || iconHover) && <span>{isHovered ? iconHover : icon}</span>}
      <span className="mx-auto">
        {isHovered && textOnHover ? (
          textOnHover
        ) : href ? (
          <Link href={href}>{text}</Link>
        ) : (
          <span>{text}</span>
        )}
      </span>
    </div>
  );
};

export default ButtonNavBar;
