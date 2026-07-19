import { useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

type Props = {
  images: string[];
  current: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function ImageLightbox({
  images,
  current,
  onClose,
  onPrevious,
  onNext,
}: Props) {
  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [onClose, onPrevious, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/90
        p-6
        backdrop-blur-sm
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center justify-center"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="
            absolute
            right-0
            top-0
            rounded-full
            bg-white/10
            p-3
            text-white
            transition
            hover:bg-white/20
          "
        >
          <X className="h-6 w-6" />
        </button>

        <button
          type="button"
          aria-label="Previous image"
          onClick={onPrevious}
          className="
            absolute
            -left-16
            rounded-full
            bg-white/10
            p-3
            text-white
            transition
            hover:bg-white/20
          "
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <img
          src={images[current]}
          alt={`Project screenshot ${current + 1}`}
          draggable={false}
          className="
            max-h-[90vh]
            max-w-[90vw]
            rounded-2xl
            shadow-2xl
          "
        />

        <button
          type="button"
          aria-label="Next image"
          onClick={onNext}
          className="
            absolute
            -right-16
            rounded-full
            bg-white/10
            p-3
            text-white
            transition
            hover:bg-white/20
          "
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        <div
          className="
            absolute
            bottom-4
            left-1/2
            -translate-x-1/2
            rounded-full
            bg-black/60
            px-4
            py-2
            text-sm
            font-medium
            text-white
          "
        >
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}