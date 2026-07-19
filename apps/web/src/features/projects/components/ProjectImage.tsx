type Props = {
  image: string;
  title: string;
};

export default function ProjectImage({
  image,
  title,
}: Props) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-t-3xl
      "
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="
          aspect-video
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/70
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}