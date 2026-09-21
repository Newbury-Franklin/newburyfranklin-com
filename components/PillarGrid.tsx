import Image from "next/image";
import Reveal from "@/components/Reveal";
import { pillars } from "@/lib/fund";

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
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  outro?: string;
}) {
  return (
    <div className="text-white">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h3 className="text-3xl text-white sm:text-4xl">{heading}</h3>
        <Divider className="mx-auto my-6 max-w-[10rem]" />
        {intro && <p className="mx-auto max-w-2xl text-white/80">{intro}</p>}
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {pillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={i * 100}
            className="rounded-lg border border-white/10 bg-navy-700/60 p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center gap-4">
              <div className="relative flex h-14 w-14 flex-none items-center justify-center rounded-full border border-white/15 bg-navy-700">
                <div className="relative h-6 w-6">
                  <Image src={pillar.icon} alt="" fill className="object-contain" />
                </div>
              </div>
              <div>
                <span className="mb-1 block text-xs font-semibold tracking-[0.25em] text-white/40">0{i + 1}</span>
                <h5 className="text-2xl font-serif text-white">{pillar.title}</h5>
              </div>
            </div>
            <p className="mb-1 font-serif text-lg italic text-gold-light">&ldquo;{pillar.quote}&rdquo;</p>
            <p className="mb-5 text-sm leading-relaxed text-white/70">{pillar.tagline}</p>
            <ul className="space-y-3 border-t border-white/10 pt-5">
              {pillar.bullets.map((bullet) => (
                <li key={bullet.label} className="flex gap-3">
                  <span className="mt-[7px] h-1 w-1 flex-none rounded-full bg-gold-light" />
                  <p className="text-sm leading-relaxed text-white/75">
                    <span className="font-semibold text-white">{bullet.label}.</span> {bullet.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      {outro && (
        <Reveal delay={200} className="mx-auto mt-14 max-w-2xl text-center">
          <Divider className="mx-auto mb-6 max-w-[10rem]" />
          <p className="text-sm text-white/70">{outro}</p>
        </Reveal>
      )}
    </div>
  );
}
