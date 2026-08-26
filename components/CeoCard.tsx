"use client";

import Image from "next/image";
import { useState } from "react";
import { getTeamMember } from "@/lib/team";
import BioModal from "@/components/BioModal";

export default function CeoCard({ slug }: { slug: string }) {
  const [open, setOpen] = useState(false);
  const member = getTeamMember(slug);
  if (!member) return null;

  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <button onClick={() => setOpen(true)} className="group mx-auto block w-48 shrink-0 text-left sm:mx-0">
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
          <p className="text-sm text-stone">{member.titles[member.titles.length - 1]}</p>
          {member.linkedin && <p className="mt-1 text-xs text-gold-dark underline underline-offset-4">LinkedIn</p>}
        </button>

        <div className="max-w-xl sm:pt-2">
          <p className="text-xl font-serif italic leading-relaxed text-navy">{member.bio[0]}</p>
          <button onClick={() => setOpen(true)} className="btn-outline-dark mt-6">
            Read Full Bio
          </button>
        </div>
      </div>
      {open && <BioModal member={member} onClose={() => setOpen(false)} />}
    </>
  );
}
