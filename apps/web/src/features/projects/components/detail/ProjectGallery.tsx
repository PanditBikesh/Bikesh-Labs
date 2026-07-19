import { useState } from "react";
import { Images } from "lucide-react";

import type { Project } from "../../types/project";

import ImageLightbox from "./ImageLightbox";

type Props = {
  project: Project;
};

export default function ProjectGallery({
  project,
}: Props) {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);

  if (project.screenshots.length === 0) {
    return null;
  }

  const previous = () =>
    setCurrent((prev) =>
      prev === 0
        ? project.screenshots.length - 1
        : prev - 1
    );

  const next = () =>
    setCurrent((prev) =>
      prev === project.screenshots.length - 1
        ? 0
        : prev + 1
    );

  return (
    <>
      <section
        id="gallery"
        className="
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          p-8
        "
      >
        <div className="mb-10 flex items-center gap-4">

          <div className="rounded-2xl bg-blue-500/10 p-3">
            <Images
              aria-hidden="true"
              className="h-6 w-6 text-[var(--primary)]"
            />
          </div>

          <div>

            <h2
              className="
                text-2xl
                font-bold
                text-[var(--text)]
                md:text-3xl
              "
            >
              Project Gallery
            </h2>

            <p className="mt-1 text-sm text-[var(--muted)]">
              Screenshots demonstrating the interface, workflow, and implementation of the project.
            </p>

          </div>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {project.screenshots.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => {
                setCurrent(index);
                setOpen(true);
              }}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                transition-all
                duration-300
                hover:border-blue-500
                hover:shadow-lg
              "
            >
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="
                  aspect-video
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </button>
          ))}

        </div>

      </section>

      {open && (
        <ImageLightbox
          images={project.screenshots}
          current={current}
          onClose={() => setOpen(false)}
          onPrevious={previous}
          onNext={next}
        />
      )}
    </>
  );
}