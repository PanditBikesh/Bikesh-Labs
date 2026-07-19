import sentimentImg from "@/assets/images/projects/optimized/ai-sentiment-analysis.webp";

import type { Project } from "../types/project";

export const sentimentProject: Project = {
  slug: "ai-sentiment-analysis",

  title: "AI Sentiment Analysis",

  category: "Artificial Intelligence",

  image: sentimentImg,

  status: "Completed",

  year: "2025",

  featured: true,

  github: "",

  demo: "",

  description:
    "An Artificial Intelligence application that analyzes social media posts and classifies them into Positive, Neutral, or Negative sentiments using Natural Language Processing and Machine Learning.",

  overview:
    "AI Sentiment Analysis is a Natural Language Processing project developed to understand public opinion from textual data. The system processes social media posts, performs text preprocessing and feature extraction using TF-IDF, and applies machine learning classification algorithms to accurately predict sentiment categories. The project demonstrates the complete NLP pipeline from raw text to sentiment prediction.",

  problem:
    "Organizations receive thousands of customer reviews, comments, and social media posts every day. Manually understanding customer sentiment is inefficient, making it difficult to identify trends and customer satisfaction in real time.",

  solution:
    "A complete NLP pipeline was developed to clean text, remove noise, convert text into numerical features using TF-IDF, train multiple machine learning classifiers, and predict sentiment with high accuracy. The solution enables automatic sentiment classification for customer feedback analysis.",

  architecture:
    "The project follows a modular NLP workflow consisting of text preprocessing, feature extraction, model training, sentiment prediction, and evaluation.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "Social media posts labeled with sentiment classes.",
    },
    {
      title: "Text Preprocessing",
      description: "Cleaning, tokenization, stopword removal, and normalization.",
    },
    {
      title: "Feature Extraction",
      description: "TF-IDF vectorization for converting text into numerical features.",
    },
    {
      title: "Classification",
      description: "Training multiple machine learning classification models.",
    },
    {
      title: "Prediction",
      description: "Predicting Positive, Neutral, or Negative sentiment.",
    },
    {
      title: "Evaluation",
      description: "Accuracy, Precision, Recall, F1 Score, and Confusion Matrix.",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Natural Language Processing",
    "TF-IDF",
    "Matplotlib",
    "Seaborn",
  ],

  features: [
    "Text preprocessing pipeline",
    "TF-IDF feature extraction",
    "Sentiment classification",
    "Multiple model comparison",
    "Social media sentiment prediction",
    "Performance evaluation",
    "Confusion matrix visualization",
  ],

  challenges: [
    "Handling noisy and unstructured social media text.",
    "Managing class imbalance between sentiment categories.",
    "Improving prediction accuracy for neutral sentiment.",
    "Selecting the most informative textual features.",
  ],

  future: [
    "Deploy as a sentiment analysis web application.",
    "Support multilingual sentiment analysis.",
    "Integrate transformer models such as BERT.",
    "Real-time social media monitoring dashboard.",
    "Aspect-based sentiment analysis.",
  ],

  screenshots: [
    sentimentImg,
  ],
};