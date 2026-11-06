"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { TeamMember } from "@/lib/team";

export default function BioModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // Portaled to <body> so this "fixed, full-viewport" overlay is never
  // confined by an ancestor's transform (e.g. Reveal's translate-y
  // utilities), which would otherwise break `position: fixed` and shrink
  // the overlay down to that ancestor's box instead of the real viewport.
  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${member.name} biography`}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto bg-white p-8 sm:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 text-2xl leading-none text-stone hover:text-navy"
        >
          &times;
        </button>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-[240px_1fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
            <Image src={member.image} alt={member.name} fill className="object-cover object-top" />
          </div>
          <div>
            <h4 className="text-2xl text-navy sm:text-3xl">{member.name}</h4>
            {member.titles.map((title) => (
              <p key={title} className="text-sm font-medium uppercase tracking-wide text-gold-dark">
                {title}
              </p>
            ))}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-stone underline underline-offset-4 hover:text-navy"
              >
                LinkedIn
              </a>
            )}
            {member.isPlaceholderBio && (
              <p className="mt-4 inline-block rounded-sm bg-gold-light/40 px-3 py-1 text-xs font-medium text-gold-dark">
                Draft bio (pending final copy)
              </p>
            )}
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-stone">
              {member.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
