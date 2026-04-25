import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    const { current } = domRef;
    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <section
      ref={domRef}
      className="min-h-screen bg-[#020817] bg-gradient-to-br from-slate-950 via-[#06091f] to-indigo-950 py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Animation */}
        <h2
          className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <span className="text-white">About</span>
          <span className="text-blue-500"> Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Animation (Slides from Left) */}
          <div
            className={`space-y-6 text-gray-300 leading-relaxed transition-all duration-1000 delay-300 transform ${isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
              }`}
          >
            <p>
              I'm{" "}
              <span className="text-blue-400 font-semibold">
                Muhammad Uzair
              </span>
              , a Full-Stack Developer with over four years of experience
              specializing in the MERN stack, Flutter, and building scalable
              backend systems.
            </p>

            <p>
              I create clean user interfaces, develop robust APIs, and implement
              cloud-native solutions, always focusing on performance and
              maintainability.
            </p>

            <p className="border-l-4 border-blue-500 pl-4 italic bg-slate-800/50 py-2">
              "I have a passion for modern technology and am continually
              exploring advancements in AI, automation, and future-driven
              development."
            </p>
          </div>

          {/* Image Animation (Slides from Right with Scale) */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-500 transform ${isVisible
                ? "translate-x-0 opacity-100 scale-100"
                : "translate-x-20 opacity-0 scale-90"
              }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              {/* Background Glow Effect */}
              <div className="absolute -inset-2 rounded-full bg-blue-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity"></div>

              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 bg-gradient-to-br from-blue-400/20 to-purple-600/20 animate-pulse"></div>

              <img
                src="/images/a.jfif"
                alt="Muhammad Uzair"
                className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl hover:grayscale-0 transition-all duration-500"
              />

              {/* Decorative Circle */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center border-4 border-slate-900 animate-bounce">
                <span className="text-xs font-bold text-white">4+ Years</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
