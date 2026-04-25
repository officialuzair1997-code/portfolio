import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";


const ProjectCard = ({
  title,
  description,
  image,
  badges,
  techStack,
  bgColor,
  externalLink,
  githubLink,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 flex flex-col h-full group shadow-xl">
      <div
        className={`w-full h-48 ${bgColor} relative overflow-hidden flex items-center justify-center`}
      >
        {externalLink ? (
          externalLink.startsWith("/") ? (
            <Link to={externalLink} className="w-full h-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
              />
            </Link>
          ) : (
            <a href={externalLink} target="_blank" rel="noopener noreferrer" className="w-full h-full">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
              />
            </a>
          )
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {externalLink ? (
            externalLink.startsWith("/") ? (
              <Link to={externalLink}>{title}</Link>
            ) : (
              <a href={externalLink} target="_blank" rel="noopener noreferrer">{title}</a>
            )
          ) : (
            title
          )}
        </h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 text-blue-400 text-xs font-semibold rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          {externalLink && (
            externalLink.startsWith("/") ? (
              <Link
                to={externalLink}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={18} />
              </Link>
            ) : (
              <a
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink size={18} />
              </a>
            )
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projectscreen = ({ projects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Keep observing to trigger animation again if needed
            observer.observe(entry.target);
          } else {
            // Optional: Reset visibility when scrolling back up
            // setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Adjust this value as needed
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950"
    >
      <div className={`transition-all duration-1000 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a
            specific problem or explore new technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Projectscreen;
