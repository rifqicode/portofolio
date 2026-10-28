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
      />

      {/* 4-Card 2x2 Grid + Full-Width 5th AI Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {skillGroups.map((group, idx) => {
          const isFifthCard = idx === 4;

          return (
            <div
              key={group.category.en}
              className={`clean-card min-w-0 rounded-2xl p-4 sm:p-6 flex flex-col gap-4 border border-surface-border bg-white shadow-xs ${
                isFifthCard ? 'md:col-span-2' : ''
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 border-b border-surface-border pb-3">
                <div className="flex min-w-0 items-center gap-2">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${isFifthCard ? 'bg-indigo-600' : 'bg-blue-600'}`} />
                  <h3 className="text-sm sm:text-base font-bold text-text-primary">
                    {group.category[language] || group.category.en}
                  </h3>
                </div>
                <span className="shrink-0 font-mono text-xs font-medium text-text-muted bg-surface-muted px-2 py-0.5 rounded-md border border-surface-border">
                  {group.names.length} tools
                </span>
              </div>

              {/* Tech Stack Badges directly underneath */}
              <div
                className={
                  isFifthCard
                    ? 'grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5'
                    : 'grid grid-cols-2 gap-2 sm:gap-2.5'
                }
              >
                {group.names.map((name) => {
                  const iconClass = getToolIcon(name);
                  return (
                    <div
                      key={name}
                      title={name}
                      className="clean-card min-w-0 rounded-lg px-2.5 py-2.5 flex items-center gap-2 sm:gap-2.5 hover:border-surface-border-strong hover:bg-surface-muted transition"
                    >
                      {iconClass.startsWith('/') ? (
                        <img
                          src={iconClass}
                          alt=""
                          width={24}
                          height={24}
                          className="h-5 w-5 sm:h-6 sm:w-6 object-contain shrink-0"
                        />
                      ) : (
                        <i aria-hidden="true" className={`${iconClass} text-xl sm:text-2xl shrink-0`} />
                      )}
                      <span className="text-xs sm:text-sm font-semibold text-text-primary break-words min-w-0">
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

function SectionHeader({ title }) {
  return (
    <div className="flex flex-col gap-1 border-b border-surface-border pb-4">
      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
    </div>
  );
}
