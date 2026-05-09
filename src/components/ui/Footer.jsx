import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GrassIcon } from '../icons/MinecraftIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-4 border-pixel-border-light dark:border-pixel-border-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <GrassIcon className="w-6 h-6" />
            <span className="font-pixel text-xs text-pixel-text-light/60 dark:text-pixel-text-dark/60">
              Vivek © {currentYear}
            </span>
          </motion.div>

          {/* Center */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-pixel-text-light/60 dark:text-pixel-text-dark/60"
          >
            Built with
            <Heart className="w-4 h-4 text-mc-redstone animate-pulse" />
            and React
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs text-pixel-text-light/40 dark:text-pixel-text-dark/40"
          >
            Minecraft-inspired design
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
