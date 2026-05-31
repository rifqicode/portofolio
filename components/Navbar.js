import { useEffect, useState } from 'react';
import BiodataData from '../assets/data/Biodata';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export default function Navbar() {
  const [activeHref, setActiveHref] = useState(navItems[0].href);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
      .sort((a, b) => a.offsetTop - b.offsetTop);

    if (!sections.length) {
      return undefined;
    }

    const handleScroll = () => {
      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 24;
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      if (isAtPageBottom) {
        setActiveHref(`#${sections[sections.length - 1].id}`);
        return;
      }

      const current = sections.reduce((active, section) => {
        return section.offsetTop <= scrollPosition ? section : active;
      }, sections[0]);

      setActiveHref(`#${current.id}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/70 text-on-surface backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="font-mono text-sm font-bold uppercase tracking-tight">
          {BiodataData.shortName}
        </a>

        <nav className="hidden items-center gap-8 font-mono text-xs md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? 'border-b-2 border-primary pb-1 font-bold text-primary transition hover:text-primary-fixed'
                    : 'border-b-2 border-transparent pb-1 text-on-surface-variant transition hover:text-primary'
                }
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rifqicode"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="hidden text-on-surface transition hover:text-primary sm:inline-flex"
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
          </a>
          <a
            href={BiodataData.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded bg-primary px-4 py-2 font-mono text-xs font-bold text-[#001f26] transition hover:bg-primary-fixed md:inline-flex"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
