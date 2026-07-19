import spamImg from "@/assets/images/projects/optimized/sms-spam.webp";

import type { Project } from "../types/project";

export const smsSpamProject: Project = {
  slug: "sms-spam-detection",

  title: "SMS Spam Detection",

  category: "Natural Language Processing",

  image: spamImg,

  status: "Completed",

  year: "2025",

  featured: false,

  github: "",

  demo: "",

  description:
    "A Natural Language Processing system that automatically classifies SMS messages as Spam or Ham using TF-IDF feature extraction and machine learning algorithms.",

  overview:
    "SMS Spam Detection is an NLP classification project developed to automatically identify unwanted spam messages. The project demonstrates the complete NLP workflow, including text preprocessing, feature extraction using TF-IDF, model training, and classification of SMS messages into spam and legitimate categories.",

  problem:
    "Mobile users receive a large number of unsolicited promotional and fraudulent SMS messages every day. Manual filtering is inefficient and often fails to prevent unwanted messages from reaching users.",

  solution:
    "A complete NLP pipeline was developed to preprocess SMS messages, convert text into TF-IDF vectors, train multiple classification algorithms, and accurately identify spam messages while minimizing false positives.",

  architecture:
    "The project follows a complete NLP classification workflow from SMS preprocessing to spam prediction and evaluation.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "Collection of labeled spam and ham SMS messages.",
    },
    {
      title: "Text Preprocessing",
      description: "Cleaning text, tokenization, stopword removal, and normalization.",
    },
    {
      title: "TF-IDF",
      description: "Transforming SMS text into numerical feature vectors.",
    },
    {
      title: "Classification",
      description: "Training machine learning classifiers for spam detection.",
    },
    {
      title: "Prediction",
      description: "Predicting whether a message is Spam or Ham.",
    },
    {
      title: "Evaluation",
      description: "Accuracy, Precision, Recall, F1 Score, and Confusion Matrix.",
    },
  ],

  technologies: [
    "Python",
    "Scikit-learn",
    "Pandas",
    "Natural Language Processing",
    "TF-IDF",
    "Matplotlib",
  ],

  features: [
    "SMS text preprocessing",
    "TF-IDF vectorization",
    "Spam message classification",
    "Multiple classifier comparison",
    "Prediction pipeline",
    "Performance evaluation",
    "Confusion matrix visualization",
  ],

  challenges: [
    "Handling very short text messages.",
    "Reducing false positives for legitimate messages.",
    "Optimizing feature extraction for SMS data.",
    "Improving model generalization on unseen messages.",
  ],

  future: [
    "Real-time SMS spam detection API.",
    "Deep learning-based text classification.",
    "Multilingual spam detection.",
    "Email spam detection extension.",
    "Browser and mobile integration.",
  ],

  screenshots: [
    spamImg,
  ],
};