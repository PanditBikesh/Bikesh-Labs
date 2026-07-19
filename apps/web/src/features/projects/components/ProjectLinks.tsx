import {
  ExternalLink,
  GitBranch,
  Lock,
} from "lucide-react";

import Button from "@/shared/components/ui/Button";

type Props = {
  github: string;
  demo?: string;
};

export default function ProjectLinks({
  github,
  demo,
}: Props) {

  const open = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="flex flex-wrap gap-4">

      {github ? (

        <Button
          variant="outline"
          onClick={() => open(github)}
        >
          <GitBranch className="h-5 w-5" />

          Source Code
        </Button>

      ) : (

        <Button
          variant="outline"
          disabled
        >
          <Lock className="h-5 w-5" />

          Private Repository
        </Button>

      )}

      {demo && (

        <Button
          onClick={() => open(demo)}
        >
          <ExternalLink className="h-5 w-5" />

          Live Demo
        </Button>

      )}

    </div>
  );
}