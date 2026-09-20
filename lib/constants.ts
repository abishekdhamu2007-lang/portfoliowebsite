export interface NavItem {
  name: string;
  href: string;
}

export interface SkillItem {
  name: string;
  levelDescription: string;
  iconName: string;
  tag: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  title: string;
  organization: string;
  type: string;
  period: string;
  description: string;
  skills: string[];
  points: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  iconType: string;
  color: string;
  url?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  accentColor: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  color: string;
}

export const SITE_CONFIG = {
  name: "Abishek D",
  initials: "AD",
  title: "Abishek D | Web Developer Portfolio",
  roles: [
    "Web Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Data Analytics Enthusiast",
  ],
  bio: "I build modern, responsive, and user-friendly web applications that combine clean design, scalable development, and innovative technology.",
  aboutParagraphs: [
    "I am a passionate Web Developer with a strong focus on frontend technologies, responsive design, and modern UI engineering. I am dedicated to bridging clean, aesthetic interfaces with robust, scalable web architectures.",
    "Beyond traditional web engineering, I actively explore Artificial Intelligence tools and Data Analytics to create smarter, data-informed digital experiences. My goal is to build practical, real-world applications that solve genuine problems while offering delightful user experiences.",
    "Constantly refining my technical craft, I bring dedication to modern development standards, collaborative workflows, and disciplined attention to design fidelity and performance."
  ],
  contact: {
    email: "abishekdhamu207@gmail.com",
    phone: "6381530958",
    phoneFormatted: "+91 63815 30958",
    location: "Salem, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/abishek-d-60892834a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    github: "https://github.com/abishekdhamu2007-lang",
    youtube: "[YOUR YOUTUBE]",
  },
  profileImage: "/images/abishek.jpg",
  resumePath: "/abishek-d-resume.pdf",
  resumeFileName: "abishek D-resume.pdf",
};

