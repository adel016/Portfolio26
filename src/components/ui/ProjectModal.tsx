import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Play, FolderOpen } from 'lucide-react';
import { useEffect } from 'react';
import type { Project } from '../../data/portfolio';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-surface-900 border border-surface-200 dark:border-white/10 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            {/* Cover image */}
            <div className="relative w-full h-56 sm:h-72 overflow-hidden rounded-t-3xl bg-gradient-to-br from-primary-500/20 to-accent-500/20">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <FolderOpen size={64} className="text-primary-400/30" />
                </div>
              )}
              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Title */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-surface-900 dark:text-white">
                  {project.title}
                </h2>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-semibold rounded-lg bg-primary-500/10 text-primary-500 dark:text-primary-400 border border-primary-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider">
                  Description
                </h3>
                <p className="text-surface-700 dark:text-surface-200 leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Video */}
              {project.videoUrl && (
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-surface-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Play size={16} className="text-primary-500" />
                    Vidéo de démonstration
                  </h3>
                  <div className="relative w-full rounded-2xl overflow-hidden bg-black aspect-video">
                    <video
                      src={project.videoUrl}
                      controls
                      className="w-full h-full object-contain"
                      poster={project.image}
                    >
                      Votre navigateur ne supporte pas la vidéo.
                    </video>
                  </div>
                </div>
              )}

              {/* Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-surface-200 dark:border-white/10">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-surface-900 dark:bg-white text-white dark:text-surface-900 hover:opacity-90 transition-opacity"
                    >
                      <Github size={18} />
                      Voir le code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                    >
                      <ExternalLink size={18} />
                      Voir la démo
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
