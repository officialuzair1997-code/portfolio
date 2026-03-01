import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const greetings = [
  "Assalam-o-Alaikum",
  "Hello",
  "Kon'nichiwa",
  "Nǐ hǎo",
  "Hola",
  "Namaste",
];

const Header = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [scrolled, setScrolled] = useState(0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = greetings[wordIndex];

      if (isDeleting) {
        setDisplayText(currentFullWord.substring(0, displayText.length - 1));
        setSpeed(100);
      } else {
        setDisplayText(currentFullWord.substring(0, displayText.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && displayText === currentFullWord) {
        setSpeed(2000); // Pause at end of word
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % greetings.length);
        setSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, speed, greetings]);

  // Calculate animation values based on scroll
  const calculateAnimation = (base, range, factor = 1) => {
    return base + (scrolled * 0.1 * factor * range);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-black text-white flex flex-col md:flex-row relative overflow-hidden">
      {/* Sidebar with scroll-based animation */}
      <div
        className="fixed bottom-0 left-0 w-full h-16 md:h-screen md:w-20 flex md:flex-col items-center justify-center gap-8 z-50 transition-all duration-300"
      >
        {/* Social Icons */}
        <a href="mailto:contact@huraira.dev" className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110">
          <Mail size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110">
          <Linkedin size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-all duration-300 hover:scale-110">
          <Instagram size={24} />
        </a>
      </div>

      {/* Main Content with scroll-based animations */}
      <div className="w-full md:ml-20 flex items-center justify-center px-8">
        <div
          className="max-w-2xl text-center transform transition-all duration-500"
          style={{
            transform: `translateY(${calculateAnimation(0, 50)}px)`,
            opacity: Math.max(0, 1 - (scrolled * 0.005))
          }}
        >


          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-blue-400">
            Muhammad Uzair
          </h1>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            I design and build{" "}
            <span className="font-semibold text-white">
              fast, elegant digital experiences
            </span>{" "}
            that balance creativity with clean, scalable code that's always
            driven by performance, clarity, and real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all transform hover:scale-105">
              ✨ Explore Projects
            </button>
            <button className="px-8 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded-full transition-all transform hover:scale-105">
              ⬇️ Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hidden md:block fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce"
        style={{ opacity: scrolled > 100 ? 0 : 1, transition: 'opacity 0.3s' }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Header;