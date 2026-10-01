export default function PresenceMap() {
  // Simplified but recognizable India silhouette path
  // Markers positioned for South India foundation with growing presence
  const foundationMarkers = [
    { cx: 170, cy: 360, label: 'Kerala' },
    { cx: 195, cy: 335, label: 'Tamil Nadu' },
    { cx: 185, cy: 290, label: 'Karnataka' },
    { cx: 215, cy: 300, label: 'Andhra Pradesh' },
    { cx: 205, cy: 275, label: 'Telangana' },
  ];

  const growingMarkers = [
    { cx: 165, cy: 225, label: 'Maharashtra' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 440"
        className="w-full h-auto"
        fill="none"
        aria-label="Map showing Wellshark's presence across India"
      >
        {/* India silhouette — recognizable outline */}
        <path
          d="M180 18 L195 22 L210 18 L218 28 L228 35 L240 32 L250 40 L255 50 L265 48 L272 55 L268 68 L260 75 L265 85 L275 90 L280 100 L275 110 L282 118 L290 125 L295 135 L288 145 L280 150 L275 160 L280 170 L285 180 L275 185 L268 195 L260 200 L255 210 L250 220 L245 230 L235 240 L228 250 L225 260 L220 270 L215 280 L210 290 L208 300 L210 310 L215 320 L210 330 L200 340 L195 350 L188 360 L182 370 L175 378 L168 382 L160 378 L155 370 L150 360 L145 348 L140 335 L135 320 L130 305 L125 290 L120 275 L115 258 L110 240 L108 222 L105 205 L100 188 L95 170 L92 155 L88 140 L85 125 L82 110 L80 95 L82 82 L85 70 L90 62 L95 55 L88 48 L92 40 L100 35 L108 30 L115 25 L125 20 L135 18 L145 15 L155 12 L165 14 L175 16 Z"
          fill="#eef2f6"
          stroke="#c2d0dc"
          strokeWidth="1.5"
        />

        {/* Sri Lanka indicator */}
        <path
          d="M210 395 Q218 400 220 408 Q218 415 212 418 Q206 415 205 408 Q206 400 210 395 Z"
          fill="#eef2f6"
          stroke="#c2d0dc"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Foundation markers — South India — deep navy */}
        {foundationMarkers.map((m) => (
          <g key={m.label}>
            <circle
              cx={m.cx}
              cy={m.cy}
              r="5"
              fill="#0f2347"
            />
            <circle
              cx={m.cx}
              cy={m.cy}
              r="5"
              fill="#0f2347"
              opacity="0.2"
              className="animate-pulse"
            >
              <animate attributeName="r" values="5;9;5" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
            </circle>
            <title>{m.label}</title>
          </g>
        ))}

        {/* Growing markers — blue */}
        {growingMarkers.map((m) => (
          <g key={m.label}>
            <circle
              cx={m.cx}
              cy={m.cy}
              r="4"
              fill="#2a6fa8"
            />
            <title>{m.label}</title>
          </g>
        ))}
      </svg>

      <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-navy-900" />
          <span className="text-charcoal/70">Foundation presence</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
          <span className="text-charcoal/70">Growing presence</span>
        </div>
      </div>

      <p className="mt-4 text-xs text-center text-charcoal/40 max-w-md mx-auto">
        Indicative only. Verified presence data to be updated.
      </p>
    </div>
  );
}
