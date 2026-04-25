import React from "react";
import Projectscreen from "../../../componentes/homeScreen/Projects/Projectscreen";
import ecomImage from "../../../assets/ecomrece/homepage.png";
import townImage from "../../../assets/town-MIS/town1.png";
import aaaImage from "../../../assets/AAA-s-dashboard/aaa1.png";
import waImage from "../../../assets/whasapp-system/wa4.png";

const Project = () => {
  const projects = [
    {
      title: "EcoMart",
      description:
        "A premium, feature-rich e-commerce platform with seamless user experience, advanced product filtering, and secure payment integration.",
      image: ecomImage,
      badges: ["E-commerce", "MERN Stack", "SaaS"],
      techStack: [
        { name: "React" },
        { name: "Redux Toolkit" },
        { name: "Node.js" },
        { name: "MongoDB" },
      ],
      bgColor: "bg-indigo-600/10",
      externalLink: "/project/ecomart",
    },
    {
      title: "Town MIS",
      description:
        "A highly secure Management Information System for real estate, featuring real-time plot booking and advanced SQL/PHP architecture.",
      image: townImage,
      badges: ["Management", "PHP", "React"],
      techStack: [
        { name: "React" },
        { name: "PHP" },
        { name: "SQL" },
        { name: "Firebase" },
      ],
      bgColor: "bg-blue-600/10",
      externalLink: "/project/town-mis",
    },
    {
      title: "AAA SaaS Dashboard",
      description:
        "An enterprise-grade SaaS dashboard built with Next.js 14, featuring real-time analytics, user management, and shadcn/ui.",
      image: aaaImage,
      badges: ["SaaS", "Enterprise", "Dashboard"],
      techStack: [
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "Firebase" },
        { name: "Zustand" },
      ],
      bgColor: "bg-purple-600/10",
      externalLink: "/project/aaa-dashboard",
    },
    {
      title: "Real-time Chat Engine",
      description:
        "A high-availability WhatsApp clone with instant messaging, media sharing via S3, and Redis-powered session management.",
      image: waImage,
      badges: ["Real-time", "Socket.io", "Cloud"],
      techStack: [
        { name: "Socket.io" },
        { name: "Redis" },
        { name: "Amazon S3" },
        { name: "Node.js" },
      ],
      bgColor: "bg-green-600/10",
      externalLink: "/project/whatsapp-system",
    },
  ];

  return <Projectscreen projects={projects} />;
};

export default Project;
