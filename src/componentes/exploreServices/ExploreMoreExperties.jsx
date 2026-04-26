import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Cpu, Layers, Zap, Shield, Database, Layout, 
  Terminal, BarChart, Smartphone, Globe, ArrowLeft, ArrowRight, Rocket
} from "lucide-react";

const ExploreMoreExperties = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const expertises = [
    {
      category: "Frontend Excellence",
      icon: Layout,
      color: "from-blue-500 to-cyan-400",
      skills: ["React & Next.js", "TypeScript Integration", "Tailwind CSS Architecture", "Framer Motion Animations"]
    },
    {
      category: "Backend & Systems",
      icon: Terminal,
      color: "from-purple-600 to-indigo-500",
      skills: ["Node.js & Express", "Socket.io Real-time", "Restful & GraphQL APIs", "Redis Caching Layers"]
    },
    {
      category: "Data & Storage",
      icon: Database,
      color: "from-emerald-500 to-teal-400",
      skills: ["MongoDB Modeling", "SQL/PostgreSQL Admin", "Firebase Real-time Data", "Amazon S3 Management"]
    }
  ];

  const pillars = [
    { title: "Scalability", desc: "Building systems that grow with your user base seamlessly.", icon: Zap },
    { title: "Security", desc: "Rigorous data protection and secure authentication flows.", icon: Shield },
    { title: "Clean Code", desc: "Maintainable, documented, and professional codebases.", icon: Layers }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-12 lg:pt-36 lg:pb-20 relative z-10">
        {/* Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Page Header */}
        <div className="max-w-4xl mb-24">
          <h4 className="text-indigo-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Technical Mastery</h4>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
            Pushing the Boundaries of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
              Modern Web Logic
            </span>
          </h1>
          <div className="h-2 w-24 bg-indigo-600 rounded-full mb-8"></div>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            A deep dive into my advanced technical capabilities, architectural principles, 
            and the specialized toolsets used to build world-class digital products.
          </p>
        </div>

        {/* Core Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {expertises.map((exp, i) => (
            <div key={i} className="group p-10 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity`} />
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <exp.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8 tracking-tight group-hover:text-white transition-colors">{exp.category}</h3>
              
              <ul className="space-y-5">
                {exp.skills.map((skill, si) => (
                  <li key={si} className="flex items-center gap-4 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Project Pillars & Principles */}
        <div className="bg-indigo-600/5 rounded-[48px] p-12 md:p-20 mb-32 border border-indigo-500/10 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-16 text-center tracking-tight">Core Project Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, pi) => (
              <div key={pi} className="text-center group">
                <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
                  <pillar.icon className="w-10 h-10 text-indigo-400" />
                </div>
                <h4 className="text-white font-bold text-2xl mb-6 tracking-tight">{pillar.title}</h4>
                <p className="text-slate-400 leading-relaxed text-base">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Tech Stack List */}
        <div className="mb-32">
          <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-6 uppercase tracking-widest text-sm opacity-50">
            Advanced Tech Arsenal
            <div className="h-px grow bg-white/[0.08]"></div>
          </h3>
          
          <div className="flex flex-wrap gap-5">
            {[
              "Redis", "Docker", "AWS S3", "Socket.io", "Framer Motion", "Shadcn UI", 
              "PostgreSQL", "TypeORM", "Knex.js", "Zustand", "Redux Toolkit", 
              "Formik", "Vite", "ESLint", "Tailwind CSS", "Next.js 14", "TypeScript"
            ].map((tech) => (
              <span key={tech} className="px-8 py-4 rounded-2xl bg-white/[0.02] border border-white/5 text-slate-400 text-base font-semibold hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/5 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="relative p-12 md:p-20 rounded-[48px] bg-gradient-to-br from-indigo-900 to-indigo-950 border border-white/5 overflow-hidden group/cta">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">Ready for a Technical Consult?</h3>
              <p className="text-indigo-200/70 max-w-xl mb-0 text-xl leading-relaxed">Let's discuss how we can leverage these advanced technologies to scale your business and deliver exceptional users experiences.</p>
            </div>
            <a 
              href="#contact" 
              className="flex items-center gap-4 px-12 py-6 rounded-3xl bg-white text-indigo-950 font-black hover:bg-slate-100 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95 whitespace-nowrap text-lg"
            >
              Get in Touch <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreMoreExperties;