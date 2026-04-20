import { Briefcase, GraduationCap } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { experiences, education } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

export default function Experience() {
  const { theme } = useTheme();
  const monthMap: Record<string, number> = {
    janvier: 1,
    fevrier: 2,
    mars: 3,
    avril: 4,
    mai: 5,
    juin: 6,
    juillet: 7,
    aout: 8,
    septembre: 9,
    octobre: 10,
    novembre: 11,
    decembre: 12,
  };

  const normalize = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

  const toSortable = (dateLabel: string) => {
    const normalized = normalize(dateLabel);
    if (normalized === 'en cours') {
      return 999999;
    }

    const parts = normalized.split(' ');
    if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
      return Number(parts[0]) * 100 + 1;
    }

    if (parts.length >= 2) {
      const month = monthMap[parts[0]] ?? 1;
      const year = Number(parts[parts.length - 1]);
      if (!Number.isNaN(year)) {
        return year * 100 + month;
      }
    }

    return 0;
  };

  const sortByRecency = (a: (typeof experiences)[number], b: (typeof experiences)[number]) => {
    const endDiff = toSortable(b.endDate) - toSortable(a.endDate);
    if (endDiff !== 0) {
      return endDiff;
    }
    return toSortable(b.startDate) - toSortable(a.startDate);
  };

  const professionalExperiences = experiences
    .filter((exp) => exp.type === 'work')
    .sort(sortByRecency);
  const academicExperiences = experiences
    .filter((exp) => exp.type === 'academic')
    .sort(sortByRecency);

  return (
    <section id="experience" className={`py-24 ${theme === 'dark' ? 'bg-white dark:bg-surface-950' : 'bg-surface-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            id="experience-title"
            title="Parcours"
            subtitle="Mon parcours professionnel et académique"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500">
                  <Briefcase size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                  Expériences
                </h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} className="text-primary-500" />
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                  Expériences professionnelles
                </h4>
              </div>
            </AnimatedSection>

            <div className="relative mb-10">
              <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />

              <div className="space-y-8">
                {professionalExperiences.map((exp, index) => (
                  <AnimatedSection key={exp.id} delay={0.2 + index * 0.1}>
                    <div className="relative pl-12">
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 border-4 border-white dark:border-surface-950 z-10" />

                      <div className={`p-5 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10 hover:border-primary-400/50 dark:hover:border-primary-400/30' : 'bg-white border-surface-200 hover:border-primary-400/40 shadow-lg shadow-surface-200/30'}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary-500/10 text-primary-500">
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                        <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                          {exp.title}
                        </h4>
                        <p className="text-sm text-primary-500 font-medium">
                          {exp.company} &mdash; {exp.location}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {exp.description.map((desc, i) => (
                            <li key={i} className={`text-sm flex items-start gap-2 ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-700'}`}>
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-400 shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-0.5 text-xs font-medium rounded-md ${theme === 'dark' ? 'bg-surface-200 dark:bg-white/10 text-surface-700 dark:text-surface-200' : 'bg-surface-100 text-surface-700'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <AnimatedSection delay={0.2}>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap size={18} className="text-accent-500" />
                <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                  Expériences académiques
                </h4>
              </div>
            </AnimatedSection>

            <div className="relative">
              <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full" />

              <div className="space-y-8">
                {academicExperiences.map((exp, index) => (
                  <AnimatedSection key={exp.id} delay={0.25 + index * 0.1}>
                    <div className="relative pl-12">
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 border-4 border-white dark:border-surface-950 z-10" />

                      <div className={`p-5 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10 hover:border-primary-400/50 dark:hover:border-primary-400/30' : 'bg-white border-surface-200 hover:border-primary-400/40 shadow-lg shadow-surface-200/30'}`}>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-500/10 text-accent-500">
                            {exp.startDate} — {exp.endDate}
                          </span>
                        </div>
                        <h4 className={`text-lg font-semibold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                          {exp.title}
                        </h4>
                        <p className="text-sm text-primary-500 font-medium">
                          {exp.company} &mdash; {exp.location}
                        </p>
                        <ul className="mt-3 space-y-1">
                          {exp.description.map((desc, i) => (
                            <li key={i} className={`text-sm flex items-start gap-2 ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-950'}`}>
                              <span className="mt-1.5 w-1 h-1 rounded-full bg-primary-400 shrink-0" />
                              {desc}
                            </li>
                          ))}
                        </ul>
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className={`px-2 py-0.5 text-xs font-medium rounded-md ${theme === 'dark' ? 'bg-surface-200 dark:bg-white/10 text-surface-700 dark:text-surface-200' : 'bg-surface-100 text-surface-950 border border-surface-200'}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <AnimatedSection delay={0.1} direction="right">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-xl bg-accent-500/10 text-accent-500">
                  <GraduationCap size={24} />
                </div>
                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                  Formation
                </h3>
              </div>
            </AnimatedSection>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-500 to-primary-500 rounded-full" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <AnimatedSection key={edu.id} delay={0.2 + index * 0.1} direction="right">
                    <div className="relative pl-12">
                      {/* Dot */}
                      <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 border-4 border-white dark:border-surface-950 z-10" />

                      <div className={`p-5 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10 hover:border-accent-400/50 dark:hover:border-accent-400/30' : 'bg-white border-surface-200 hover:border-accent-400/40 shadow-lg shadow-surface-200/30'}`}>
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent-500/10 text-accent-500">
                          {edu.startDate} — {edu.endDate}
                        </span>
                        <h4 className={`mt-2 text-lg font-semibold ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-accent-500 font-medium">
                          {edu.school} &mdash; {edu.location}
                        </p>
                        {edu.specialization && (
                          <p className="mt-1 text-sm text-primary-400 font-medium">
                            Parcours : {edu.specialization}
                          </p>
                        )}
                        {edu.description && (
                          <p className={`mt-2 text-sm leading-relaxed ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-700'}`}>
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
