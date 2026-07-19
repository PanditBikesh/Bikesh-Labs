import type { Skill } from "../types/skill";

export const skills: Skill[] = [
  // =========================
  // Frontend
  // =========================

  {
    name: "React",
    category: "Frontend",
    level: "Intermediate",
    percentage: 80,
    description:
      "Building modern, responsive single-page applications using React and reusable component architecture.",
    years: "1+ Year",
    featured: true,
  },

  {
    name: "TypeScript",
    category: "Frontend",
    level: "Intermediate",
    percentage: 75,
    description:
      "Developing scalable applications with static typing and maintainable code.",
    years: "1+ Year",
  },

  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Intermediate",
    percentage: 85,
    description:
      "Creating responsive, utility-first user interfaces with modern design principles.",
    years: "1+ Year",
  },

  // =========================
  // Backend
  // =========================

  {
    name: "Python",
    category: "Backend",
    level: "Advanced",
    percentage: 90,
    description:
      "Building automation tools, AI applications, APIs, and machine learning projects.",
    years: "2+ Years",
    featured: true,
  },

  {
    name: "FastAPI",
    category: "Backend",
    level: "Intermediate",
    percentage: 78,
    description:
      "Developing RESTful APIs and backend services using FastAPI.",
    years: "1+ Year",
  },

  // =========================
  // AI / Machine Learning
  // =========================

  {
    name: "Machine Learning",
    category: "AI / ML",
    level: "Intermediate",
    percentage: 82,
    description:
      "Experience with supervised learning, model evaluation, feature engineering, and deployment.",
    years: "1+ Year",
    featured: true,
  },

  {
    name: "OpenCV",
    category: "AI / ML",
    level: "Intermediate",
    percentage: 72,
    description:
      "Computer vision applications including image processing and face recognition.",
  },

  {
    name: "Whisper",
    category: "AI / ML",
    level: "Intermediate",
    percentage: 78,
    description:
      "Speech-to-text integration for offline voice assistants and AI systems.",
  },

  {
    name: "Ollama",
    category: "AI / ML",
    level: "Intermediate",
    percentage: 75,
    description:
      "Running and integrating local large language models into AI applications.",
  },

  // =========================
  // Tools
  // =========================

  {
    name: "Git",
    category: "Tools",
    level: "Intermediate",
    percentage: 75,
    description:
      "Version control, branching strategies, and collaborative software development.",
  },

  {
    name: "GitHub",
    category: "Tools",
    level: "Intermediate",
    percentage: 78,
    description:
      "Repository management, collaboration, and CI-ready workflows.",
  },

  {
    name: "VS Code",
    category: "Tools",
    level: "Advanced",
    percentage: 90,
    description:
      "Primary development environment with extensions and debugging tools.",
  },
];