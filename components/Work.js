import { useState, useRef, useEffect } from 'react';
import workData from '../assets/data/work.json';

// Chronological order: oldest to newest (2018 -> Present)
// 0: National Data Integrator (August 2018 - February 2019)
// 1: PT Bonatife Anjar Patria (March 2019 - April 2021)
// 2: Freelance (April 2021 - August 2021)
// 3: PT Aksi Visitama (TADA) (September 2021 - Present)
const experiences = [...workData].reverse();

function getMilestoneName(companyName) {
  if (companyName.includes('TADA')) return 'TADA';
  if (companyName.includes('Bonafitek')) return 'Bonafitek';
  if (companyName.includes('National Data Integrator')) return 'NDI';
  return companyName;
}

function getYearBadge(exp, idx, total, language) {
  if (idx === total - 1) {
    return language === 'id' ? '2021 - Sekarang' : '2021 - Present';
  }
  if (idx === 0) return '2018 - 2019';
  if (idx === 1) return '2019 - 2021';
  if (idx === 2) return '2021';
  return exp.date;
}

function formatExpDate(dateStr, language) {
  if (!dateStr) return '';
  if (language !== 'id') return dateStr;
  return dateStr
    .replace('Present', 'Sekarang')
    .replace('January', 'Januari')
    .replace('February', 'Februari')
    .replace('March', 'Maret')
    .replace('April', 'April')
    .replace('May', 'Mei')
    .replace('June', 'Juni')
    .replace('July', 'Juli')
    .replace('August', 'Agustus')
    .replace('October', 'Oktober')
    .replace('December', 'Desember');
}

function ChevronLeftIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-border pb-4">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
    </div>
  );
}

