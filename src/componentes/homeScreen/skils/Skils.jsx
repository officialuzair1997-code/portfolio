import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Database, 
  Layout, 
  Globe, 
  Terminal,
  ArrowRight
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-blue-600 to-cyan-500",
    skills: ["React.js", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend Engine",
    icon: Terminal,
    color: "from-purple-600 to-indigo-500",
    skills: ["Node.js", "Express.js", "Socket.io", "REST APIs", "Knex.js"]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    color: "from-emerald-500 to-teal-400",
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Amazon S3", "Redis"]
  },
  {
    title: "Mobile Solution",
    icon: Globe,
    color: "from-orange-500 to-rose-500",
    skills: ["Flutter", "Dart", "Firebase Auth", "State Management", "Native APIs"]
  }
];

const Skils = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#020817] py-24 px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-black text-white mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Expertise</span>
          </h2>
          <div className={`w-24 h-1.5 bg-indigo-600 mx-auto rounded-full transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-700 hover:border-indigo-500/40 group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                <category.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{category.title}</h3>
              <ul className="space-y-4">
                {category.skills.map((skill, si) => (
                  <li key={si} className="flex items-center gap-3 text-slate-400 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button 
            onClick={() => navigate("/expertises")}
            className="group flex items-center gap-4 px-10 py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-xl shadow-indigo-600/20 active:scale-95"
          >
            Explore More Expertise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skils;