export const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Building responsive, modern, and accessible user interfaces",
    color: "#4F46E5",
    skills: [
      { name: "HTML", levelDescription: "Semantic, accessible web structure", iconName: "Code2", tag: "Markup" },
      { name: "CSS", levelDescription: "Modern styling, flexbox, grid, animations", iconName: "Palette", tag: "Styling" },
      { name: "JavaScript", levelDescription: "ES6+, asynchronous logic, DOM manipulation", iconName: "FileCode", tag: "Scripting" },
      { name: "React", levelDescription: "Components, hooks, state management, SPA", iconName: "Atom", tag: "Framework" },
      { name: "Responsive Design", levelDescription: "Mobile-first, fluid layout systems", iconName: "Layout", tag: "Design" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Core programming languages and computational problem solving",
    color: "#7C3AED",
    skills: [
      { name: "JavaScript", levelDescription: "Functional & object-oriented programming", iconName: "Terminal", tag: "Core" },
      { name: "Python", levelDescription: "Scripting, data handling, and automation", iconName: "Binary", tag: "Language" },
      { name: "Java", levelDescription: "Object-oriented programming fundamentals", iconName: "Cpu", tag: "OOP" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Relational data structuring, querying, and fundamental modeling",
    color: "#06B6D4",
    skills: [
      { name: "SQL", levelDescription: "Relational queries, joins, filtering, aggregations", iconName: "Database", tag: "Query" },
      { name: "Database Fundamentals", levelDescription: "Schema design, tables, data integrity", iconName: "HardDrive", tag: "Data" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    description: "Modern developer workflow, version control, and IDE tools",
    color: "#3B82F6",
    skills: [
      { name: "Git", levelDescription: "Version control, branching, commit history", iconName: "GitBranch", tag: "VCS" },
      { name: "GitHub", levelDescription: "Remote repos, collaboration, open-source workflow", iconName: "Github", tag: "Platform" },
      { name: "VS Code", levelDescription: "Developer productivity, debugging, extensions", iconName: "Boxes", tag: "Editor" },
    ],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    description: "Deriving insights, visualizing metrics, and data processing",
    color: "#10B981",
    skills: [
      { name: "Excel", levelDescription: "Formulas, data organization, analysis spreadsheets", iconName: "Table", tag: "Analysis" },
      { name: "SQL for Analytics", levelDescription: "Data extraction, transformation, aggregation", iconName: "BarChart3", tag: "Extraction" },
      { name: "Data Visualization", levelDescription: "Insightful charts, metrics representation", iconName: "PieChart", tag: "Visuals" },
      { name: "Google Data Analytics", levelDescription: "Foundational analytics processes & methodology", iconName: "TrendingUp", tag: "Concepts" },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Leveraging generative tools and modern AI-enhanced workflows",
    color: "#F59E0B",
    skills: [
      { name: "AI Tools", levelDescription: "Productivity enhancement & workflow automation", iconName: "Sparkles", tag: "Productivity" },
      { name: "Generative AI", levelDescription: "Prompting, LLM integrations, creative workflows", iconName: "BrainCircuit", tag: "GenAI" },
      { name: "AI-assisted Development", levelDescription: "Accelerating code quality, testing & docs", iconName: "Bot", tag: "DevOps" },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    title: "Web Development Intern",
    organization: "Web Development Internship",
    type: "Internship Experience",
    period: "Internship Exposure",
    description:
      "Engaged in hands-on frontend development, translating UI concepts into responsive web interfaces while maintaining modern coding standards.",
    skills: [
      "Frontend Development",
      "Responsive Web Design",
      "UI Implementation",
      "HTML & CSS",
      "JavaScript",
      "Website Testing",
      "Debugging",
      "Git & GitHub Workflow",
    ],
    points: [
      "Implemented responsive web pages and components using modern HTML5, CSS3, and JavaScript.",
      "Ensured mobile-friendly layouts and cross-browser visual consistency across varying viewports.",
      "Participated in debugging, code optimization, and routine website functional testing.",
      "Collaborated using Git and GitHub for version control and source code management.",
    ],
  },
  {
    title: "TCS iOS Young Professional",
    organization: "Tata Consultancy Services (TCS)",
    type: "Professional Development / Course",
    period: "Professional Certification & Learning",
    description:
      "Comprehensive professional development program focusing on industry-oriented learning, technology fundamentals, and essential workplace competencies.",
    skills: [
      "Professional Development",
      "Industry-Oriented Learning",
      "Technology Fundamentals",
      "Workplace Communication",
      "Problem Solving",
      "Collaborative Skills",
    ],
    points: [
      "Gained structured understanding of corporate technology standards, workplace practices, and agile concepts.",
      "Strengthened core technology fundamentals, computational thinking, and software methodologies.",
      "Cultivated business communication, analytical problem solving, and collaborative professional etiquette.",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Front End Development",
    issuer: "Infosys Springboard",
    category: "Web Development",
    iconType: "Code",
    color: "#4F46E5",
  },
  {
    title: "Introduction to AI",
    issuer: "GUVI",
    category: "Artificial Intelligence",
    iconType: "Brain",
    color: "#7C3AED",
  },
  {
    title: "Solution Architecture",
    issuer: "Forge Solutions",
    category: "Architecture & Systems",
    iconType: "Layers",
    color: "#06B6D4",
  },
  {
    title: "Google Data Analytics",
    issuer: "Google",
    category: "Data Analytics",
    iconType: "BarChart",
    color: "#10B981",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "iot-energy-monitor",
    title: "IoT Energy Monitoring System",
    category: "IoT + Web Development",
    badge: "Hardware & Web Integration",
    description:
      "A web-based IoT energy monitoring solution designed to visualize and monitor energy consumption data through an interactive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "IoT", "Data Visualization"],
    githubUrl: "https://github.com/abishekdhamu2007-lang",
    featured: true,
    accentColor: "#06B6D4",
  },
  {
    id: "swiggy-model",
    title: "Swiggy Model",
    category: "Web Development",
    badge: "Swiggy-inspired project",
    description:
      "A Swiggy-inspired food delivery website model designed to demonstrate modern web interface design, responsive layouts, navigation, and food-ordering user experience.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/abishekdhamu2007-lang",
    featured: true,
    accentColor: "#F59E0B",
  },
  {
    id: "food-wastage-management",
    title: "Food Wastage Management Website",
    category: "Web Development",
    badge: "Social Impact & Sustainability",
    description:
      "A web-based platform concept focused on food-wastage awareness and encouraging responsible food management and redistribution.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    githubUrl: "https://github.com/abishekdhamu2007-lang",
    featured: true,
    accentColor: "#10B981",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    badge: "Production Web App",
    description:
      "A premium responsive portfolio website showcasing web development skills, certifications, experience, and projects through a modern interactive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/abishekdhamu2007-lang",
    featured: true,
    accentColor: "#4F46E5",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Web Development",
    description: "Modern, responsive websites and web applications built with clean code and robust architectural standards.",
    iconName: "Globe",
    color: "#4F46E5",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Interactive and user-friendly frontend experiences crafted with modern component paradigms and smooth state management.",
    iconName: "LayoutGrid",
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Responsive Design",
    description: "Websites thoughtfully optimized for seamless usability across mobile, tablet, laptop, and ultra-wide desktop screens.",
    iconName: "Smartphone",
    color: "#06B6D4",
  },
  {
    id: 4,
    title: "UI Implementation",
    description: "Converting modern design mockups and wireframes into highly accurate, functional, and accessible web interfaces.",
    iconName: "Sparkle",
    color: "#3B82F6",
  },
  {
    id: 5,
    title: "Website Testing",
    description: "Functional, cross-browser, and responsive testing to guarantee flawless user interaction and bug-free delivery.",
    iconName: "CheckCircle2",
    color: "#10B981",
  },
  {
    id: 6,
    title: "AI-Enhanced Development",
    description: "Leveraging cutting-edge AI developer tools to accelerate coding efficiency, workflow automation, and documentation.",
    iconName: "Bot",
    color: "#F59E0B",
  },
];

export const STATS = [
  { label: "Internship Exposure", value: "Web Dev", icon: "Briefcase" },
  { label: "TCS Program", value: "iOS Young Pro", icon: "Award" },
  { label: "Key Certifications", value: "4+", icon: "FileCheck2" },
  { label: "Featured Projects", value: "4+", icon: "FolderGit2" },
];
