import { useState } from "react";

type Props = {
  screenshots?: string[];
};

export default function ProjectGallery({
  screenshots = [],
}: Props) {
  const [activeImage, setActiveImage] = useState(0);

  if (!screenshots.length) return null;

  return (
    <div className="space-y-5">

      <img
        src={screenshots[activeImage]}
        alt={`Screenshot ${activeImage + 1}`}
        className="
          aspect-video
          w-full
          rounded-t-3xl
          object-cover
        "
      />

      {screenshots.length > 1 && (

        <div
          className="
            flex
            gap-3
            overflow-x-auto
            px-6
            pb-6
          "
        >
          {screenshots.map((image, index) => (

            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`
                overflow-hidden
                rounded-xl
                border-2
                transition-all
                duration-300

                ${
                  activeImage === index
                    ? "border-blue-500 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }
              `}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="
                  h-20
                  w-32
                  object-cover
                "
              />
            </button>

          ))}
        </div>

      )}

    </div>
  );
}