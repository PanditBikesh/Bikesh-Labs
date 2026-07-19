import omnixImg from "@/assets/images/projects/optimized/omnix.webp";

import type { Project } from "../types/project";

export const omnixProject: Project = {
  slug: "omnix-2",

  title: "OMNIX 2.0",

  category: "Artificial Intelligence",

  image: omnixImg,

  status: "In Progress",

  year: "2026",

  featured: true,

  github: "",

  demo: "",

  description:
    "An intelligent desktop AI assistant designed to automate daily tasks through voice interaction, natural language processing, and modular software architecture.",

  overview:
    "OMNIX 2.0 is an AI-powered desktop assistant designed for Windows that combines speech recognition, natural language understanding, desktop automation, and large language models into a single modular application. The project focuses on delivering a fast, intelligent, and extensible assistant using a clean architecture that allows new capabilities to be added without affecting the overall system.",

  problem:
    "Traditional desktop assistants often rely heavily on cloud services, provide limited customization, and struggle to integrate multiple AI capabilities into a single application. They also lack modular architectures, making it difficult to extend functionality or maintain the system over time. The goal of OMNIX 2.0 was to design a privacy-focused, modular desktop assistant capable of natural voice interaction, automation, and intelligent task execution.",

  solution:
    "OMNIX 2.0 was developed using a clean modular architecture that separates user interface, speech processing, AI reasoning, services, and skills into independent modules. The assistant integrates offline speech recognition with Whisper, wake-word detection using Porcupine, large language model capabilities through Ollama, and desktop automation using Python. This architecture makes the application scalable, maintainable, and easy to extend with new AI-powered features.",
  architecture:
    "OMNIX 2.0 follows a layered clean architecture where speech input, AI reasoning, desktop automation, and user interface are implemented as independent modules. Communication between components is event-driven, allowing new skills and services to be added without modifying existing modules.",
  
  architectureBlocks: [
    {
      title: "Speech Input",
      description: "Wake word detection using Porcupine and speech recognition with Whisper.",
    },
    {
      title: "Intent Engine",
      description: "Intent routing and AI reasoning powered by Ollama.",
    },
    {
      title: "Automation",
      description: "Desktop automation skills for opening apps, controlling the system, and executing commands.",
    },
    {
      title: "Speech Output",
      description: "Natural voice responses using Text-to-Speech.",
    },
  ],

  technologies: [
    "Python",
    "PySide6",
    "Whisper",
    "Porcupine",
    "Ollama",
    "pyttsx3",
    "PvRecorder",
    "SoundDevice",
    "Threading",
    "Clean Architecture",
  ],

  features: [
    "Wake-word activated voice assistant",
    "Offline speech recognition using Whisper",
    "Natural text-to-speech responses",
    "Desktop automation and system control",
    "AI-powered conversations using Ollama",
    "Interruptible voice interaction (barge-in)",
    "Modular skill-based architecture",
    "Application launching and command execution",
    "Extensible service and plugin system",
  ],

  challenges: [
    "Achieving low-latency speech recognition while maintaining accurate transcription for real-time conversations.",

    "Designing a modular clean architecture that separates AI reasoning, speech processing, automation, and UI without tight coupling.",

    "Synchronizing wake-word detection, speech recognition, AI inference, and text-to-speech without blocking the user interface.",

    "Integrating multiple AI technologies such as Whisper, Porcupine, and Ollama into a single maintainable desktop application.",
  ],

  future: [
    "Persistent conversational memory",
    "Multi-language voice conversations",
    "Computer Vision integration",
    "Smart task planning using autonomous AI agents",
    "Cross-platform support (Windows, Linux, macOS)",
    "Plugin marketplace for third-party skills",
    "Cloud synchronization across devices",
    "Smart home and IoT integration",
  ],

  screenshots: [
    omnixImg,
    
  ],
};