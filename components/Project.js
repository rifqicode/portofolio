import projectsData from '../assets/data/projects.json';
import biodata from '../assets/data/biodata.json';

function renderStatusBadge(badge) {
  if (!badge) return null;

  if (badge === 'Live SaaS' || badge === 'Live Production') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 border border-emerald-200">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        {badge}
      </span>
    );
  }

  if (badge === 'Distributed Engine') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-800 border border-amber-200">
        <span className="material-symbols-outlined text-[13px] text-amber-600">bolt</span>
        {badge}
      </span>
    );
  }

  if (badge === 'RESTful API') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">
        <span className="material-symbols-outlined text-[13px] text-blue-600">terminal</span>
        {badge}
      </span>
    );
  }

  if (badge === 'Real-time WebSocket') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-semibold text-purple-700 border border-purple-200">
        <span className="material-symbols-outlined text-[13px] text-purple-600">sync_alt</span>
        {badge}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-semibold text-text-secondary border border-surface-border">
      {badge}
    </span>
  );
}

export default function Project({ language = 'en' }) {
  const isId = language === 'id';

  return (
    <section id="projects" className="flex flex-col gap-5 sm:gap-8">
      <SectionHeader
        title={isId ? 'Project Personal' : 'Personal Project'}
      />

      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project, index) => {
          const isGithubMain = project.url.includes('github.com');
          const isLastOdd =
            index === projectsData.length - 1 && projectsData.length % 2 !== 0;

          return (
            <article
              key={project.name}
              className={`clean-card min-w-0 rounded-2xl p-4 sm:p-7 flex flex-col justify-between hover:border-surface-border-strong hover:shadow-md transition-all ${
                isLastOdd ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header: Icon + Name + Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-surface-border pb-3.5">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-surface-border bg-surface-muted text-text-primary">
                      <span className="material-symbols-outlined text-[18px]">
                        {project.icon || 'folder'}
                      </span>
                    </div>
                    <h3 className="min-w-0 break-words font-mono text-base font-bold text-text-primary sm:text-lg">
                      {project.name}
                    </h3>
                  </div>
                  {renderStatusBadge(project.badge)}
                </div>

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-text-secondary sm:text-sm">
                  {isId && project.descriptionId
                    ? project.descriptionId
                    : project.description}
                </p>
              </div>

              {/* Links / Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-surface-border pt-4">
                {!isGithubMain && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View live ${project.name}`}
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
                  >
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    <span>{isId ? 'Kunjungi Web' : 'Live Preview'}</span>
                  </a>
                )}

                {(project.githubUrl || isGithubMain) && (
                  <a
                    href={project.githubUrl || project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} on GitHub`}
                    className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-surface-border bg-white px-3 py-1.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
                  >
                    <i className="fab fa-github text-xs"></i>
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      {/* Freelance & Collaboration Callout (Minimalist Tech Style) */}
      <div className="clean-card mt-2 rounded-2xl p-4 sm:mt-4 sm:p-8">
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
            <p className="max-w-xl text-sm leading-relaxed text-text-secondary sm:text-sm">
              {isId
                ? 'Terbuka untuk posisi full-time (remote global & lokal), konsultansi arsitektur distributed systems, audit performa, serta integrasi vendor pihak ketiga.'
                : 'Open for full-time senior engineering roles (global remote & local), distributed systems consulting, performance audits, and high-throughput vendor integrations.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-2 sm:pt-0 sm:flex-shrink-0">
            <a
              href={`mailto:${biodata.email}?subject=Project%20Inquiry%20-%20Muhammad%20Rifqi`}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-black px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800"
            >
              <span className="material-symbols-outlined text-[15px]">mail</span>
              <span>{isId ? 'Kirim Email' : 'Email Directly'}</span>
            </a>

            <a
              href={`https://wa.me/${biodata.whatsapp}?text=Halo%20Rifqi,%20saya%20ingin%20berdiskusi%20tentang%20proyek%20backend`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-surface-border bg-white px-4 py-2.5 text-xs font-semibold text-text-primary transition hover:border-surface-border-strong hover:bg-surface-subtle"
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
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      <p className="text-sm text-text-secondary">
        {subtitle}
      </p>
    </div>
  );
}
