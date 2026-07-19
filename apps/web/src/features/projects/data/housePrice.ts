import housePriceImg from "@/assets/images/projects/optimized/house-price.webp";

import type { Project } from "../types/project";

export const housePriceProject: Project = {
  slug: "house-price-prediction",

  title: "House Price Prediction",

  category: "Machine Learning",

  image: housePriceImg,

  status: "Completed",

  year: "2025",

  featured: false,

  github: "",

  demo: "",

  description:
    "A Machine Learning regression model that predicts residential property prices using location, structural characteristics, and housing features.",

  overview:
    "House Price Prediction is a regression-based machine learning project developed to estimate residential property values using multiple housing attributes. The project demonstrates the complete machine learning workflow including data preprocessing, feature engineering, model training, evaluation, and prediction using regression algorithms.",

  problem:
    "Accurately estimating property prices is challenging because housing values depend on many interconnected factors such as location, size, number of rooms, and neighborhood characteristics. Manual estimation is often inconsistent and subjective.",

  solution:
    "A complete regression pipeline was developed to clean housing data, engineer relevant features, train multiple regression models, and evaluate their performance. The final model predicts house prices with high accuracy while providing insights into the factors that influence property values.",

  architecture:
    "The project follows a modular machine learning pipeline consisting of data preprocessing, feature engineering, regression model training, evaluation, and price prediction.",

  architectureBlocks: [
    {
      title: "Dataset",
      description: "Housing dataset containing property and location information.",
    },
    {
      title: "Preprocessing",
      description: "Cleaning missing values, encoding categorical variables, and scaling numerical features.",
    },
    {
      title: "Feature Engineering",
      description: "Selecting and transforming important housing features.",
    },
    {
      title: "Regression Model",
      description: "Training regression algorithms to estimate property prices.",
    },
    {
      title: "Prediction",
      description: "Predicting market prices for residential properties.",
    },
    {
      title: "Evaluation",
      description: "Evaluating regression performance using MAE, RMSE, and R² Score.",
    },
  ],

  technologies: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Regression",
  ],

  features: [
    "Exploratory Data Analysis",
    "Missing value handling",
    "Feature engineering",
    "Multiple regression model comparison",
    "House price prediction",
    "Regression evaluation metrics",
    "Data visualization",
  ],

  challenges: [
    "Handling missing and inconsistent property information.",
    "Selecting the most influential housing features.",
    "Reducing prediction error across different property types.",
    "Preventing regression model overfitting.",
  ],

  future: [
    "Deploy the prediction model as a web application.",
    "Integrate real estate market data APIs.",
    "Support regional price prediction.",
    "Use ensemble regression algorithms.",
    "Generate property valuation reports automatically.",
  ],

  screenshots: [
    housePriceImg,
  ],
};