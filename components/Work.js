import workData from '../assets/data/work.json';

export default function Work({ language = 'en' }) {
  return (
    <section id="experience" className="flex flex-col gap-6">
      <SectionHeader
        title={language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
        subtitle={
          language === 'id'
            ? 'Riwayat karier dan kontribusi teknis di lingkungan produksi berskala tinggi'
            : 'Career history and engineering impact in high-scale production systems'
        }
      />

      <div className="relative pl-6 sm:pl-8">
        {/* Continuous timeline vertical line */}
        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-surface-border sm:left-[11px]" />

        <div className="flex flex-col gap-8">
          {workData.map((item, index) => {
            const isCurrent = index === 0;

            return (
              <div key={`${item.title}-${item.date}`} className="group relative">
                {/* Timeline Node */}
                <div
                  className={
                    'absolute -left-6 sm:-left-8 top-5 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 transition-all ' +
                    (isCurrent
                      ? 'border-black bg-black ring-4 ring-neutral-100'
                      : 'border-surface-border-strong bg-white group-hover:border-black')
                  }
                />

                {/* Experience Card */}
                <article className="clean-card rounded-2xl p-5 shadow-sm sm:p-6">
                  {/* Header */}
                  <div className="flex flex-col gap-2 border-b border-surface-border pb-4 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-text-primary sm:text-xl">
                        {item.title}
                      </h3>
                      <div className="mt-0.5 text-sm font-semibold text-text-secondary">
                        {item.companyName || 'Independent'}
                      </div>
                    </div>
                    <span className="inline-flex w-fit items-center rounded-md border border-surface-border bg-surface-muted px-2.5 py-1 font-mono text-xs font-medium text-text-secondary">
                      {item.date}
                    </span>
                  </div>

                  {/* Multi-Track / Categorized Teams Layout */}
                  {item.tracks ? (
                    <div className="mt-4 flex flex-col gap-6">
                      {item.tracks.map((track, tIdx) => (
                        <div
                          key={track.team.en}
                          className={tIdx > 0 ? 'border-t border-surface-border pt-5' : ''}
                        >
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-text-primary" />
                            <h4 className="font-mono text-sm font-bold text-text-primary">
                              {track.team[language]}
                            </h4>
                          </div>

                          {/* Tech Stack Badges for this Track */}
                          {track.techStack?.length > 0 && (
                            <div className="mt-2.5 flex flex-wrap gap-1.5">
                              {track.techStack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-md border border-surface-border bg-surface-muted px-2 py-0.5 text-xs font-medium text-text-secondary"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Bullet points for this Track */}
                          <ul className="mt-3.5 space-y-2 text-sm leading-relaxed text-text-secondary">
                            {track.workDetails.map((detail, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5">
                                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-text-muted" />
                                <span className="text-text-primary/90">
                                  {language === 'id' && detail.descriptionId
                                    ? detail.descriptionId
                                    : detail.description}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    /* Standard Single Track Layout */
                    <>
                      {/* Tech Stack Badges */}
                      {item.techStack?.length > 0 && (
                        <div className="mt-3.5 flex flex-wrap gap-1.5">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-md border border-surface-border bg-surface-muted px-2 py-0.5 text-xs font-medium text-text-secondary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Bullet points */}
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-text-secondary">
                        {item.workDetails.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-primary" />
                            <span className="text-text-primary/90">
                              {language === 'id' && detail.descriptionId
                                ? detail.descriptionId
                                : detail.description}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-border pb-4">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="text-sm text-text-secondary">
        {subtitle}
      </p>
    </div>
  );
}
