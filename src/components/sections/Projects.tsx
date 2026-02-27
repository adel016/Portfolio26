import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderOpen, Eye } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import ProjectModal from '../ui/ProjectModal';
import { projects, type Project } from '../../data/portfolio';

const categoryLabels: Record<Project['category'], string> = {
  web: 'Web',
  data: 'Data',
  mobile: 'Mobile',
  devops: 'DevOps',
  other: 'Autre',
};

const allCategories = [...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Project['category'] | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            id="projects-title"
            title="Projets"
            subtitle="Découvrez mes réalisations et projets personnels"
          />
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-white dark:bg-white/5 text-surface-700 dark:text-surface-200 border border-surface-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-400/30'
              }`}
            >
              Tout
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-white dark:bg-white/5 text-surface-700 dark:text-surface-200 border border-surface-200 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-400/30'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group relative flex flex-col rounded-2xl bg-white dark:bg-white/[0.03] border border-surface-200 dark:border-white/10 hover:border-primary-400/50 dark:hover:border-primary-400/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5 overflow-hidden cursor-pointer"
              >
                {/* Image / Placeholder */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <FolderOpen size={48} className="text-primary-400/40" />
                    </div>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
                      <Eye size={16} />
                      Voir le projet
                    </span>
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white">
                      Featured
                    </span>
                  )}
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-medium rounded-full bg-black/40 text-white backdrop-blur-sm">
                    {categoryLabels[project.category]}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-lg font-semibold text-surface-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-surface-700 dark:text-surface-200 leading-relaxed mb-4 flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-medium rounded-md bg-surface-100 dark:bg-white/10 text-surface-700 dark:text-surface-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-primary-500/10 text-primary-500">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-3 border-t border-surface-200 dark:border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-sm font-medium text-surface-700 dark:text-surface-200 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
