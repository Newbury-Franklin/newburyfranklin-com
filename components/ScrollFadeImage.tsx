"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FEATHER = 35; // width (in % of image width) of the soft transition band
/**
 * Stacks an overlay image over a base image, revealing the overlay left-to-
 * right as the user scrolls through it: fully hidden until the entire photo
 * has scrolled into view (its bottom edge reaches the bottom of the
 * viewport), then sweeping into view (soft-edged, left to right) until the
 * photo's vertical center reaches the vertical center of the viewport.
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
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh - rect.height; // photo's bottom just reaches the bottom of the viewport
      const end = vh / 2 - rect.height / 2; // photo's vertical center reaches the viewport's vertical center
      const p = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, p)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const center = -FEATHER + progress * (100 + 2 * FEATHER);
  const maskImage = `linear-gradient(to right, black 0%, black ${center - FEATHER / 2}%, transparent ${
    center + FEATHER / 2
  }%, transparent 100%)`;

  return (
    <div ref={ref} className="relative aspect-[4/3] w-full overflow-hidden">
      <Image src={base} alt={baseAlt} fill className="object-cover" />
      <Image
        src={overlay}
        alt={overlayAlt}
        fill
        className="object-cover"
        style={{ WebkitMaskImage: maskImage, maskImage }}
      />
    </div>
  );
}
