import { omnixProject } from "./omnix";
import { sentimentProject } from "./sentiment";
import { fakeNewsProject } from "./fakeNews";
import { fraudProject } from "./fraud";
import { churnProject } from "./churn";
import { studentProject } from "./student";
import { housePriceProject } from "./housePrice";
import { smsSpamProject } from "./spam";

import type { Project } from "../types/project";

export const projects: Project[] = [
  omnixProject,
  sentimentProject,
  fakeNewsProject,
  fraudProject,
  churnProject,
  studentProject,
  housePriceProject,
  smsSpamProject,
];