import fraudImg from "@/assets/images/projects/optimized/credit-card-fraud.webp";
import type { Project } from "../types/project";

export const fraudProject: Project = {
  slug: "credit-card-fraud-detection",

  title: "Credit Card Fraud Detection",

  category: "Machine Learning",

  image: fraudImg,

  status: "Completed",

  year: "2025",

  featured: true,

  github: "",

  demo: "",

  description:
    "A Machine Learning system that detects fraudulent credit card transactions using imbalanced data handling techniques and classification algorithms.",

  overview:
    "Credit Card Fraud Detection is a machine learning classification project designed to identify fraudulent financial transactions from highly imbalanced datasets. The project demonstrates advanced preprocessing techniques, class balancing with SMOTE, feature engineering, model comparison, and performance evaluation for fraud detection.",

  problem:
    "Financial institutions process millions of transactions daily, making manual fraud detection impossible. Fraudulent transactions represent only a tiny percentage of all transactions, creating a highly imbalanced classification problem that is difficult for traditional machine learning models.",

  solution:
    "The project applies preprocessing, feature engineering, SMOTE oversampling, and multiple classification algorithms to improve fraud detection performance while minimizing false positives. Several machine learning models were evaluated to identify the most effective fraud detection approach.",

  architecture:
    "The project follows a complete machine learning classification workflow from transaction preprocessing to fraud prediction and model evaluation.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "Historical credit card transaction records.",
    },
    {
      title: "Preprocessing",
      description: "Cleaning transaction data and preparing features.",
    },
    {
      title: "SMOTE",
      description: "Balancing minority fraud samples using oversampling.",
    },
    {
      title: "Classification",
      description: "Training multiple fraud detection models.",
    },
    {
      title: "Prediction",
      description: "Classifying transactions as legitimate or fraudulent.",
    },
    {
      title: "Evaluation",
      description: "Accuracy, Precision, Recall, F1 Score, ROC-AUC, and Confusion Matrix.",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "SMOTE",
    "XGBoost",
    "Matplotlib",
    "Seaborn",
  ],

  features: [
    "Transaction preprocessing",
    "Class imbalance handling using SMOTE",
    "Feature engineering",
    "Multiple classifier comparison",
    "Credit card fraud prediction",
    "Confusion matrix visualization",
    "Performance metric comparison",
  ],

  challenges: [
    "Handling extremely imbalanced transaction data.",
    "Reducing false positives without lowering fraud detection accuracy.",
    "Selecting optimal classification algorithms.",
    "Maintaining high recall while preventing overfitting.",
  ],

  future: [
    "Real-time fraud detection API.",
    "Deep learning-based fraud detection.",
    "Fraud risk scoring dashboard.",
    "Streaming transaction analysis.",
    "Financial institution integration.",
  ],

  screenshots: [
    fraudImg,
  ],
};