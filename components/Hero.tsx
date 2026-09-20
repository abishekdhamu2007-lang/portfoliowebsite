"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code,
  Sparkles,
  Terminal,
  FileCode,
  Database,
  Cpu,
  Layers,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { GradientButton } from "@/components/ui/GradientButton";
import { TypewriterText } from "@/components/ui/TypewriterText";
import { TiltCard } from "@/components/ui/TiltCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Hero: React.FC = () => {
  const techBadges = [
    { name: "React", icon: "⚛️", color: "#61DAFB", x: "-left-6", y: "top-12", delay: 0 },
    { name: "JavaScript", icon: "⚡", color: "#F7DF1E", x: "right-2", y: "top-6", delay: 0.2 },
    { name: "Python", icon: "🐍", color: "#3776AB", x: "-left-6", y: "bottom-12", delay: 0.4 },
    { name: "SQL", icon: "🗄️", color: "#00758F", x: "right-4", y: "bottom-8", delay: 0.6 },
    { name: "Tailwind CSS", icon: "🎨", color: "#38B2AC", x: "right-20", y: "-top-6", delay: 0.8 },
  ];

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content & Bio */}
          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col items-start text-left z-10"
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

          {/* Right Column: Code & Photo Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center lg:items-end gap-5"
          >
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />

            <TiltCard maxTilt={8} className="w-full max-w-lg shadow-2xl">
              <div className="relative rounded-2xl bg-dark-900/90 border border-white/15 backdrop-blur-2xl overflow-hidden shadow-2xl">
                
                {/* Visual Header with Developer Profile Bar */}
                <div className="p-4 bg-white/[0.04] border-b border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* Glowing Profile Avatar */}
                    <div className="relative group shrink-0">
                      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent opacity-75 blur-sm group-hover:opacity-100 transition duration-300" />
                      <div className="relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 border-white/20 bg-dark-900 shadow-lg">
                        <Image
                          src={SITE_CONFIG.profileImage}
                          alt={SITE_CONFIG.name}
                          width={56}
                          height={56}
                          priority
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{SITE_CONFIG.name}</span>
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <p className="text-[11px] font-mono text-accent">Web &amp; Frontend Developer</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.05] text-[11px] font-mono text-slate-300 border border-white/5">
                    <Code className="w-3.5 h-3.5 text-accent" />
                    <span>Developer.tsx</span>
                  </div>
                </div>

                {/* IDE Code Snippet Body */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-1.5 select-none bg-dark-950/60">
                  <div className="text-slate-500">// Modern Web Developer Profile</div>
                  <div>
                    <span className="text-secondary font-bold">const</span>{" "}
                    <span className="text-accent font-bold">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">name:</span>{" "}
                    <span className="text-emerald-400">&quot;Abishek D&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">role:</span>{" "}
                    <span className="text-emerald-400">&quot;Frontend & Web Developer&quot;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-300">coreStack:</span> [
                  </div>
                  <div className="pl-8 text-amber-300">
                    &quot;React&quot;, &quot;Next.js&quot;, &quot;JavaScript&quot;, &quot;Python&quot;, &quot;SQL&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-300">enthusiasms:</span> [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &quot;AI Tools&quot;, &quot;Data Analytics&quot;, &quot;UI/UX&quot;
                  </div>
                  <div className="pl-4">],</div>
                  <div className="pl-4">
                    <span className="text-slate-300">status:</span>{" "}
                    <span className="text-emerald-400">&quot;Ready to build high-impact web apps&quot;</span>
                  </div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-indigo-400">
                    export default developer;
                  </div>
                </div>

                {/* IDE Footer Bar */}
                <div className="px-4 py-2.5 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-accent">
                      <Terminal className="w-3 h-3" /> main*
                    </span>
                    <span>UTF-8</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Prettier Ready
                  </span>
                </div>
              </div>
            </TiltCard>

            {/* Floating Technology Pills around workspace */}
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
