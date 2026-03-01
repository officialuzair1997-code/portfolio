import React from "react";
import Projectscreen from "../../../componentes/homeScreen/Projects/Projectscreen";

const Project = () => {
  const projects = [
    {
      title: "WatchMate",
      description:
        "Watch together, anytime – anywhere! A social streaming platform for real-time synchronized video playback.",
      image: "https://res.cloudinary.com/dzt8b3mre/image/upload/v1740141380/vlv_m0o7p2.png",
      badges: ["Social", "Streaming", "Real-time"],
      techStack: [{ name: "React" }, { name: "Node.js" }, { name: "Socket.io" }],
      bgColor: "bg-blue-600/10",
      externalLink: "/project/watchmate",
      githubLink: "#",
    },
    {
      title: "Full-Stack SaaS App",
      description:
        "A complete production-ready SaaS with auth, payments, and dashboard built using Node.js and React.",
      image: "/a.jfif",
      badges: ["Production", "SaaS"],
      techStack: [{ name: "Next.js" }, { name: "MongoDB" }, { name: "Stripe" }],
      bgColor: "bg-blue-600/10",
      externalLink: "#",
      githubLink: "#",
    },
    {
      title: "Flutter Health App",
      description:
        "Real-time health tracking mobile application with Firebase backend and clean UI animations.",
      image: "/b.jfif",
      badges: ["Mobile", "Health"],
      techStack: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Dart" }],
      bgColor: "bg-purple-600/10",
      externalLink: "#",
      githubLink: "#",
    },
    {
      title: "Real-time Chat App",
      description:
        "Socket.io powered chat application supporting private rooms and media sharing features.",
      image: "/c.jfif",
      badges: ["Real-time", "WebSocket"],
      techStack: [
        { name: "Node.js" },
        { name: "Socket.io" },
        { name: "React" },
      ],
      bgColor: "bg-green-600/10",
      externalLink: "#",
      githubLink: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management and payment processing.",
      image: "/d.jfif",
      badges: ["E-commerce", "Payment"],
      techStack: [{ name: "React" }, { name: "Node.js" }, { name: "MongoDB" }],
      bgColor: "bg-yellow-600/10",
      externalLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management Tool",
      description:
        "A collaborative task management application with drag-and-drop functionality.",
      image: "/e.jfif",
      badges: ["Productivity", "Collaboration"],
      techStack: [{ name: "React" }, { name: "Redux" }, { name: "Firebase" }],
      bgColor: "bg-red-600/10",
      externalLink: "#",
      githubLink: "#",
    },
  ];

  return <Projectscreen projects={projects} />;
};

export default Project;
