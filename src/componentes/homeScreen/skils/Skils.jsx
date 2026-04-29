import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Database,
  Layout,
  Globe,
  Terminal,
  ArrowRight,
  Sparkles
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-blue-600 to-cyan-500",
    glow: "rgba(59, 130, 246, 0.5)",
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Engine",
    icon: Terminal,
    color: "from-purple-600 to-indigo-500",
    glow: "rgba(139, 92, 246, 0.5)",
    skills: ["Node.js", "Express.js", "Socket.io", "REST APIs", "Knex.js"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    glow: "rgba(16, 185, 129, 0.5)",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Amazon S3", "Redis"]
  },
  {
    title: "Mobile Solution",
    icon: Globe,
    color: "from-orange-500 to-rose-500",
    glow: "rgba(249, 115, 22, 0.5)",
    skills: ["Flutter", "Dart", "Firebase Auth", "State Management", "Native APIs"]
  }
];

/* ─────────────────────────────────────────
   Individual Skill Card with its own ref
───────────────────────────────────────── */
const SkillCard = ({ category, index }) => {
  const ref = useRef(null);
  /* once:false — retriggers every time card scrolls in/out */
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={isInView
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 60, scale: 0.92 }
      }
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
      className="relative group"
    >
      {/* Dynamic Glow Overlay */}
      <motion.div
        style={{
          background: `radial-gradient(circle, ${category.glow}, transparent 80%)`,
        }}
        className="absolute -inset-0.5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl z-0"
      />

      <div className="relative p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 backdrop-blur-xl overflow-hidden z-10 h-full flex flex-col group-hover:border-white/20 transition-colors duration-500">
        {/* Floating wrapper */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col h-full"
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-2xl relative`}>
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            <category.icon className="w-8 h-8 text-white relative z-10" />
          </div>

          <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter italic">
            {category.title}
          </h3>

          <ul className="space-y-4 flex-grow">
            {category.skills.map((skill, si) => (
              <motion.li
                key={si}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -16 }
                }
                transition={{ duration: 0.45, delay: 0.3 + si * 0.08, ease: "easeOut" }}
                className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                <span className="font-medium">{skill}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400 flex items-center gap-2">
              <Sparkles size={12} className="animate-spin-slow" />
              Expert Level
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
const Skils = () => {
  const navigate = useNavigate();

  const headerRef = useRef(null);
  const btnRef    = useRef(null);
  const headerInView = useInView(headerRef, { once: false, margin: "-60px" });
  const btnInView    = useInView(btnRef,    { once: false, margin: "-60px" });

  return (
    <section
      id="skills"
      className="bg-[#020817] py-32 px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={headerInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-xs font-bold uppercase tracking-[0.4em] mb-8"
          >
            Capabilities
          </motion.div>

          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={headerInView
              ? { y: 0, opacity: 1 }
              : { y: 40, opacity: 0 }
            }
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase italic"
          >
            Technical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">
              Expertise
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={headerInView ? { width: "120px" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"
          />
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 perspective-1000">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div ref={btnRef} className="flex justify-center">
          <motion.button
            onClick={() => navigate("/expertises")}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(79, 70, 229, 0.9)",
              boxShadow: "0 20px 40px rgba(79, 70, 229, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 24 }}
            animate={btnInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
            }
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-center gap-6 px-12 py-6 rounded-3xl bg-indigo-600 text-white font-black uppercase tracking-[0.2em] text-sm overflow-hidden transition-all shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            Explore Full Stack
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-all duration-300" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Skils;
