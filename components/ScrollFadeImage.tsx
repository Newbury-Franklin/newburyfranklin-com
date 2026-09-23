"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FADE_MS = 2000;

/**
 * Stacks an overlay image over a base image. Fully hidden until the entire
 * photo has scrolled into view (its bottom edge reaches the bottom of the
 * viewport) — at that point it triggers once and crossfades in over a fixed
 * FADE_MS, regardless of scroll speed. Never reverts back to the base image,
 * even if the user scrolls back up past the trigger point.
 */
export default function ScrollFadeImage({
  base,
  overlay,
  baseAlt,
  overlayAlt,
}: {
  base: string;
  overlay: string;
  baseAlt: string;
  overlayAlt: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (revealed) return;
    const el = ref.current;
    if (!el) return;

    const check = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh - rect.height; // photo's bottom just reaches the bottom of the viewport
      if (rect.top <= start) {
        setRevealed(true);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [revealed]);

  return (
    <div ref={ref} className="relative aspect-[4/3] w-full overflow-hidden">
      <Image src={base} alt={baseAlt} fill className="object-cover" />
      <Image
        src={overlay}
        alt={overlayAlt}
        fill
        className="object-cover transition-opacity ease-in-out"
        style={{ opacity: revealed ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
      />
    </div>
  );
}
