"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : "text-left"} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-primary/30 bg-primary/10 text-xs font-mono uppercase tracking-wider text-accent backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
        <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full ${
          centered ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
};
