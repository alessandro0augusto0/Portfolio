import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'academic' | 'personal'>('all');

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
    Python: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    'React Native': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
    Java: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    'Machine Learning': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
    PyQt5: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  };

  const academicProjects = [
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
      title: t('projects.wine.title'),
      description: t('projects.wine.description'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Machine Learning', 'PyQt5'],
      github: 'https://github.com/alessandro0augusto0/wine-quality-prediction-project',
      demo: '#',
      status: 'completed',
      impact: t('projects.wine.impact'),
    },
    {
      title: t('projects.todo.title'),
      description: t('projects.todo.description'),
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'JavaScript'],
      github: 'https://github.com/alessandro0augusto0/To-Do-List',
      demo: '#',
      status: 'completed',
      impact: t('projects.todo.impact'),
    },
    {
      title: t('projects.compiler.title'),
      description: t('projects.compiler.description'),
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Java'],
      github: 'https://github.com/alessandro0augusto0/Compilador-SIMPLES',
      demo: '#',
      status: 'completed',
      impact: t('projects.compiler.impact'),
    },
    {
      title: t('projects.pon_calc.title'),
      description: t('projects.pon_calc.description'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'PyQt5'],
      github: 'https://github.com/alessandro0augusto0/Calculadora-PON',
      demo: '#',
      status: 'completed',
      impact: t('projects.pon_calc.impact'),
    },
  ];

  const personalProjects = [
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
    {
      title: t('projects.proposal.title'),
      description: t('projects.proposal.description'),
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/alessandro0augusto0/um-pedido-especial-404-not-found',
      demo: '#',
      status: 'completed',
      impact: t('projects.proposal.impact'),
    },
    {
      title: t('projects.pon_sim.title'),
      description: t('projects.pon_sim.description'),
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/alessandro0augusto0/pon-simulator',
      demo: '#',
      status: 'completed',
      impact: t('projects.pon_sim.impact'),
    },
  ];

  const getFilteredProjects = () => {
    switch (selectedCategory) {
      case 'academic':
        return academicProjects;
      case 'personal':
        return personalProjects;
      default:
        return [...academicProjects, ...personalProjects];
    }
  };

  const filteredProjects = getFilteredProjects();
  const projectsPerPage = 2;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const startIndex = currentIndex * projectsPerPage;
    return filteredProjects.slice(startIndex, startIndex + projectsPerPage);
  };

  const handleCategoryChange = (category: 'all' | 'academic' | 'personal') => {
    setSelectedCategory(category);
    setCurrentIndex(0); // Reset to first page when changing category
  };

  const getCurrentCategoryName = () => {
    switch (selectedCategory) {
      case 'academic':
        return t('projects.academic');
      case 'personal':
        return t('projects.personal');
      default:
        return `${t('projects.academic')} + ${t('projects.personal')}`;
    }
  };

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

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
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
          {project.tags.map((tag: string) => (
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
  );

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

        {/* Category Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.button
            variants={itemVariants}
            onClick={() => handleCategoryChange('all')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-primary-dark text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            Todos os Projetos
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => handleCategoryChange('academic')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'academic'
                ? 'bg-primary-dark text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            {t('projects.academic')}
          </motion.button>
          <motion.button
            variants={itemVariants}
            onClick={() => handleCategoryChange('personal')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'personal'
                ? 'bg-secondary-dark dark:bg-secondary-light text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
          >
            {t('projects.personal')}
          </motion.button>
        </motion.div>

        {/* Current Category Indicator */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <motion.p
            className="text-lg font-medium text-gray-700 dark:text-gray-300"
            key={selectedCategory} // Force re-render on category change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-primary-dark dark:text-primary-light">
              {t('projects.current_category')}
            </span>{' '}
            {getCurrentCategoryName()}
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {totalPages > 1 && (
            <>
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>

              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </motion.button>
            </>
          )}

          {/* Projects Grid */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {getCurrentProjects().map((project, index) => (
                  <ProjectCard key={`${selectedCategory}-${currentIndex}-${index}`} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex justify-center space-x-2 mt-8"
            >
              {Array.from({ length: totalPages }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-dark dark:bg-primary-light'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </motion.div>
          )}
        </div>

        {/* Projects Count */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-8"
        >
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400"
            key={`count-${selectedCategory}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? 'projeto' : 'projetos'} 
            {selectedCategory !== 'all' && ` em ${getCurrentCategoryName()}`}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;