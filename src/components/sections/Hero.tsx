import { motion } from 'framer-motion';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { personalInfo, socialLinks } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={22} />,
  linkedin: <FaLinkedin size={22} />,
  email: <HiOutlineMail size={22} />,
};

export default function Hero() {
  const { theme } = useTheme();

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        theme === 'dark' ? 'bg-surface-950' : 'bg-surface-50'
      }`}
    >
      {/* Background animated gradient */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 animate-gradient ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-primary-900/30 via-surface-950 to-accent-600/20'
            : 'bg-gradient-to-br from-primary-100 via-white to-accent-100'
        }`} />
        <div className={`absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl animate-pulse-glow ${
          theme === 'dark' ? 'bg-primary-500/10' : 'bg-primary-400/15'
        }`} />
        <div className={`absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl animate-pulse-glow ${
          theme === 'dark' ? 'bg-accent-500/10' : 'bg-accent-400/15'
        }`} style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8 ${
            theme === 'dark'
              ? 'glass text-primary-300'
              : 'bg-white/80 border border-surface-200 text-primary-700 shadow-lg shadow-surface-200/40'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          Alternance disponible à partir de septembre 2026
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-4xl sm:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-surface-950'
          }`}
        >
          {personalInfo.firstName}{' '}
          <span className="gradient-text">{personalInfo.lastName}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 text-xl sm:text-2xl font-light ${
            theme === 'dark' ? 'text-surface-200' : 'text-surface-700'
          }`}
        >
          {personalInfo.title}
        </motion.p>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-3 flex flex-wrap items-center justify-center gap-4 ${
            theme === 'dark' ? 'text-surface-200' : 'text-surface-700'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 text-sm">
            <GraduationCap size={16} className="text-primary-400" />
            {personalInfo.subtitle}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm">
            <MapPin size={16} className="text-primary-400" />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-2xl transition-all duration-300 hover:scale-110 ${
                theme === 'dark'
                  ? 'glass text-surface-200 hover:text-primary-400 hover:border-primary-400/30'
                  : 'bg-white border border-surface-200 text-surface-950 hover:text-primary-600 hover:border-primary-400/40 shadow-lg shadow-surface-200/40'
              }`}
              aria-label={link.name}
            >
              {iconMap[link.icon] || null}
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className={`px-8 py-3.5 text-sm font-semibold rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark'
                ? 'text-surface-200 glass hover:text-white hover:border-primary-400/30'
                : 'text-surface-700 bg-white/80 border border-surface-200 hover:text-surface-950 hover:border-primary-400/40 shadow-lg shadow-surface-200/40'
            }`}
          >
            Me contacter
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors cursor-pointer ${
          theme === 'dark' ? 'text-surface-200 hover:text-primary-400' : 'text-surface-700 hover:text-primary-600'
        }`}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
}
