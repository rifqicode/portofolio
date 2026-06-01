import { useState } from 'react';
import BiodataData from '../assets/data/Biodata';

const traits = ['Teamwork', 'Analytic Thinking', 'Motivated', 'Fast Learning', 'Growth Mindset'];

const copy = {
  en: {
    role: 'Senior Backend Engineer - Production Systems & Integrations',
    education: 'BINUS Information Systems (2024 - Present)',
    summary: BiodataData.summary,
  },
  id: {
    role: 'Senior Backend Engineer - Sistem Produksi & Integrasi',
    education: 'Sistem Informasi BINUS (2024 - Sekarang)',
    summary:
      'Backend Engineer dengan pengalaman 7+ tahun dalam merancang dan membangun sistem backend yang scalable di production. Berpengalaman di distributed systems, microservices architecture, integrasi pihak ketiga, dan sistem data-intensive untuk domain fintech serta enterprise.',
  },
};

const developerCode = `const developer = {
  name: 'Muhammad Rifqi',
  role: 'Senior Backend Engineer',
  experience: '7+ Years',
  skills: [
    'JavaScript',
    'Go',
    'Express JS',
    'Kafka',
    'PostgreSQL'
  ],
  buildArchitecture: () => {
    return 'Reliable & Scalable';
  }
};`;

export default function Biodata({ language = 'en' }) {
  const [copied, setCopied] = useState(false);
  const content = copy[language] || copy.en;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(developerCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section id="home" className="relative z-10 flex flex-col items-center justify-between gap-12 py-8 md:flex-row md:py-12">
      <div className="flex flex-1 flex-col gap-6">
        <div className="inline-flex w-max items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs text-secondary">
          <span className="h-2 w-2 animate-pulse rounded-full bg-secondary" />
          {BiodataData.availability}
        </div>

        <h1 className="font-display text-4xl font-bold leading-tight text-on-surface sm:text-5xl lg:text-[48px]">
          Muhammad Rifqi
          <br />
          Imam Saputra
        </h1>

        <div className="flex flex-col gap-2 font-mono text-xs text-on-surface-variant sm:text-sm">
          <InfoRow icon="location_on" text={BiodataData.location} />
          <InfoRow icon="work" text={content.role} />
          <InfoRow icon="mail" text={BiodataData.email} />
          <InfoRow icon="school" text={content.education} />
        </div>

        <div className="flex flex-wrap gap-2">
          {traits.map((trait) => (
            <span key={trait} className="rounded border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
              {trait}
            </span>
          ))}
        </div>

        <p className="max-w-2xl text-sm leading-7 text-on-surface-variant sm:text-base">
          {content.summary}
        </p>
      </div>

      <div className="glass-card w-full max-w-md overflow-hidden rounded-lg border border-white/10 shadow-terminal">
        <div className="flex items-center justify-between border-b border-white/5 bg-surface-low px-4 py-2">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-error" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="h-3 w-3 rounded-full bg-secondary" />
          </div>
          <span className="font-mono text-[11px] text-on-surface-variant">developer.js</span>
          <button
            type="button"
            onClick={handleCopy}
            className="group relative text-on-surface-variant transition hover:text-secondary"
            aria-label="Copy developer code"
          >
            <span className="material-symbols-outlined text-[16px]">{copied ? 'check' : 'content_copy'}</span>
            <span className="absolute -top-8 right-0 rounded bg-surface px-2 py-1 font-mono text-xs text-on-surface opacity-0 transition group-hover:opacity-100">
              {copied ? (language === 'id' ? 'Tersalin!' : 'Copied!') : language === 'id' ? 'Salin' : 'Copy'}
            </span>
          </button>
        </div>

        <div className="custom-scrollbar overflow-x-auto bg-[#010409] p-6 font-mono text-[12px] leading-6 text-on-surface-variant sm:text-[13px]">
          <pre>
            <code>
              <span className="text-secondary">const</span> <span className="text-primary-fixed">developer</span>{' '}
              <span className="text-secondary">=</span> {'{'}
              {'\n'}  <span className="text-outline">name:</span> <span className="text-tertiary">&apos;Muhammad Rifqi&apos;</span>,
              {'\n'}  <span className="text-outline">role:</span> <span className="text-tertiary">&apos;Senior Backend Engineer&apos;</span>,
              {'\n'}  <span className="text-outline">experience:</span> <span className="text-tertiary">&apos;7+ Years&apos;</span>,
              {'\n'}  <span className="text-outline">skills:</span> [
              {'\n'}    <span className="text-tertiary">&apos;JavaScript&apos;</span>,
              {'\n'}    <span className="text-tertiary">&apos;Go&apos;</span>,
              {'\n'}    <span className="text-tertiary">&apos;Kafka&apos;</span>,
              {'\n'}    <span className="text-tertiary">&apos;PostgreSQL&apos;</span>
              {'\n'}  ],
              {'\n'}  <span className="text-outline">buildArchitecture:</span> () <span className="text-secondary">=&gt;</span> {'{'}
              {'\n'}    <span className="text-secondary">return</span>{' '}
              <span className="text-tertiary">&apos;Reliable &amp; Scalable&apos;</span>;
              {'\n'}  {'}'}
              {'\n'}
              {'};'}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-[16px] text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
