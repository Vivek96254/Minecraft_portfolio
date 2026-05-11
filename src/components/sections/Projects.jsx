import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, ArrowRight } from 'lucide-react';
import { useGitHub } from '../../hooks/useGitHub';
import { FEATURED_PROJECTS, OTHER_PROJECTS, SOCIAL_LINKS } from '../../utils/constants';
import { ChestIcon, RedstoneIcon, DiamondIcon, GrassIcon } from '../icons/MinecraftIcons';

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
};

const heroIcons = [RedstoneIcon, GrassIcon];

function FeaturedProjectCard({ project, index }) {
  const IconComponent = heroIcons[index % heroIcons.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="pixel-card p-6 md:p-8 relative overflow-hidden"
      aria-label={`Featured project: ${project.name}`}
    >
      <div className="absolute top-0 right-0 bg-mc-gold text-pixel-bg-dark font-pixel text-[8px] px-3 py-1">
        ⭐ FEATURED
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="shrink-0">
          <motion.div
            className="inventory-slot w-20 h-20 md:w-24 md:h-24"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                '0 0 16px rgba(252,220,0,0.25)',
                '0 0 28px rgba(252,220,0,0.45)',
                '0 0 16px rgba(252,220,0,0.25)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            aria-hidden="true"
          >
            <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
          </motion.div>
        </div>

        <div className="flex-grow">
          <h3 className="font-pixel text-sm md:text-base mb-3 text-mc-gold leading-relaxed">
            {project.name}
          </h3>

          <p className="text-sm text-pixel-text-light/75 dark:text-pixel-text-dark/75 mb-5 leading-relaxed">
            {project.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5" aria-label="Key features">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm">
                <span className="w-2 h-2 bg-pixel-accent mt-1.5 shrink-0" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-5" aria-label="Tech stack">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium bg-pixel-accent/10 border-2 border-pixel-accent/30 text-pixel-accent"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-btn text-xs flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label={`View ${project.name} source code on GitHub (opens in new tab)`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden="true" />
              Source Code
            </motion.a>
            {project.live ? (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary text-xs flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`View ${project.name} live demo (opens in new tab)`}
              >
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                Live Demo
              </motion.a>
            ) : (
              <span className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-pixel
                               border-2 border-pixel-border-light dark:border-pixel-border-dark
                               text-pixel-text-light/50 dark:text-pixel-text-dark/50">
                Source Only
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function OtherProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="pixel-card p-5 flex flex-col h-full"
      aria-label={`Project: ${project.name}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="inventory-slot w-10 h-10 shrink-0" aria-hidden="true">
          <DiamondIcon className="w-5 h-5" />
        </div>
        <h3 className="font-semibold text-sm leading-snug pt-1">{project.name}</h3>
      </div>

      <p className="text-xs text-pixel-text-light/70 dark:text-pixel-text-dark/70 mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1 mb-4" aria-label="Tech stack">
        {project.tech.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] bg-pixel-accent/10 border border-pixel-accent/20 text-pixel-accent"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-0.5 text-[10px] text-pixel-text-light/40 dark:text-pixel-text-dark/40">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t-2 border-pixel-border-light dark:border-pixel-border-dark">
        {project.live ? (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60 hover:text-pixel-accent transition-colors"
            whileHover={{ x: 1 }}
            aria-label={`Live demo for ${project.name} (opens in new tab)`}
          >
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
            Demo
          </motion.a>
        ) : (
          <span className="text-[10px] text-pixel-text-light/35 dark:text-pixel-text-dark/35">
            Source only
          </span>
        )}
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-pixel-accent hover:text-pixel-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
          whileHover={{ x: 2 }}
          aria-label={`View ${project.name} on GitHub (opens in new tab)`}
        >
          <Github className="w-3 h-3" aria-hidden="true" />
          View
        </motion.a>
      </div>
    </motion.article>
  );
}

function GithubRepoCard({ repo, index }) {
  const langColor = languageColors[repo.language] ?? '#7B7B7B';

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="pixel-card p-5 flex flex-col h-full"
      aria-label={`Repository: ${repo.name}`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="inventory-slot w-11 h-11 shrink-0" aria-hidden="true">
          <ChestIcon className="w-5 h-5" />
        </div>
        <div className="flex-grow min-w-0">
          <h3 className="font-semibold text-sm truncate mb-1">{repo.name}</h3>
          {repo.language && (
            <div className="flex items-center gap-1.5 text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: langColor }} aria-hidden="true" />
              {repo.language}
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-pixel-text-light/70 dark:text-pixel-text-dark/70 mb-3 flex-grow line-clamp-3 leading-relaxed">
        {repo.description}
      </p>

      {repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3" aria-label="Topics">
          {repo.topics.slice(0, 3).map((topic) => (
            <span key={topic} className="px-2 py-0.5 text-[10px] bg-pixel-accent/10 border border-pixel-accent/20 text-pixel-accent">
              {topic}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t-2 border-pixel-border-light dark:border-pixel-border-dark">
        <div className="flex items-center gap-3 text-xs text-pixel-text-light/55 dark:text-pixel-text-dark/55">
          {repo.stars > 0 && (
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3" aria-hidden="true" />
              <span aria-label={`${repo.stars} stars`}>{repo.stars}</span>
            </span>
          )}
          {repo.forks > 0 && (
            <span className="flex items-center gap-1">
              <GitFork className="w-3 h-3" aria-hidden="true" />
              <span aria-label={`${repo.forks} forks`}>{repo.forks}</span>
            </span>
          )}
        </div>
        <motion.a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs text-pixel-accent hover:text-pixel-accent-hover transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-pixel-accent"
          whileHover={{ x: 2 }}
          aria-label={`View ${repo.name} on GitHub (opens in new tab)`}
        >
          <Github className="w-3 h-3" aria-hidden="true" />
          View
        </motion.a>
      </div>
    </motion.article>
  );
}

function LoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading repositories">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="pixel-card p-5 animate-pulse">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-11 h-11 bg-pixel-border-light dark:bg-pixel-border-dark" />
            <div className="flex-grow">
              <div className="h-3.5 bg-pixel-border-light dark:bg-pixel-border-dark mb-2 w-2/3" />
              <div className="h-2.5 bg-pixel-border-light dark:bg-pixel-border-dark w-1/3" />
            </div>
          </div>
          <div className="h-10 bg-pixel-border-light dark:bg-pixel-border-dark mb-4" />
          <div className="h-6 bg-pixel-border-light dark:bg-pixel-border-dark" />
        </div>
      ))}
    </div>
  );
}

export function Projects() {
  const { repos, loading, error } = useGitHub();

  return (
    <section id="projects" className="py-20 md:py-32 relative" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <DiamondIcon className="w-8 h-8" aria-hidden="true" />
            <h2 className="section-title mb-0">Projects</h2>
            <DiamondIcon className="w-8 h-8" aria-hidden="true" />
          </div>
          <p className="text-pixel-text-light/65 dark:text-pixel-text-dark/65 max-w-2xl mx-auto">
            Things I've built, shipped, and learned from. Each project is a snapshot of a problem worth solving.
          </p>
        </motion.div>

        {/* Hero Featured Projects */}
        <div className="space-y-6 mb-16" aria-label="Featured projects">
          {FEATURED_PROJECTS.map((project, index) => (
            <FeaturedProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Highlighted Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-pixel text-xs mb-6 flex items-center gap-2">
            <DiamondIcon className="w-5 h-5" aria-hidden="true" />
            Also Built
          </h3>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch"
            aria-label="Other highlighted projects"
          >
            {OTHER_PROJECTS.map((project, index) => (
              <OtherProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* GitHub Repos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-pixel text-xs mb-6 flex items-center gap-2">
            <ChestIcon className="w-5 h-5" aria-hidden="true" />
            From GitHub
          </h3>

          {loading && <LoadingSkeleton />}

          {error && !loading && (
            <div className="pixel-card p-8 text-center" role="alert">
              <p className="text-mc-redstone mb-2 font-medium">Could not load repositories</p>
              <p className="text-sm text-pixel-text-light/60 dark:text-pixel-text-dark/60">{error}</p>
            </div>
          )}

          {!loading && !error && repos.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {repos.map((repo, index) => (
                <GithubRepoCard key={repo.id} repo={repo} index={index} />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-pixel-accent
                         text-pixel-accent hover:bg-pixel-accent hover:text-white
                         font-pixel text-[10px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pixel-accent"
              aria-label="View all repositories on GitHub (opens in new tab)"
            >
              View All on GitHub
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
