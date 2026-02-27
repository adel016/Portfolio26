import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../ui/AnimatedSection';
import SectionTitle from '../ui/SectionTitle';
import { skills, skillCategories, type Skill } from '../../data/portfolio';

const allCategories = Object.keys(skillCategories) as Skill['category'][];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'all'>('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionTitle
            id="skills-title"
            title="Compétences"
            subtitle="Technologies et outils que je maîtrise"
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
                {skillCategories[cat]}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group p-5 rounded-2xl bg-white dark:bg-white/[0.03] border border-surface-200 dark:border-white/10 hover:border-primary-400/50 dark:hover:border-primary-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
              >
                <h3 className="text-sm font-semibold text-surface-900 dark:text-white">
                  {skill.name}
                </h3>
                <p className="mt-1 text-xs text-surface-700 dark:text-surface-200">
                  {skillCategories[skill.category]}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
