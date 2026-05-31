import { useMemo, useState } from 'react';
import SkillData from '../assets/data/Skill';

const tabs = [
  { label: 'Languages', names: ['JavaScript', 'Go', 'PHP', 'SQL'] },
  { label: 'Backend', names: ['Gin', 'Express JS', 'Laravel', 'Symfony'] },
  { label: 'Data', names: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ElasticSearch'] },
  { label: 'Streaming', names: ['Kafka', 'NSQ', 'Debezium'] },
  { label: 'Cloud & DevOps', names: ['Docker', 'Linux', 'AWS S3', 'AWS EC2', 'AWS Lambda'] },
  { label: 'Monitoring', names: ['Grafana'] },
  { label: 'AI Tools', names: ['ChatGPT', 'GitHub Copilot', 'Claude', 'Claude Code', 'Cursor', 'Gemini', 'Hermes', 'OpenClaw'] },
];

export default function Skill() {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const skillsByTab = useMemo(() => {
    return tabs.reduce((acc, tab) => {
      acc[tab.label] = tab.names
        .map((name) => SkillData.find((item) => item.name === name))
        .filter(Boolean);
      return acc;
    }, {});
  }, []);

  const activeSkills = skillsByTab[activeTab] || [];

  return (
    <section id="tech" className="relative z-10 flex flex-col gap-6">
      <SectionLabel text="~/tech-stack" />

      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-2 md:w-1/3 lg:w-1/4">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.label;
            return (
              <button
                key={tab.label}
                type="button"
                onClick={() => setActiveTab(tab.label)}
                className={
                  'rounded border px-4 py-3 text-left font-mono text-sm transition ' +
                  (isActive
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-white/10 text-on-surface-variant hover:border-primary/50 hover:text-primary')
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid min-h-[200px] w-full grid-cols-2 gap-4 md:w-2/3 lg:w-3/4 lg:grid-cols-3">
          {activeSkills.map((item) => (
            <div
              key={`${activeTab}-${item.name}`}
              className="glass-card terminal-border flex cursor-default flex-col items-center justify-center gap-3 rounded-lg p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center text-on-surface opacity-80 transition hover:opacity-100">
                <i className={`${item.image} text-5xl`}></i>
              </div>
              <span className="font-mono text-sm text-on-surface-variant">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ text }) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <span className="font-mono text-sm text-primary">{text}</span>
      <div className="h-px flex-grow bg-white/10" />
    </div>
  );
}
