"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, ArrowUpRight } from "lucide-react";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { GradientButton } from "@/components/ui/GradientButton";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionIds = NAV_ITEMS.map((item) => item.href.replace("#", ""));
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Logo / Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 text-white focus:outline-none focus:ring-2 focus:ring-accent rounded-lg p-1"
          aria-label={`${SITE_CONFIG.name} Home`}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-neon-primary group-hover:shadow-neon-accent transition-all duration-300">
            <div className="h-full w-full rounded-[11px] bg-dark-900 flex items-center justify-center">
              <span className="font-mono text-xs font-bold bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                &lt;{SITE_CONFIG.initials}&gt;
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-white group-hover:text-accent transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[10px] font-mono text-muted tracking-wider uppercase">
              Web Developer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur-lg shadow-inner"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/[0.05]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/80 to-secondary/80 shadow-neon-primary"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          <GradientButton
            variant="outline"
            size="sm"
            href="#contact"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
              handleNavClick(e, "#contact")
            }
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Let&apos;s Talk
          </GradientButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden relative p-2 rounded-xl bg-white/[0.05] border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/10 bg-dark-900/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-primary/30 to-secondary/20 text-accent border border-accent/20"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </a>
                );
              })}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                <GradientButton
                  variant="primary"
                  size="md"
                  href="#contact"
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                    handleNavClick(e, "#contact")
                  }
                  className="w-full justify-center"
                >
                  Contact Me
                </GradientButton>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
