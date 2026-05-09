import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useGitHub } from '../../hooks/useGitHub';
import { FEATURED_PROJECT } from '../../utils/constants';
import { ChestIcon, RedstoneIcon, DiamondIcon } from '../icons/MinecraftIcons';

// Language color mapping
const languageColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3776AB',
  Java: '#ED8B00',
  'C++': '#00599C',
  Go: '#00ADD8',
  Rust: '#DEA584',
  HTML: '#E34F26',
  CSS: '#1572B6',
  default: '#7B7B7B',
};

function FeaturedProjectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pixel-card p-6 md:p-8 mb-12 relative overflow-hidden"
    >
      {/* Featured badge */}
      <div className="absolute top-0 right-0 bg-mc-gold text-pixel-bg-dark font-pixel text-[8px] 
                    px-3 py-1 transform rotate-0">
        ⭐ FEATURED
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Icon */}
        <div className="flex-shrink-0">
          <motion.div
            className="inventory-slot w-24 h-24 md:w-32 md:h-32"
            whileHover={{ scale: 1.05 }}
            animate={{ boxShadow: ['0 0 20px rgba(252, 220, 0, 0.3)', '0 0 30px rgba(252, 220, 0, 0.5)', '0 0 20px rgba(252, 220, 0, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <RedstoneIcon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="font-pixel text-base md:text-lg mb-3 text-mc-gold">
            {FEATURED_PROJECT.name}
          </h3>
          
          <p className="text-pixel-text-light/70 dark:text-pixel-text-dark/70 mb-4">
            {FEATURED_PROJECT.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {FEATURED_PROJECT.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 text-sm"
              >
                <span className="w-2 h-2 bg-pixel-accent" />
                {feature}
              </motion.div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {FEATURED_PROJECT.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-pixel-accent/10 
                         border-2 border-pixel-accent/30 text-pixel-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={FEATURED_PROJECT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn text-xs flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-4 h-4" />
              View Code
            </motion.a>
            {FEATURED_PROJECT.live && (
              <motion.a
                href={FEATURED_PROJECT.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary text-xs flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ repo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="pixel-card p-5 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="inventory-slot w-12 h-12 flex-shrink-0">
          <ChestIcon className="w-6 h-6" />
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-base truncate mb-1">
            {repo.name}
          </h3>
          {repo.language && (
            <div className="flex items-center gap-2 text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: languageColors[repo.language] || languageColors.default }}
              />
              {repo.language}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70 mb-4 flex-grow line-clamp-3">
        {repo.description}
      </p>

      {/* Topics */}
      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-0.5 text-[10px] bg-pixel-accent/10 border border-pixel-accent/20 text-pixel-accent"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Stats & Link */}
      <div className="flex items-center justify-between pt-4 border-t-2 border-pixel-border-light dark:border-pixel-border-dark">
        <div className="flex items-center gap-4 text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
          {repo.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              {repo.stars}
            </span>
          )}
          {repo.forks > 0 && (
            <span className="flex items-center gap-1">
              <GitFork className="w-3 h-3" />
              {repo.forks}
            </span>
          )}
        </div>
        <motion.a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-pixel-accent hover:text-pixel-accent-hover transition-colors"
          whileHover={{ x: 2 }}
        >
          <Github className="w-3 h-3" />
          View
        </motion.a>
      </div>
    </motion.div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="pixel-card p-5 animate-pulse">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-pixel-border-light dark:bg-pixel-border-dark" />
            <div className="flex-grow">
              <div className="h-4 bg-pixel-border-light dark:bg-pixel-border-dark mb-2 w-2/3" />
              <div className="h-3 bg-pixel-border-light dark:bg-pixel-border-dark w-1/3" />
            </div>
          </div>
          <div className="h-12 bg-pixel-border-light dark:bg-pixel-border-dark mb-4" />
          <div className="h-8 bg-pixel-border-light dark:bg-pixel-border-dark" />
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  const { repos, loading, error } = useGitHub();

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondIcon className="w-8 h-8" />
            <h2 className="section-title mb-0">Projects</h2>
            <DiamondIcon className="w-8 h-8" />
          </div>
          <p className="text-pixel-text-light/60 dark:text-pixel-text-dark/60 max-w-2xl mx-auto">
            A collection of projects I've crafted. Each one represents hours of learning, building, and refining.
          </p>
        </motion.div>

        {/* Featured Project */}
        <FeaturedProjectCard />

        {/* GitHub Repos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-pixel text-sm mb-6 flex items-center gap-2">
            <ChestIcon className="w-5 h-5" />
            More from GitHub
          </h3>

          {loading && <LoadingSkeleton />}

          {error && (
            <div className="pixel-card p-8 text-center">
              <p className="text-mc-redstone mb-4">Failed to load repositories</p>
              <p className="text-sm text-pixel-text-light/60 dark:text-pixel-text-dark/60">
                {error}
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo, index) => (
                <ProjectCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
