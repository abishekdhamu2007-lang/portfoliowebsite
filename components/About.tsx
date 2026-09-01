"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  Layout,
  BrainCircuit,
  BarChart2,
  Briefcase,
  Award,
  FileCheck2,
  FolderGit2,
  CheckCircle,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      title: "Frontend Engineering",
      desc: "Creating intuitive, fluid, and scalable UI components with React & modern web stacks.",
    },
    {
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      title: "Responsive & Modern Design",
      desc: "Architecting cross-device responsive layouts adhering to clean visual hierarchy.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5 text-purple-400" />,
      title: "AI Integration & Tools",
      desc: "Leveraging generative AI workflows to enhance developer productivity and smart experiences.",
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-emerald-400" />,
      title: "Data Analytics Insights",
      desc: "Applying foundational data analytics concepts, SQL querying, and insightful visualization.",
    },
  ];

  const milestones = [
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-400" />,
      badge: "Industry Exposure",
      title: "Web Development Internship",
      subtitle: "Hands-on UI development & testing",
      color: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/30",
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      badge: "Professional Training",
      title: "TCS iOS Young Professional",
      subtitle: "Industry fundamentals & workplace skills",
      color: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
    },
    {
      icon: <FileCheck2 className="w-6 h-6 text-cyan-400" />,
      badge: "Credentials",
      title: "4+ Certifications",
      subtitle: "Infosys, Google, GUVI & Forge Solutions",
      color: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/30",
    },
    {
      icon: <FolderGit2 className="w-6 h-6 text-emerald-400" />,
      badge: "Portfolio Work",
      title: "4+ Practical Projects",
      subtitle: "IoT solutions, web models & platforms",
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/30",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Background & Expertise"
          title="About Me"
          subtitle="A forward-thinking web developer combining clean code, responsive layouts, and emerging technologies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeIn("up", 0.1)} className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Crafting user-centric digital experiences with modern web technologies.
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {SITE_CONFIG.aboutParagraphs[0]}
              </p>
              <p className="text-slate-300 leading-relaxed">
                {SITE_CONFIG.aboutParagraphs[1]}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                {SITE_CONFIG.aboutParagraphs[2]}
              </p>
            </motion.div>

            {/* Core Interest Pillars */}
            <motion.div
              variants={staggerContainer(0.1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col gap-2 hover:border-white/20 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white/[0.05] w-fit">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Key Achievements & Milestones Grid */}
          <motion.div
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {milestones.map((item, idx) => (
              <motion.div key={idx} variants={fadeIn("up", 0.1 * idx)}>
                <GlassCard
                  className={`p-6 h-full flex flex-col justify-between bg-gradient-to-br ${item.color} border ${item.border}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-dark-900/80 border border-white/10 shadow-md">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/10 text-slate-200 border border-white/10">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-accent">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Milestone</span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
