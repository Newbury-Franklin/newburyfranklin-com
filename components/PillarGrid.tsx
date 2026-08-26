import Image from "next/image";
import Reveal from "@/components/Reveal";
import { pillars } from "@/lib/fund";

// Decorative wave path + vertical stagger for the four nodes, roughly
// following each icon's position. Percentage-based (viewBox 0-100), so it
// tracks the 4-column grid without needing JS measurement — a close visual
// match rather than pixel-perfect, which is fine for a background flourish.
const WAVE_PATH = "M 2 80 Q 6 92, 12.5 72 Q 22 55, 37.5 45 Q 50 30, 62.5 20 Q 75 12, 87.5 8 Q 93 4, 98 2";
const STAGGER = ["lg:mt-20", "lg:mt-12", "lg:mt-6", "lg:mt-0"];

function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px flex-1 bg-white/20" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold-light/60" />
      <span className="h-px flex-1 bg-white/20" />
    </div>
  );
}

export default function PillarGrid({
  eyebrow,
  heading,
  intro,
  outro,
  theme = "light",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  outro?: string;
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";

  return (
    <div className={isDark ? "text-white" : "text-charcoal"}>
      <Reveal className="mb-14 max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h3 className={`text-4xl sm:text-5xl ${isDark ? "text-white" : "text-black"}`}>{heading}</h3>
        {isDark && <Divider className="my-6 max-w-[10rem]" />}
        {intro && <p className={`max-w-xl ${isDark ? "text-white/80" : "text-stone"}`}>{intro}</p>}
      </Reveal>

      {/* Desktop: staggered wave timeline (dark theme only) */}
      {isDark && (
        <div className="relative mb-4 hidden lg:block">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <path d={WAVE_PATH} stroke="white" strokeOpacity="0.25" strokeWidth="0.3" vectorEffect="non-scaling-stroke" />
            <circle cx="2" cy="80" r="0.6" fill="white" fillOpacity="0.4" />
            <circle cx="98" cy="2" r="0.6" fill="white" fillOpacity="0.4" />
          </svg>
          <div className="relative grid grid-cols-4 gap-x-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100} className={STAGGER[i]}>
                <span className="mb-3 block text-xs font-semibold tracking-[0.25em] text-white/40">
                  0{i + 1}
                </span>
                <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-navy-700">
                  <div className="relative h-7 w-7">
                    <Image src={pillar.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <h5 className="mb-2 text-xl font-serif text-white">{pillar.title}</h5>
                <span className="mb-3 block h-px w-8 bg-gold-light/50" />
                <p className="text-sm leading-relaxed text-white/75">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Below-lg fallback (dark theme): vertical timeline, not a generic grid */}
      {isDark && (
        <div className="relative lg:hidden">
          <div className="absolute bottom-7 left-7 top-7 w-px bg-white/15" />
          <div className="space-y-10">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100} className="relative flex gap-5">
                <div className="relative z-10 flex h-14 w-14 flex-none items-center justify-center rounded-full border border-white/15 bg-navy-700">
                  <div className="relative h-6 w-6">
                    <Image src={pillar.icon} alt="" fill className="object-contain" />
                  </div>
                </div>
                <div className="pt-1">
                  <span className="mb-1 block text-xs font-semibold tracking-[0.25em] text-white/40">
                    0{i + 1}
                  </span>
                  <h5 className="mb-2 text-lg font-serif text-white">{pillar.title}</h5>
                  <p className="text-sm leading-relaxed text-white/75">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* Light theme: the only layout, unchanged */}
      {!isDark && (
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100} className="flex flex-col items-center text-center">
              <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-navy">
                <div className="relative h-6 w-6">
                  <Image src={pillar.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <h5 className="mb-2 text-lg font-serif text-black">{pillar.title}</h5>
              <p className="text-sm leading-relaxed text-stone">{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      )}

      {outro && (
        <Reveal delay={200} className="mx-auto mt-14 max-w-2xl text-center">
          {isDark && <Divider className="mx-auto mb-6 max-w-[10rem]" />}
          <p className={`text-sm ${isDark ? "text-white/70" : "text-stone"}`}>{outro}</p>
        </Reveal>
      )}
    </div>
  );
}
