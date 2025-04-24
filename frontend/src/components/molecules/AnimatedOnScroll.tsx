"use client";
import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AnimatedOnScrollProps {
  children: ReactNode;
  initial?: any | object;
  animate?: any | object;
  transition?: object;
  once?: boolean;
}

const AnimatedOnScroll = ({
  children,
  initial = { opacity: 0, y: 90 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 1.3 },
  once = true,
}: AnimatedOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : {}}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
