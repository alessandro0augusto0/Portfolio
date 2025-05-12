import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const tagColors = {
    React: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'Tailwind CSS': 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
    PHP: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    MySQL: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    JavaScript: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    HTML: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    CSS: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    Vite: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
  };

  const projects = [
    {
      title: 'Dinâmica EJ Turing',
      description: t('projects.dinamica.description'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/alessandro0augusto0/Dinamica-EJ-Turing',
      demo: 'https://dinamica-ej-turing.vercel.app/',
      status: 'completed',
      impact: t('projects.dinamica.impact'),
    },
    {
      title: t('projects.library.title'),
      description: t('projects.library.description'),
      image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/alessandro0augusto0/Gerenciamento-de-Biblioteca-com-MySQL',
      demo: '#',
      status: 'completed',
      impact: t('projects.library.impact'),
    },
    {
      title: t('projects.weather1.title'),
      description: t('projects.weather1.description'),
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'JavaScript', 'CSS'],
      github: '#',
      demo: 'https://clima-com-open-weather-map-api.vercel.app/',
      status: 'completed',
      impact: t('projects.weather1.impact'),
    },
    {
      title: t('projects.weather2.title'),
      description: t('projects.weather2.description'),
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Vite', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
      github: '#',
      demo: 'https://clima-com-weather-api.vercel.app/',
      status: 'completed',
      impact: t('projects.weather2.impact'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <div className="relative">
                <motion.img
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {project.status === 'in_progress' && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white rounded-full text-sm font-medium"
                  >
                    {t('projects.in_progress')}
                  </motion.div>
                )}
              </div>
              <motion.div
                variants={itemVariants}
                className="p-6"
              >
                <motion.h3
                  variants={itemVariants}
                  className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 dark:text-gray-300 mb-4"
                >
                  {project.description}
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-sm text-gray-500 dark:text-gray-400 mb-4 italic"
                >
                  {project.impact}
                </motion.p>
                <motion.div
                  variants={containerVariants}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {project.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      className={`px-3 py-1 rounded-full text-sm ${tagColors[tag] || 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.div
                  variants={containerVariants}
                  className="flex space-x-4"
                >
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      {t('projects.view_code')}
                    </motion.a>
                  )}
                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {t('projects.view_demo')}
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;