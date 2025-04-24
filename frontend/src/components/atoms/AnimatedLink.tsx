"use client";
import Link from "next/link";

interface AnimatedLinkProps {
  href: string;
  text: string;
  className?: string;
}

const AnimatedLink = ({ href, text, className }: AnimatedLinkProps) => {
  return (
    <Link href={href} className={`group relative overflow-hidden inline-block ${className}`}>
      {/* Texto Original */}
      <span className="block transition-all duration-300 ease-in-out transform group-hover:translate-y-full group-hover:opacity-0   
 ">
        {text}
      </span>

      {/* Texto que aparece desde arriba */}
      <span className="absolute left-0 top-0 block transition-all duration-300 ease-in-out transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        {text}
      </span>
    </Link>
  );
};

export default AnimatedLink;
