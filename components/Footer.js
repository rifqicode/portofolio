import BiodataData from '../assets/data/Biodata';

export default function Footer({ language = 'en' }) {
  return (
    <footer className="border-t border-white/5 bg-surface-lowest text-on-surface-variant">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row md:px-8">
        <p className="font-mono text-xs">
          &copy; {new Date().getFullYear()} {BiodataData.shortName}.{' '}
          {language === 'id' ? 'Dibangun dengan Backend Precision.' : 'Built with Backend Precision.'}
        </p>

        <div className="flex items-center gap-6 font-mono text-xs">
          {BiodataData.socialLinks.map((item) => (
            <a key={item.label} href={item.url} target="_blank" rel="noreferrer" className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
          <a href={BiodataData.cvUrl} target="_blank" rel="noreferrer" className="transition hover:text-primary">
            CV
          </a>
        </div>
      </div>
    </footer>
  );
}
