import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Download,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import cvFile from "../../../assets/MUHAMMAD UZAIR.pdf";

const roles = [
  "Web Developer",
  "Full Stack Developer",
  "React Native Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
];

const socialLinks = [
  {
    icon: <Mail size={20} />,
    href: "mailto:uzair@example.com",
    label: "Email",
    color: "hover:text-rose-400 hover:border-rose-400/50 hover:bg-rose-500/10",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com",
    label: "GitHub",
    color: "hover:text-slate-200 hover:border-slate-400/50 hover:bg-slate-500/10",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/muhammad-uzair-05921a365?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10",
  },
  {
    icon: <Instagram size={20} />,
    href: "https://instagram.com",
    label: "Instagram",
    color: "hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-500/10",
  },
];

const HeroSection = () => {
  const [visible, setVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020817]">
      {/* ── Deep dark gradient base ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950" />

      {/* ── Glowing radial blobs ── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/15 rounded-full blur-[100px] animate-pulse delay-700" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-violet-700/10 rounded-full blur-[90px]" />

      {/* ── Subtle grid overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ══════════════════════════════════════
          LEFT SIDEBAR — Social Links
      ══════════════════════════════════════ */}
      <div
        className={`fixed left-0 top-0 h-full z-50 hidden md:flex flex-col items-center justify-center gap-3 px-4 transition-all duration-1000 delay-500 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
        }`}
      >
        {/* Top line */}
        <div className="w-px flex-1 max-h-32 bg-gradient-to-b from-transparent to-slate-700/60" />

        {/* Icon buttons */}
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            style={{ transitionDelay: `${600 + i * 80}ms` }}
            className={`group relative w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm text-slate-400 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${link.color}`}
          >
            {link.icon}
            {/* Tooltip */}
            <span className="absolute left-12 whitespace-nowrap bg-slate-800 text-slate-200 text-xs font-medium px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700/50">
              {link.label}
            </span>
          </a>
        ))}

        {/* Bottom line */}
        <div className="w-px flex-1 max-h-32 bg-gradient-to-t from-transparent to-slate-700/60" />
      </div>

      {/* ══════════════════════════════════════
          MOBILE BOTTOM BAR — Social Links
      ══════════════════════════════════════ */}
      <div
        className={`fixed bottom-0 left-0 w-full z-50 flex md:hidden items-center justify-center gap-5 py-3 bg-slate-950/80 backdrop-blur-md border-t border-slate-800/60 transition-all duration-700 delay-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`w-9 h-9 flex items-center justify-center rounded-lg border border-slate-700/60 bg-slate-900/60 text-slate-400 transition-all duration-300 active:scale-95 ${link.color}`}
          >
            {link.icon}
          </a>
        ))}
      </div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <div
        className={`relative z-10 text-center px-6 md:px-12 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping inline-block" />
          Available for Work
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            Uzair
          </span>
        </h1>

        {/* Typewriter role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-semibold text-slate-300">
            {displayed}
            <span className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          I craft fast, scalable, and beautiful digital experiences — from sleek
          frontends to powerful backends.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 transition-all duration-300"
          >
            <Mail size={18} />
            Hire Me
          </a>
          <a
            href={cvFile}
            download="MUHAMMAD UZAIR.pdf"
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-600 text-slate-300 font-semibold hover:border-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 transition-all duration-300"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-500 hover:text-indigo-400 transition-all duration-700 delay-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
