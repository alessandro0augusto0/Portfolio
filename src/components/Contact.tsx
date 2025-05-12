import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageSquare, Send, MapPin, Github, Linkedin, Instagram, FileDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      url: 'https://github.com/alessandro0augusto0',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/alessandroaugusto-dev/',
    },
    {
      name: 'Instagram',
      icon: <Instagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/alessandroaugusto0/',
    },
  ];

  const documentLinks = [
    {
      name: t('contact.cv'),
      icon: <FileDown className="w-5 h-5" />,
      url: '/Curriculo_Alessandro_Oliveira.pdf',
      download: 'Curriculo_Alessandro_Oliveira.pdf'
    },
    {
      name: t('contact.lattes'),
      icon: <ExternalLink className="w-5 h-5" />,
      url: 'http://lattes.cnpq.br/1977061332240748',
      download: false,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.info')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:alessandro.guto1@gmail.com"
                  className="hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-300"
                >
                  alessandro.guto1@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MessageSquare className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{t('contact.available')}</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0" />
                <span>{t('contact.location')}</span>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.social')}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-dark dark:hover:text-primary-light transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                  {t('contact.documents')}
                </h4>
                <div className="flex flex-col space-y-3">
                  {documentLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      download={link.download || undefined}
                      target={!link.download ? "_blank" : undefined}
                      rel={!link.download ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.icon}
                      <span className="ml-2">{link.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            action="https://formsubmit.co/alessandro.guto1@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent resize-none"
              />
            </div>
            <motion.button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-white bg-primary-dark hover:bg-primary-light transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="w-5 h-5 mr-2" />
              {t('contact.send')}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;