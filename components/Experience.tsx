"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { EXPERIENCES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Journey & Training"
          title="Experience & Learning"
          subtitle="Real-world internship exposure and professional development programs shaping my engineering foundation."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent opacity-50" />

          <motion.div
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-12"
          >
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  variants={fadeIn(isEven ? "right" : "left", 0.1 * idx)}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div className="h-9 w-9 rounded-full bg-dark-900 border-2 border-accent flex items-center justify-center shadow-neon-accent">
                      {idx === 0 ? (
                        <Briefcase className="w-4 h-4 text-accent" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-purple-400" />
                      )}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`pl-12 md:pl-0 w-full md:w-[calc(50%-2rem)] ${
                      isEven ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <GlassCard className="p-6 md:p-7 border border-white/10 hover:border-accent/40 shadow-xl transition-all duration-300">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono font-medium text-accent">
                          <Sparkles className="w-3 h-3" />
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-muted flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-sm font-medium text-indigo-300 mt-1 mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>{exp.organization}</span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Detailed Bullet Points */}
                      <div className="space-y-2 mb-5">
                        {exp.points.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Covered */}
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-[11px] font-mono text-muted uppercase tracking-wider block mb-2">
                          Key Areas of Exposure:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
