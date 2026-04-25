import ecomHome from "../assets/ecomrece/homepage.png";
import ecomDetail from "../assets/ecomrece/detailpage.png";
import ecomProduct from "../assets/ecomrece/product.png";
import ecomProduct2 from "../assets/ecomrece/product&paginastion.png";

import town1 from "../assets/town-MIS/town1.png";
import town2 from "../assets/town-MIS/town2.png";
import town3 from "../assets/town-MIS/town3.png";
import town4 from "../assets/town-MIS/town4.png";
import townUser from "../assets/town-MIS/user-detail.png";
import townDelete from "../assets/town-MIS/delete-model.png";
import townLocalization from "../assets/town-MIS/localization-langiges-chang.png";
import townUser2 from "../assets/town-MIS/user-detail2.png";
import townUser3 from "../assets/town-MIS/user-detail3.png";
import townUser4 from "../assets/town-MIS/user-detail4.png";

import aaa1 from "../assets/AAA-s-dashboard/aaa1.png";
import aaa2 from "../assets/AAA-s-dashboard/aaa2.png";
import aaa3 from "../assets/AAA-s-dashboard/aaa3.png";
import aaa4 from "../assets/AAA-s-dashboard/aaa4.png";
import aaa5 from "../assets/AAA-s-dashboard/aaa5.png";
import aaa6 from "../assets/AAA-s-dashboard/aaa6.png";

import wa1 from "../assets/whasapp-system/wa1.png";
import wa2 from "../assets/whasapp-system/wa2.png";
import wa3 from "../assets/whasapp-system/wa3.png";
import wa4 from "../assets/whasapp-system/wa4.png";

