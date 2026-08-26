"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type AnimatedInViewProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
};

export default function AnimatedInView({
  children,
  delay = 0,
  ...props
}: AnimatedInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
