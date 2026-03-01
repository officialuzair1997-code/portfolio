import React from "react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050a18] text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6">
        {/* Copyright Text */}
        <div className="text-center text-sm md:text-base text-gray-400 font-medium">
          © {currentYear} Uzair Naseer. All Rights Reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={22} strokeWidth={1.5} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="Github"
          >
            <Github size={22} strokeWidth={1.5} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} strokeWidth={1.5} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-110 hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram size={22} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

