import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle2, Cpu, Globe, Rocket, ShieldCheck, Mail, Code, Settings, ArrowLeft 
} from "lucide-react";

const workflow = [
  { title: "Discovery", desc: "Understanding the project requirements and goals." },
  { title: "Design", desc: "Crafting a user-centric UI/UX and system architecture." },
  { title: "Development", desc: "Coding with precision using the latest technologies." },
  { title: "Testing", desc: "Rigorous quality assurance for a bug-free experience." },
  { title: "Deployment", desc: "Launching your product with full support and scaling." },
];

const ExploreServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-indigo-500/30">
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 lg:py-20 relative z-10">
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
            Detailed Service Catalog
          </span>
          <h1 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600">
              Digital Excellence
            </span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            I provide end-to-end development services, from initial discovery and prototyping to 
            final deployment and performance optimization.
          </p>
        </div>

        {/* Extended Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <ExtendedServiceItem 
            icon={ShieldCheck} 
            title="Secure Architectures" 
            desc="Enterprise-grade security and authentication for sensitive data handling." 
            color="blue"
          />
          <ExtendedServiceItem 
            icon={Cpu} 
            title="System Integration" 
            desc="Seamlessly connecting your third-party tools, APIs, and legacy platforms." 
            color="purple"
          />
          <ExtendedServiceItem 
            icon={Globe} 
            title="Cloud Architecture" 
            desc="Scalable infrastructure setup on AWS, Google Cloud, or Firebase." 
            color="emerald"
          />
          <ExtendedServiceItem 
            icon={Rocket} 
            title="Performance Tuning" 
            desc="Extreme optimization for Core Web Vitals and lightning-fast load speeds." 
            color="orange"
          />
          <ExtendedServiceItem 
            icon={Code} 
            title="Clean Code Audits" 
            desc="Modernizing legacy projects with clean, maintainable, and typed patterns." 
            color="pink"
          />
          <ExtendedServiceItem 
            icon={Settings} 
            title="DevOps & CI/CD" 
            desc="Automated testing and deployment pipelines for safe and rapid delivery." 
            color="indigo"
          />
        </div>

        {/* Workflow Section */}
        <div className="mb-32 bg-white/[0.02] border border-white/[0.05] rounded-[40px] p-8 md:p-16">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-6">My Execution Strategy</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                A structured approach ensures that every project is delivered on time, within budget, 
                and beyond expectations.
              </p>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-bold text-sm uppercase tracking-wide">ISO-Level Precision</span>
              </div>
            </div>

            <div className="lg:w-2/3 relative">
              <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-white/10 hidden sm:block" />
              <div className="space-y-12">
                {workflow.map((step, i) => (
                  <div key={i} className="relative flex flex-col sm:flex-row gap-8">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-black z-10 shrink-0 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-16 rounded-[40px] bg-gradient-to-br from-indigo-950 to-blue-950 border border-white/5 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-indigo-500/20 transition-all duration-700" />
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to initiate a project?</h3>
          <p className="text-slate-300 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
            I'm currently available for high-impact development contracts and collaborations.
          </p>
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-black hover:bg-slate-100 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Start Consultation <Rocket className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExtendedServiceItem = ({ icon: Icon, title, desc, color }) => {
  const colors = {
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    purple: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    orange: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    pink: "text-pink-400 bg-pink-400/10 border-pink-400/20",
    indigo: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  };

  return (
    <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border ${colors[color]} group-hover:scale-110 transition-all duration-500`}>
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="text-xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{desc}</p>
    </div>
  );
};

export default ExploreServices;