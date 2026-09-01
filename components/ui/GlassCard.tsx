"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary" | "accent" | "none";
  hoverEffect?: boolean;
  borderGlow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = "",
  glowColor = "none",
  hoverEffect = true,
  borderGlow = false,
  ...props
}) => {
  const reducedMotion = useReducedMotion();

  const glowClasses = {
    primary: "hover:shadow-neon-primary hover:border-primary/40",
    secondary: "hover:shadow-neon-secondary hover:border-secondary/40",
    accent: "hover:shadow-neon-accent hover:border-accent/40",
    none: "hover:border-white/20",
  };

  const borderClass = borderGlow
    ? "border border-white/20"
    : "border border-white/10";

  return (
    <motion.div
      whileHover={
        hoverEffect && !reducedMotion
          ? { y: -5, transition: { duration: 0.25, ease: "easeOut" } }
          : undefined
      }
      className={`relative rounded-2xl bg-white/[0.04] backdrop-blur-xl transition-all duration-300 ${borderClass} ${
        hoverEffect ? glowClasses[glowColor] : ""
      } ${className}`}
      {...props}
    >
      {/* Subtle top glare edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
};
