"use client";

import Image from "next/image";
import { useState } from "react";
import { publishedTeamMembers, type TeamMember } from "@/lib/team";
import BioModal from "@/components/BioModal";
import Reveal from "@/components/Reveal";

export default function TeamSection() {
  const [active, setActive] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-12">
        {publishedTeamMembers.map((member, i) => (
          <Reveal
            key={member.slug}
            delay={(i % 3) * 100}
            className="basis-[calc(50%-1rem)] sm:basis-[calc(33.3333%-1.3333rem)] lg:basis-[calc(25%-1.5rem)]"
          >
            <button onClick={() => setActive(member)} className="group w-full text-left">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-navy/0 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:bg-navy/50 group-hover:opacity-100">
                  Learn More
                </div>
              </div>
              <h5 className="mt-4 font-serif text-lg text-navy">{member.name}</h5>
              <p className="text-sm leading-snug text-stone">
                {member.cardTitleLines[0]}
                <br />
                {member.cardTitleLines[1]}
              </p>
            </button>
          </Reveal>
        ))}
      </div>
      {active && <BioModal member={active} onClose={() => setActive(null)} />}
    </>
  );
}