export default function Work({ language = 'en' }) {
  // Default active role on the far right (PT Aksi Visitama / TADA, 2021 - Present)
  const [activeIndex, setActiveIndex] = useState(experiences.length - 1);
  const [slideDirection, setSlideDirection] = useState('right');
  const nodeRefs = useRef([]);
  const timelineContainerRef = useRef(null);

  const activeExp = experiences[activeIndex];
  const isLatest = activeIndex === experiences.length - 1;

  useEffect(() => {
    const container = timelineContainerRef.current;
    const node = nodeRefs.current[activeIndex];
    if (container && node) {
      const containerRect = container.getBoundingClientRect();
      const nodeRect = node.getBoundingClientRect();
      container.scrollLeft += nodeRect.left - containerRect.left - container.clientWidth / 2 + nodeRect.width / 2;
    }
  }, [activeIndex]);

  const handleSelect = (nextIdx) => {
    if (nextIdx === activeIndex) return;
    setSlideDirection(nextIdx > activeIndex ? 'right' : 'left');
    setActiveIndex(nextIdx);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      handleSelect(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < experiences.length - 1) {
      handleSelect(activeIndex + 1);
    }
  };

  return (
    <section id="experience" className="flex flex-col gap-6">
      <SectionHeader
        title={language === 'id' ? 'Pengalaman Kerja' : 'Work Experience'}
      />

      {/* CodyHouse-Style Horizontal Timeline Track */}
      <div className="relative w-full my-2 sm:my-4 select-none">
        {/* Timeline Track Line & Nodes */}
        <div
          ref={timelineContainerRef}
          className="relative w-full overflow-x-auto scrollbar-none py-2"
        >
          <div className="relative min-w-[420px] sm:min-w-0 mx-16 sm:mx-16 h-24 flex items-center">
            {/* Background Grey Line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[2px] bg-surface-border" />

            {/* Dynamic Filling Line */}
            <div
              className="absolute top-1/2 -translate-y-1/2 left-0 h-[2px] bg-black transition-all duration-300"
              style={{
                width: `${(activeIndex / (experiences.length - 1)) * 100}%`,
              }}
            />

            {/* 4 Milestone Nodes */}
            {experiences.map((exp, idx) => {
              const isActive = idx === activeIndex;
              const isPassed = idx < activeIndex;
              const yearBadge = getYearBadge(exp, idx, experiences.length, language);
              const milestoneName = getMilestoneName(exp.companyName);
              const leftPercent = (idx / (experiences.length - 1)) * 100;

              return (
                <button
                  key={exp.companyName}
                  ref={(el) => (nodeRefs.current[idx] = el)}
                  onClick={() => handleSelect(idx)}
                  type="button"
                  aria-label={`${milestoneName} (${yearBadge})`}
                  aria-current={isActive ? 'step' : undefined}
                  className="group absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-11 w-11 flex-col items-center justify-center cursor-pointer rounded-md"
                  style={{ left: `${leftPercent}%` }}
                >
                  {/* Date label positioned ABOVE the line */}
                  <span
                    className={`absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-xs transition-all ${
                      isActive
                        ? 'font-bold text-black scale-105'
                        : isPassed
                        ? 'font-medium text-text-secondary'
                        : 'text-text-muted group-hover:text-text-secondary'
                    }`}
                  >
                    {yearBadge}
                  </span>

                  {/* Circular dot on the line */}
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-black border-black ring-4 ring-neutral-200 scale-125'
                        : isPassed
                        ? 'bg-black border-black'
                        : 'bg-white border-surface-border-strong hover:border-black'
                    }`}
                  />

                  {/* Company label positioned BELOW the line */}
                  <span
                    className={`absolute -bottom-7 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm transition-colors text-center ${
                      isActive
                        ? 'font-bold text-black'
                        : isPassed
                        ? 'font-semibold text-text-secondary'
                        : 'font-medium text-text-muted group-hover:text-text-secondary'
                    }`}
                  >
                    {milestoneName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area: Single Card with Side Navigation Buttons */}
      <div className="relative grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-4 w-full">
        {/* Previous Button (Left) */}
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          type="button"
          aria-label={language === 'id' ? 'Pengalaman sebelumnya' : 'Previous role'}
          className="flex-shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-surface-border-strong bg-white text-text-primary shadow-sm hover:bg-black hover:text-white hover:border-black active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-text-muted disabled:hover:border-surface-border-strong disabled:active:scale-100"
        >
          <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
        </button>

        {/* Content Card (Center) */}
        <div className="order-3 col-span-2 min-w-0 sm:order-none sm:flex-1">
          <article
            key={activeIndex}
            className={`w-full clean-card rounded-2xl p-4 sm:p-8 ${
              slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
            }`}
          >
          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-surface-border pb-4 sm:pb-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                {isLatest ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {language === 'id' ? 'Peran Saat Ini' : 'Current Role'}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-surface-border bg-surface-muted px-2.5 py-0.5 text-xs font-semibold text-text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-text-muted" />
                    {language === 'id'
                      ? `Milestone ${activeIndex + 1} dari ${experiences.length}`
                      : `Milestone ${activeIndex + 1} of ${experiences.length}`}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                {activeExp.title}
              </h3>
              <div className="text-base font-semibold text-text-secondary">
                {activeExp.companyName}
              </div>
            </div>

            <div className="min-w-0 lg:flex-shrink-0">
              <span className="inline-flex items-center rounded-md border border-surface-border bg-surface-muted px-2.5 py-1.5 text-xs sm:font-mono font-medium text-text-secondary">
                {formatExpDate(activeExp.date, language)}
              </span>
            </div>
          </div>

          {/* Multi-Track (e.g. TADA) or Single-Track Details */}
          {activeExp.tracks ? (
            <div className="mt-6 flex flex-col gap-8">
              {activeExp.tracks.map((track, tIdx) => (
                <div
                  key={track.team.en}
                  className={tIdx > 0 ? 'border-t border-surface-border pt-6' : ''}
                >
                  {/* Track / Team Title */}
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-text-primary" />
                    <h4 className="min-w-0 text-sm font-bold sm:font-mono text-text-primary">
                      {track.team[language] || track.team.en}
                    </h4>
                  </div>

                  {/* Track Tech Stack Badges */}
                  {track.techStack && track.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {track.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-surface-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Track Work Details Bullet Points */}
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">
                    {track.workDetails.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-muted" />
                        <span className="min-w-0 break-words text-text-primary/90">
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
            <div className="mt-6">
              {/* Tech Stack Badges */}
              {activeExp.techStack && activeExp.techStack.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-surface-border bg-surface-muted px-2.5 py-1 text-xs font-medium text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Work Details Bullet Points */}
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-text-secondary">
                {activeExp.workDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-text-primary" />
                    <span className="min-w-0 break-words text-text-primary/90">
                      {language === 'id' && detail.descriptionId
                        ? detail.descriptionId
                        : detail.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>

      {/* Next Button (Right) */}
      <button
        onClick={handleNext}
        disabled={activeIndex === experiences.length - 1}
        type="button"
        aria-label={language === 'id' ? 'Pengalaman berikutnya' : 'Next role'}
        className="justify-self-end sm:order-none flex-shrink-0 h-11 w-11 sm:h-12 sm:w-12 rounded-full border-2 border-surface-border-strong bg-white text-text-primary shadow-sm hover:bg-black hover:text-white hover:border-black active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-text-muted disabled:hover:border-surface-border-strong disabled:active:scale-100"
      >
        <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 stroke-[2.5]" />
      </button>
    </div>
  </section>
);
}
