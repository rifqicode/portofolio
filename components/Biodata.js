import Image from 'next/image';
import biodata from '../assets/data/biodata.json';

export default function Biodata({ language = 'en' }) {
  const labels = biodata.labels;

  return (
    <section id="home" className="flex flex-col-reverse items-center justify-between gap-6 pt-0 sm:gap-10 sm:pt-4 lg:flex-row lg:items-start lg:gap-12">
      {/* Left Column: Profile Text, Summary, Concepts & Actions */}
      <div className="flex w-full min-w-0 flex-1 flex-col gap-5 sm:gap-6">
        {/* Header Profile Info */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl leading-tight font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {biodata.name}
          </h1>
          <p className="text-base font-medium leading-snug text-text-secondary sm:text-lg">
            {biodata.roleHeadline[language]}
          </p>

          {/* Quick Meta Location & Education */}
          <div className="mt-1 flex flex-col items-start gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 text-xs text-text-muted">
            <span className="flex min-w-0 items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined shrink-0 text-[16px]">location_on</span>
              <span>{biodata.location[language]}</span>
            </span>
            <span className="flex min-w-0 items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined shrink-0 text-[16px]">school</span>
              <span>{biodata.education[language]}</span>
            </span>
            <span className="flex min-w-0 items-start gap-2 leading-relaxed">
              <span className="material-symbols-outlined shrink-0 text-[16px]">alternate_email</span>
              <span className="break-all">{biodata.email}</span>
            </span>
          </div>
        </div>

        {/* Narrative Summary */}
        {/* <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
          {biodata.summary[language]}
        </p> */}

        {/* Architecture Concepts */}
        <div className="flex flex-col gap-2.5 pt-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {biodata.architectureTitle[language]}
          </span>
          <div className="flex flex-wrap gap-2">
            {biodata.architectureConcepts.map((concept) => (
              <span
                key={concept}
                className="rounded-md border border-surface-border bg-surface-muted px-3 py-1.5 font-mono text-xs font-medium text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons & Contact Options */}
        <div className="grid grid-cols-2 gap-2.5 pt-1 sm:flex sm:flex-wrap sm:items-center sm:gap-3 sm:pt-2">
          {/* Contact direct link */}
          <a
            href={`mailto:${biodata.email}?subject=Engineering%20Inquiry%20-%20Muhammad%20Rifqi`}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
          >
            <span className="material-symbols-outlined shrink-0 text-[16px]">mail</span>
            <span>{labels.contactDirect[language]}</span>
          </a>

          {/* Download CV */}
          <a
            href={biodata.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
          >
            <span className="material-symbols-outlined shrink-0 text-[16px]">download</span>
            <span>{labels.downloadCV[language]}</span>
          </a>

          {/* GitHub link */}
          <a
            href={biodata.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
          >
            <i aria-hidden="true" className="fab fa-github text-sm"></i>
            <span>GitHub</span>
          </a>

          {/* WhatsApp link */}
          <a
            href={`https://wa.me/${biodata.whatsapp}?text=Halo%20Rifqi,%20saya%20tertarik%20untuk%20diskusi%20mengenai%20project%20backend`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contact via WhatsApp"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle hover:text-emerald-600"
          >
            <i aria-hidden="true" className="fab fa-whatsapp text-sm"></i>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Right Column: Photo with Subtle Ambient Gradient Glow */}
      <div className="flex flex-shrink-0 items-center justify-center lg:justify-end lg:pt-2">
        <div className="group relative">
          {/* Ambient subtle gradient glow */}
          <div
            className="pointer-events-none absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-indigo-500/25 via-cyan-500/15 to-purple-500/25 filter blur-2xl opacity-70 transition duration-500 group-hover:opacity-90"
            aria-hidden="true"
          />

          {/* Image container frame */}
          <div className="relative z-10 h-32 w-32 overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-subtle sm:h-56 sm:w-56 lg:h-64 lg:w-64 lg:rounded-3xl">
            <Image
              src="/avatar.png"
              alt={biodata.name}
              width={256}
              height={256}
              layout="responsive"
              objectFit="cover"
              className="transition duration-300 group-hover:scale-[1.02]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
