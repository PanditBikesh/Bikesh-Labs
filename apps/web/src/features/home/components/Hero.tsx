
import { FadeIn } from "@/shared/animations";
import {
  Container,
  Section,
} from "@/shared/components/ui";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroImage from "./HeroImage";
import HeroScroll from "./HeroScroll";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <Section
      id="home"
      className="flex min-h-screen items-center justify-between"
    >
      <Container>
        <div className="grid items-center justify-between gap-16 lg:grid-cols-2">
          <FadeIn>
            <div>
              <HeroBadge />

              {/* Main identity heading */}
              <h1
                className="
                  mt-6
                  text-5xl
                  font-extrabold
                  leading-[1.1]
                  tracking-tight
                  text-[var(--text)]
                  md:text-6xl
                  xl:text-7xl
                "
              >
                Bikesh Kumar
                <span className="text-[var(--primary)]">
                  {" "}Pandit
                </span>
              </h1>

              {/* Professional role */}
              <p className="mt-6 max-w-2xl text-xl font-medium leading-8 text-[var(--muted)]">
                AI & Machine Learning Engineer
              </p>

              {/* Personal introduction */}
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                I'm Bikesh Pandit, a developer focused on building
                intelligent applications using artificial intelligence,
                machine learning, and modern software technologies.
              </p>

              <HeroButtons />

              <HeroStats />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <HeroImage />
          </FadeIn>
        </div>

        <HeroScroll />
      </Container>
    </Section>
  );
}
