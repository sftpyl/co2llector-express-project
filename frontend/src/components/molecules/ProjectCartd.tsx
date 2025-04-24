"use client";
import Image from "next/image";
import Link from "next/link";
import useImageError from "@/lib/hooks/useImageError";
import imageNotFound from "../../../public/images/image-not-found.webp";

interface ProjectCardProps {
  title?: string;
  alternativeTitle: string;
  imageUrl: string;
  author?: string;
  date?: string;
}

const ProjectCartd = ({
  title,
  alternativeTitle,
  imageUrl,
  author = "Unknown Author",
  date = "Unknown Date",
}: ProjectCardProps) => {
  const { src, onError } = useImageError(
    imageNotFound,
    imageUrl || "https://pedromc.design/images/maia-thumb-pmc-p-800.jpg"
  );

  return (
    <div className="relative min-w-[240px] h-[250] md768:min-w-[308px] md768:h-[400px] xl1440:min-w-[416px] xl1440:h-[440px] rounded-4xl md768:rounded-[42.5px] xl1440:rounded-[50px] overflow-hidden shadow-xl bg-black/20 px-[25.5px] ">
      <Image
        src={src}
        fill
        alt={alternativeTitle}
        className="object-cover transition-all duration-500 hover:scale-105 contrast-125 "
        onError={onError}
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Etiqueta superior */}
      <div className="absolute top-6 left-6  text-white text-xs  px-2.5 py-1.5 rounded-[50px] backdrop-blur-3xl bg-black/40">
        PAPER
      </div>

      {/* Título en el centro */}
      <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
        <h3 className="text-white text-lg font-semibold drop-shadow-md">
          {alternativeTitle}
        </h3>
      </div>

      {/* Footer degradado */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 py-6 flex gap-1 justify-between backdrop-blur-2xl bg-black/40">
        <span className="text-xs text-white font-light">by {author}</span>
        <span className="text-xs text-white/70 tracking-wide">{date}</span>
      </div>
    </div>
  );
};

export default ProjectCartd;
