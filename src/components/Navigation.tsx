import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ scale: 1.1 }}
          className={`relative px-3 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-300 ${
            activeSection === item.id ? 'text-primary-dark dark:text-primary-light' : ''
          }`}
          onClick={() => scrollToSection(item.id)}
        >
          {item.label}
          {activeSection === item.id && (
            <motion.div
              layoutId="activeSection"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-dark dark:bg-primary-light"
              initial={false}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default Navigation