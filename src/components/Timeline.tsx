interface TimelineItem {
  year: string;
  text: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cool-300 md:-translate-x-1/2" />

      <div className="space-y-12 md:space-y-0">
        {items.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isLast = i === items.length - 1;

          return (
            <div
              key={item.year}
              className={`relative flex items-center md:items-start ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-0`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10 mt-1.5 ring-4 ring-white transition-all"
                style={{
                  backgroundColor: isLast ? '#2a6fa8' : '#9bafc3',
                }}
              />

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${
                  isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}
              >
                <div className="reveal inline-block">
                  <span
                    className={`font-heading text-2xl font-bold ${
                      isLast ? 'text-blue-600' : 'text-navy-900'
                    }`}
                  >
                    {item.year}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {item.text}
                  </p>
                </div>
              </div>

              {/* Spacer for the other half on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
