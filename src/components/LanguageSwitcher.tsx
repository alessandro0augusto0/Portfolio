import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center space-x-2"
    >
      <button
        onClick={() => setLanguage('pt-BR')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'pt-BR'
            ? 'bg-primary-dark text-white'
            : 'text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light'
        }`}
      >
        PT
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${
          language === 'en'
            ? 'bg-primary-dark text-white'
            : 'text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light'
        }`}
      >
        EN
      </button>
    </motion.div>
  );
};

export default LanguageSwitcher;