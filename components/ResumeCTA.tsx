"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeIn } from "@/lib/animations";

export const ResumeCTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          <GlassCard className="relative overflow-hidden p-8 sm:p-12 md:p-16 border border-white/20 bg-gradient-to-br from-indigo-950/40 via-dark-900/90 to-purple-950/40 shadow-2xl">
            {/* Background Decorative Mesh & Glow */}
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md text-xs font-mono text-accent">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s Build Something Great
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
                &ldquo;Explore my experience, skills, certifications, and projects in my resume.&rdquo;
              </p>

              {/* Resume Fast Badges */}
              <div className="flex flex-wrap justify-center gap-4 py-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                  <span>Frontend Focused</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>TCS Certified</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Verified Credentials</span>
                </span>
              </div>

              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <GradientButton
                  variant="primary"
                  size="lg"
                  href={SITE_CONFIG.resumePath}
                  download={SITE_CONFIG.resumeFileName}
                  target="_blank"
                  icon={<Download className="w-4 h-4" />}
                >
                  Download Resume
                </GradientButton>

                <GradientButton
                  variant="secondary"
                  size="lg"
                  href="#contact"
                  icon={<Mail className="w-4 h-4" />}
                >
                  Contact Me
                </GradientButton>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
