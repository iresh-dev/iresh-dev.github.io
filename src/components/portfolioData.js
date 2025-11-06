// ============================== IMPORTS ==============================

// Core Technology Logos
import react from "../assets/react.svg";
import tailwind from "../assets/tailwindcss.png";
import laravel from "../assets/laravel.png";
import framer from "../assets/framer.png";
import threejs from "../assets/Threejs.svg";
import vue from "../assets/vue.svg";
import expressjs from "../assets/expressjs.png";
import nodejs from "../assets/nodejs.png";
import mysql from "../assets/mysql.svg";
import php from "../assets/php.svg";
import elementor from "../assets/elementor.svg";
import whatsapp from "../assets/whatsapp.png";
import n8n from "../assets/n8n.png";
import gemini from "../assets/gemini.png";
import javascript from "../assets/js.svg";

// Spotlights
import spotlight1 from "../assets/spotlight1.png";
import spotlight2 from "../assets/spotlight1.png";
import spotlight3 from "../assets/spotlight1.png";
import spotlight4 from "../assets/spotlight1.png";
import spotlight5 from "../assets/spotlight1.png";
import spotlight6 from "../assets/spotlight1.png";

// Textures (Projects)
import echotexture from "../assets/echotexture.webp";
import echotexture2 from "../assets/echotexture2.png";
import asswennatexture from "../assets/asswennatexture.webp";
import asswennatexture2 from "../assets/asswennatexture2.png";
import workshoptexture from "../assets/workshoptexture.png";
import workshoptexture2 from "../assets/workshoptexture2.png";
import jobnextexture from "../assets/jobnextexture.png";
import jobnextexture2 from "../assets/jobnextexture2.png";
import writetexture from "../assets/writetexture.png";
import writetexture2 from "../assets/writetexture2.png";
import shoetexture from "../assets/shoetexture.png";
import shoetexture2 from "../assets/shoetexture2.png";
import portfoliotexture from "../assets/portfoliotexture.png";
import portfoliotexture2 from "../assets/portfoliotexture2.png";
import disasteralerttexture from "../assets/disasteralerttexture.png";
import disasteralerttexture2 from "../assets/disasteralerttexture2.png";
import rcfmswebtexture from "../assets/rcfmswebtexture.png";
import rcfmswebtexture2 from "../assets/rcfmswebtexture2.png";
import UCMCtexture from "../assets/UCMCtexture.png";
import UCMCtexture2 from "../assets/UCMCtexture2.png";
import fotapptexture from "../assets/fotapptexture.png";
import fotapptexture2 from "../assets/fotapptexture2.png";
import cardiotexture from "../assets/cardiotexture.png";
import cardiotexture2 from "../assets/cardiotexture2.png";
import cropaitexture from "../assets/cropaitexture.png";
import cropaitexture2 from "../assets/cropaitexture2.png";
import koratuwatexture from "../assets/koratuwatexture.webp";
import koratuwatexture2 from "../assets/koratuwatexture2.png";
import jobfinderTexture from "../assets/jobfinderTexture.jpg";
import jobfinderTexture2 from "../assets/jobfinderTexture2.png";

// Logos
import jobNexusLogo from "../assets/jobNexus.png";
import aswannalogo from "../assets/aswanna.png";
import ucmcLogo from "../assets/UCMC.png";
import portfolioLogo from "../assets/jobNexus.png";
import rcfmsLogo from "../assets/RCFMS.png";
import writeSphere from "../assets/WriteSphere.png";
import shoeStyleLogo from "../assets/ShoeStyle.png";
import koratuwaLogo from "../assets/koratuwalogo.png";

// ============================== FULL STACK PROJECTS ==============================

