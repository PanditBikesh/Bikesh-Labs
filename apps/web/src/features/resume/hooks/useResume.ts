import { summary } from "../data/summary";
import { education } from "../data/education";
import { experiences } from "../data/experience";
import { resumeSkills } from "../data/skills";
import { languages } from "../data/languages";
import { projects } from "../data/projects";
import { certifications } from "../data/certifications";

export function useResume() {
  return {
    summary,
    education,
    experiences,
    resumeSkills,
    languages,
    projects,
    certifications,
  };
}