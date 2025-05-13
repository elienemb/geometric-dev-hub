
import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <a href="#hero" className="inline-block mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-portfolio-purple to-portfolio-green bg-clip-text text-transparent">
                DevPortfolio
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Transformando ideias em experiências digitais incríveis com código limpo e design responsivo.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Github profile" className="bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" aria-label="LinkedIn profile" className="bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" aria-label="Twitter profile" className="bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Twitter className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
              <a href="#" aria-label="Instagram profile" className="bg-white dark:bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                <Instagram className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">Início</a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">Sobre Mim</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">Projetos</a>
              </li>
              <li>
                <a href="#resume" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">Currículo</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-portfolio-purple" />
                <a href="mailto:contato@joaosilva.dev" className="text-gray-600 dark:text-gray-300 hover:text-portfolio-purple transition-colors">
                  contato@joaosilva.dev
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-portfolio-purple" />
                <span className="text-gray-600 dark:text-gray-300">
                  São Paulo, SP - Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} João Silva. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={handleScrollToTop}
            className="mt-4 md:mt-0 bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm hover:shadow-md transition-shadow"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
