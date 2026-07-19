import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type Props = {
  end: number;
  title: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export default function Counter({
  end,
  title,
  prefix = "",
  suffix = "",
  decimals = 0,
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <div
      ref={ref}
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]/60
        p-8
        text-center

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[var(--primary)]
        hover:shadow-lg
      "
    >
      <h3 className="text-3xl font-bold text-[var(--primary)] md:text-4xl">
        {inView ? (
          <CountUp
            end={end}
            duration={2}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            separator=","
          />
        ) : (
          <>
            {prefix}0{suffix}
          </>
        )}
      </h3>

      <p className="mt-3 text-sm font-medium text-[var(--muted)]">
        {title}
      </p>
    </div>
  );
}