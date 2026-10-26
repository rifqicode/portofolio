import skillsData from '../assets/data/skills.json';

export default function Skill({ language = 'en' }) {
  const { skillGroups, toolIcons } = skillsData;

  const getToolIcon = (name) => {
    return toolIcons[name] || 'fas fa-code';
  };

  return (
    <section id="tech" className="flex flex-col gap-6">
      <SectionHeader
        title={language === 'id' ? 'Keahlian & Teknologi' : 'Skills & Tech Stack'}
        subtitle={
          language === 'id'
            ? 'Teknologi dan tools yang digunakan dalam membangun arsitektur backend'
            : 'Technologies and tools used to engineer reliable backend systems'
        }
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const isFullWidth = index === skillGroups.length - 1 && skillGroups.length % 2 !== 0;

          return (
            <div
              key={group.category.en}
              className={`clean-card flex flex-col justify-between rounded-2xl p-5 shadow-sm sm:p-6 ${
                isFullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between border-b border-surface-border pb-3">
                  <h3 className="text-base font-bold text-text-primary">
                    {group.category[language]}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-text-muted">
                    {group.names.length} tools
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                  {group.description[language]}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {group.names.map((name) => {
                  const iconClass = getToolIcon(name);
                  return (
                    <div
                      key={name}
                      className="flex items-center gap-2 rounded-lg border border-surface-border bg-surface-subtle px-3 py-1.5 transition hover:border-surface-border-strong hover:bg-surface-muted"
                    >
                      <i className={`${iconClass} text-xs text-text-primary`}></i>
                      <span className="text-xs font-medium text-text-primary">
                        {name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
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
