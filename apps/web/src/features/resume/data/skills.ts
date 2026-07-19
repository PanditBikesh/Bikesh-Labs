import type { SkillGroup } from "../types/skill";

export const resumeSkills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "SQL",
    ],
  },

  {
    category: "Artificial Intelligence & Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "OpenCV",
      "Whisper",
      "Ollama",
    ],
  },

  {
    category: "Frontend Development",
    items: [
      "React",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    category: "Backend Development",
    items: [
      "FastAPI",
      "REST APIs",
    ],
  },

  {
    category: "Databases",
    items: [
      "SQLite",
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Linux",
      "Postman",
    ],
  },

  {
    category: "Software Engineering",
    items: [
      "Clean Architecture",
      "Object-Oriented Programming",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
    ],
  },
] as const;