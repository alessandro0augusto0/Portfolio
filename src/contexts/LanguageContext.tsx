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
    'about.skills.others': 'Ferramentas',
    'about.metrics.projects': 'Projetos Concluídos',
    'about.metrics.technologies': 'Tecnologias Dominadas',
    'about.metrics.clients': 'Clientes Atendidos',
    'about.metrics.experience': 'Anos de Experiência',
    'about.timeline.title': 'Minha Jornada',
    'about.timeline.university': 'IFSULDEMINAS',
    'about.timeline.university_desc': 'Início da graduação em Engenharia de Computação',
    'about.timeline.cdpc': 'Projeto de Extensão (CDPC)',
    'about.timeline.cdpc_desc': 'Projeto CDPC nas redes - Ações para difusão e popularização da ciência.',
    'about.timeline.internship': 'Estágio no COLAB',
    'about.timeline.internship_desc': 'Estágio em Engenharia de Computação no setor de eletrônica no campus.',
    'about.timeline.ejturing': 'EJ Turing',
    'about.timeline.ejturing_desc': 'Ingresso na Empresa Júnior como desenvolvedor.',
    'about.timeline.monitor_calc': 'Monitoria de Cálculo 1',
    'about.timeline.monitor_calc_desc': 'Monitoria acadêmica da disciplina de Cálculo 1.',
    'about.timeline.monitor_prog': 'Monitoria de Programação',
    'about.timeline.monitor_prog_desc': 'Monitoria de Programação Web 1 e 2, e Programação Orientada a Objetos.',

    'projects.title': 'Projetos',
    'projects.subtitle': 'Alguns dos projetos que desenvolvi durante minha jornada',
    'projects.academic': 'Projetos Acadêmicos',
    'projects.personal': 'Projetos Pessoais',
    'projects.in_progress': 'Em Desenvolvimento',
    'projects.view_code': 'Ver Código',
    'projects.view_demo': 'Ver Demo',
    'projects.arcane.title': 'Arcane Scriptorium',
    'projects.arcane.description': 'Sistema de controle de concorrência inspirado em uma biblioteca arcana (Leitores-Escritores), utilizando travas e prevenção de inanição.',
    'projects.arcane.impact': 'Trabalho de Sistemas Operacionais',
    
    'projects.tictactoe_ia.title': 'Jogo da Velha com IA',
    'projects.tictactoe_ia.description': 'Implementação do Jogo da Velha com IA usando o algoritmo MiniMax + Alpha-Beta e heurísticas em interface gráfica.',
    'projects.tictactoe_ia.impact': 'Desenvolvido em Java com Swing',

    'projects.network.title': 'Gerência de Redes (Packet Tracer)',
    'projects.network.description': 'Topologia de redes com roteamento dinâmico (RIPv2 com VLSM), VLANs e serviços avançados (DNS, DHCP, HTTP).',
    'projects.network.impact': 'Cisco Packet Tracer',

    'projects.philosophers.title': 'Jantar dos Filósofos',
    'projects.philosophers.description': 'Simulação interativa do clássico problema de concorrência com magos de O Senhor dos Anéis, prevenindo deadlocks.',
    'projects.philosophers.impact': 'Trabalho de Sistemas Operacionais',

    'projects.tsp.title': 'Caixeiro Viajante',
    'projects.tsp.description': 'Implementação do Problema do Caixeiro Viajante utilizando Algoritmo Ótimo (Força Bruta com Backtracking) e Heurística (Algoritmo Genético).',
    'projects.tsp.impact': 'Projeto e Análise de Algoritmos',

    'projects.caramels.title': 'Divisão de Caramelos',
    'projects.caramels.description': 'Algoritmo desenvolvido para problema da Maratona de Programação (ICPC 2024), buscando divisões equilibradas.',
    'projects.caramels.impact': 'Maratona de Programação SBC - ICPC 2024',

    'projects.fruits.title': 'Frutas com SCS e LCS',
    'projects.fruits.description': 'Algoritmos para mesclar nomes de frutas usando Subsequência Comum Mais Longa (LCS) e Supersequência Comum Mais Curta (SCS).',
    'projects.fruits.impact': 'Projeto e Análise de Algoritmos',

    'projects.graphs.title': 'Algoritmos em Grafos',
    'projects.graphs.description': 'Programa que carrega e armazena grafos e implementa Busca em Profundidade (DFS), classificando as arestas de forma visual.',
    'projects.graphs.impact': 'Desenvolvido para disciplina de Grafos',

    'projects.cache.title': 'Simulador de Memória Cache',
    'projects.cache.description': 'Simulador de acesso à cache com mapeamentos Direto, Associativo e em Conjuntos, implementando políticas de substituição (FIFO, LRU).',
    'projects.cache.impact': 'Organização e Arquitetura de Computadores',

    'projects.tavern.title': 'Taverna Medieval',
    'projects.tavern.description': 'Solução para o problema de sincronização de acesso a mesas usando threads e mutexes, prevenindo starvation e deadlocks.',
    'projects.tavern.impact': 'Trabalho de Sistemas Operacionais',

    'projects.pipeline.title': 'Simulador de Pipeline MIPS',
    'projects.pipeline.description': 'Simulador de pipeline simplificado com suporte a operações load/store e forwarding, mostrando os estágios de execução em interface visual.',
    'projects.pipeline.impact': 'Organização e Arquitetura de Computadores',
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
    'projects.proposal.title': 'Um Pedido Especial',
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
    'about.timeline.cdpc': 'Extension Project (CDPC)',
    'about.timeline.cdpc_desc': 'CDPC nas redes Project - Actions for the diffusion and popularization of science.',
    'about.timeline.internship': 'Internship at COLAB',
    'about.timeline.internship_desc': 'Computer Engineering internship in the electronics sector at the campus.',
    'about.timeline.ejturing': 'EJ Turing',
    'about.timeline.ejturing_desc': 'Joined the Junior Enterprise as a developer.',
    'about.timeline.monitor_calc': 'Calculus 1 Teaching Assistant',
    'about.timeline.monitor_calc_desc': 'Academic teaching assistant for Calculus 1.',
    'about.timeline.monitor_prog': 'Programming Teaching Assistant',
    'about.timeline.monitor_prog_desc': 'Teaching assistant for Web Programming 1 & 2, and Object-Oriented Programming.',

    'projects.title': 'Projects',
    'projects.subtitle': 'Some of the projects I developed during my journey',
    'projects.academic': 'Academic Projects',
    'projects.personal': 'Personal Projects',
    'projects.in_progress': 'In Progress',
    'projects.view_code': 'View Code',
    'projects.view_demo': 'View Demo',
    'projects.arcane.title': 'Arcane Scriptorium',
    'projects.arcane.description': 'Concurrency control system inspired by an arcane library (Readers-Writers), using locks and preventing starvation.',
    'projects.arcane.impact': 'Operating Systems Assignment',
    
    'projects.tictactoe_ia.title': 'Tic-Tac-Toe with AI',
    'projects.tictactoe_ia.description': 'Implementation of Tic-Tac-Toe with AI using the MiniMax + Alpha-Beta algorithm and heuristics in a GUI.',
    'projects.tictactoe_ia.impact': 'Developed in Java with Swing',

    'projects.network.title': 'Network Management (Packet Tracer)',
    'projects.network.description': 'Network topology with dynamic routing (RIPv2 with VLSM), VLANs, and advanced services (DNS, DHCP, HTTP).',
    'projects.network.impact': 'Cisco Packet Tracer',

    'projects.philosophers.title': 'Dining Philosophers',
    'projects.philosophers.description': 'Interactive simulation of the classic concurrency problem with Lord of the Rings wizards, preventing deadlocks.',
    'projects.philosophers.impact': 'Operating Systems Assignment',

    'projects.tsp.title': 'Traveling Salesperson',
    'projects.tsp.description': 'Implementation of the TSP using Optimal Algorithm (Brute Force with Backtracking) and Heuristic (Genetic Algorithm).',
    'projects.tsp.impact': 'Algorithm Design and Analysis',

    'projects.caramels.title': 'Caramel Division',
    'projects.caramels.description': 'Algorithm developed for a programming marathon problem (ICPC 2024), finding balanced divisions.',
    'projects.caramels.impact': 'SBC Programming Marathon - ICPC 2024',

    'projects.fruits.title': 'Fruits with SCS and LCS',
    'projects.fruits.description': 'Algorithms to merge fruit names using Longest Common Subsequence (LCS) and Shortest Common Supersequence (SCS).',
    'projects.fruits.impact': 'Algorithm Design and Analysis',

    'projects.graphs.title': 'Graph Algorithms',
    'projects.graphs.description': 'Program that loads and stores graphs and implements Depth-First Search (DFS), classifying edges visually.',
    'projects.graphs.impact': 'Developed for Graphs Course',

    'projects.cache.title': 'Cache Memory Simulator',
    'projects.cache.description': 'Cache memory access simulator with Direct, Associative, and Set-Associative mappings, and replacement policies (FIFO, LRU).',
    'projects.cache.impact': 'Computer Organization and Architecture',

    'projects.tavern.title': 'Medieval Tavern',
    'projects.tavern.description': 'Solution for the table access synchronization problem using threads and mutexes, preventing starvation and deadlocks.',
    'projects.tavern.impact': 'Operating Systems Assignment',

    'projects.pipeline.title': 'MIPS Pipeline Simulator',
    'projects.pipeline.description': 'Simplified pipeline simulator supporting load/store operations and forwarding, showing execution stages in a visual interface.',
    'projects.pipeline.impact': 'Computer Organization and Architecture',
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