export const townmisProjectsData = {
  ecomart: {
    title: "EcoMart",
    tags: ["E-commerce", "MERN Stack", "SaaS"],
    liveUrl: "#",
    bannerImage: ecomHome,
    intro: "EcoMart is a high-performance, scalable e-commerce platform designed for modern retailers. It offers a seamless shopping experience with real-time sync, robust state management, and a secure checkout pipeline.",
    description: "Built with React and Redux Toolkit, EcoMart provides a lightning-fast frontend that handles complex state including carts, wishlists, and user sessions. The backend, powered by Node.js and MongoDB, ensures reliable data persistence and secure API communication for high-traffic scenarios.",
    techStack: [
      { name: "React JS", type: "frontend" },
      { name: "Redux Toolkit", type: "state" },
      { name: "Node.js", type: "backend" },
      { name: "MongoDB", type: "database" },
      { name: "Tailwind CSS", type: "ui" },
    ],
    features: [
      { title: "Advanced Filtering", desc: "Dynamic product filtering and multi-criteria search with real-time updates." },
      { title: "Redux State", desc: "Global state management for cart, wishlist, and nested user navigation." },
      { title: "Secure Checkout", desc: "Integrated payment processing with Stripe and order tracking." },
      { title: "Admin Portal", desc: "Comprehensive dashboard for inventory management and sales analytics." },
      { title: "Cloud Integration", desc: "Scalable image hosting and optimized asset delivery for fast loads." },
      { title: "SEO Optimized", desc: "Server-side optimizations for meta tags and accessibility standards." },
    ],
    gallery: [
      { image: ecomHome, title: "Home Page - Modern Interface" },
      { image: ecomDetail, title: "Product Details & Customization" },
      { image: ecomProduct, title: "Inventory & Product Catalog" },
      { image: ecomProduct2, title: "Advanced Filtering & Pagination" },
    ],
  },
  "town-mis": {
    title: "Town MIS",
    tags: ["Management System", "PHP", "Real Estate"],
    liveUrl: "#",
    bannerImage: town1,
    intro: "Town MIS is a highly secure, professional Management Information System designed for the real estate industry. It streamlines urban plot management, bookings, and user logistics with real-time data handling.",
    description: "Developed using React on the frontend and a high-performance PHP/SQL backend, Town MIS integrates Firebase for real-time updates and notifications. The system features advanced cursor pagination, localization support, and a rigorous security architecture to protect sensitive data.",
    techStack: [
      { name: "React", type: "frontend" },
      { name: "PHP", type: "backend" },
      { name: "SQL", type: "database" },
      { name: "Firebase", type: "realtime" },
      { name: "Bootstrap", type: "ui" },
    ],
    features: [
      { title: "Plot Booking", desc: "Interactive and real-time visualization for plot availability and reservations." },
      { title: "High Security", desc: "Rigorous server-side validation and sanitized query architecture for data safety." },
      { title: "Cursor Pagination", desc: "Custom pagination logic for seamless navigation through massive datasets." },
      { title: "Localization", desc: "Built-in support for translations and region-specific formatting." },
      { title: "Firebase Sync", desc: "Instant notifications and state sync across multiple administrative dashboards." },
      { title: "Clean UI", desc: "Professional, Bootstrap-powered interface designed for maximum productivity." },
    ],
    gallery: [
      { image: town4, title: "Secure Login Authentication" },
      { image: town1, title: "Dashboard Overview" },
      { image: town2, title: "Plot Booking Management" },
      { image: town3, title: "Inventory Visualization" },
      { image: townUser, title: "User Details & Profiles" },
      { image: townUser2, title: "Advanced User Management" },
      { image: townLocalization, title: "Localization & Multi-language Support" },
      { image: townDelete, title: "Sanitized Modal Components" },
    ],
  },
  "aaa-dashboard": {
    title: "AAA SaaS Dashboard",
    tags: ["SaaS", "Next.js", "Dashboard"],
    liveUrl: "#",
    bannerImage: aaa1,
    intro: "AAA SaaS Dashboard is an enterprise-grade administrative platform built with Next.js 14 and TypeScript. It offers a stunning UI/UX combined with real-time data orchestration and state-of-the-art security.",
    description: "Architected with Next.js and Shadcn UI, this dashboard provides a premium experience for managing users, security, and global settings. It utilizes Firebase for its robust API layer and Zustand for atomic state management, ensuring a highly responsive and scalable interface.",
    techStack: [
      { name: "Next.js 14", type: "frontend" },
      { name: "TypeScript", type: "frontend" },
      { name: "Shadcn UI", type: "ui" },
      { name: "Firebase", type: "backend" },
      { name: "Zustand", type: "state" },
      { name: "Tailwind CSS", type: "ui" },
    ],
    features: [
      { title: "Modern Dashboard", desc: "A sleek, mobile-responsive interface built with modern design principles." },
      { title: "Real-time API", desc: "Instant data synchronization with Firebase for seamless administrative control." },
      { title: "Atomic State", desc: "High-performance state management using Zustand for granular UI updates." },
      { title: "Theme Switching", desc: "Native support for dynamic theme customization and dark mode." },
      { title: "Asset Management", desc: "Integrated secure file upload system and profile management." },
      { title: "User Security", desc: "Robust authentication flows and encrypted password management tools." },
    ],
    gallery: [
      { image: aaa1, title: "Administrative Users Control" },
      { image: aaa2, title: "Authentication Flow" },
      { image: aaa3, title: "User Profile Management" },
      { image: aaa4, title: "Custom Theme System" },
      { image: aaa5, title: "Security & Passwords" },
      { image: aaa6, title: "File Upload Infrastructure" },
    ],
  },
  "whatsapp-system": {
    title: "WhatsApp Real-time System",
    tags: ["Real-time", "Socket.io", "System Design"],
    liveUrl: "#",
    bannerImage: wa4,
    intro: "WhatsApp Real-time System is a high-availability communication platform featuring instant messaging, media sharing, and group synchronization. It leverages cutting-edge real-time technologies for a seamless chat experience.",
    description: "Built with Node.js and Socket.io, this system handles thousands of concurrent connections with sub-millisecond latency. It features an optimized media pipeline using Amazon S3 for cloud storage and Redis for high-speed message caching and session management.",
    techStack: [
      { name: "Node.js", type: "backend" },
      { name: "Socket.io", type: "realtime" },
      { name: "Redis", type: "state" },
      { name: "MongoDB", type: "database" },
      { name: "Amazon S3", type: "backend" },
      { name: "Tailwind CSS", type: "ui" },
    ],
    features: [
      { title: "Real-time Engine", desc: "Full-duplex communication using Socket.io for instant message delivery." },
      { title: "Cloud Storage", desc: "Scalable media and document storage leveraging Amazon S3 bucket architecture." },
      { title: "High-speed Caching", desc: "Sub-millisecond data retrieval and session caching using Redis clusters." },
      { title: "Group Sync", desc: "Advanced room management and state synchronization for collaborative group chats." },
      { title: "Media Sharing", desc: "Secure and optimized pipeline for sharing images, videos, and documents." },
      { title: "Status Updates", desc: "Live presence detection and real-time user status synchronization." },
    ],
    gallery: [
      { image: wa4, title: "Real-time Chat Experience" },
      { image: wa1, title: "Global Chat Interface" },
      { image: wa2, title: "Enterprise Group Management" },
      { image: wa3, title: "Cloud Asset & Document Sharing" },
    ],
  }
};
