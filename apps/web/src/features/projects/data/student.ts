import studentImg from "@/assets/images/projects/optimized/student-performance.webp";

import type { Project } from "../types/project";

export const studentProject: Project = {
  slug: "student-performance-prediction",

  title: "Student Performance Prediction",

  category: "Machine Learning",

  image: studentImg,

  status: "Completed",

  year: "2025",

  featured: true,

  github: "",

  demo: "",

  description:
    "A Machine Learning application that predicts whether a student is likely to pass or fail based on academic, demographic, and behavioral attributes.",

  overview:
    "Student Performance Prediction is an end-to-end machine learning project developed to identify students who are at risk of poor academic performance. The system analyzes educational, demographic, and lifestyle factors, applies data preprocessing and feature engineering techniques, and trains multiple classification models to accurately predict student outcomes. The project demonstrates the complete machine learning lifecycle from data exploration to model evaluation.",

  problem:
    "Educational institutions often struggle to identify students who require academic support before final examinations. Manual assessment is time-consuming and may overlook important patterns hidden within large educational datasets.",

  solution:
    "A complete machine learning pipeline was developed to preprocess student data, engineer meaningful features, train multiple classification algorithms, and evaluate their performance. The final model predicts student performance with high accuracy, enabling educators to identify at-risk students early and provide timely intervention.",

  architecture:
    "The project follows a standard machine learning workflow consisting of data collection, preprocessing, feature engineering, model training, evaluation, and prediction. Each stage is modular, making the pipeline easy to maintain and extend.",

  architectureBlocks: [
    {
      title: "Dataset",
      description:
        "Student demographic, academic, and behavioral information.",
    },
    {
      title: "Preprocessing",
      description:
        "Data cleaning, missing value handling, encoding, and scaling.",
    },
    {
      title: "Feature Engineering",
      description:
        "Selecting and transforming important variables for prediction.",
    },
    {
      title: "Model Training",
      description:
        "Training multiple machine learning classification algorithms.",
    },
    {
      title: "Prediction",
      description:
        "Predicting whether a student is likely to pass or fail.",
    },
    {
      title: "Evaluation",
      description:
        "Comparing models using Accuracy, Precision, Recall, F1 Score, and Confusion Matrix.",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Jupyter Notebook",
  ],

  features: [
    "Comprehensive exploratory data analysis",
    "Data preprocessing and cleaning",
    "Feature engineering and selection",
    "Multiple classification model comparison",
    "Student performance prediction",
    "Model evaluation using standard ML metrics",
    "Confusion matrix visualization",
    "Performance comparison charts",
  ],

  challenges: [
    "Handling missing and inconsistent educational data.",
    "Selecting the most influential academic features.",
    "Preventing model overfitting while maintaining high accuracy.",
    "Comparing multiple classification algorithms to identify the best-performing model.",
  ],

  future: [
    "Deploy the model as a web application.",
    "Provide personalized study recommendations.",
    "Support real-time student performance monitoring.",
    "Integrate with Learning Management Systems (LMS).",
    "Use ensemble and deep learning models for improved accuracy.",
    "Generate automated performance reports for teachers.",
  ],

  screenshots: [
    studentImg,
  ],
};