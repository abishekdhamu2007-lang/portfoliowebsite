"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  CheckCircle2,
  Code,
  Brain,
  Layers,
  BarChart,
  ShieldCheck,
  X,
  FileCheck,
} from "lucide-react";
import { CERTIFICATIONS, CertificationItem } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (iconType: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconType) {
      case "Code": return <Code {...props} />;
      case "Brain": return <Brain {...props} />;
      case "Layers": return <Layers {...props} />;
      case "BarChart": return <BarChart {...props} />;
      default: return <Award {...props} />;
    }
  };

  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Credentials"
          title="Certifications"
          subtitle="Industry-recognized certifications in frontend development, artificial intelligence, solution architecture, and data analytics."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div key={idx} variants={fadeIn("up", 0.1 * idx)}>
              <GlassCard
                className="p-6 h-full flex flex-col justify-between group hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Corner Glow */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: cert.color }}
                />

                <div>
                  {/* Top Badge & Issuer */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3 rounded-xl bg-dark-900 border border-white/15 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ color: cert.color }}
                    >
                      {getCertIcon(cert.iconType)}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-slate-300 border border-white/10">
                      {cert.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-indigo-300 font-medium mb-4">
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </div>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-300 hover:text-white hover:underline focus:outline-none focus:ring-1 focus:ring-accent rounded px-1"
                  >
                    <span>View Info</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certification Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative w-full max-w-lg rounded-2xl bg-dark-900 border border-white/20 p-6 md:p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/[0.05] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-3 rounded-xl bg-white/[0.05] border border-white/10"
                  style={{ color: selectedCert.color }}
                >
                  {getCertIcon(selectedCert.iconType)}
                </div>
                <div>
                  <span className="text-xs font-mono text-muted uppercase">
                    Certification Record
                  </span>
                  <h4 className="text-xl font-bold text-white">
                    {selectedCert.title}
                  </h4>
                </div>
              </div>

              <div className="space-y-4 my-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Issuing Organization:</span>
                  <span className="text-white font-semibold">{selectedCert.issuer}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-muted">Domain / Category:</span>
                  <span className="text-accent">{selectedCert.category}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted">Status:</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Completion
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <GradientButton
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedCert(null)}
                >
                  Close
                </GradientButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
