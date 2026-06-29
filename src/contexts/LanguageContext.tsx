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
    'hero.role3': 'Desenvolvimento de Sistemas em PHP',
    'hero.cta': 'Ver Projetos',
    'hero.scroll': 'Role para explorar',

    'about.title': 'Sobre Mim',
    'about.description': 'Estudante de Engenharia de Computação no IFSULDEMINAS, com interesse em inteligência artificial, desenvolvimento web e engenharia de software. Busco desenvolver soluções bem estruturadas, escaláveis e de fácil manutenção, aplicando boas práticas de desenvolvimento e mantendo um processo constante de aprendizado.',
    'about.journey': 'Valorizo a resolução de problemas, a organização do código e a construção de aplicações que entreguem valor e proporcionem uma boa experiência aos usuários.',
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
    'projects.academic': 'Projetos Acadêmicos',
    'projects.personal': 'Projetos Pessoais',
    'projects.in_progress': 'Em Desenvolvimento',
    'projects.view_code': 'Ver Código',
    'projects.view_demo': 'Ver Demo',
    'projects.dinamica.description': 'Projeto desenvolvido para o processo seletivo da EJ Turing, demonstrando habilidades em desenvolvimento web e design responsivo.',
    'projects.dinamica.impact': 'Aprovado com destaque no processo seletivo',
    'projects.library.title': 'Sistema de Gestão de Biblioteca',
    'projects.library.description': 'Sistema completo para gerenciamento de biblioteca com funcionalidades de cadastro, empréstimo e devolução de livros.',
    'projects.library.impact': 'Otimização do processo de gestão da biblioteca',
    'projects.weather1.title': 'App de Previsão do Clima',
    'projects.weather1.description': 'Aplicação web que fornece informações meteorológicas em tempo real usando a API OpenWeather com interface intuitiva.',
    'projects.weather1.impact': 'Interface responsiva para consulta de condições climáticas',
    'projects.weather2.title': 'Análise de Dados Climáticos',
    'projects.weather2.description': 'Aplicação desenvolvida com Vite e TypeScript que exibe análises detalhadas de dados meteorológicos.',
    'projects.weather2.impact': 'Dashboard moderno para visualização de dados climáticos',
    'projects.wine.title': 'Predição de Qualidade de Vinhos',
    'projects.wine.description': 'Sistema de machine learning para prever qualidade de vinhos usando dataset UCI, com pipeline de pré-processamento e comparação de modelos.',
    'projects.wine.impact': 'Implementado em Python com Pandas, Scikit-learn e PyQt5',
    'projects.todo.title': 'To-Do List Mobile',
    'projects.todo.description': 'App mobile para gerenciamento de tarefas com CRUD local via AsyncStorage, temas dinâmicos e estatísticas de progresso.',
    'projects.todo.impact': 'Desenvolvido em React Native com Expo',
    'projects.compiler.title': 'Compilador SIMPLES',
    'projects.compiler.description': 'Compilador para linguagem SIMPLES que gera código C, com análise léxica, sintática e suporte a variáveis, arrays e estruturas de controle.',
    'projects.compiler.impact': 'Desenvolvido em Java 17 com JFlex e CUP',
    'projects.pon_calc.title': 'Calculadora PON',
    'projects.pon_calc.description': 'Aplicativo desktop para dimensionamento de redes ópticas passivas com cálculos de orçamento de potência e geração de relatórios.',
    'projects.pon_calc.impact': 'Python com PyQt5 e Matplotlib',
    'projects.proposal.title': 'Pedido de Casamento Digital',
    'projects.proposal.description': 'Proposta de casamento digital interativa com coração pulsante, botão "Não" evasivo, confetes e mensagens românticas.',
    'projects.proposal.impact': 'HTML5, CSS3, JavaScript e Canvas Confetti',
    'projects.pon_sim.title': 'Simulador PON',
    'projects.pon_sim.description': 'Simulador web interativo de redes PON com animações de fluxo de dados, parâmetros configuráveis e métricas em tempo real.',
    'projects.pon_sim.impact': 'React, TypeScript e Tailwind CSS',
    'projects.current_category': 'Visualizando:',
    'projects.click_to_filter': 'Clique para filtrar',

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
    'projects.academic': 'Academic Projects',
    'projects.personal': 'Personal Projects',
    'projects.in_progress': 'In Progress',
    'projects.view_code': 'View Code',
    'projects.view_demo': 'View Demo',
    'projects.dinamica.description': 'Project developed for EJ Turing\'s selection process, demonstrating web development and responsive design skills.',
    'projects.dinamica.impact': 'Approved with distinction in the selection process',
    'projects.library.title': 'Library Management System',
    'projects.library.description': 'Complete library management system with registration, lending, and return functionalities.',
    'projects.library.impact': 'Optimized library management process',
    'projects.weather1.title': 'Weather Forecast App',
    'projects.weather1.description': 'Web application that provides real-time weather information using the OpenWeather API with intuitive interface.',
    'projects.weather1.impact': 'Responsive interface for weather conditions',
    'projects.weather2.title': 'Climate Data Analysis',
    'projects.weather2.description': 'Application developed with Vite and TypeScript displaying detailed weather data analysis.',
    'projects.weather2.impact': 'Modern dashboard for climate data visualization',
    'projects.wine.title': 'Wine Quality Prediction',
    'projects.wine.description': 'Machine learning system to predict wine quality using UCI dataset, with preprocessing pipeline and model comparison.',
    'projects.wine.impact': 'Implemented in Python with Pandas, Scikit-learn and PyQt5',
    'projects.todo.title': 'Mobile To-Do List',
    'projects.todo.description': 'Mobile app for task management with local CRUD via AsyncStorage, dynamic themes and progress statistics.',
    'projects.todo.impact': 'Developed in React Native with Expo',
    'projects.compiler.title': 'SIMPLES Compiler',
    'projects.compiler.description': 'Compiler for SIMPLES language that generates C code, with lexical and syntactic analysis and support for variables, arrays and control structures.',
    'projects.compiler.impact': 'Developed in Java 17 with JFlex and CUP',
    'projects.pon_calc.title': 'PON Calculator',
    'projects.pon_calc.description': 'Desktop application for passive optical network dimensioning with power budget calculations and report generation.',
    'projects.pon_calc.impact': 'Python with PyQt5 and Matplotlib',
    'projects.proposal.title': 'Digital Marriage Proposal',
    'projects.proposal.description': 'Interactive digital marriage proposal with pulsating heart, evasive "No" button, confetti and romantic messages.',
    'projects.proposal.impact': 'HTML5, CSS3, JavaScript and Canvas Confetti',
    'projects.pon_sim.title': 'PON Simulator',
    'projects.pon_sim.description': 'Interactive web simulator for PON networks with data flow animations, configurable parameters and real-time metrics.',
    'projects.pon_sim.impact': 'React, TypeScript and Tailwind CSS',
    'projects.current_category': 'Viewing:',
    'projects.click_to_filter': 'Click to filter',

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