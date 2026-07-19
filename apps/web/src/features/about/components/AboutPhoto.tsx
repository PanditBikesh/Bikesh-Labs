import Card from "@/shared/components/ui/Card";

import profileImg from "@/assets/images/profile.webp";

import { about } from "../data/about";

export default function AboutPhoto() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden rounded-3xl">
        <img
          src={profileImg}
          alt="Bikesh Pandit"
          className="
            aspect-[4/5]
            w-full
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />
      </Card>

      <div className="grid grid-cols-2 gap-4">
        {about.statistics.map((item) => (
          <Card
            key={item.label}
            className="p-5 text-center"
          >
            <h3 className="text-3xl font-bold text-[var(--primary)]">
              {item.value}
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              {item.label}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}