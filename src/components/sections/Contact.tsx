import { Mail, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { personalInfo, socialLinks } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={24} />,
  linkedin: <FaLinkedin size={24} />,
  email: <HiOutlineMail size={24} />,
};

export default function Contact() {
  const { theme } = useTheme();
  return (
    <section id="contact" className={`py-24 ${theme === 'dark' ? 'bg-white dark:bg-surface-950' : 'bg-surface-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            id="contact-title"
            title="Contact"
            subtitle="Envie de collaborer ou de discuter ? N'hésitez pas !"
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-1 gap-12 items-start max-w-2xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-700'}`}>
                Je suis actuellement à la recherche d'une <span className="text-primary-500 font-semibold">alternance</span> à partir de <span className="text-accent-500 font-semibold">septembre 2026</span> dans le domaine de l'informatique, dans le cadre de mon admission à l'ESIEA. N'hésitez pas à me contacter pour discuter d'opportunités !
              </p>

              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10 hover:border-primary-400/50 dark:hover:border-primary-400/30' : 'bg-white border-surface-200 hover:border-primary-400/40 shadow-lg shadow-surface-200/30'}`}
                >
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-600'}`}>Email</p>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>{personalInfo.email}</p>
                  </div>
                </a>

                <div className={`flex items-center gap-4 p-4 rounded-2xl border ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10' : 'bg-white border-surface-200 shadow-lg shadow-surface-200/30'}`}>
                  <div className="p-3 rounded-xl bg-primary-500/10 text-primary-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className={`text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-surface-700 dark:text-surface-200' : 'text-surface-600'}`}>Localisation</p>
                    <p className={`text-sm font-medium ${theme === 'dark' ? 'text-surface-900 dark:text-white' : 'text-surface-950'}`}>{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-surface-50 dark:bg-white/[0.03] border-surface-200 dark:border-white/10 text-surface-700 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400 hover:border-primary-400/50 dark:hover:border-primary-400/30' : 'bg-white border-surface-200 text-surface-700 hover:text-primary-500 hover:border-primary-400/40 shadow-lg shadow-surface-200/30'}`}
                    aria-label={link.name}
                  >
                    {iconMap[link.icon] || null}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
