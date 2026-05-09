import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const loadingTexts = [
  'Building world...',
  'Loading chunks...',
  'Spawning projects...',
  'Initializing skills...',
  'Ready to explore!',
];

export function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setTextIndex(prev => {
        if (prev >= loadingTexts.length - 1) {
          clearInterval(textInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(textInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(onComplete, 500);
      }, 300);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Minecraft-style block icon */}
            <div className="relative w-16 h-16">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-mc-grass border-4 border-mc-grass/80 shadow-pixel" 
                     style={{ transform: 'translateZ(8px)' }} />
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.p
              key={textIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-pixel text-xs text-pixel-accent"
            >
              {loadingTexts[textIndex]}
            </motion.p>

            {/* Progress bar */}
            <div className="loading-bar">
              <motion.div
                className="loading-bar-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Progress percentage */}
            <p className="font-pixel text-[10px] text-pixel-text-light/60 dark:text-pixel-text-dark/60">
              {progress}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
