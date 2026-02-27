import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { socialLinks, personalInfo } from '../../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  email: <HiOutlineMail size={20} />,
};

export default function Footer() {
  return (
    <footer className="bg-surface-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#hero" className="text-xl font-bold gradient-text">
              {'<'}AA{' />'}
            </a>
            <p className="text-surface-200 text-sm mt-2">
              {personalInfo.firstName} {personalInfo.lastName} &mdash; {personalInfo.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl text-surface-200 hover:text-primary-400 hover:bg-white/5 transition-all duration-300"
                aria-label={link.name}
              >
                {iconMap[link.icon] || null}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-surface-200 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} {personalInfo.firstName} {personalInfo.lastName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
