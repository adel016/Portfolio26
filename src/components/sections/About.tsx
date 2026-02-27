import { User, MapPin, Car, Mail } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo, interests } from '../../data/portfolio';

export default function About() {
  const infoItems = [
    { icon: <MapPin size={18} />, label: "Localisation", value: personalInfo.location },
    { icon: <Car size={18} />, label: "Permis", value: personalInfo.driversLicense },
    { icon: <Mail size={18} />, label: "Email", value: personalInfo.email },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            id="about-title"
            title="À propos"
            subtitle="Qui suis-je ?"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Bio */}
          <AnimatedSection className="lg:col-span-3 space-y-6" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary-500/10 text-primary-500">
                <User size={24} />
              </div>
              <h3 className="text-xl font-semibold text-surface-900 dark:text-white">
                {personalInfo.firstName} {personalInfo.lastName}
              </h3>
            </div>

            <p className="text-surface-700 dark:text-surface-200 leading-relaxed text-lg">
              {personalInfo.bio}
            </p>

            {/* Interests */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider mb-4">
                Centres d'intérêt
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest.name}
                    className="px-4 py-2 text-sm font-medium rounded-xl bg-surface-100 dark:bg-white/5 text-surface-700 dark:text-surface-200 border border-surface-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-400/30 transition-colors"
                  >
                    {interest.name}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Info Card */}
          <AnimatedSection className="lg:col-span-2" delay={0.2} direction="right">
            <div className="rounded-2xl bg-surface-50 dark:bg-white/[0.03] border border-surface-200 dark:border-white/10 p-6 space-y-5">
              <h4 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider">
                Informations
              </h4>
              {infoItems.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="mt-0.5 text-primary-500">{item.icon}</div>
                  <div>
                    <p className="text-xs text-surface-700 dark:text-surface-200 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-surface-900 dark:text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
