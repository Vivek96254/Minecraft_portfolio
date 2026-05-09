import React from 'react';
import { motion } from 'framer-motion';
import { BookIcon, HeartIcon, DiamondIcon } from '../icons/MinecraftIcons';

export function About() {
  const highlights = [
    {
      icon: 'code',
      title: 'Systems Builder',
      description: 'I love designing and building systems that work reliably at scale. Real-time features, clean APIs, and robust backends are my playground.',
    },
    {
      icon: 'book',
      title: 'Continuous Learner',
      description: 'A polymath mindset drives me to explore diverse domains—from low-level optimizations to high-level architecture patterns.',
    },
    {
      icon: 'heart',
      title: 'Craft Enthusiast',
      description: 'Performance matters. Clean code matters. User experience matters. I care about the details that make software delightful.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookIcon className="w-8 h-8" />
            <h2 className="section-title mb-0">About Me</h2>
            <BookIcon className="w-8 h-8" />
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pixel-card p-6 md:p-10 mb-12"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed mb-6 text-pixel-text-light/80 dark:text-pixel-text-dark/80">
              Hey there! I'm <span className="text-pixel-accent font-semibold">Vivek</span>, a Software Engineer 
              passionate about building real-world systems that make a difference.
            </p>
            
            <p className="text-pixel-text-light/70 dark:text-pixel-text-dark/70 leading-relaxed mb-6">
              My journey in tech has been driven by curiosity and a love for solving complex problems. 
              Whether it's architecting real-time multiplayer systems, designing clean APIs, or crafting 
              intuitive user interfaces—I find joy in the entire spectrum of software development.
            </p>

            <p className="text-pixel-text-light/70 dark:text-pixel-text-dark/70 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, 
              or diving deep into topics that pique my curiosity. I believe in continuous learning and 
              applying that knowledge to build better software.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t-4 border-pixel-border-light dark:border-pixel-border-dark">
            {[
              { label: 'Experience', value: '3+', suffix: 'years' },
              { label: 'Projects', value: '20+', suffix: 'built' },
              { label: 'Technologies', value: '15+', suffix: 'mastered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="font-pixel text-lg md:text-xl text-pixel-accent">
                  {stat.value}
                </div>
                <div className="text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
                  {stat.suffix}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="pixel-card p-6 text-center"
            >
              <div className="inventory-slot mx-auto mb-4">
                {item.icon === 'book' && <BookIcon className="w-8 h-8" />}
                {item.icon === 'heart' && <HeartIcon className="w-8 h-8" />}
                {item.icon === 'code' && <DiamondIcon className="w-8 h-8" />}
              </div>
              <h3 className="font-pixel text-[10px] text-pixel-accent mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-pixel-text-light/70 dark:text-pixel-text-dark/70">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <blockquote className="pixel-card p-6 inline-block">
            <p className="font-pixel text-xs text-pixel-accent italic">
              "Good code is its own best documentation."
            </p>
            <footer className="mt-2 text-sm text-pixel-text-light/50 dark:text-pixel-text-dark/50">
              — Steve McConnell
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
