import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, SunMedium, X } from 'lucide-react';
import { navItems } from '../../data/portfolio';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'glass-dark shadow-lg shadow-black/10'
            : 'bg-white/80 backdrop-blur-xl border-b border-surface-200 shadow-lg shadow-surface-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="text-xl font-bold gradient-text"
          >
            {'<'}AA{' />'}
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  theme === 'dark'
                    ? 'text-surface-200 hover:text-primary-400 hover:bg-white/5'
                    : 'text-surface-950 hover:text-primary-600 hover:bg-surface-100'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-colors ${
                theme === 'dark'
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-950 hover:bg-surface-100'
              }`}
              aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
              title={theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
            >
              {theme === 'dark' ? <SunMedium size={22} /> : <Moon size={22} />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-xl transition-colors ${
                theme === 'dark'
                  ? 'text-surface-200 hover:bg-white/10'
                  : 'text-surface-950 hover:bg-surface-100'
              }`}
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden ${theme === 'dark' ? 'glass-dark border-t border-white/10' : 'bg-white/95 border-t border-surface-200 shadow-lg shadow-surface-200/30'}`}
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-colors ${
                    theme === 'dark'
                      ? 'text-surface-200 hover:text-primary-400 hover:bg-white/5'
                      : 'text-surface-950 hover:text-primary-600 hover:bg-surface-100'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
