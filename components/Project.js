import ProjectData from '../assets/data/Project';

export default function Project({ language = 'en' }) {
  return (
    <section id="projects" className="relative z-10 mt-2 flex flex-col gap-8 pb-12">
      <SectionLabel text="~/personal-projects" />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {ProjectData.map((project) => (
          <article
            key={project.name}
            className="glass-card group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-white/10 p-6 transition hover:border-primary/50"
          >
            <div className="absolute right-0 top-0 p-2 opacity-10">
              <span className="material-symbols-outlined text-4xl">{project.icon}</span>
            </div>

            <div>
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-primary">description</span>
                  <h3 className="font-mono text-base text-on-surface">{project.name}</h3>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant transition group-hover:text-primary">
                  folder_open
                </span>
              </div>

              <p className="mb-6 text-sm text-on-surface-variant">
                {language === 'id' && project.descriptionId ? project.descriptionId : project.description}
              </p>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <div className="flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded bg-surface-container px-2 py-0.5">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <a
                  className="flex items-center gap-2 font-mono text-xs text-primary transition hover:text-primary-fixed"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-github text-sm"></i>
                  {language === 'id' ? 'Lihat di GitHub' : 'View on GitHub'}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{text}</span>
      <div className="h-px flex-grow bg-white/10" />
    </div>
  );
}
