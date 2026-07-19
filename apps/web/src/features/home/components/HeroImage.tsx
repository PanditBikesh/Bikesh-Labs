import heroImg from "@/assets/images/hero.webp";

export default function HeroImage() {
  return (
    <div className="relative flex justify-center lg:justify-end">

      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          m-auto
          h-[360px]
          w-[360px]
          rounded-full
          bg-[var(--primary)]/20
          blur-3xl
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      {/* Decorative Circle */}

      <div
        className="
          absolute
          h-[360px]
          w-[360px]
          rounded-full
          border
          border-[var(--primary)]/20
          sm:h-[420px]
          sm:w-[420px]
        "
      />

      {/* Profile Image */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          shadow-2xl
        "
      >
        <img
          src={heroImg}
          alt="Portrait of Bikesh Pandit"
          loading="eager"
          decoding="async"
          draggable={false}
          className="
            aspect-[4/5]
            w-full
            max-w-[420px]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Image Overlay */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
        />
      </div>

      {/* Current Project Card */}

      <div
        className="
          absolute
          bottom-6
          -left-4
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface)]/95
          px-5
          py-4
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          sm:-left-6
          sm:px-6
        "
      >
        <p className="text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
          Current Project
        </p>

        <h3 className="mt-1 text-lg font-bold text-[var(--text)]">
          OMNIX 2.0
        </h3>

        <p className="mt-1 text-sm font-medium text-[var(--primary)]">
          AI Voice Assistant
        </p>
      </div>

    </div>
  );
}