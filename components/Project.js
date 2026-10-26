import projectsData from '../assets/data/projects.json';
import biodata from '../assets/data/biodata.json';

export default function Project({ language = 'en' }) {
  const isId = language === 'id';

  return (
    <section id="projects" className="flex flex-col gap-8">
      <SectionHeader
        title={isId ? 'Proyek Personal & Produk' : 'Projects & Products'}
        subtitle={
          isId
            ? 'Aplikasi SaaS produksi, sistem event & otomasi, arsitektur worker terdistribusi, dan API modular'
            : 'Production SaaS apps, event automation systems, distributed worker architectures, and modular APIs'
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projectsData.map((project, index) => {
          const isGithubMain = project.url.includes('github.com');
          const isFeatured = index === 0 && projectsData.length % 2 !== 0;

          return (
            <article
              key={project.name}
              className={`clean-card flex flex-col justify-between rounded-2xl p-5 shadow-sm sm:p-6 ${
                isFeatured ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex flex-col gap-3 border-b border-surface-border pb-3.5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-text-primary">
                      {project.icon || 'folder'}
                    </span>
                    <h3 className="font-mono text-base font-bold text-text-primary">
                      {project.name}
                    </h3>
                    {project.badge && (
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Live URL Link */}
                    {!isGithubMain && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View live ${project.name}`}
                        className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-white px-2.5 py-1 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
                      >
                        <span className="material-symbols-outlined text-[13px]">open_in_new</span>
                        <span>{isId ? 'Kunjungi Web' : 'Live App'}</span>
                        <span className="material-symbols-outlined text-[13px] text-text-muted">
                          arrow_outward
                        </span>
                      </a>
                    )}

                    {/* GitHub Link */}
                    {(project.githubUrl || isGithubMain) && (
                      <a
                        href={project.githubUrl || project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.name} on GitHub`}
                        className="flex items-center gap-1.5 rounded-lg border border-surface-border bg-white px-2.5 py-1 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
                      >
                        <i className="fab fa-github text-xs"></i>
                        <span>GitHub</span>
                        {isGithubMain && (
                          <span className="material-symbols-outlined text-[13px] text-text-muted">
                            arrow_outward
                          </span>
                        )}
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  {isId && project.descriptionId
                    ? project.descriptionId
                    : project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-1.5 border-t border-surface-border pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-surface-border bg-surface-muted px-2 py-0.5 font-mono text-xs font-medium text-text-secondary"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Freelance & Collaboration Callout (Minimalist Tech Style) */}
      <div className="clean-card mt-4 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
              {isId ? 'Konsultansi & Kolaborasi' : 'Consulting & Opportunities'}
            </span>
            <h3 className="text-lg font-bold tracking-tight text-text-primary sm:text-xl">
              {isId
                ? 'Punya proyek sistem backend atau butuh tim senior?'
                : 'Have a backend challenge or looking for senior engineering talent?'}
            </h3>
            <p className="max-w-xl text-xs leading-relaxed text-text-secondary sm:text-sm">
              {isId
                ? 'Terbuka untuk posisi full-time (remote global & lokal), konsultansi arsitektur distributed systems, audit performa, serta integrasi vendor pihak ketiga.'
                : 'Open for full-time senior engineering roles (global remote & local), distributed systems consulting, performance audits, and high-throughput vendor integrations.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 sm:pt-0 sm:flex-shrink-0">
            <a
              href={`mailto:${biodata.email}?subject=Project%20Inquiry%20-%20Muhammad%20Rifqi`}
              className="inline-flex items-center gap-1.5 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>{isId ? 'Kirim Email' : 'Email Directly'}</span>
            </a>

            <a
              href={`https://wa.me/${biodata.whatsapp}?text=Halo%20Rifqi,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20backend`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
            >
              <i className="fab fa-whatsapp text-xs text-emerald-600"></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-border pb-4">
      <h2 className="text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="text-sm text-text-secondary">
        {subtitle}
      </p>
    </div>
  );
}
