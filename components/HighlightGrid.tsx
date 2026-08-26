import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Highlight } from "@/lib/companies";

export default function HighlightGrid({ heading, items }: { heading: string; items: Highlight[] }) {
  const cols = items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div>
      <Reveal className="text-center">
        <h3 className="mb-12 text-3xl text-black sm:text-4xl">{heading}</h3>
      </Reveal>
      <div className={`grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 ${cols}`}>
        {items.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} className="flex flex-col items-center text-center">
            <div className="relative mb-5 h-11 w-11">
              <Image src={item.icon} alt="" fill className="object-contain" />
            </div>
            <h5 className="mb-2 text-lg font-serif text-navy">{item.title}</h5>
            <p className="text-sm leading-relaxed text-stone">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
