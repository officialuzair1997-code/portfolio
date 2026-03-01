import React, { useEffect, useRef, useState } from "react";
import { Code, Smartphone, Pen, Puzzle, Cloud, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description:
      "I create sleek, high-performance websites using React, Next.js, and Tailwind CSS. My focus is on delivering fast, responsive, and user-friendly web applications.",
    gradient: "from-blue-600 to-purple-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "I specialize in building cross-platform mobile applications with a native feel using Flutter. I develop beautiful and smooth apps for both Android and iOS.",
    gradient: "from-purple-600 to-purple-700",
  },
  {
    icon: Pen,
    title: "UI/UX Design",
    description:
      "Good design is about creating a seamless user experience. I design and prototype in Figma, then translate those designs into pixel-perfect code.",
    gradient: "from-pink-500 to-pink-600",
  },
];

const bottomServices = [
  {
    icon: Puzzle,
    title: "Backend & API Development",
    description:
      "I architect and build robust backend systems using Node.js, Express, and Knex. I deliver secure, scalable, and clean APIs for complex systems.",
    gradient: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description:
      "I build end-to-end SaaS platforms, including authentication, dashboards, and notifications. Modular, production-ready, and scalable solutions.",
    gradient: "from-orange-400 to-orange-500",
  },
];

const Services = () => {
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

  const ServiceCard = ({ service, index, delay }) => (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative bg-[#111827] border border-gray-800 rounded-2xl p-8 transition-all duration-1000 transform 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        hover:border-transparent hover:-translate-y-2`}
    >
      {/* Magic Gradient Border on Hover */}
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-[1px]`}
      ></div>
      <div className="absolute inset-[1px] rounded-2xl bg-[#111827] -z-10"></div>

      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500`}
      >
        <service.icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400">
        {service.title}
      </h3>

      <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors">
        {service.description}
      </p>

      {/* Decorative Light Glow */}
      <div
        className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`}
      ></div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-blue-900 via-slate-900 to-black py-24 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-6xl font-extrabold mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
          >
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x">
              Services
            </span>
          </h2>
          <p
            className={`text-gray-400 max-w-2xl mx-auto text-lg transition-all duration-1000 delay-300 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
              }`}
          >
            I turn complex ideas into elegant digital solutions with a focus on
            performance and user experience.
          </p>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} delay={index * 200} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {bottomServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              delay={(index + 3) * 200}
            />
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div
          className={`flex justify-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <button className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold overflow-hidden transition-all hover:pr-12">
            <span className="relative z-10">Explore All Services</span>
            <Settings className="relative z-10 w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
