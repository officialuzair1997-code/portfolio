import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../../assets/my image/uzair_image.png";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.4,
      },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950 py-24 px-6 md:px-12 lg:px-24 overflow-hidden relative"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] animate-blob [animation-delay:2s] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black mb-16 tracking-tight"
        >
          <span className="text-white">ABOUT</span>
          <span className="text-blue-500"> ME</span>
          <div className="h-1.5 w-24 bg-blue-600 mt-4 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              I'm <span className="text-blue-400 font-bold border-b-2 border-blue-400/30">Muhammad Uzair</span>, 
              a Full-Stack Developer with over <span className="text-white font-bold">4 years</span> of experience 
              crafting high-performance digital experiences.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-400 leading-relaxed">
              Specializing in the <span className="text-indigo-300 font-semibold text-white/90">MERN stack</span> and <span className="text-blue-300 font-semibold text-white/90">Flutter</span>, 
              I build scalable backend systems and fluid mobile applications that solve real-world problems.
            </motion.p>

            <motion.div variants={itemVariants} className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 rounded-l-2xl group-hover:w-2 transition-all duration-300" />
              <p className="text-slate-300 italic text-lg pl-2">
                "I have a passion for modern technology and am continually exploring advancements in AI, automation, and future-driven development."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">4+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10 mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white">50+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Projects Done</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 group animate-float">
              {/* Outer Glows */}
              <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-2xl group-hover:bg-blue-500/30 transition-all duration-700" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 opacity-50 blur-md group-hover:opacity-80 animate-pulse" />

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl z-10">
                <img
                  src={profileImg}
                  alt="Muhammad Uzair"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-indigo-600/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -right-6 px-6 py-3 bg-blue-600 text-white rounded-2xl font-black italic tracking-tighter shadow-xl z-20 transform -rotate-6 border-b-4 border-blue-800">
                DEVELOPER
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

