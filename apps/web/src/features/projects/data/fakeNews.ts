import fakeNewsImg from "@/assets/images/projects/optimized/fake-news.webp";
import type { Project } from "../types/project";

export const fakeNewsProject: Project = {
  slug: "fake-news-detection",

  title: "Fake News Detection System",

  category: "Machine Learning",

  image: fakeNewsImg,

  status: "Completed",

  year: "2025",

  featured: true,

  github: "",

  demo: "",

  description:
    "A Natural Language Processing application that detects misinformation by classifying online news articles as genuine or fake using machine learning techniques.",

  overview:
    "Fake News Detection is an NLP-based machine learning project developed to combat online misinformation. The system preprocesses textual news articles, extracts meaningful linguistic features using TF-IDF, and trains multiple classification algorithms to accurately distinguish genuine news from fake content. The project demonstrates the complete Natural Language Processing workflow from raw text to automated classification.",

  problem:
    "The rapid spread of fake news on the internet makes it difficult for users to distinguish reliable information from misinformation.",

  solution:
    "A complete Natural Language Processing pipeline was implemented to clean textual data, extract numerical features using TF-IDF, compare multiple classification algorithms, and predict whether a news article is genuine or fake with high accuracy.",

  architecture:
    "The project follows a modular NLP architecture consisting of text preprocessing, feature extraction, model training, prediction, and evaluation.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "News articles with fake and real labels.",
    },
    {
      title: "Text Cleaning",
      description: "Removing punctuation, stopwords and unwanted symbols.",
    },
    {
      title: "TF-IDF",
      description: "Converting text into numerical vectors.",
    },
    {
      title: "Classification",
      description: "Training machine learning models.",
    },
    {
      title: "Prediction",
      description: "Predicting whether news is fake or genuine.",
    },
    {
      title: "Evaluation",
      description:
        "Accuracy, Precision, Recall, F1 Score and Confusion Matrix.",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLTK",
    "TF-IDF",
    "Matplotlib",
    "Seaborn",
  ],

  features: [
    "News article preprocessing",
    "Text normalization",
    "TF-IDF feature extraction",
    "Multiple classifier comparison",
    "Fake news prediction",
    "Model performance evaluation",
    "Confusion matrix visualization",
  ],

  challenges: [
    "Cleaning noisy and unstructured news articles.",
    "Extracting meaningful textual features.",
    "Reducing false classifications.",
    "Improving model generalization on unseen news.",
  ],

  future: [
    "Deploy as a web application.",
    "Real-time fake news verification API.",
    "Transformer-based models (BERT).",
    "Multilingual fake news detection.",
    "Browser extension for instant verification.",
  ],

  screenshots: [
    fakeNewsImg,
  ],
};