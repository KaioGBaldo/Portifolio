import { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  FileText, 
  ExternalLink, 
  Code2, 
  Server, 
  Layers, 
  CheckCircle2, 
  Menu, 
  X,
  Copy,
  ChevronRight,
  Globe,
  Sparkles,
  Terminal,
  GraduationCap,
  Briefcase
} from 'lucide-react';

// Componentes de Ícones Customizados para GitHub e LinkedIn
const Github = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function App() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'backend' | 'data'>('all');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('kaiobaldo@yahoo.com.br');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const content = {
    pt: {
      nav: {
        about: 'Sobre',
        skills: 'Habilidades',
        experience: 'Experiência',
        projects: 'Projetos',
        education: 'Formação',
        contact: 'Contato',
        resume: 'Currículo'
      },
      hero: {
        badge: 'Disponível para Oportunidades',
        title: 'Desenvolvedor Full Stack & Backend Python',
        subtitle: 'Engenheiro de Software em formação pela EBAC. Especializado em construir arquiteturas escaláveis em Python (FastAPI, Django), React, microsserviços conteinerizados com Docker e sistemas de alto desempenho.',
        ctaProjects: 'Ver Projetos',
        ctaResume: 'Ver CV / Resumo'
      },
      stats: [
        { label: 'Anos de Experiência Prática', value: '2+' },
        { label: 'Crescimento de Receita (Lojão Real)', value: '+17%' },
        { label: 'Projetos de Alto Impacto', value: '4+' },
        { label: 'Idiomas Fluentes', value: '2 (PT/EN)' }
      ],
      about: {
        title: 'Sobre Mim',
        subtitle: 'Conectando visão de negócios a arquiteturas de software robustas',
        p1: 'Sou desenvolvedor Full Stack focado em Python, Django, FastAPI e ecossistemas modernos de front-end com React e TypeScript. Minha trajetória combina bagagem técnica em Eletrônica e TI com atuação estratégica no setor administrativo.',
        p2: 'Tenho experiência sólida na modelagem de APIs RESTful, comunicação em tempo real via WebSockets, mensageria assíncrona com Redis/Celery e automação de pipelines de dados utilizando Pandas e NumPy para análise financeira e tomada de decisão.'
      },
      skills: {
        title: 'Competências Técnicas',
        subtitle: 'Tecnologias e ferramentas utilizadas no desenvolvimento de soluções de ponta',
        categories: {
          backend: 'Backend & APIs',
          frontend: 'Front-End',
          devops: 'DevOps & Dados',
          tools: 'Ferramentas & Outros'
        }
      },
      projects: {
        title: 'Projetos de Destaque',
        subtitle: 'Aplicações reais focadas em escalabilidade, tempo real e segurança',
        filterAll: 'Todos',
        filterFullstack: 'Full Stack',
        filterBackend: 'Backend / APIs',
        filterData: 'Dados & Automação',
        codeBtn: 'Código',
        demoBtn: 'Ver Deploy'
      },
      experience: {
        title: 'Experiência Profissional',
        subtitle: 'Histórico de atuação técnica, automação e impacto operacional'
      },
      education: {
        title: 'Formação & Certificações',
        subtitle: 'Base acadêmica e especializações continuadas'
      },
      contact: {
        title: 'Vamos Trabalhar Juntos?',
        subtitle: 'Estou aberto a oportunidades como Desenvolvedor Junior/Pleno (Nacional ou Internacional)',
        sendEmail: 'Enviar E-mail Direto',
        copyEmail: 'Copiar E-mail',
        whatsapp: 'Conversar no WhatsApp'
      }
    },
    en: {
      nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        education: 'Education',
        contact: 'Contact',
        resume: 'Resume'
      },
      hero: {
        badge: 'Available for Opportunities',
        title: 'Full Stack & Python Backend Developer',
        subtitle: 'Software Engineer in training at EBAC. Specialized in building scalable architectures in Python (FastAPI, Django), React, containerized microservices with Docker, and high-performance systems.',
        ctaProjects: 'View Projects',
        ctaResume: 'View CV / Resume'
      },
      stats: [
        { label: 'Years of Practical Exp.', value: '2+' },
        { label: 'Revenue Growth (Lojão Real)', value: '+17%' },
        { label: 'High-Impact Projects', value: '4+' },
        { label: 'Fluent Languages', value: '2 (PT/EN)' }
      ],
      about: {
        title: 'About Me',
        subtitle: 'Bridging business goals with robust software engineering',
        p1: 'I am a Full Stack developer focused on Python, Django, FastAPI, and modern front-end ecosystems with React and TypeScript. My background combines technical expertise in Electronics and IT with strategic operational experience.',
        p2: 'I have solid experience in modeling RESTful APIs, real-time communication via WebSockets, asynchronous messaging with Redis/Celery, and data pipeline automation using Pandas and NumPy for financial audits.'
      },
      skills: {
        title: 'Technical Skills',
        subtitle: 'Technologies and tools used to build end-to-end applications',
        categories: {
          backend: 'Backend & APIs',
          frontend: 'Front-End',
          devops: 'DevOps & Data',
          tools: 'Tools & Ecosystem'
        }
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Real applications focused on scalability, real-time systems, and security',
        filterAll: 'All',
        filterFullstack: 'Full Stack',
        filterBackend: 'Backend / APIs',
        filterData: 'Data & Automation',
        codeBtn: 'Code',
        demoBtn: 'Live Demo'
      },
      experience: {
        title: 'Work Experience',
        subtitle: 'Track record of technical development, automation, and business impact'
      },
      education: {
        title: 'Education & Certifications',
        subtitle: 'Academic background and continuous learning'
      },
      contact: {
        title: "Let's Work Together",
        subtitle: 'Open for Junior/Mid-level Software Developer roles (Local or Remote international)',
        sendEmail: 'Send Direct Email',
        copyEmail: 'Copy Email Address',
        whatsapp: 'Chat on WhatsApp'
      }
    }
  };

  const t = content[lang];

  const projectsData = [
    {
      id: 'critable',
      category: 'fullstack',
      title: 'Critable (RPG Platform)',
      subtitle: { pt: 'Plataforma de RPG Imersiva em Tempo Real', en: 'Immersive Real-Time RPG Platform' },
      description: {
        pt: 'Plataforma completa para automação de fichas e sistemas de RPG. Arquitetura MVC com Django e PostgreSQL, integração bidirecional em tempo real via WebSockets, filas assíncronas e webhooks com a API do Discord.',
        en: 'Full-featured RPG campaign platform. MVC architecture built with Django and PostgreSQL, bidirectional real-time communication via WebSockets, async queues, and Discord API webhooks.'
      },
      tags: ['Python', 'Django', 'PostgreSQL', 'WebSockets', 'Redis', 'Docker', 'JavaScript', 'Discord API'],
      github: 'https://github.com/KaioGBaldo',
      demo: 'https://taldos-front.vercel.app'
    },
    {
      id: 'vanilla-place',
      category: 'backend',
      title: 'Vanilla Place',
      subtitle: { pt: 'Marketplace de Infoprodutos & E-commerce', en: 'Infoproduct Marketplace & E-commerce' },
      description: {
        pt: 'Marketplace de infoprodutos com ciclo completo de vendas: checkout otimizado, área de membros e entrega automatizada. Focado em resiliência (Redis Queue/Celery) e diretrizes de segurança da OWASP.',
        en: 'Infoproduct marketplace with end-to-end sales lifecycle: optimized checkout, member portal, and automated delivery. Built with Redis Queue/Celery for async jobs and aligned with OWASP security guidelines.'
      },
      tags: ['Python', 'Django', 'Redis', 'Celery', 'AWS S3', 'Docker Compose', 'PyTest', 'OWASP'],
      github: 'https://github.com/KaioGBaldo',
      demo: null
    },
    {
      id: 'lacrei-saude',
      category: 'fullstack',
      title: 'Lacrei Saúde (Frontend App)',
      subtitle: { pt: 'Aplicação Web Acessível & Responsiva', en: 'Accessible & Responsive Web App' },
      description: {
        pt: 'Plataforma front-end inclusiva desenvolvida em Next.js e TypeScript seguindo o Marsha Design System. Foco absoluto em acessibilidade web (WCAG), testes unitários com Jest e otimização para Vercel.',
        en: 'Inclusive front-end platform built with Next.js and TypeScript adhering to the Marsha Design System. High focus on web accessibility (WCAG), unit testing with Jest, and Vercel performance optimization.'
      },
      tags: ['Next.js', 'TypeScript', 'Styled-Components', 'Jest', 'Accessibility', 'Vercel'],
      github: 'https://github.com/KaioGBaldo',
      demo: null
    },
    {
      id: 'data-pipelines',
      category: 'data',
      title: 'Financial Data Pipelines',
      subtitle: { pt: 'Pipelines de Dados Operacionais & Financeiros', en: 'Operational & Financial Data Pipelines' },
      description: {
        pt: 'Automação desenvolvida para auditoria financeira e conciliação bancária no Lojão Real. Processamento e conversão de relatórios operacionais em insights estratégicos, apoiando um aumento de +17% no faturamento.',
        en: 'Data automation pipelines created for financial auditing and bank reconciliation at Lojão Real. Cleaned and processed raw operational metrics into actionable business insights supporting +17% revenue growth.'
      },
      tags: ['Python', 'Pandas', 'NumPy', 'Financial Audit', 'Automation', 'ETL'],
      github: 'https://github.com/KaioGBaldo',
      demo: null
    }
  ];

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono font-extrabold text-xl tracking-tight hover:opacity-90 transition-opacity">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">KaioBaldo</span>
            <span className="text-cyan-400">/&gt;</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">{t.nav.skills}</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">{t.nav.experience}</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">{t.nav.projects}</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">{t.nav.education}</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-slate-800">
            <a href="https://github.com/KaioGBaldo" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white hover:bg-slate-900 rounded-lg transition-all" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kaiogbaldo/" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-900 rounded-lg transition-all" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://wa.me/550" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-900 rounded-lg transition-all" title="WhatsApp">
              <MessageSquare size={18} />
            </a>

            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-slate-900 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white transition-all ml-2"
            >
              <Globe size={14} className="text-cyan-400" />
              <span>{lang === 'pt' ? 'EN' : 'PT-BR'}</span>
            </button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
              className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-700 text-cyan-400"
            >
              {lang === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.about}</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.skills}</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.experience}</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.projects}</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.education}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-cyan-400 font-medium py-1">{t.nav.contact}</a>

            <div className="pt-4 border-t border-slate-800 flex items-center gap-6">
              <a href="https://github.com/KaioGBaldo" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/kaiogbaldo/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400"><Linkedin size={20} /></a>
              <a href="mailto:kaiobaldo@yahoo.com.br" className="text-slate-400 hover:text-cyan-400"><Mail size={20} /></a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-cyan-400 text-xs font-mono mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Kaio Grativol Baldo
            </h1>

            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6">
              {t.hero.title}
            </h2>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
              >
                <span>{t.hero.ctaProjects}</span>
                <ChevronRight size={18} />
              </a>

              <button
                onClick={() => setShowResumeModal(true)}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold transition-all flex items-center gap-2"
              >
                <FileText size={18} className="text-cyan-400" />
                <span>{t.hero.ctaResume}</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-slate-800/80">
            {t.stats.map((stat, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-3">{t.about.title}</h2>
            <p className="text-cyan-400 font-medium">{t.about.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="text-cyan-400" size={20} />
                <span>Destaques Profissionais</span>
              </h3>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Full Stack EBAC:</strong> Formação intensiva em Python, Django, FastAPI e React.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Perfil Híbrido:</strong> Experiência prática unindo TI, Eletrônica e gestão administrativa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong>Fluência Global:</strong> Inglês e Espanhol avançados para equipes internacionais.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-3">{t.skills.title}</h2>
            <p className="text-slate-400">{t.skills.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/50 flex items-center justify-center text-cyan-400 mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{t.skills.categories.backend}</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'REST APIs', 'WebSockets', 'PyTest'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-md">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-950 border border-indigo-800/50 flex items-center justify-center text-indigo-400 mb-6">
                <Code2 size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{t.skills.categories.frontend}</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Styled-Components'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-md">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-950 border border-emerald-800/50 flex items-center justify-center text-emerald-400 mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{t.skills.categories.devops}</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Docker Compose', 'Git / GitHub', 'Pandas', 'NumPy', 'AWS S3', 'CI/CD', 'Poetry'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-md">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-950 border border-amber-800/50 flex items-center justify-center text-amber-400 mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{t.skills.categories.tools}</h3>
              <div className="flex flex-wrap gap-2">
                {['Eletrônica Técnica', 'Trello / Kanban', 'MicroPython', 'Linux', 'Figma', 'Jest'].map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-md">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-3">{t.projects.title}</h2>
              <p className="text-slate-400">{t.projects.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {[
                { id: 'all', label: t.projects.filterAll },
                { id: 'fullstack', label: t.projects.filterFullstack },
                { id: 'backend', label: t.projects.filterBackend },
                { id: 'data', label: t.projects.filterData }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    filter === f.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{project.subtitle[lang]}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-mono bg-slate-950 border border-slate-800 text-slate-300 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white"
                    >
                      <Github size={16} />
                      <span>{t.projects.codeBtn}</span>
                    </a>

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:underline"
                      >
                        <ExternalLink size={16} />
                        <span>{t.projects.demoBtn}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-3">{t.experience.title}</h2>
            <p className="text-slate-400">{t.experience.subtitle}</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-slate-800">
            <div className="relative pl-10 sm:pl-12">
              <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400">
                <Briefcase size={14} />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">Lucas Allan & Eletrônica</h3>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/40 w-max">
                    Dez/2025 - Atual
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-4">Desenvolvedor Full Stack / Voluntário & Técnico em Eletrônica</p>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                  <li>Desenvolvimento de microsserviços em Python e FastAPI para digitalização de processos operacionais.</li>
                  <li>Construção de interfaces reativas utilizando React e JavaScript modernizado.</li>
                  <li>Conteinerização completa dos ambientes de desenvolvimento com Docker.</li>
                </ul>
              </div>
            </div>

            <div className="relative pl-10 sm:pl-12">
              <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-400">
                <Briefcase size={14} />
              </div>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg font-bold text-white">Lojão Real</h3>
                  <span className="text-xs font-mono text-slate-400 bg-slate-800 px-3 py-1 rounded-full w-max">
                    Nov/2024 - Jan/2026
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-400 mb-4">Profissional Administrativo e de TI</p>
                <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                  <li>Criação de pipelines de dados em Python (Pandas/NumPy) para auditorias financeiras e fluxo de caixa.</li>
                  <li>Suporte na otimização de processos durante período de crescimento de <strong>+17% no faturamento anual</strong>.</li>
                  <li>Gestão de infraestrutura de rede, hardware e aplicação de metodologias ágeis (Scrum/Kanban).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-20 bg-slate-900/30 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl font-extrabold text-white mb-3">{t.education.title}</h2>
            <p className="text-slate-400">{t.education.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 bg-cyan-950 border border-cyan-800/50 rounded-xl text-cyan-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400">2026</span>
                <h3 className="text-lg font-bold text-white mt-1">Desenvolvimento Backend Python (Full Stack)</h3>
                <p className="text-sm text-slate-400 mt-1">EBAC - Escola Britânica de Artes Criativas e Tecnologia</p>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4">
              <div className="p-3 bg-slate-800 border border-slate-700 rounded-xl text-slate-300">
                <GraduationCap size={24} />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400">2024 - 2025</span>
                <h3 className="text-lg font-bold text-white mt-1">Técnico em Eletrotécnica</h3>
                <p className="text-sm text-slate-400 mt-1">ECID</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">{t.contact.title}</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">{t.contact.subtitle}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:kaiobaldo@yahoo.com.br"
              className="px-6 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2"
            >
              <Mail size={20} />
              <span>{t.contact.sendEmail}</span>
            </a>

            <button
              onClick={copyEmailToClipboard}
              className="px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold transition-all flex items-center gap-2"
            >
              <Copy size={20} className="text-cyan-400" />
              <span>{copiedEmail ? 'Copiado!' : t.contact.copyEmail}</span>
            </button>

            <a
              href="https://wa.me/550"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-emerald-950 hover:bg-emerald-900 text-emerald-400 border border-emerald-800/60 font-bold transition-all flex items-center gap-2"
            >
              <MessageSquare size={20} />
              <span>{t.contact.whatsapp}</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm font-mono">
        <p>© 2026 Kaio Grativol Baldo. Todos os direitos reservados.</p>
      </footer>

      {showResumeModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold text-white mb-2">Resumo Profissional</h3>
            <p className="text-sm font-mono text-cyan-400 mb-6">Kaio Grativol Baldo — Desenvolvedor Full Stack Python</p>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed mb-8">
              <p><strong>Contatos:</strong> | kaiobaldo@yahoo.com.br</p>
              <p><strong>Formação:</strong> Desenvolvedor Backend Python Full Stack (EBAC, 2026) | Técnico em Eletrotécnica (ECID).</p>
              <p><strong>Stack Principal:</strong> Python, Django, FastAPI, React, TypeScript, PostgreSQL, Redis, Celery, Docker, WebSockets, Pandas, NumPy, Git.</p>
              <p><strong>Idiomas:</strong> Inglês Avançado | Espanhol Avançado.</p>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 text-sm font-medium"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
