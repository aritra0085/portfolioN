import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export const personalInfo = {
  name: "Aritra Biswas",
  role: "Web Developer",
  bio: "Hi, I’m Aritra Biswas. I’m a Web Developer with strong DSA skills and great knowledge in C++. Completed an internship at IBM & Edunet. As a B.Tech CSE student from the University of Calcutta (2022–2026), specializing in modern web development and performance optimization.",
  email: "aritrabiswas218@gmail.com",
  location: "India",
};

export const projects = [1, 2, 3, 4, 5, 6];

export const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/aritra0085",
    color: "hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/aritra-biswas-50594529a/",
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "#",
    color: "hover:text-sky-400",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "#",
    color: "hover:text-red-400",
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company: "IBM",
    period: "Aug — Oct 2025",
    desc: "Completed an IBM & Edunet internship focused on building responsive, high-performance web apps using React, Node.js, and Tailwind CSS—collaborating with teams to enhance UI, optimize performance, and ensure accessibility.",
    color: "violet",
  },
  {
    title: "Web Developer ",
    company: "Freelance",
    desc: "Developed internal dashboards and small-scale SaaS tools with React and Node.js. Improved UI performance and introduced reusable component systems for faster development.",
    color: "cyan",
  },
  {
    title: "Event Planer",
    company: "Freelance",
    desc: "Creative event planner specializing in designing, organizing, and executing seamless weddings, parties, and corporate events with precision, style, and memorable experiences.",
    color: "pink",
  },
];

export const tools = [
  "VS Code – Code Editor",
  "Git & GitHub – Version Control",
  "Postman – API Testing",
  "Canva – UI/UX Design",
  "Notion – Productivity",
  "Adobe Lightroom - Photo Editing",
  "Adobe Premiere Pro – Video Editing"
];

export const goals = [
  "Launch my own web agency",
  "Start a Tech Life Youtube channel",
  "Gain more clients",
  "Learn new frameworks and libraries",
];

export const achievements = [
  {
    title: "Projects Completed",
    value: "18+",
    desc: "Created 18+ dynamic web projects with React.js and Node.js, focused on motion and responsiveness.",
    color: "yellow",
  },
  {
    title: "Deliverd Websites to clients",
    value: "3",
    desc: "Delivering visually stunning, responsive websites with the best UI design for clients.",
    color: "cyan",
  },
  {
    title: "Hackathon",
    value: "10+",
    desc: "10+ hackathons: multiple wins, finalist in several, and selected for SIH University tech innovation round.",
    color: "pink",
  },
  {
    title: "Awards & Recognition",
    value: "45+",
    desc: "Award-winning Badminton player, recognized at National, State, and University competitions for excellence.",
    color: "violet",
  },
];

export const skills = [
  {
    category: "Frontend",
    skills: [
      "React / Next.js",
      "Tailwind CSS / CSS Animations",
      "Framer Motion",
      "HTML / CSS / JS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js / Express", "MySQL / PHP", "REST & GraphQL APIs"],
  },
  {
    category: "Design & Tools",
    skills: ["Figma / Motion Design", "Docker / Git", "Notion / VS Code"],
  },
  {
    category: "Other",
    skills: ["Agile / Scrum", "SEO Basics", "Performance Optimization"],
  },
];

export const certificates = [
  "Microsoft Certified: Power Platform App Maker",
  "Adobe Certified Expert: After Effects",
  "Frontend Developer Nanodegree - Udacity",
  "Docker Essentials - Coursera",
];

export const animatedBlobs = [
  {
    className:
      "top-[-10%] left-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-violet-600 via-purple-500 to-pink-500 opacity-40 blur-[180px]",
    animate: {
      x: [0, 150, -100, 0],
      y: [0, -80, 60, 0],
      scale: [1, 1.2, 0.9, 1],
      rotate: [0, 90, 180, 360],
    },
    duration: 20,
  },
  {
    className:
      "bottom-[-15%] right-[-5%] w-[700px] h-[700px] bg-gradient-to-tl from-cyan-500 via-blue-500 to-indigo-600 opacity-50 blur-[160px]",
    animate: {
      x: [0, -140, 100, 0],
      y: [0, 90, -70, 0],
      scale: [1, 0.85, 1.15, 1],
      rotate: [360, 270, 180, 0],
    },
    duration: 25,
  },
  {
    className:
      "top-[10%] left-[80%] -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 opacity-35 blur-[200px]",
    animate: {
      x: [0, 80, -120, 0],
      y: [0, -60, 80, 0],
      scale: [1, 1.1, 0.95, 1],
      rotate: [0, -90, -180, -360],
    },
    duration: 22,
  },
  {
    className:
      "top-[20%] right-[10%] w-[500px] h-[500px] bg-gradient-to-bl from-emerald-500 via-teal-500 to-cyan-600 opacity-30 blur-[190px]",
    animate: {
      x: [0, -70, 110, 0],
      y: [0, 100, -50, 0],
      scale: [1, 0.9, 1.2, 1],
      rotate: [0, 120, 240, 360],
    },
    duration: 18,
  },
  {
    className:
      "bottom-[30%] left-[20%] w-[600px] h-[600px] bg-gradient-to-tr from-amber-500 via-yellow-500 to-lime-500 opacity-25 blur-[210px]",
    animate: {
      x: [0, 130, -90, 0],
      y: [0, -70, 90, 0],
      scale: [1, 1.15, 0.88, 1],
      rotate: [0, -120, -240, -360],
    },
    duration: 28,
  },
];