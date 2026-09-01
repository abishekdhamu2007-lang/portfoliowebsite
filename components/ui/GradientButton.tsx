"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface GradientButtonProps extends Omit<HTMLMotionProps<"button">, "children" | "onClick"> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  href?: string;
  download?: boolean | string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<any>) => void;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  href,
  download,
  target,
  rel,
  className = "",
  onClick,
  ...props
}) => {
  const reducedMotion = useReducedMotion();

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm font-medium",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-primary hover:shadow-neon-secondary border border-indigo-400/30",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 border border-white/20 hover:border-white/30 backdrop-blur-md",
    ghost:
      "text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10",
    outline:
      "border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent hover:shadow-neon-accent",
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      {icon && iconPosition === "left" && <span className="transition-transform duration-200">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="transition-transform duration-200">{icon}</span>}
    </span>
  );

  const baseClasses = `relative inline-flex items-center justify-center rounded-xl overflow-hidden cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-dark-900 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        onClick={onClick}
        whileHover={!reducedMotion ? { scale: 1.03 } : undefined}
        whileTap={!reducedMotion ? { scale: 0.98 } : undefined}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={!reducedMotion ? { scale: 1.03 } : undefined}
      whileTap={!reducedMotion ? { scale: 0.98 } : undefined}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
