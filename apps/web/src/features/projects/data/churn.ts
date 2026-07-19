import churnImg from "@/assets/images/projects/optimized/bank-churn.webp";

import type { Project } from "../types/project";

export const churnProject: Project = {
  slug: "bank-churn-prediction",

  title: "Bank Churn Prediction",

  category: "Machine Learning",

  image: churnImg,

  status: "Completed",

  year: "2025",

  featured: false,

  github: "",

  demo: "",

  description:
    "A Machine Learning system that predicts whether a customer is likely to leave a bank using customer demographics, banking history, and behavioral patterns.",

  overview:
    "Bank Churn Prediction is a supervised machine learning project developed to identify customers who are likely to discontinue banking services. The system analyzes customer demographics, financial behavior, and account activity to predict churn, helping financial institutions improve customer retention strategies.",

  problem:
    "Banks lose significant revenue when customers close their accounts. Manually identifying customers at risk is difficult because of the large amount of customer data available.",

  solution:
    "A complete machine learning classification pipeline was implemented, including preprocessing, feature engineering, model comparison, and evaluation. The final model predicts customer churn with high accuracy, enabling proactive customer retention initiatives.",

  architecture:
    "The system follows a traditional machine learning workflow from data collection to prediction and evaluation.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "Customer demographic and banking information.",
    },
    {
      title: "Preprocessing",
      description: "Cleaning data, encoding categorical variables, and scaling features.",
    },
    {
      title: "Model Training",
      description: "Training classification algorithms using Scikit-learn.",
    },
    {
      title: "Prediction",
      description: "Predicting customer churn probability.",
    },
    {
      title: "Evaluation",
      description: "Accuracy, Precision, Recall, F1 Score and Confusion Matrix.",
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
    "Customer data preprocessing",
    "Feature engineering",
    "Exploratory data analysis",
    "Machine learning classification",
    "Customer churn prediction",
    "Performance evaluation",
    "Business insight visualization",
  ],

  challenges: [
    "Handling categorical customer information.",
    "Managing class imbalance.",
    "Selecting the most influential customer features.",
    "Improving prediction accuracy while avoiding overfitting.",
  ],

  future: [
    "Deploy as a customer retention dashboard.",
    "Real-time churn prediction API.",
    "Gradient boosting models (XGBoost, LightGBM).",
    "Explainable AI using SHAP values.",
    "Customer recommendation system.",
  ],

  screenshots: [
    churnImg,
  ],
};