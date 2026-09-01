"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Zap,
  ShoppingBag,
  HeartHandshake,
  Code2,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { PROJECTS, ProjectItem } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Projects: React.FC = () => {
  const getProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case "iot-energy-monitor":
        return (
          <div className="h-48 w-full bg-gradient-to-br from-cyan-950/60 via-dark-900 to-indigo-950/60 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="flex justify-between items-center z-10">
              <span className="p-2.5 rounded-xl bg-accent/10 border border-accent/30 text-accent">
                <Zap className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-cyan-200 border border-cyan-400/20">
                IoT + Web
              </span>
            </div>
            <div className="z-10 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 mb-1 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Live Metrics Dashboard</span>
              </div>
              <div className="text-[11px] text-slate-400">Real-time Energy Analytics & Telemetry</div>
            </div>
          </div>
        );

      case "swiggy-model":
        return (
          <div className="h-48 w-full bg-gradient-to-br from-amber-950/60 via-dark-900 to-orange-950/60 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="flex justify-between items-center z-10">
              <span className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <ShoppingBag className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-200 border border-amber-500/20">
                Food Delivery Model
              </span>
            </div>
            <div className="z-10 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 mb-1 text-amber-400">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span>Interactive Ordering Flow</span>
              </div>
              <div className="text-[11px] text-slate-400">Responsive Menus & Cart UX Prototype</div>
            </div>
          </div>
        );

      case "food-wastage-management":
        return (
          <div className="h-48 w-full bg-gradient-to-br from-emerald-950/60 via-dark-900 to-teal-950/60 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="flex justify-between items-center z-10">
              <span className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <HeartHandshake className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-200 border border-emerald-500/20">
                Sustainability Platform
              </span>
            </div>
            <div className="z-10 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 mb-1 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Food Donation & Awareness</span>
              </div>
              <div className="text-[11px] text-slate-400">Redistribution & Information Portal</div>
            </div>
          </div>
        );

      case "personal-portfolio":
      default:
        return (
          <div className="h-48 w-full bg-gradient-to-br from-indigo-950/60 via-dark-900 to-purple-950/60 p-6 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
            <div className="flex justify-between items-center z-10">
              <span className="p-2.5 rounded-xl bg-primary/20 border border-primary/40 text-indigo-300">
                <Code2 className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-200 border border-indigo-500/30">
                Current Showcase
              </span>
            </div>
            <div className="z-10 font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 mb-1 text-indigo-300">
                <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                <span>Next.js 14 + Framer Motion</span>
              </div>
              <div className="text-[11px] text-slate-400">Awwwards-grade Developer Portfolio</div>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Work"
          title="Featured Projects"
          subtitle="Explore practical applications spanning IoT telemetry, responsive web models, sustainability platforms, and modern frontend development."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project, idx) => (
            <motion.div key={project.id} variants={fadeIn("up", 0.1 * idx)}>
              <TiltCard maxTilt={6} className="h-full">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden shadow-card-elevation group">
                  <div>
                    {/* Visual Card Header */}
                    {getProjectVisual(project)}

                    {/* Content Body */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-medium text-accent">
                          {project.category}
                        </span>
                        {project.badge && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10">
                            {project.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                        &ldquo;{project.description}&rdquo;
                      </p>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-dark-800/80 border border-white/10 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-2 flex items-center justify-between border-t border-white/[0.08] gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition-all duration-200"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-cyan-300 bg-accent/10 hover:bg-accent/20 border border-accent/30 px-4 py-2.5 rounded-xl transition-all duration-200"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
