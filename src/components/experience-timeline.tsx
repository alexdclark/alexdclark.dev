type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export function ExperienceTimeline({ experience }: { experience: Experience[] }) {
  return (
    <div className="space-y-8">
      {experience.map((item) => (
        <div key={item.role} className="relative pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary/70 via-primary/40 to-transparent" />
          <div className="absolute left-[-2px] top-2 h-3 w-3 rounded-full bg-primary" />
          <div className="card space-y-3 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{item.company}</p>
                <h3 className="text-xl font-semibold">{item.role}</h3>
              </div>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200">
                {item.period}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{item.summary}</p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
