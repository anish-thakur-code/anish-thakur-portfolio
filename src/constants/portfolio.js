import backend from "../assets/backend.png";
import creator from "../assets/creator.png";
import mobile from "../assets/mobile.png";
import web from "../assets/web.png";
import javascript from "../assets/tech/javascript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";

export const profile = {
  name: "Anish Kumar",
  role: "Full Stack Developer",
  email: "anishthakur2813@gmail.com",
  phone: "+91 9123498757",
  location: "Rajkot, Gujarat",
  linkedin: "https://www.linkedin.com/in/anish-thakur-98ab18296",
  github: "https://github.com/anish-thakur-code",
  leetcode: "https://leetcode.com/u/anish_thakur2/",
  resume: "/Anish_Kumar_Resume.pdf",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certificates" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Full Stack Development", icon: web },
  { title: "React Frontend", icon: mobile },
  { title: "Node.js & REST APIs", icon: backend },
  { title: "Problem Solving", icon: creator },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
];

export const skillGroups = [
  { label: "Languages", skills: ["C", "C++", "Java", "Python", "JavaScript"] },
  { label: "Frontend", skills: ["React.js", "Vite", "HTML5", "CSS3", "JavaScript (ES6+)"] },
  { label: "Backend", skills: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Database", skills: ["MongoDB", "Mongoose", "MySQL", "SQL", "DBMS concepts"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "n8n"] },
];

export const experiences = [
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "Marwadi University · Rajkot, Gujarat",
    icon: creator,
    iconBg: "#E6DEDD",
    points: [
      "Current CGPA: 8.59 / 10.0.",
      "Building a strong foundation in computer science, databases, networking, and software development.",
      "Applying coursework through full-stack projects and consistent data structures and algorithms practice.",
    ],
  },
  {
    title: "Data Structures & Algorithms",
    company_name: "LeetCode · Ongoing practice",
    icon: web,
    iconBg: "#383E56",
    points: [
      "Solved 60+ LeetCode problems across multiple DSA topics, including arrays, strings, and recursion.",
      "Focused on improving both time and space complexity through consistent problem-solving practice.",
    ],
  },
];

export const certifications = [
  { title: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy · Marwadi University", date: "Feb 2026" },
  { title: "CCNA: Switching, Routing, and Wireless Essentials", issuer: "Cisco Networking Academy · Marwadi University", date: "Mar 2026" },
  { title: "Operating Systems Basics", issuer: "Cisco Networking Academy · Marwadi University", date: "Mar 2026" },
  { title: "Linux Essentials", issuer: "Cisco Networking Academy (NDG) · Marwadi University", date: "Apr 2026" },
  { title: "Design Thinking: Unlock Innovation and User-centricity", issuer: "Udemy", date: "Apr 2026" },
  { title: "Problem Solving for Success", issuer: "Infosys Springboard", date: "Apr 2026" },
];

export const projects = [
  {
    name: "Campus Voice",
    year: "2026",
    monogram: "CV",
    description: "A MERN app to collect student feedback, with a React (Vite) form and an Express/Mongoose API storing submissions in MongoDB.",
    highlights: "Automated notifications with an n8n webhook triggered on every new submission; deployed live on Vercel.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "n8n", color: "pink-text-gradient" },
    ],
    source_code_link: profile.github,
    live_link: "https://student-feedback-kappa.vercel.app/",
  },
  {
    name: "Course Selling Platform",
    year: "2024",
    monogram: "CS",
    description: "A full-stack e-commerce platform for selling online video-editing courses, with course listings, authentication, video previews, and a secure purchase flow.",
    highlights: "MongoDB stores user data, course content, and transaction records while Express and Node.js power the APIs.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    source_code_link: profile.github,
  },
  {
    name: "Tanishq Jewellery Clone",
    year: "2025",
    monogram: "TJ",
    description: "A pixel-accurate React frontend inspired by Tanishq, with category navigation, a hero banner, featured collections, new arrivals, and bestsellers.",
    highlights: "Responsive across screen sizes, with filters for Gold, Diamond, Earrings, Rings, Wedding, and more.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Responsive UI", color: "green-text-gradient" },
      { name: "CSS", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/anish-thakur-code/Tanishq-Clone",
    live_link: "https://anish-thakur-code.github.io/Tanishq-Clone/",
  },
  {
    name: "Weather App",
    year: "2025",
    monogram: "WA",
    description: "A real-time forecast app with city search, live temperature, weather conditions, and dynamically updated weather icons.",
    highlights: "Built without a framework to practise API integration, DOM manipulation, async JavaScript, and fetch.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "OpenWeatherMap", color: "green-text-gradient" },
      { name: "HTML/CSS", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/anish-thakur-code/weather-app",
    live_link: "https://anish-thakur-code.github.io/weather-app/",
  },
];
