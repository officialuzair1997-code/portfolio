import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

/* ─────────────────────────────────────────
   Magnetic-tilt 3-D card wrapper
───────────────────────────────────────── */
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

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
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Project Card
───────────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProjectCard = ({
  title,
  description,
  image,
  badges,
  techStack,
  bgColor,
  externalLink,
  githubLink,
  index,
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "-100px" });

  return (
    <TiltCard className="h-full">
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={cardVariants}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 flex flex-col h-full group shadow-xl relative"
        whileHover={{
          borderColor: "rgba(99,102,241,0.6)",
          boxShadow: "0 0 40px rgba(99,102,241,0.18), 0 20px 60px rgba(0,0,0,0.5)",
        }}
      >
        {/* Shimmer sweep on hover */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
          <motion.div
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
            style={{
              background:
                "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%)",
            }}
          />
        </div>

        {/* Image */}
        <div className={`w-full h-48 ${bgColor} relative overflow-hidden flex items-center justify-center`}>
          {externalLink ? (
            externalLink.startsWith("/") ? (
              <Link to={externalLink} className="w-full h-full">
                <motion.img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </Link>
            ) : (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                <motion.img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </a>
            )
          ) : (
            <motion.img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
            {externalLink ? (
              externalLink.startsWith("/") ? (
                <Link to={externalLink}>{title}</Link>
              ) : (
                <a href={externalLink} target="_blank" rel="noopener noreferrer">{title}</a>
              )
            ) : title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">{description}</p>

          {/* Badges with stagger */}
          <div className="flex flex-wrap gap-2 mb-4">
            {badges.map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
                transition={{ delay: 0.05 * i + (index * 0.1), duration: 0.3 }}
                className="px-3 py-1 bg-indigo-600/10 border border-indigo-500/25 text-indigo-400 text-xs font-semibold rounded-full"
              >
                {badge}
              </motion.span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, i) => (
                <motion.span
                  key={i}
                  whileHover={{ y: -2, backgroundColor: "rgba(99,102,241,0.15)" }}
                  className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full transition-colors duration-200"
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-4">
            {externalLink && (
              externalLink.startsWith("/") ? (
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <Link to={externalLink} className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink size={18} />
                  </Link>
                </motion.div>
              ) : (
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 400 }}>
                  <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </motion.div>
              )
            )}
            {githubLink && (
              <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: "spring", stiffness: 400 }}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Github size={18} />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

/* ─────────────────────────────────────────
   Section
───────────────────────────────────────── */
const Projectscreen = ({ projects }) => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950"
    >
      {/* Floating ambient orbs */}
      <motion.div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-600/8 blur-3xl pointer-events-none"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-blue-600/8 blur-3xl pointer-events-none"
        animate={{ y: [0, 25, 0], x: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/8 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Featured Work
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight"
          >
            My{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-500">
              Projects
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-indigo-400 to-purple-500"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "100%" } : { width: "0%" }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </motion.p>
        </div>

        {/* Cards Grid — each card manages its own trigger now */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              badges={project.badges}
              techStack={project.techStack}
              bgColor={project.bgColor}
              externalLink={project.externalLink}
              githubLink={project.githubLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projectscreen;
