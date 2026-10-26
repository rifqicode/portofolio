import { useState } from 'react';
import biodata from '../assets/data/biodata.json';

export default function Biodata({ language = 'en' }) {
  const [emailCopied, setEmailCopied] = useState(false);
  const labels = biodata.labels;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(biodata.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      setEmailCopied(false);
    }
  };

  return (
    <section id="home" className="flex flex-col gap-7 pt-4">
      {/* Header Profile Info (Clean Text-First Minimalist Tech) */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
          {biodata.name}
        </h1>
        <p className="max-w-3xl text-base font-medium leading-snug text-text-secondary sm:text-lg">
          {biodata.roleHeadline[language]}
        </p>

        {/* Quick Meta Location & Education */}
        <div className="mt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">location_on</span>
            <span>{biodata.location[language]}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">school</span>
            <span>{biodata.education[language]}</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px]">alternate_email</span>
            <span>{biodata.email}</span>
          </span>
        </div>
      </div>

      {/* Narrative Summary */}
      <p className="max-w-3xl text-sm leading-relaxed text-text-secondary sm:text-base">
        {biodata.summary[language]}
      </p>

      {/* Real Architecture Concepts Grounded in Production Experience */}
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
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {/* Contact direct link */}
        <a
          href={`mailto:${biodata.email}?subject=Engineering%20Inquiry%20-%20Muhammad%20Rifqi`}
          className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
        >
          <span className="material-symbols-outlined text-[16px]">mail</span>
          <span>{labels.contactDirect[language]}</span>
        </a>

        {/* Download CV */}
        <a
          href={biodata.cvUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
        >
          <span className="material-symbols-outlined text-[16px]">download</span>
          <span>{labels.downloadCV[language]}</span>
        </a>

        {/* Copy Email Button */}
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
          aria-label="Copy email address"
        >
          <span className="material-symbols-outlined text-[16px] text-text-secondary">
            {emailCopied ? 'check' : 'content_copy'}
          </span>
          <span>
            {emailCopied ? labels.copiedEmail[language] : labels.copyEmail[language]}
          </span>
        </button>

        {/* GitHub link */}
        <a
          href={biodata.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-text-secondary transition hover:border-surface-border-strong hover:text-black"
        >
          <i className="fab fa-github text-sm"></i>
        </a>

        {/* WhatsApp link */}
        <a
          href={`https://wa.me/${biodata.whatsapp}?text=Halo%20Rifqi,%20saya%20tertarik%20untuk%20diskusi%20mengenai%20project%20backend`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact via WhatsApp"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border text-text-secondary transition hover:border-surface-border-strong hover:text-emerald-600"
        >
          <i className="fab fa-whatsapp text-sm"></i>
        </a>
      </div>
    </section>
  );
}
