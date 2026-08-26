const shared = {
  width: 32,
  height: 32,
  viewBox: "0 0 32 32",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function CarWashIcon() {
  return (
    <svg {...shared}>
      <path d="M6.5 17l1.5-5A3 3 0 0 1 10.9 10h10.2a3 3 0 0 1 2.9 2.1l1.5 4.9" />
      <path d="M5 17h22v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5z" />
      <circle cx="10.5" cy="24" r="1.8" />
      <circle cx="21.5" cy="24" r="1.8" />
      <path d="M9 6.2c1-1.3 2-1.3 3 0M15 4.6c1-1.3 2-1.3 3 0M21 6.2c1-1.3 2-1.3 3 0" />
    </svg>
  );
}

function EarlyEducationIcon() {
  return (
    <svg {...shared}>
      <path d="M16 12c-2-1.6-4.8-2.4-8-2.4v14.8c3.2 0 6 .8 8 2.4c2-1.6 4.8-2.4 8-2.4V9.6c-3.2 0-6 .8-8 2.4z" strokeLinejoin="round" />
      <path d="M16 12v14.8" />
    </svg>
  );
}

function SalonBarbershopIcon() {
  return (
    <svg {...shared}>
      <circle cx="9" cy="9" r="2.3" />
      <circle cx="9" cy="23" r="2.3" />
      <path d="M11 10.4l14 10M11 21.6l14-10" />
    </svg>
  );
}

function TaproomIcon() {
  return (
    <svg {...shared}>
      <path d="M9 11h11v13a2.4 2.4 0 0 1-2.4 2.4h-6.2A2.4 2.4 0 0 1 9 24V11z" />
      <path d="M20 14h2.4A2.6 2.6 0 0 1 25 16.6v3.2a2.6 2.6 0 0 1-2.6 2.6H20" />
      <path d="M9 11c0-1.8 1.4-3.2 3.2-3.2h4.6c1.8 0 3.2 1.4 3.2 3.2" />
    </svg>
  );
}

function YouthEnrichmentIcon() {
  return (
    <svg {...shared}>
      <path
        d="M16 6l2.8 6.1 6.6.8-4.8 4.8 1.2 6.6L16 21.1l-5.8 3.2 1.2-6.6-4.8-4.8 6.6-.8z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const industryIcons: Record<string, () => JSX.Element> = {
  "car-wash": CarWashIcon,
  "early-education": EarlyEducationIcon,
  "salon-barbershop": SalonBarbershopIcon,
  taproom: TaproomIcon,
  "youth-enrichment": YouthEnrichmentIcon,
};
