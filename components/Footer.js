import biodata from '../assets/data/biodata.json';
import site from '../assets/data/site.json';

export default function Footer({ language = 'en' }) {
  return (
    <footer className="border-t border-surface-border bg-surface-subtle text-text-secondary">
      <div className="mx-auto flex max-w-[960px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
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

        <div className="flex items-center gap-5 text-xs font-medium">
          {site.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary transition hover:text-black"
            >
              {item.label}
            </a>
          ))}
          <a
            href={biodata.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-black transition hover:underline"
          >
            Curriculum Vitae
          </a>
        </div>
      </div>
    </footer>
  );
}
