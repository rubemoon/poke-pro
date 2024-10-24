import React from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  children: React.ReactNode;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-4xl font-extrabold capitalize mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-700 dark:from-indigo-300 dark:to-purple-500"
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.h2>
  );
}