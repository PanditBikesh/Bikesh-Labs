import Button from "@/shared/components/ui/Button";

type Props = {
  github: string;
  demo?: string;
};

export default function ProjectActions({
  github,
  demo,
}: Props) {

  const open = (url: string) =>
    window.open(url, "_blank", "noopener,noreferrer");

  return (
    <div className="mt-6 flex flex-wrap gap-3">

      {github && (

        <Button
          size="sm"
          onClick={() => open(github)}
        >
          Source Code
        </Button>

      )}

      {demo && (

        <Button
          size="sm"
          variant="outline"
          onClick={() => open(demo)}
        >
          Live Demo
        </Button>

      )}

    </div>
  );
}