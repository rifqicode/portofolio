import WorkData from '../assets/data/Work';

export default function Work() {
  return (
    <section id="experience" className="relative z-10 mt-2 flex flex-col gap-8">
      <SectionLabel text="~/work-experience" />

      <div className="relative pl-6 md:pl-0">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {WorkData.map((item, index) => {
            const isLeftCard = index % 2 === 1;

            return (
              <article
                key={`${item.title}-${item.date}`}
                className="relative flex w-full flex-col items-start justify-between md:flex-row md:items-center"
              >
                <div className="absolute left-[-31px] top-7 z-10 h-4 w-4 rounded-full border-2 border-white/20 bg-background md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                  {index === 0 && <span className="absolute inset-0 rounded-full border-2 border-primary shadow-[0_0_10px_rgba(76,215,246,0.5)]" />}
                </div>

                {isLeftCard ? (
                  <>
                    <TimelineCard item={item} align="right" />
                    <TimelineDate date={item.date} side="right" />
                  </>
                ) : (
                  <>
                    <TimelineDate date={item.date} side="left" />
                    <TimelineCard item={item} />
                  </>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineDate({ date, side }) {
  return (
    <div
      className={
        'hidden w-5/12 font-mono text-sm text-on-surface-variant md:flex ' +
        (side === 'left' ? 'justify-end pr-8 text-right' : 'justify-start pl-8')
      }
    >
      {date}
    </div>
  );
}

function TimelineCard({ item, align = 'left' }) {
  return (
    <div className={'w-full pl-4 md:w-5/12 md:pl-0 ' + (align === 'right' ? 'md:pr-8' : 'md:pl-8')}>
      <div className="glass-card terminal-border rounded-lg p-6">
        <h3 className="font-display text-xl font-semibold text-on-surface md:text-2xl">
          {item.companyName || 'Independent'}
        </h3>
        <p className="mt-1 font-mono text-sm text-primary">{item.title}</p>
        <div className="mt-2 font-mono text-xs text-primary md:hidden">{item.date}</div>

        {item.techStack?.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-primary/20 bg-primary/5 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-on-surface-variant"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <ul className="mt-4 space-y-2 text-left text-sm leading-6 text-on-surface-variant">
          {item.workDetails.map((workDetail, keyDetail) => (
            <li key={keyDetail} className="flex items-start gap-2">
              <span className="material-symbols-outlined mt-0.5 text-[16px] text-secondary">chevron_right</span>
              <span>{workDetail.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{text}</span>
      <div className="h-px flex-grow bg-white/10" />
    </div>
  );
}
