"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Linkedin,
  Github,
  Youtube,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SocialButton } from "@/components/ui/SocialButton";
import { fadeIn, staggerContainer } from "@/lib/animations";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Client-side simulation of email dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }, 1200);
  };

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 text-accent" />,
      label: "Email Address",
      value: SITE_CONFIG.contact.email,
      href: `mailto:${SITE_CONFIG.contact.email}`,
    },
    {
      icon: <Phone className="w-5 h-5 text-purple-400" />,
      label: "Phone Number",
      value: SITE_CONFIG.contact.phoneFormatted,
      href: `tel:${SITE_CONFIG.contact.phone}`,
    },
    {
      icon: <MapPin className="w-5 h-5 text-indigo-400" />,
      label: "Location",
      value: SITE_CONFIG.contact.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Connect"
          subtitle="Whether you have an inquiry, project proposition, or career opportunity, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6 text-white font-semibold text-lg">
                <MessageSquare className="w-5 h-5 text-accent" />
                <span>Send a Message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border ${
                        errors.name ? "border-rose-500/80" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border ${
                        errors.email ? "border-rose-500/80" : "border-white/10"
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Job Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border ${
                      errors.subject ? "border-rose-500/80" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, timeline, or inquiry..."
                    className={`w-full px-4 py-3 rounded-xl bg-dark-900/90 border ${
                      errors.message ? "border-rose-500/80" : "border-white/10"
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Feedback State Alert */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>
                        Thank you! Your message has been sent successfully. I will get back to you shortly.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-neon-primary hover:shadow-neon-secondary border border-indigo-400/30 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Right Column: Direct Contact Details & Social Hub */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {contactItems.map((item, idx) => (
                <GlassCard
                  key={idx}
                  className="p-5 flex items-center gap-4 group hover:border-accent/40 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/10 shrink-0 group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-mono text-muted uppercase tracking-wider block">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-white hover:text-accent transition-colors truncate block"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-white truncate">
                        {item.value}
                      </p>
                    )}
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Social Channels Card */}
            <GlassCard className="p-6 border border-white/10">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Professional Profiles</span>
              </h4>

              <div className="flex flex-wrap gap-3">
                <SocialButton
                  platform="linkedin"
                  href={SITE_CONFIG.contact.linkedin}
                  label="LinkedIn"
                  showLabel={true}
                />
                <SocialButton
                  platform="github"
                  href={SITE_CONFIG.contact.github}
                  label="GitHub"
                  showLabel={true}
                />
                <SocialButton
                  platform="email"
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  label="Email"
                  showLabel={true}
                />
                {/* YouTube marked clearly if placeholder */}
                <SocialButton
                  platform="youtube"
                  href="#"
                  label="YouTube [YOUR YOUTUBE]"
                  showLabel={false}
                />
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 text-xs text-slate-400 font-mono leading-relaxed">
                Preferred communication via Email or LinkedIn for fastest response.
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
