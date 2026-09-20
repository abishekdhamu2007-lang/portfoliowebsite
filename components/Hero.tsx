"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  MapPin,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { GradientButton } from "@/components/ui/GradientButton";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { TiltCard } from "@/components/ui/TiltCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Hero: React.FC = () => {
  const techBadges = [
    { name: "React", icon: "⚛️", color: "#61DAFB", x: "-left-6", y: "top-10", delay: 0 },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", x: "right-2", y: "top-6", delay: 0.2 },
    { name: "Python", icon: "🐍", color: "#3776AB", x: "-left-8", y: "bottom-16", delay: 0.4 },
    { name: "SQL", icon: "🗄️", color: "#00758F", x: "right-2", y: "bottom-12", delay: 0.6 },
    { name: "Tailwind CSS", icon: "🎨", color: "#38B2AC", x: "right-16", y: "-top-6", delay: 0.8 },
  ];

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Hero Content & Bio */}
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col items-start text-left z-10"
          >
            {/* Status / Welcome Pill */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="text-xs font-mono font-medium text-accent tracking-wide">
                Available for Projects & Opportunities
              </span>
            </motion.div>

            {/* Intro and Name Heading */}
            <motion.div variants={fadeIn("up", 0.2)} className="space-y-2">
              <p className="text-lg md:text-xl font-medium text-slate-300">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {SITE_CONFIG.name}
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typewriter Roles */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              className="mt-4 flex items-center text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200"
            >
              <span className="text-muted mr-2">&gt;</span>
              <TypewriterText words={SITE_CONFIG.roles} />
            </motion.div>

            {/* Hero Description Quote Block */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="mt-6 relative pl-4 border-l-2 border-primary/60 max-w-2xl"
            >
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal italic">
                &ldquo;{SITE_CONFIG.bio}&rdquo;
              </p>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              variants={fadeIn("up", 0.5)}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary: View Projects */}
              <GradientButton
                variant="primary"
                size="lg"
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                View Projects
              </GradientButton>

              {/* Secondary: Download Resume */}
              <GradientButton
                variant="secondary"
                size="lg"
                href={SITE_CONFIG.resumePath}
                download={SITE_CONFIG.resumeFileName}
                target="_blank"
                icon={<Download className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Download Resume
              </GradientButton>

              {/* Ghost: Contact Me */}
              <GradientButton
                variant="ghost"
                size="lg"
                href="#contact"
                icon={<Mail className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Contact Me
              </GradientButton>
            </motion.div>

            {/* Fast Summary Metrics */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="mt-10 pt-6 border-t border-white/10 grid grid-cols-3 gap-4 w-full max-w-lg"
            >
              <div className="flex flex-col">
                <span className="text-xs text-muted font-mono uppercase">Focus</span>
                <span className="text-sm font-semibold text-white mt-0.5">Frontend & Web</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted font-mono uppercase">Interests</span>
                <span className="text-sm font-semibold text-accent mt-0.5">AI & Analytics</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted font-mono uppercase">Location</span>
                <span className="text-sm font-semibold text-white mt-0.5">Salem, India</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Portrait Showcase Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* Ambient Background Glow Mesh */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-secondary/25 to-accent/25 rounded-3xl blur-3xl -z-10 animate-pulse-glow" />

            <TiltCard maxTilt={8} className="w-full max-w-sm shadow-card-elevation">
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-white/20 via-primary/30 to-secondary/30 shadow-2xl backdrop-blur-2xl">
                <div className="relative rounded-[22px] overflow-hidden bg-dark-900 border border-white/10">
                  
                  {/* Portrait Image */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={SITE_CONFIG.profileImage}
                      alt={SITE_CONFIG.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 420px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Fade Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-85" />
                  </div>

                  {/* Glassmorphic Info Banner */}
                  <div className="p-5 relative -mt-14 z-10 bg-dark-900/90 backdrop-blur-xl border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {SITE_CONFIG.name}
                        </h3>
                        <p className="text-xs font-mono text-accent">
                          Web Developer &amp; Frontend Engineer
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Available</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" /> Salem, India
                      </span>
                      <span className="text-slate-300">TCS Trained</span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Floating Technology Badges around Portrait */}
            {techBadges.map((badge, idx) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  y: {
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  opacity: { duration: 0.5, delay: badge.delay },
                }}
                className={`absolute ${badge.x} ${badge.y} hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-dark-900/90 border border-white/20 backdrop-blur-xl shadow-neon-primary text-xs font-mono text-white z-20`}
              >
                <span>{badge.icon}</span>
                <span className="font-medium">{badge.name}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
