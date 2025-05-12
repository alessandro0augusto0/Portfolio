import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import profileImage from '../assets/profile.jpg'; // Adicionada esta linha

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-48 h-48 mx-auto mb-6 relative">
            <motion.img
              src={profileImage} // Modificada esta linha
              alt={t('hero.title')}
              className="w-full h-full object-cover rounded-full border-4 border-primary-light dark:border-primary-dark shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
            />
            <motion.div
              className="absolute -inset-4 rounded-full border-2 border-primary-light dark:border-primary-dark opacity-50"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('hero.title')}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <TypeAnimation
            sequence={[
              t('hero.role1'),
              2000,
              t('hero.role2'),
              2000,
              t('hero.role3'),
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300"
          />
        </motion.div>

        <motion.button
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary-dark hover:bg-primary-light text-white rounded-lg transition-colors duration-300 mb-16"
          onClick={() => {
            const projectsSection = document.getElementById('projects');
            projectsSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {t('hero.cta')}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="text-sm text-gray-600 dark:text-gray-400 mb-2"
          >
            {t('hero.scroll')}
          </motion.p>
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="cursor-pointer"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-8 h-8 text-gray-600 dark:text-gray-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;