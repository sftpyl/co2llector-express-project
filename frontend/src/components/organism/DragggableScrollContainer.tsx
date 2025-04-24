"use client";
import { useRef, useEffect, useState } from "react";

export default function DraggableScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updatePages = () => {
      const children = Array.from(container.children);
      const containerWidth = container.offsetWidth;

      if (children.length > 0) {
        const childWidth = (children[0] as HTMLElement).offsetWidth + 20; 
        const itemsPerPage = Math.floor(containerWidth / childWidth);
        const totalPages = Math.ceil(children.length / itemsPerPage);
        setPageCount(totalPages);
      }
    };

    const handleScroll = () => {
      if (!container) return;
      const scrollPos = container.scrollLeft;
      const pageWidth = container.offsetWidth;
      setCurrentPage(Math.round(scrollPos / pageWidth));
    };

    updatePages();
    container.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updatePages);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updatePages);
    };
  }, [children]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - containerRef.current!.offsetLeft;
    scrollLeft.current = containerRef.current!.scrollLeft;
  };

  const scrollToPage = (page: number) => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * page;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={() => (isDragging.current = false)}
        onMouseMove={(e) => {
          if (!isDragging.current || !containerRef.current) return;
          e.preventDefault();
          const x = e.pageX - containerRef.current.offsetLeft;
          const walk = (x - startX.current) * 1.5;
          containerRef.current.scrollLeft = scrollLeft.current - walk;
        }}
        onMouseLeave={() => (isDragging.current = false)}
        onTouchStart={(e) => {
          isDragging.current = true;
          startX.current = e.touches[0].pageX - containerRef.current!.offsetLeft;
          scrollLeft.current = containerRef.current!.scrollLeft;
        }}
        onTouchMove={(e) => {
          if (!isDragging.current || !containerRef.current) return;
          const x = e.touches[0].pageX - containerRef.current.offsetLeft;
          const walk = (x - startX.current) * 1.5;
          containerRef.current.scrollLeft = scrollLeft.current - walk;
        }}
        onTouchEnd={() => (isDragging.current = false)}
        className="flex overflow-x-scroll gap-5 px-5 py-5 cursor-grab active:cursor-grabbing select-none scrollbar-hide scroll-smooth"
      >
        {children}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToPage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentPage ? "bg-green-200 scale-130" : "bg-white"
            }`}
          />
        ))}
      </div>
    </>
  );
}
