import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../utils/constants';
import { getIcon, PickaxeIcon } from '../icons/MinecraftIcons';

function SkillSlot({ skill, index }) {
  const IconComponent = getIcon(skill.icon);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <motion.div
        className="inventory-slot cursor-pointer"
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <IconComponent className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:scale-110" />
        
        {/* Tooltip */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-200 pointer-events-none z-10">
          <div className="bg-pixel-bg-dark text-pixel-text-dark px-3 py-1.5 text-xs font-medium
                        whitespace-nowrap border-2 border-pixel-border-dark shadow-pixel">
            {skill.name}
          </div>
          {/* Tooltip arrow */}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-pixel-bg-dark 
                        border-l-2 border-t-2 border-pixel-border-dark transform rotate-45" />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <PickaxeIcon className="w-8 h-8" />
            <h2 className="section-title mb-0">Skills</h2>
            <PickaxeIcon className="w-8 h-8" />
          </div>
          <p className="text-pixel-text-light/60 dark:text-pixel-text-dark/60 max-w-xl mx-auto">
            My inventory of tools and technologies. Hover over each item to see what it is!
          </p>
        </motion.div>

        {/* Inventory Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pixel-card p-6 md:p-10"
        >
          {/* Inventory Header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b-4 border-pixel-border-light dark:border-pixel-border-dark">
            <span className="font-pixel text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
              Skill Inventory
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-4 md:grid-cols-6 gap-3 md:gap-4 justify-items-center">
            {SKILLS.map((skill, index) => (
              <SkillSlot key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Inventory Footer */}
          <div className="mt-6 pt-4 border-t-4 border-pixel-border-light dark:border-pixel-border-dark
                        flex items-center justify-between text-xs text-pixel-text-light/50 dark:text-pixel-text-dark/50">
            <span>{SKILLS.length} / 36 slots</span>
            <span className="font-pixel text-[8px]">Level: 99</span>
          </div>
        </motion.div>

        {/* Additional skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'Backend Mastery', items: ['Node.js', 'Express', 'REST APIs', 'GraphQL'] },
            { title: 'Frontend Craft', items: ['React', 'TypeScript', 'Tailwind', 'Next.js'] },
            { title: 'Infrastructure', items: ['Docker', 'PostgreSQL', 'Redis', 'AWS'] },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="pixel-card p-5"
            >
              <h3 className="font-pixel text-[10px] text-pixel-accent mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-pixel-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
