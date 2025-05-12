import React, { createContext, useContext, useState } from 'react';

type Language = 'pt-BR' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  'pt-BR': {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.title': 'Alessandro Augusto',
    'hero.role1': 'Desenvolvedor Full Stack',
    'hero.role2': 'Estudante de Engenharia de Computação',
    'hero.role3': 'Membro da EJ Turing',
    'hero.cta': 'Ver Projetos',
    'hero.scroll': 'Role para explorar',
    
    'about.title': 'Sobre Mim',
    'about.description': 'Estudante de Engenharia de Computação no IFSULDEMINAS, apaixonado por desenvolvimento de software e inovação tecnológica. Atualmente, faço parte da EJ Turing, onde desenvolvo soluções web para diversos clientes.',
    'about.journey': 'Minha jornada na tecnologia é movida pela busca constante de conhecimento e pela paixão em criar soluções que fazem a diferença.',
    'about.image_alt': 'Alessandro Augusto - Cartoon',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.database': 'Banco de Dados',
    'about.skills.others': 'Outros',
    'about.metrics.projects': 'Projetos Concluídos',
    'about.metrics.technologies': 'Tecnologias Dominadas',
    'about.metrics.clients': 'Clientes Atendidos',
    'about.metrics.experience': 'Anos de Experiência',
    'about.timeline.title': 'Minha Jornada',
    'about.timeline.university': 'IFSULDEMINAS',
    'about.timeline.university_desc': 'Início da graduação em Engenharia de Computação',
    'about.timeline.ejturing': 'EJ Turing',
    'about.timeline.ejturing_desc': 'Ingresso na Empresa Júnior como desenvolvedor',
    'about.timeline.freelance': 'Freelancer',
    'about.timeline.freelance_desc': 'Início dos trabalhos como desenvolvedor freelancer',
    
    'projects.title': 'Projetos',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi durante minha jornada',
    'projects.in_progress': 'Em Desenvolvimento',
    'projects.view_code': 'Ver Código',
    'projects.view_demo': 'Ver Demo',
    'projects.dinamica.description': 'Projeto desenvolvido para o processo seletivo da EJ Turing, demonstrando habilidades em desenvolvimento web e design responsivo.',
    'projects.dinamica.impact': 'Aprovado com destaque no processo seletivo',
    'projects.library.title': 'Sistema de Gestão de Biblioteca',
    'projects.library.description': 'Sistema completo para gerenciamento de biblioteca com funcionalidades de cadastro, empréstimo e devolução de livros.',
    'projects.library.impact': 'Otimização do processo de gestão da biblioteca',
    'projects.weather1.title': 'Clima com OpenWeather',
    'projects.weather1.description': 'Aplicação web que fornece informações meteorológicas em tempo real usando a API OpenWeather.',
    'projects.weather1.impact': 'Interface intuitiva para consulta de condições climáticas',
    'projects.weather2.title': 'Clima com WeatherAPI',
    'projects.weather2.description': 'Aplicação desenvolvida com Vite e TypeScript que exibe dados meteorológicos detalhados.',
    'projects.weather2.impact': 'Experiência moderna e responsiva para previsão do tempo',
    
    'contact.title': 'Contato',
    'contact.subtitle': 'Vamos conversar sobre seu próximo projeto?',
    'contact.info': 'Informações de Contato',
    'contact.name': 'Nome',
    'contact.email': 'Email',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar Mensagem',
    'contact.available': 'Disponível para projetos freelance',
    'contact.location': 'Poços de Caldas, MG - Brasil',
    'contact.social': 'Redes Sociais',
    'contact.documents': 'Documentos',
    'contact.cv': 'Baixar Currículo',
    'contact.lattes': 'Currículo Lattes',
  },
  'en': {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Alessandro Augusto',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'Computer Engineering Student',
    'hero.role3': 'EJ Turing Member',
    'hero.cta': 'View Projects',
    'hero.scroll': 'Scroll to explore',
    
    'about.title': 'About Me',
    'about.description': 'Computer Engineering student at IFSULDEMINAS, passionate about software development and technological innovation. Currently, I am part of EJ Turing, where I develop web solutions for various clients.',
    'about.journey': 'My journey in technology is driven by the constant pursuit of knowledge and the passion for creating solutions that make a difference.',
    'about.image_alt': 'Alessandro Augusto - Cartoon',
    'about.skills.frontend': 'Frontend',
    'about.skills.backend': 'Backend',
    'about.skills.database': 'Database',
    'about.skills.others': 'Others',
    'about.metrics.projects': 'Completed Projects',
    'about.metrics.technologies': 'Core Technologies',
    'about.metrics.clients': 'Clients Served',
    'about.metrics.experience': 'Years Experience',
    'about.timeline.title': 'My Journey',
    'about.timeline.university': 'IFSULDEMINAS',
    'about.timeline.university_desc': 'Started Computer Engineering degree',
    'about.timeline.ejturing': 'EJ Turing',
    'about.timeline.ejturing_desc': 'Joined the Junior Enterprise as a developer',
    'about.timeline.freelance': 'Freelancer',
    'about.timeline.freelance_desc': 'Started working as a freelance developer',
    
    'projects.title': 'Projects',
    'projects.subtitle': 'Some of the projects I developed during my journey',
    'projects.in_progress': 'In Progress',
    'projects.view_code': 'View Code',
    'projects.view_demo': 'View Demo',
    'projects.dinamica.description': 'Project developed for EJ Turing\'s selection process, demonstrating web development and responsive design skills.',
    'projects.dinamica.impact': 'Approved with distinction in the selection process',
    'projects.library.title': 'Library Management System',
    'projects.library.description': 'Complete library management system with registration, lending, and return functionalities.',
    'projects.library.impact': 'Optimized library management process',
    'projects.weather1.title': 'Weather with OpenWeather',
    'projects.weather1.description': 'Web application that provides real-time weather information using the OpenWeather API.',
    'projects.weather1.impact': 'Intuitive interface for weather conditions',
    'projects.weather2.title': 'Weather with WeatherAPI',
    'projects.weather2.description': 'Application developed with Vite and TypeScript displaying detailed weather data.',
    'projects.weather2.impact': 'Modern and responsive weather forecast experience',
    
    'contact.title': 'Contact',
    'contact.subtitle': 'Let\'s talk about your next project?',
    'contact.info': 'Contact Information',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.available': 'Available for freelance projects',
    'contact.location': 'Poços de Caldas, MG - Brazil',
    'contact.social': 'Social Media',
    'contact.documents': 'Documents',
    'contact.cv': 'Download CV',
    'contact.lattes': 'Lattes CV',
  }
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt-BR');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt-BR']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};