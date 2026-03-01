import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Smartphone,
  Server,
  Wrench,
  Languages as LanguagesIcon,
  Workflow as WorkflowIcon,
} from "lucide-react";

const skillsData = {
  frontend: {
    title: "Frontend",
    icon: <Code2 className="text-blue-500" />,
    color: "blue",
    list: [
      "TypeScript",
      "Tailwind",
      "JavaScript",
      "Next.js",
      "React",
      "CSS3",
      "HTML5",
    ],
  },
  mobile: {
    title: "Mobile",
    icon: <Smartphone className="text-green-500" />,
    color: "green",
    list: ["React Native", "Flutter", "Dart"],
  },
  backend: {
    title: "Backend",
    icon: <Server className="text-purple-500" />,
    color: "purple",
    list: [
      "PostgreSQL",
      "Node.js",
      "Git",
      "Firebase",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  tools: {
    title: "Tools",
    icon: <Wrench className="text-yellow-500" />,
    color: "yellow",
    list: ["GitHub", "VS Code", "Figma", "Postman", "Docker", "AWS", "Jira"],
  },
  languages: {
    title: "Languages",
    icon: <LanguagesIcon className="text-red-500" />,
    color: "red",
    list: ["JavaScript", "TypeScript", "Python", "Java", "Dart"],
  },
  other: {
    title: "Other",
    icon: <WorkflowIcon className="text-pink-500" />,
    color: "pink",
    list: ["REST APIs", "GraphQL", "WebSockets", "Microservices", "CI/CD"],
  },
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Animation */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-16 transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
            }`}
        >
          <span className="text-white">My</span>
          <span className="text-blue-500"> Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(skillsData).map((category, index) => (
            <div
              key={index}
              style={{ transitionDelay: `${index * 150}ms` }} // Staggered effect
              className={`bg-slate-800/50 p-6 rounded-2xl border border-slate-700 backdrop-blur-sm shadow-xl 
                hover:border-blue-500/50 hover:shadow-blue-500/10 transition-all duration-700 transform
                ${isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-20 scale-95"
                }`}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-900 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.list.map((skill, sIndex) => (
                  <span
                    key={sIndex}
                    className={`bg-${category.color}-500/10 text-${category.color}-400 border border-${category.color}-500/20 px-3 py-1 rounded-lg text-sm font-medium hover:bg-${category.color}-500 hover:text-white transition-colors duration-300`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button Animation */}
        <div
          className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
        >
          <button className="relative group px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-2xl transition-all hover:shadow-blue-500/40 hover:scale-105 active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              Explore More Expertise <Code2 size={20} />
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