export const fullStackProjects = [
  {
    id: 1,
    title: "Aswanna - AI Podcast Platform",
    desc: "An intelligent agricultural platform enabling farmers to identify crop diseases using AI-based image processing and community interaction.",
    subdesc:
      "Developed using React, Tailwind CSS, Laravel, and Google Gemini API. Features include an interactive landing page, image-based disease detection, a discussion forum, chatbot integration, and a dedicated contact section.",
    href: "https://github.com/sahansara/Agricultural-Information-Platform-with-Crop-Calendar.git",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: asswennatexture,
    texture2: asswennatexture2,
    logo: aswannalogo,
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: spotlight1,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Laravel", path: laravel },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
  {
    id: 2,
    title: "JobNexus - Job Seeking & Sharing Platform",
    desc: "A comprehensive professional networking platform connecting job seekers and employers through smart search and posting capabilities.",
    subdesc:
      "Created using the MERN stack (MongoDB, Express, React, Node.js) with seamless authentication, posting, and communication functionality.",
    href: "https://github.com/Iresh-Nimantha/Job-Seeking-Sharing-Platform-JobNexus",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: jobnextexture,
    texture2: jobnextexture2,
    logo: jobNexusLogo,
    logoStyle: {
      backgroundColor: "#60f5a1",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: spotlight3,
    tags: [
      {
        id: 1,
        name: "MongoDB",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      { id: 2, name: "Express.js", path: expressjs },
      { id: 3, name: "React.js", path: react },
      { id: 4, name: "Node.js", path: nodejs },
    ],
  },
  {
    id: 3,
    title: "WriteSphere - Blog Post Website",
    desc: "A responsive blogging platform designed for content creators to publish, comment, and interact with a global audience.",
    subdesc:
      "Engineered using Laravel, Tailwind CSS, and MySQL, supporting post management, comment moderation, secure authentication, and an admin dashboard.",
    href: "https://github.com/Iresh-Nimantha/WriteSphere_Blog_posting_site",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: writetexture,
    texture2: writetexture2,
    logo: writeSphere,
    logoStyle: {
      backgroundColor: "#1E88E5",
      border: "0.2px solid #1E88E5",
      boxShadow: "0px 0px 60px 0px rgba(255, 87, 34, 0.3)",
    },
    spotlight: spotlight4,
    tags: [
      { id: 1, name: "Laravel", path: laravel },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "MySQL", path: mysql },
      { id: 4, name: "PHP", path: php },
    ],
  },
  {
    id: 4,
    title: "Shoe Style - Online Shoe Store",
    desc: "A modern online platform offering a curated selection of shoes with secure checkout and customer-centric features.",
    subdesc:
      "Developed with Vue 3, Tailwind CSS, Laravel, and Stripe, implementing product listings, cart, user profiles, and payment gateway integration.",
    href: "https://github.com/Iresh-Nimantha/ShoeStyle-Online_Shoe_Store.git",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: shoetexture,
    texture2: shoetexture2,
    logo: shoeStyleLogo,
    logoStyle: {
      backgroundColor: "#0a1429",
      border: "0.2px solid #333",
      boxShadow: "0px 0px 60px 0px rgba(255, 215, 0, 0.3)",
    },
    spotlight: spotlight2,
    tags: [
      { id: 1, name: "Vue.js", path: vue },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Laravel", path: laravel },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
  {
    id: 5,
    title: "Workshop Management System",
    desc: "An integrated solution to manage workshop operations, covering job tracking, staff management, vehicle records, and analytics.",
    subdesc:
      "Built with React and Tailwind CSS in the frontend and Laravel for backend, implementing role-based access, real-time status updates, and reporting.",
    href: "https://github.com/yourusername/workshop-management-system",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: workshoptexture,
    texture2: workshoptexture2,
    logo: "../assets/workshopLogo.png",
    logoStyle: {
      backgroundColor: "#ffffff",
      border: "0.2px solid #000",
      boxShadow: "0px 0px 60px 0px rgba(0, 0, 0, 0.2)",
    },
    spotlight: spotlight6,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Laravel", path: laravel },
    ],
  },
  {
    id: 6,
    title: "Eco-Tourism QR Explorer",
    desc: "A digital platform for tourists, powered by QR codes and AI, presenting local destination data in multiple languages and chatbot support.",
    subdesc:
      "Created with Next.js, TypeScript, Firebase, and Gemini AI, delivering chatbot responses, multi-language interface, and streamlined QR code scanning experience.",
    href: "https://github.com/yourusername/eco-tourism-qr-explorer",
    linkedin: "https://www.linkedin.com/in/your-profile",
    live: "https://eco-tourism-qr-explorer.vercel.app/",
    texture: echotexture,
    texture2: echotexture2,
    logo: "../assets/ecoTourismLogo.png",
    logoStyle: {
      backgroundColor: "#4CAF50",
      border: "0.2px solid #388E3C",
      boxShadow: "0px 0px 60px 0px rgba(76, 175, 80, 0.3)",
    },
    spotlight: spotlight3,
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      { id: 4, name: "Gemini AI", path: gemini },
    ],
  },
];

// ============================== FRONTEND PROJECTS ==============================

export const frontEndProjects = [
  {
    id: 7,
    title: "Portfolios - Personalized 3D Websites",
    desc: "A visually engaging portfolio platform with 3D interactive elements for creative professionals and developers.",
    subdesc:
      "Built with React, Three.js, and Tailwind CSS, featuring interactive layouts, animation effects, and robust design customization.",
    href: "https://github.com/Iresh-Nimantha/iresh-nimantha-3Dportfolio",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: portfoliotexture,
    texture2: portfoliotexture2,
    logo: portfolioLogo,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: spotlight2,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
      { id: 3, name: "Three.js", path: threejs },
      { id: 4, name: "Framer Motion", path: framer },
    ],
  },
  {
    id: 8,
    title: "RCFMS - Road Crime Fine Management System",
    desc: "A web solution streamlining the management and processing of road crime fines for better public safety enforcement.",
    subdesc:
      "Implemented with React and Tailwind CSS, supporting fine management, violation tracking, and responsive dashboard interfaces.",
    href: "https://iresh-nimantha.github.io/frontend-RCFMS/",
    linkedin: "https://www.linkedin.com/in/your-profile",
    live: "https://iresh-nimantha.github.io/frontend-RCFMS/",
    texture: rcfmswebtexture,
    texture2: rcfmswebtexture2,
    logo: rcfmsLogo,
    logoStyle: {
      backgroundColor: "#1E88E5",
      border: "0.2px solid #1565C0",
      boxShadow: "0px 0px 60px 0px rgba(30, 136, 229, 0.3)",
    },
    spotlight: spotlight6,
    tags: [
      { id: 1, name: "React.js", path: react },
      { id: 2, name: "TailwindCSS", path: tailwind },
    ],
  },
];

// ============================== WORDPRESS PROJECTS ==============================

export const wordpressProjects = [
  {
    id: 9,
    title: "UCMC Web",
    desc: "The official online presence for University of Colombo Music Circle, showcasing events and institutional news.",
    subdesc:
      "Developed on WordPress with Elementor, leveraging custom CSS and JavaScript for interactive content and responsive layout.",
    href: "",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: UCMCtexture,
    texture2: UCMCtexture2,
    logo: ucmcLogo,
    logoStyle: {
      backgroundColor: "#673AB7",
      border: "0.2px solid #512DA8",
      boxShadow: "0px 0px 60px 0px rgba(103, 58, 183, 0.3)",
    },
    spotlight: spotlight5,
    tags: [
      {
        id: 1,
        name: "WordPress",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
      },
      { id: 2, name: "Elementor", path: elementor },
      {
        id: 3,
        name: "CSS",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      { id: 4, name: "JavaScript", path: javascript },
    ],
  },
];

// ============================== AUTOMATION (n8n) PROJECTS ==============================

export const automationProjects = [
  {
    id: 10,
    title: "Disaster Alert Automation - n8n Workflow",
    desc: "A robust automated system distributing weather alerts via WhatsApp and Gmail for regional disaster readiness.",
    subdesc:
      "Utilizing n8n, Open-Meteo API, Gemini AI nodes, and multi-district routing to ensure rapid and reliable communication.",
    href: "https://n8n.io/workflows",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: disasteralerttexture,
    texture2: disasteralerttexture2,
    logo: n8n,
    logoStyle: {
      backgroundColor: "#1E88E5",
      border: "0.2px solid #1565C0",
      boxShadow: "0px 0px 60px 0px rgba(30, 136, 229, 0.3)",
    },
    spotlight: spotlight1,
    tags: [
      { id: 1, name: "n8n", path: n8n },
      { id: 2, name: "Gemini AI", path: gemini },
      { id: 3, name: "WhatsApp API", path: whatsapp },
      {
        id: 4,
        name: "Gmail Node",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
    ],
  },
  {
    id: 11,
    title: "Automated LinkedIn Job Finder Powered by n8n",
    desc: "A smart workflow leveraging automation to efficiently search, analyze, and track job opportunities on LinkedIn using advanced AI.",
    subdesc:
      "Built using n8n, Gemini AI, and Google Sheets to combine scraping, analysis, and seamless job tracking in an integrated workflow.",
    href: "https://github.com/Iresh-Nimantha/LinkedIn-Job-Finder",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: jobfinderTexture,
    texture2: jobfinderTexture2,
    logoStyle: {
      backgroundColor: "#0A66C2",
      border: "0.2px solid #004182",
      boxShadow: "0px 0px 60px 0px rgba(10, 102, 194, 0.3)",
    },
    spotlight: spotlight6,
    tags: [
      { id: 1, name: "n8n", path: n8n },
      {
        id: 2,
        name: "Google Sheets",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
      },
      {
        id: 3,
        name: "Gemini AI",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        id: 4,
        name: "Automation",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
    ],
  },
];

// ============================== MACHINE LEARNING PROJECTS ==============================

export const machineLearningProjects = [
  {
    id: 12,
    title: "CardioHealth - Heart Disease Prediction",
    desc: "A predictive analytics tool using machine learning models to assess heart disease probability from patient data.",
    subdesc:
      "Implemented in Python, Scikit-learn, and Pandas, featuring a Streamlit interface for user-friendly medical predictions.",
    href: "https://github.com/Iresh-Nimantha/CardioHealth_Prediction",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: cardiotexture,
    texture2: cardiotexture2,
    logo: "src/assets/CardioHealth.png",
    logoStyle: {
      backgroundColor: "#B71C1C",
      border: "0.2px solid #C62828",
      boxShadow: "0px 0px 60px 0px rgba(198, 40, 40, 0.3)",
    },
    spotlight: spotlight2,
    tags: [
      {
        id: 1,
        name: "Python",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        id: 2,
        name: "Scikit-learn",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        id: 3,
        name: "Streamlit",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
      },
      {
        id: 4,
        name: "Pandas",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
  },
  {
    id: 13,
    title: "Crop Recommendation Model",
    desc: "An AI-driven application offering optimal crop suggestions based on real-time soil and weather metrics.",
    subdesc:
      "Utilizes Flask, Python, Scikit-learn, and OpenWeather API to deliver informed recommendations for agricultural planning.",
    href: "https://github.com/Iresh-Nimantha/Crop-Recommendation-Model",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: cropaitexture,
    texture2: cropaitexture2,
    logo: "src/assets/crop.png",
    logoStyle: {
      backgroundColor: "#2E7D32",
      border: "0.2px solid #1B5E20",
      boxShadow: "0px 0px 60px 0px rgba(46, 125, 50, 0.3)",
    },
    spotlight: spotlight3,
    tags: [
      {
        id: 1,
        name: "Python",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        id: 2,
        name: "Flask",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      },
      {
        id: 3,
        name: "Scikit-learn",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
      },
      {
        id: 4,
        name: "OpenWeather API",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original.svg",
      },
    ],
  },
];

// ============================== MOBILE APPLICATION PROJECTS ==============================

export const mobileProjects = [
  {
    id: 14,
    title: "FotNews - Mobile News Application",
    desc: "A sleek mobile app for consuming real-time trending news from diverse categories, custom-built for speed and accessibility.",
    subdesc:
      "Designed with Java and Android Studio, featuring News API data integration, optimized RecyclerView, and modern UI/UX flows.",
    href: "https://github.com/Iresh-Nimantha/FotNews_MobileApp",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: fotapptexture,
    texture2: fotapptexture2,
    logo: "src/assets/FotNews.png",
    logoStyle: {
      backgroundColor: "#0D47A1",
      border: "0.2px solid #1976D2",
      boxShadow: "0px 0px 60px 0px rgba(25, 118, 210, 0.3)",
    },
    spotlight: spotlight4,
    tags: [
      {
        id: 1,
        name: "Java",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        id: 2,
        name: "Android Studio",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        id: 4,
        name: "XML",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg",
      },
    ],
  },
  {
    id: 15,
    title: "Koratuwa - Farming Guide Mobile App",
    desc: "A comprehensive farming guide application for Sri Lankan farmers with multi-language support, market price tracking, and push notifications.",
    subdesc:
      "Built with Kotlin and Java in Android Studio. Features Firebase Authentication, Firebase Cloud Messaging for push notifications, multi-language support (Sinhala, Tamil, English), price calculation tools, farming guides with PDF generation, market price displays, and location-based services. Includes selling activity forms, notifications system, and seamless language switching.",
    href: "https://github.com/Iresh-Nimantha/koratuwa-mobile-app",
    linkedin: "https://www.linkedin.com/in/your-profile",
    texture: koratuwatexture,
    texture2: koratuwatexture2,
    logo: koratuwaLogo,
    logoStyle: {
      backgroundColor: "#FF6F00",
      border: "0.2px solid #E65100",
      boxShadow: "0px 0px 60px 0px rgba(255, 111, 0, 0.3)",
    },
    spotlight: spotlight5,
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      },
      {
        id: 2,
        name: "Java",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        id: 3,
        name: "Firebase",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        id: 4,
        name: "Android Studio",
        path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
      },
      {
        id: 5,
        name: "Hugging Face API",
        path: "https://huggingface.co/front/assets/huggingface_logo.svg",
      },
    ],
  },
];
