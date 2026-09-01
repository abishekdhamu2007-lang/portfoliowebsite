"use client";

import React from "react";
import { ArrowUp, Heart, Code2 } from "lucide-react";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import { SocialButton } from "@/components/ui/SocialButton";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
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
    <footer className="relative border-t border-white/10 bg-dark-900/80 backdrop-blur-xl pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Monogram Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-secondary p-[1px] shadow-neon-primary">
                <div className="h-full w-full rounded-[11px] bg-dark-900 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold bg-gradient-to-r from-accent to-indigo-400 bg-clip-text text-transparent">
                    &lt;{SITE_CONFIG.initials}&gt;
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white block">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-xs font-mono text-muted">
                  Web Developer | Frontend Developer
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Designing and developing modern, responsive, and user-centric digital web experiences with precision and scalable code.
            </p>

            {/* Social Icons Hub */}
            <div className="flex items-center gap-2 pt-2">
              <SocialButton
                platform="linkedin"
                href={SITE_CONFIG.contact.linkedin}
                label="LinkedIn"
              />
              <SocialButton
                platform="github"
                href={SITE_CONFIG.contact.github}
                label="GitHub"
              />
              <SocialButton
                platform="email"
                href={`mailto:${SITE_CONFIG.contact.email}`}
                label="Email"
              />
              <SocialButton
                platform="youtube"
                href="#"
                label="YouTube [YOUR YOUTUBE]"
              />
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-slate-400 hover:text-accent transition-colors font-medium text-xs sm:text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Summary Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Direct Inquiries
            </h4>
            <p className="text-xs font-mono text-slate-400">
              <span className="block text-muted">Email:</span>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="text-slate-200 hover:text-accent transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </p>
            <p className="text-xs font-mono text-slate-400">
              <span className="block text-muted">Location:</span>
              <span className="text-slate-200">{SITE_CONFIG.contact.location}</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1">
              Built with Next.js &amp; Tailwind
            </span>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
