import biodata from '../assets/data/biodata.json';
import site from '../assets/data/site.json';
import { generateAndDownloadCV } from '../utils/generateCV';

export default function Footer({ language = 'en' }) {
  return (
    <footer className="border-t border-surface-border bg-surface-subtle text-text-secondary">
      <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 sm:py-8 md:text-left md:flex-row md:px-8">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-sm font-semibold text-text-primary">
            &copy; {new Date().getFullYear()} {biodata.name}
          </p>
          <p className="text-xs text-text-muted">
            {language === 'id'
              ? 'Senior Backend Engineer • Sistem Terdistribusi & Integrasi Skalabilitas Tinggi.'
              : 'Senior Backend Engineer • Distributed Systems & High-Scale Integrations.'}
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-1 text-xs font-medium">
          {site.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center text-text-secondary transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => generateAndDownloadCV(language)}
            className="inline-flex min-h-[44px] items-center font-semibold text-black transition hover:underline"
          >
            Curriculum Vitae
          </button>
        </div>
      </div>
    </footer>
  );
}
