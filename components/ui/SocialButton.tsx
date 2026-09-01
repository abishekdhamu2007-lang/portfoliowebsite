"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Youtube, Mail, ExternalLink } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface SocialButtonProps {
  platform: "linkedin" | "github" | "youtube" | "email";
  href: string;
  label: string;
  className?: string;
  showLabel?: boolean;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  platform,
  href,
  label,
  className = "",
  showLabel = false,
}) => {
  const reducedMotion = useReducedMotion();

  const getIcon = () => {
    switch (platform) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "github":
        return <Github className="w-5 h-5" />;
      case "youtube":
        return <Youtube className="w-5 h-5" />;
      case "email":
        return <Mail className="w-5 h-5" />;
      default:
        return <ExternalLink className="w-5 h-5" />;
    }
  };

  const getColors = () => {
    switch (platform) {
      case "linkedin":
        return "hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_15px_rgba(10,102,194,0.35)]";
      case "github":
        return "hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.25)]";
      case "youtube":
        return "hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:shadow-[0_0_15px_rgba(255,0,0,0.35)]";
      case "email":
        return "hover:text-accent hover:border-accent/40 hover:shadow-neon-accent";
    }
  };

  return (
    <motion.a
      href={href}
      target={platform === "email" ? undefined : "_blank"}
      rel={platform === "email" ? undefined : "noopener noreferrer"}
      aria-label={label}
      title={label}
      whileHover={!reducedMotion ? { y: -3, scale: 1.05 } : undefined}
      whileTap={!reducedMotion ? { scale: 0.95 } : undefined}
      className={`group relative inline-flex items-center gap-2 p-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent ${getColors()} ${className}`}
    >
      {getIcon()}
      {showLabel && <span className="text-sm font-medium pr-1">{label}</span>}
      {/* Tooltip on hover if label is hidden */}
      {!showLabel && (
        <span className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 rounded-md bg-dark-800 px-2 py-1 text-xs text-white opacity-0 shadow-lg border border-white/10 transition-opacity duration-200 group-hover:opacity-100 whitespace-nowrap z-30">
          {label}
        </span>
      )}
    </motion.a>
  );
};
