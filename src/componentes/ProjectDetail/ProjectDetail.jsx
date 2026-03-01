import React, { useEffect } from "react";
import { Github, ExternalLink, Globe, CheckCircle2, Layout, Zap, Smartphone, Server } from "lucide-react";

const ProjectDetail = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectData = {
    title: "WatchMate",
    tags: ["Social", "Streaming"],
    githubUrl: "https://github.com",
    liveUrl: "https://watchmate-example.com",
    bannerImage: "https://res.cloudinary.com/dzt8b3mre/image/upload/v1740141380/vlv_m0o7p2.png",
    intro: "WatchMate is a self-hosted watch party application that lets you upload, stream, and sync videos with friends in real time. It's built for seamless, couple-friendly streaming with zero distractions or ads.",
    description: "WatchMate is a self-hosted watch-party platform that empowers you to upload, stream, and synchronize video playback with friends, all while chatting in real-time. Designed for a distraction-free, intimate experience, WatchMate supports private hosting, video sync, and chat features that keep everyone engaged.",
    techStack: [
      { name: "React", icon: <Layout className="w-5 h-5 text-blue-400" /> },
      { name: "Node.js", icon: <Server className="w-5 h-5 text-green-400" /> },
      { name: "Socket.io", icon: <Zap className="w-5 h-5 text-yellow-400" /> },
      { name: "Cloudflare R2", icon: <Globe className="w-5 h-5 text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <Globe className="w-5 h-5 text-sky-400" /> },
    ],
    features: [
      { title: "File Upload", desc: "Local upload of videos (up to 2 GB) or download via YouTube/direct links." },
      { title: "Visibility Options", desc: "Public (shared with the whole platform), or Private (restricted access via direct link)." },
      { title: "Streaming", desc: "Smooth playback served directly from Cloudflare R2." },
      { title: "Watch Party", desc: "Instant room creation via shared link, friends join and stream in sync." },
      { title: "Synchronization Controls", desc: "Playback managed by the host (play, pause, seek, speed control) ensuring all viewers stay perfectly synced." },
      { title: "In-Party Chat", desc: "Chat while watching, reply to messages, send reactions, and share images." },
      { title: "Outside-Party Chat", desc: "One-on-one messaging." },
    ],
  };

  return (
    <div className="min-h-screen bg-[#050a18] text-white pt-24 pb-20 animate-fade-in font-sans selection:bg-blue-500/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
              {projectData.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              {projectData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-5 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-sm font-bold backdrop-blur-xl shadow-inner"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group shadow-2xl"
              title="View Source on GitHub"
            >
              <Github className="w-6 h-6 text-gray-400 group-hover:text-white" />
            </a>
            <a
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold transition-all duration-300 flex items-center gap-3 shadow-xl shadow-blue-600/30 active:scale-95"
            >
              Launch App <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Banner Image Section */}
        <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 mb-24 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group ring-1 ring-white/10">
          <img
            src={projectData.bannerImage}
            alt="WatchMate Banner"
            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050a18] via-transparent to-transparent opacity-70"></div>
        </div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 items-start">
          {/* Left Column: Intro, Description & Features */}
          <div className="lg:col-span-2 space-y-24">
            {/* Intro */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-black mb-8 text-white tracking-tight flex items-center gap-4">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                Intro
              </h2>
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                <p className="text-gray-300 text-xl leading-relaxed font-medium">
                  {projectData.intro}
                </p>
              </div>
            </section>

            {/* Description */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-black mb-8 text-white tracking-tight flex items-center gap-4">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                Description
              </h2>
              <div className="space-y-8">
                <p className="text-gray-400 text-lg leading-relaxed">
                  {projectData.description}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-black mb-10 text-white tracking-tight flex items-center gap-4">
                <span className="w-1.5 h-8 bg-blue-500 rounded-full"></span>
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {projectData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/40 transition-all duration-500 group hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-blue-500/5"
                  >
                    <div className="p-3 rounded-2xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Tech Stack */}
          <div className="sticky top-32 space-y-10 animate-fade-in">
            <section className="p-10 rounded-[3rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/30 transition-all duration-1000"></div>
              <h2 className="text-2xl font-black mb-10 relative z-10 tracking-widest uppercase text-white/50 text-sm">
                Tech Stack
              </h2>
              <div className="flex flex-col gap-6 relative z-10">
                {projectData.techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-6 group/item"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-500 shadow-xl">
                      {tech.icon}
                    </div>
                    <span className="text-gray-300 font-bold text-lg group-hover/item:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Status */}
            <div className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-indigo-600/10 border border-blue-500/20 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <h3 className="font-black text-blue-400 mb-2 uppercase text-xs tracking-[0.3em] relative z-10">
                Availability
              </h3>
              <p className="text-white text-3xl font-black relative z-10 drop-shadow-lg">
                Production Ready
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

