"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  LayoutGrid,
  Smartphone,
  Sparkle,
  CheckCircle2,
  Bot,
  ArrowRight,
} from "lucide-react";
import { SERVICES, ServiceItem } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    const props = { className: "w-6 h-6" };
    switch (iconName) {
      case "Globe": return <Globe {...props} />;
      case "LayoutGrid": return <LayoutGrid {...props} />;
      case "Smartphone": return <Smartphone {...props} />;
      case "Sparkle": return <Sparkle {...props} />;
      case "CheckCircle2": return <CheckCircle2 {...props} />;
      case "Bot": return <Bot {...props} />;
      default: return <Globe {...props} />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="What I Offer"
          title="Services & Capabilities"
          subtitle="Delivering high-quality web engineering solutions, clean interface implementations, and modern development practices."
        />

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, idx) => (
            <motion.div key={service.id} variants={fadeIn("up", 0.08 * idx)}>
              <GlassCard
                className="p-7 h-full flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Ambient glow accent */}
                <div
                  className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full blur-3xl opacity-15 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none"
                  style={{ backgroundColor: service.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="p-3.5 rounded-2xl bg-dark-900 border border-white/15 shadow-md group-hover:scale-110 transition-transform duration-300"
                      style={{ color: service.color }}
                    >
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="font-mono text-xs text-muted">
                      0{service.id}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 transition-colors">
                    Standard Compliant
                  </span>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-xs font-mono text-accent opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
