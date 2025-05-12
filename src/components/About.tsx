import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Server, Award, BookOpen, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import cartoonImage from '../assets/cartoon.png';

const About = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: t('about.skills.frontend'), icon: <Globe className="w-6 h-6" />, items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { name: t('about.skills.backend'), icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'PHP', 'Laravel'] },
    { name: t('about.skills.database'), icon: <Database className="w-6 h-6" />, items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { name: t('about.skills.others'), icon: <Code2 className="w-6 h-6" />, items: ['Git', 'Docker', 'Linux', 'AWS'] },
  ];

  const metrics = [
    { icon: <Award className="w-6 h-6" />, value: '10+', label: t('about.metrics.projects') },
    { icon: <BookOpen className="w-6 h-6" />, value: '5+', label: t('about.metrics.technologies') },
    { icon: <Users className="w-6 h-6" />, value: '3+', label: t('about.metrics.clients') },
    { icon: <Briefcase className="w-6 h-6" />, value: '1+', label: t('about.metrics.experience') },
  ];

  const timeline = [
    {
      year: '2022',
      title: t('about.timeline.university'),
      description: t('about.timeline.university_desc'),
    },
    {
      year: '2025',
      title: t('about.timeline.ejturing'),
      description: t('about.timeline.ejturing_desc'),
    },
    {
      year: '2025',
      title: t('about.timeline.freelance'),
      description: t('about.timeline.freelance_desc'),
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
    hidden: { opacity: 0, y: 20 },
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-6"
            >
              {t('about.description')}
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300"
            >
              {t('about.journey')}
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-primary-dark dark:text-primary-light mb-2 flex justify-center"
                  >
                    {metric.icon}
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="text-2xl font-bold text-gray-900 dark:text-white mb-1"
                  >
                    {metric.value}
                  </motion.div>
                  <motion.div
                    variants={itemVariants}
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    {metric.label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={inView ? {
                rotate: [0, 3, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              } : {}}
              className="relative w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-50/20 to-purple-50/20 dark:from-blue-900/10 dark:to-purple-900/10 transform rotate-3" />
              <img
                src={cartoonImage}
                alt={t('about.image_alt')}
                className="relative z-10 w-full h-auto rounded-lg shadow-xl bg-transparent"
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))'
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg transform transition-all duration-300"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center mb-4 text-primary-dark dark:text-primary-light"
              >
                {skill.icon}
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-gray-900 dark:text-white mb-4"
              >
                {skill.name}
              </motion.h3>
              <motion.ul
                variants={containerVariants}
                className="space-y-2"
              >
                {skill.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
          >
            {t('about.timeline.title')}
          </motion.h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-dark dark:bg-primary-light opacity-20"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-end' : ''} mb-8`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                      transition={{ delay: index * 0.3 }}
                      className="text-primary-dark dark:text-primary-light font-bold mb-2"
                    >
                      {item.year}
                    </motion.div>
                    <motion.h4
                      variants={itemVariants}
                      className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      {item.title}
                    </motion.h4>
                    <motion.p
                      variants={itemVariants}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ delay: index * 0.4 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-dark dark:bg-primary-light rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;