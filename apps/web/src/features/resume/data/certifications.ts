import codsoftCertificate from "@/assets/images/certificates/codsoft.png";
import simplilearnCertificate from "@/assets/images/certificates/simplilearn.png";

import codsoftPdf from "@/assets/pdfs/CodSoft-Certificate.pdf";
import simplilearnPdf from "@/assets/pdfs/Simplilearn-Certificate.pdf";

import type { Certification } from "../types/certification";

export const certifications: Certification[] = [
  {
    title: "Machine Learning Internship",

    issuer: "CodSoft",

    issueDate: "23 February 2026",

    credentialId: "8720bbe",

    skills: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Data Analysis",
      "Model Development",
    ],

    image: codsoftCertificate,

    pdf: codsoftPdf,

    verify: "https://www.codsoft.in",
  },

  {
    title: "Python Libraries for Data Science",

    issuer: "Simplilearn",

    issueDate: "18 January 2026",

    credentialId: "9728456",

    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Data Analysis",
    ],

    image: simplilearnCertificate,

    pdf: simplilearnPdf,

    verify: "https://simpli-web.app.link/e/YOUR_CERTIFICATE_LINK",
  },
];