import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
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
    icon: <Mail size={22} />,
    href: "mailto:uzair@example.com",
    label: "Email",
    color: "text-rose-400 border-rose-400/50 bg-rose-500/10",
  },
  {
    icon: <Github size={22} />,
    href: "https://github.com",
    label: "GitHub",
    color: "text-slate-200 border-slate-400/50 bg-slate-500/10",
  },
  {
    icon: <Linkedin size={22} />,
    href: "https://www.linkedin.com/in/muhammad-uzair-05921a365?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    label: "LinkedIn",
    color: "text-blue-400 border-blue-400/50 bg-blue-500/10",
  },
  {
    icon: <Instagram size={22} />,
    href: "https://instagram.com",
    label: "Instagram",
    color: "text-pink-400 border-pink-400/50 bg-pink-500/10",
  },
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  // Mouse Parallax Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothX, [0, 1000], [-30, 30]);
  const parallaxY = useTransform(smoothY, [0, 1000], [-30, 30]);
  const parallaxXSlow = useTransform(smoothX, [0, 1000], [-15, 15]);
  const parallaxYSlow = useTransform(smoothY, [0, 1000], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
        const t = setTimeout(() => setTyping(false), 2000);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020817] selection:bg-indigo-500/30">
      {/* ── Background Depth Layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950" />
      
      {/* Interactive Glowing Blobs */}
      <motion.div 
        style={{ x: parallaxXSlow, y: parallaxYSlow }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-violet-700/10 rounded-full blur-[100px] pointer-events-none" 
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        style={{ x: parallaxXSlow, y: parallaxYSlow, 
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
      />

      {/* ══════════════════════════════════════
          SIDEBAR — Social Links (Animated)
      ══════════════════════════════════════ */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: "circOut" }}
        className="fixed left-0 top-0 h-full z-50 hidden md:flex flex-col items-center justify-center gap-4 px-6"
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-slate-700/50" />
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.9 }}
            className={`group relative w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-700/40 bg-slate-900/40 backdrop-blur-md transition-all duration-300 ${link.color} shadow-lg shadow-black/20`}
          >
            {link.icon}
            <span className="absolute left-16 whitespace-nowrap bg-slate-800 text-slate-200 text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-slate-700 translate-x-2 group-hover:translate-x-0">
              {link.label}
            </span>
          </motion.a>
        ))}
        <div className="w-px h-24 bg-gradient-to-t from-transparent to-slate-700/50" />
      </motion.div>

      {/* ══════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        {/* Modern Label */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold uppercase tracking-[0.2em] px-5 py-2 rounded-full mb-10 backdrop-blur-md shadow-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Developing the Future
        </motion.div>

        {/* Hero Title */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[0.95] tracking-tight">
            Design. Code.<br />
            <span className="bg-gradient-to-r from-indigo-500 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Empower.
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold text-slate-500 uppercase tracking-widest mt-6">
            Muhammad Uzair
          </p>
        </motion.div>

        {/* Typewriter Refined */}
        <motion.div variants={itemVariants} className="h-12 flex items-center justify-center my-8">
          <span className="text-xl md:text-2xl font-semibold text-slate-400 flex items-center gap-2">
            Experienced
            <span className="text-white bg-indigo-600/20 px-3 py-1 rounded-lg border border-indigo-500/20">{displayed}</span>
            <motion.span 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1 h-8 bg-indigo-500" 
            />
          </span>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(99,102,241,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-10 py-5 rounded-2xl bg-indigo-600 text-white font-black uppercase tracking-widest text-sm transition-all duration-300"
          >
            <Mail size={18} className="group-hover:rotate-12 transition-transform" />
            Let's Talk
          </motion.a>
          
          <motion.a
            href={cvFile}
            download="MUHAMMAD UZAIR.pdf"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-white/10 text-white font-black uppercase tracking-widest text-sm transition-all duration-300"
          >
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute rounded-full bg-indigo-500/20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              blur: "40px"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

