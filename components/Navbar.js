import { useEffect, useState } from 'react';
import biodata from '../assets/data/biodata.json';

const navItems = [
  { label: { en: 'About', id: 'Tentang' }, href: '#home' },
  { label: { en: 'Experience', id: 'Pengalaman' }, href: '#experience' },
  { label: { en: 'Tech Stack', id: 'Tech Stack' }, href: '#tech' },
  { label: { en: 'Projects', id: 'Proyek' }, href: '#projects' },
];

export default function Navbar({ language = 'en', onLanguageChange }) {
  const [activeHref, setActiveHref] = useState(navItems[0].href);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
      .sort((a, b) => a.offsetTop - b.offsetTop);

    if (!sections.length) return undefined;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const isAtPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 32;
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

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

  const handleNavClick = (href) => {
    setActiveHref(href);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={
        'sticky top-0 z-50 transition-all duration-300 ' +
        (isScrolled
          ? 'border-b border-surface-border/80 bg-white/70 shadow-sm backdrop-blur-md'
          : 'border-b border-surface-border/40 bg-white/90 backdrop-blur-md')
      }
    >
      <div className="mx-auto flex max-w-[960px] items-center justify-between gap-2 px-4 py-2 sm:px-6 sm:py-3.5 md:px-8">
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="flex min-h-[44px] items-center text-sm sm:text-base font-bold tracking-tight text-text-primary transition hover:opacity-80"
        >
          {biodata.shortName}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-text-secondary md:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={
                  'transition-colors ' +
                  (isActive ? 'font-semibold text-black' : 'hover:text-black')
                }
              >
                {item.label[language]}
              </a>
            );
          })}
        </nav>

        {/* Actions & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center rounded-lg border border-surface-border bg-surface-muted/80 p-0.5 text-xs font-medium">
            {['en', 'id'].map((item) => {
              const isActive = language === item;
              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onLanguageChange?.(item)}
                  className={
                    'flex min-h-[44px] min-w-[40px] items-center justify-center rounded-md px-2 py-1 uppercase transition-all ' +
                    (isActive
                      ? 'bg-white font-semibold text-black shadow-sm'
                      : 'text-text-muted hover:text-black')
                  }
                  aria-pressed={isActive}
                  aria-label={`Switch language to ${item.toUpperCase()}`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex min-h-[44px] items-center justify-center gap-1 rounded-lg px-2 border border-surface-border bg-white/60 text-text-secondary transition hover:border-surface-border-strong hover:text-black md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
            <span className="text-xs font-medium">Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-surface-border bg-white/95 px-4 py-3 shadow-subtle backdrop-blur-md md:hidden"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={
                    'flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors ' +
                    (isActive
                      ? 'bg-surface-muted font-semibold text-black'
                      : 'text-text-secondary hover:bg-surface-subtle hover:text-black')
                  }
                >
                  <span>{item.label[language]}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-black" />}
                </a>
              );
            })}

          </div>
        </nav>
      )}
    </header>
  );
}
