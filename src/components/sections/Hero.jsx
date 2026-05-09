import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowDown, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';
import { SwordIcon, DiamondIcon } from '../icons/MinecraftIcons';

export function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pixel-pattern dark:bg-pixel-pattern-dark opacity-50" />
      
      {/* Floating blocks decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-pixel-accent/20 border-2 border-pixel-accent/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Photo / Avatar Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Pixel border frame */}
              <div className="absolute inset-0 border-8 border-pixel-border-light dark:border-pixel-border-dark 
                            bg-pixel-card-light dark:bg-pixel-card-dark shadow-pixel">
                {/* Placeholder for photo - you can replace with actual image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br 
                              from-pixel-accent/20 to-mc-diamond/20">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <SwordIcon className="w-20 h-20 md:w-24 md:h-24" />
                  </motion.div>
                </div>
                {/* Add your actual photo here:
                <img 
                  src="/your-photo.jpg" 
                  alt="Vivek" 
                  className="w-full h-full object-cover"
                /> 
                */}
              </div>
              
              {/* Decorative corner blocks */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-pixel-accent" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-pixel-accent" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pixel-accent" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pixel-accent" />
            </div>

            {/* Floating diamond decoration */}
            <motion.div
              className="absolute -right-4 -top-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <DiamondIcon className="w-8 h-8" />
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="font-pixel text-xs text-pixel-accent mb-2 block">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-pixel text-3xl md:text-4xl lg:text-5xl mb-4 pixel-text-shadow"
            >
              Vivek
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-semibold text-pixel-accent mb-6"
            >
              Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-pixel-text-light/70 dark:text-pixel-text-dark/70 max-w-lg mb-8"
            >
              Building real-time systems, clean UX, and scalable products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="#projects"
                className="pixel-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pixel-btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </motion.a>

              <motion.a
                href="#contact"
                className="pixel-btn-secondary flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-4 h-4" />
                Contact
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-pixel-accent/60" />
        </motion.div>
      </div>
    </section>
  );
}
