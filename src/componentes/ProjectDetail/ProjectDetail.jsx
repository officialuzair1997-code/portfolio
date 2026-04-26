import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ExternalLink,
  Globe,
  CheckCircle2,
  Layout,
  Zap,
  Server,
  ArrowLeft,
  Database,
  Flame,
} from "lucide-react";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { townmisProjectsData } from "../../data/townmis-projects";

const iconMap = {
  frontend: <Layout className="w-5 h-5 text-blue-400" />,
  state: <Zap className="w-5 h-5 text-purple-400" />,
  backend: <Server className="w-5 h-5 text-green-400" />,
  database: <Database className="w-5 h-5 text-emerald-400" />,
  ui: <Layout className="w-5 h-5 text-sky-400" />,
  realtime: <Flame className="w-5 h-5 text-orange-400" />,
};

const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Case-insensitive lookup
  const project = townmisProjectsData[projectId?.toLowerCase()];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020817] flex items-center justify-center text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate("/")}
            className="text-blue-400 hover:underline"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  // Map gallery images to lightbox slides
  const slides = project.gallery?.map((item) => ({
    src: item.image,
    title: item.title,
    description: item.title,
  })) || [];

  return (
    <div className="min-h-screen bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950 text-white pt-10 pb-20 font-sans">
      {/* Glow blobs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors duration-200 mb-8 group"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Projects
        </button>

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-3">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:scale-105 active:scale-95"
            >
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Banner ── */}
        <div
          className="rounded-2xl overflow-hidden border border-white/10 mb-14 shadow-2xl group cursor-zoom-in"
          onClick={() => {
            setPhotoIndex(0);
            setIsOpen(true);
          }}
        >
          <img
            src={project.bannerImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </div>

        {/* ── Gallery Section ── */}
        <section className="mb-20">
          <SectionTitle>Project Gallery</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery?.map((item, index) => (
              <div
                key={index}
                className="space-y-3 group cursor-zoom-in"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500 group-hover:border-indigo-500/30 bg-slate-900/50">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      View Fullscreen
                    </span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors pl-1">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Content Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <SectionTitle>Overview</SectionTitle>
              <p className="text-slate-300 text-lg leading-relaxed">
                {project.intro}
              </p>
            </section>

            <section>
              <SectionTitle>Technical Architecture</SectionTitle>
              <p className="text-slate-400 leading-relaxed text-base">
                {project.description}
              </p>
            </section>

            <section>
              <SectionTitle>Key Deliverables</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features?.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/8 hover:border-indigo-500/40 hover:bg-white/[0.05] transition-all duration-300 group"
                  >
                    <div className="mt-0.5 p-2 rounded-lg bg-indigo-600/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8 lg:sticky lg:top-24 self-start">
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/20 transition-colors" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-500 mb-6 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-indigo-500" />
                Technology Stack
              </p>
              <div className="flex flex-col gap-5">
                {project.techStack?.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 group/t"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover/t:border-indigo-500/50 group-hover/t:bg-indigo-500/10 group-hover/t:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-300">
                      {iconMap[tech.type] || (
                        <Layout className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm tracking-tight group-hover/t:text-indigo-300 transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                        Expertise level
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-violet-900/40 border border-indigo-500/30 backdrop-blur-sm shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
                Project Status
              </p>
              <p className="text-white text-2xl font-black italic tracking-tight">
                PROFESSIONAL
              </p>
              <div className="h-1.5 w-full bg-slate-800 rounded-full mt-4 overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-indigo-500 to-violet-500" />
              </div>
              <span className="inline-flex items-center gap-2 mt-4 text-[10px] font-bold text-green-400 uppercase tracking-tighter">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                Validated Architecture
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Implementation */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={photoIndex}
        slides={slides}
        plugins={[Thumbnails, Zoom]}
      />
    </div>
  );
};

const SectionTitle = ({ children }) => (
  <h2 className="flex items-center gap-3 text-2xl font-black text-white mb-6 uppercase tracking-wider">
    <span className="w-2 h-6 bg-indigo-500 rounded-sm" />
    {children}
  </h2>
);

export default ProjectDetail;
