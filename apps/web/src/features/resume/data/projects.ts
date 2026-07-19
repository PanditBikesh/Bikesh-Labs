import type { ResumeProject } from "../types/project";

export const projects: ResumeProject[] = [
  {
    slug: "omnix-2",
    title: "OMNIX 2.0",
    category: "Artificial Intelligence",
    description:
      "An intelligent desktop AI voice assistant featuring wake-word detection, offline speech recognition, local large language model integration, and clean modular architecture.",
    technologies: [
      "Python",
      "Whisper",
      "Ollama",
      "PySide6",
      "Clean Architecture",
    ],
  },

  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A modern responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS showcasing projects, resume, and technical skills.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],
  },

  {
    slug: "sms-spam-detection",
    title: "SMS Spam Detection",
    category: "Machine Learning",
    description:
      "Machine learning model for classifying SMS messages as spam or legitimate using Natural Language Processing techniques.",
    technologies: [
      "Python",
      "Scikit-learn",
      "NLP",
    ],
  },

  {
    slug: "student-performance-prediction",
    title: "Student Performance Prediction",
    category: "Machine Learning",
    description:
      "Machine learning model for predicting student academic performance using classification algorithms and feature engineering.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
    ],
  },

  {
    slug: "real-estate-price-prediction",
    title: "Real Estate Price Prediction",
    category: "Machine Learning",
    description:
      "Regression model for predicting residential property prices using data preprocessing, feature engineering, and evaluation techniques.",
    technologies: [
      "Python",
      "Regression",
      "Pandas",
    ],
  },
];