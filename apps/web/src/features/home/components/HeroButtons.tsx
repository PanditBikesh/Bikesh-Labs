import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/shared/components/ui/Button";

import resumePdf from "@/assets/resume/Bikeshresume.pdf";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-4">
      <Link to="/projects">
        <Button variant="primary" size="lg">
          View Projects
          <ArrowRight className="h-5 w-5 shrink-0" />
        </Button>
      </Link>

      <a
        href={resumePdf}
        download="Bikesh_Pandit_Resume.pdf"
        aria-label="Download Bikesh Pandit's resume"
      >
        <Button variant="outline" size="lg">
          <Download className="h-5 w-5 shrink-0" />
          Download Resume
        </Button>
      </a>
    </div>
  );
}