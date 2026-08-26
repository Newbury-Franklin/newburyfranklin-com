"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  { src: "/videos/home-hero-1.mp4", endOffset: 0 },
  { src: "/videos/home-hero-2.mp4", endOffset: 2.5 },
];

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const advancedRef = useRef(false);

  useEffect(() => {
    advancedRef.current = false;
    videoRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === active) {
        el.currentTime = 0;
        el.play().catch(() => {});
      } else {
        el.pause();
      }
    });
  }, [active]);

  const advance = () => {
    if (advancedRef.current) return;
    advancedRef.current = true;
    setActive((i) => (i + 1) % videos.length);
  };

  return (
    <section className="relative flex h-[90vh] min-h-[38rem] items-center overflow-hidden bg-navy">
      {videos.map((video, i) => (
        <video
          key={video.src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          muted
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          onTimeUpdate={(e) => {
            if (i !== active) return;
            const el = e.currentTarget;
            if (el.duration && el.duration - el.currentTime <= video.endOffset) {
              advance();
            }
          }}
          onEnded={() => {
            if (i === active) advance();
          }}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0 bg-navy/45" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white sm:h-14" />
      <div className="container-page relative z-10">
        <h1 className="max-w-4xl text-2xl leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-5xl">
          <span className="block">Buyers and Long-Term Builders</span>
          <span className="block">of Recurring Revenue Businesses.</span>
        </h1>
        <a href="#portfolio" className="btn-outline mt-8">
          View Our Portfolio
        </a>
      </div>
    </section>
  );
}
