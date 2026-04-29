import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Code, Smartphone, Pen, Puzzle, Cloud, Settings } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ─────────────────────────────────────────
   Service Data
───────────────────────────────────────── */
const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "I create sleek, high-performance websites using React, Next.js, and Tailwind CSS. My focus is on delivering fast, responsive, and user-friendly web applications.",
    gradient: "from-blue-600 to-indigo-600",
    glow: "rgba(99,102,241,0.3)",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I specialize in building cross-platform mobile applications with a native feel using Flutter. I develop beautiful and smooth apps for both Android and iOS.",
    gradient: "from-purple-600 to-violet-700",
    glow: "rgba(139,92,246,0.3)",
  },
  {
    icon: Pen,
    title: "UI/UX Design",
    description:
      "Good design is about creating a seamless user experience. I design and prototype in Figma, then translate those designs into pixel-perfect code.",
    gradient: "from-pink-500 to-rose-600",
    glow: "rgba(236,72,153,0.3)",
  },
];

const bottomServices = [
  {
    icon: Puzzle,
    title: "Backend & API Development",
    description:
      "I architect and build robust backend systems using Node.js, Express, and Knex. I deliver secure, scalable, and clean APIs for complex systems.",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description:
      "I build end-to-end SaaS platforms, including authentication, dashboards, and notifications. Modular, production-ready, and scalable solutions.",
    gradient: "from-orange-400 to-amber-500",
    glow: "rgba(251,146,60,0.3)",
  },
];

/* ─────────────────────────────────────────
   Magnetic Tilt Wrapper
───────────────────────────────────────── */
function TiltCard({ children }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Service Card
───────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="h-full"
    >
      <TiltCard>
        <motion.div
          className="group relative h-full bg-[#0d1424] border border-gray-800/60 rounded-2xl p-8 overflow-hidden cursor-default"
          whileHover={{
            borderColor: "transparent",
            boxShadow: `0 0 0 1.5px rgba(255,255,255,0.08), 0 20px 60px ${service.glow}`,
          }}
          transition={{ duration: 0.35 }}
        >
          {/* Radial glow behind card on hover */}
          <motion.div
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} pointer-events-none`}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.07 }}
            transition={{ duration: 0.4 }}
          />

          {/* Shimmer sweep */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <motion.div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[800ms] ease-in-out"
              style={{
                background:
                  "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.05) 50%, transparent 65%)",
              }}
            />
          </div>

          {/* Icon */}
          <motion.div
            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ scale: 1.15, rotate: -6 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
          >
            <service.icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Animated counter dot */}
          <div className="absolute top-6 right-6">
            <span
              className={`text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${service.gradient} opacity-40`}
            >
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <motion.h3
            className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text"
            style={{ "--gradient": service.gradient }}
          >
            <span
              className={`group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${service.gradient} transition-all duration-300`}
            >
              {service.title}
            </span>
          </motion.h3>

          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {service.description}
          </p>

          {/* Bottom accent line */}
          <motion.div
            className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${service.gradient} rounded-full`}
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />

          {/* Corner glow */}
          <div
            className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-25 blur-2xl transition-opacity duration-500`}
          />
        </motion.div>
      </TiltCard>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
const Services = () => {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, margin: "-100px" });
  
  const ctaRef = useRef(null);
  const isCtaInView = useInView(ctaRef, { once: false, margin: "-100px" });

  const allServices = [...services, ...bottomServices];

  return (
    <section
      className="relative bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950 py-28 px-6 overflow-hidden"
    >
      {/* Floating ambient orbs */}
      <motion.div
        className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-purple-700/6 blur-3xl pointer-events-none"
        animate={{ y: [0, -35, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/6 blur-3xl pointer-events-none"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Header ───────────────────────────── */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -16 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/8 text-purple-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            What I Offer
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
          >
            <span className="text-white">My </span>
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Services
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            I turn complex ideas into elegant digital solutions with a focus on
            performance and user experience.
          </motion.p>
        </div>

        {/* ── Top 3 Cards ────────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
          style={{ perspective: "1200px" }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom 2 Cards ─────────────────── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 max-w-4xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index + 3}
            />
          ))}
        </div>

        {/* ── CTA Button ─────────────────────── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex justify-center mt-18 pt-4"
        >
          <motion.button
            onClick={() => navigate("/all-services")}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm overflow-hidden border border-white/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Gradient fill on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
            />
            {/* Idle gradient outline */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-500/10 rounded-full" />

            <span className="relative z-10 text-white">Explore All Services</span>
            <motion.div
              className="relative z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 6, ease: "linear", repeat: Infinity }}
            >
              <Settings className="w-5 h-5 text-white" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
