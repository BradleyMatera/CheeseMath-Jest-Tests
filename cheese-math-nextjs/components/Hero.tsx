'use client';

import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const scrollToCalculators = () => {
    document.getElementById('basic')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-secondary-500/20 to-purple-500/20 dark:from-primary-900/30 dark:via-secondary-900/30 dark:to-purple-900/30" />
      
      {/* Animated circles */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 backdrop-blur-sm"
          >
            <SparklesIcon className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              Next.js 16 • TypeScript • NextUI
            </span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-primary-500 via-secondary-500 to-purple-500 bg-clip-text text-transparent">
                CheeseMath
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/80">
              Advanced Calculator Suite
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/60 leading-relaxed">
            A modern, feature-rich calculator application combining basic arithmetic,
            advanced string operations, regex analysis, and secure credit card handling—all
            powered by beautiful animations and a delightful user experience.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              onPress={scrollToCalculators}
              endContent={<ArrowDownIcon className="w-5 h-5" />}
              className="font-semibold text-lg px-8"
            >
              Start Calculating
            </Button>
            <Button
              size="lg"
              variant="bordered"
              onPress={() => window.open('https://github.com/BradleyMatera/CheeseMath-Jest-Tests', '_blank')}
              className="font-semibold text-lg px-8"
            >
              View on GitHub
            </Button>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-3 justify-center pt-8"
          >
            {[
              { emoji: '🧮', label: 'Basic Math' },
              { emoji: '⚡', label: 'Advanced Ops' },
              { emoji: '🔍', label: 'Regex' },
              { emoji: '💳', label: 'Card Security' },
              { emoji: '🎨', label: 'Animations' },
              { emoji: '🌓', label: 'Dark Mode' },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-divider hover:border-primary-500 transition-colors cursor-default"
              >
                <span className="text-xl">{feature.emoji}</span>
                <span className="text-sm font-medium">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDownIcon className="w-6 h-6 text-foreground/40" />
      </motion.div>
    </section>
  );
}
