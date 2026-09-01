"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Palette,
  FileCode,
  Atom,
  Layout,
  Terminal,
  Binary,
  Cpu,
  Database,
  HardDrive,
  GitBranch,
  Github,
  Boxes,
  Table,
  BarChart3,
  PieChart,
  TrendingUp,
  Sparkles,
  BrainCircuit,
  Bot,
  Layers,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const getSkillIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5" };
    switch (iconName) {
      case "Code2": return <Code2 {...iconProps} />;
      case "Palette": return <Palette {...iconProps} />;
      case "FileCode": return <FileCode {...iconProps} />;
      case "Atom": return <Atom {...iconProps} />;
      case "Layout": return <Layout {...iconProps} />;
      case "Terminal": return <Terminal {...iconProps} />;
      case "Binary": return <Binary {...iconProps} />;
      case "Cpu": return <Cpu {...iconProps} />;
      case "Database": return <Database {...iconProps} />;
      case "HardDrive": return <HardDrive {...iconProps} />;
      case "GitBranch": return <GitBranch {...iconProps} />;
      case "Github": return <Github {...iconProps} />;
      case "Boxes": return <Boxes {...iconProps} />;
      case "Table": return <Table {...iconProps} />;
      case "BarChart3": return <BarChart3 {...iconProps} />;
      case "PieChart": return <PieChart {...iconProps} />;
      case "TrendingUp": return <TrendingUp {...iconProps} />;
      case "Sparkles": return <Sparkles {...iconProps} />;
      case "BrainCircuit": return <BrainCircuit {...iconProps} />;
      case "Bot": return <Bot {...iconProps} />;
      default: return <Code2 {...iconProps} />;
    }
  };

  const categories = [
    { id: "all", label: "All Skills" },
    ...SKILL_CATEGORIES.map((c) => ({ id: c.id, label: c.title })),
  ];

  const displayedCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Technical Competencies"
          title="Skills & Technologies"
          subtitle="A structured overview of frontend engineering, programming languages, databases, analytics tools, and AI workflows."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-neon-primary border border-indigo-400/40"
                  : "bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-12">
          {displayedCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-3 w-1 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-muted hidden sm:inline-block">
                  — {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <GlassCard
                    key={sIdx}
                    className="p-5 flex flex-col justify-between group hover:border-accent/40 transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className="p-2.5 rounded-xl bg-dark-800 border border-white/10 text-white group-hover:text-accent group-hover:scale-110 transition-all duration-300 shadow-sm"
                          style={{
                            color: category.color,
                          }}
                        >
                          {getSkillIcon(skill.iconName)}
                        </div>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.06] text-slate-300 border border-white/10">
                          {skill.tag}
                        </span>
                      </div>

                      <h4 className="text-base font-semibold text-white group-hover:text-accent transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {skill.levelDescription}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        Competency
                      </span>
                      <div className="flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="text-[11px] font-mono text-slate-200">
                          Active Stack
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
