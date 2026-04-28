"use client";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "p" | "span";

interface TextRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: HeadingTag;
}

export default function TextReveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "h1",
}: TextRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const MotionTag = motion.create(Tag);

  if (prefersReducedMotion) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0, 0, 1] }}
    >
      {children}
    </MotionTag>
  );
}
