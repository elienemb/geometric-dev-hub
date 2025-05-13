
import React from 'react';
import { Briefcase, Book, Award, Download } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <h2 className="section-title">Meu Currículo</h2>
          <a 
            href="#" 
            className="btn-outline flex items-center gap-2 mt-4 md:mt-0"
            aria-label="Baixar currículo completo em PDF"
          >
            <Download className="w-5 h-5" />
            Baixar PDF
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-portfolio-purple/10 p-2 rounded-lg">
                <Briefcase className="w-6 h-6 text-portfolio-purple" />
              </div>
              <h3 className="text-2xl font-bold">Experiência Profissional</h3>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-portfolio-purple before:rounded-full before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-2 after:w-0.5 after:h-full after:bg-gray-200 dark:after:bg-gray-700">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-lg font-bold">Desenvolvedor Frontend Sênior</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2020 - Presente
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Tech Solutions</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Liderança técnica de uma equipe de 5 desenvolvedores frontend.</li>
                    <li>Implementação de arquitetura de microfrontends para aplicações de grande escala.</li>
                    <li>Criação de biblioteca de componentes acessíveis com React e Storybook.</li>
                    <li>Otimização de performance em aplicações web, resultando em melhoria de 40% no tempo de carregamento.</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-portfolio-purple before:rounded-full before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-2 after:w-0.5 after:h-full after:bg-gray-200 dark:after:bg-gray-700">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-lg font-bold">Desenvolvedor Frontend Pleno</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2018 - 2020
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">Digital Innovations</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Desenvolvimento de aplicações SPA com Vue.js e Vuex.</li>
                    <li>Implementação de testes automatizados com Jest e Cypress.</li>
                    <li>Desenvolvimento de PWAs com recursos offline e notificações push.</li>
                    <li>Integração com APIs RESTful e GraphQL.</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-portfolio-purple before:rounded-full before:z-10">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h4 className="text-lg font-bold">Desenvolvedor Frontend Jr.</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2016 - 2018
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">WebCreate Studios</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Desenvolvimento de interfaces responsivas com HTML5, CSS3 e JavaScript.</li>
                    <li>Implementação de animações e transições com CSS e JavaScript.</li>
                    <li>Otimização para SEO e acessibilidade.</li>
                    <li>Manutenção e atualização de sites existentes.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg">
                  <Book className="w-6 h-6 text-portfolio-purple" />
                </div>
                <h3 className="text-2xl font-bold">Educação</h3>
              </div>
              
              <div className="space-y-8">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-portfolio-purple before:rounded-full before:z-10 after:content-[''] after:absolute after:left-1.5 after:top-2 after:w-0.5 after:h-full after:bg-gray-200 dark:after:bg-gray-700">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="text-lg font-bold">Bacharelado em Ciência da Computação</h4>
                      <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                        2012 - 2016
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Universidade Federal do Brasil</p>
                  </div>
                </div>
                
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-portfolio-purple before:rounded-full before:z-10">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                      <h4 className="text-lg font-bold">Técnico em Desenvolvimento de Sistemas</h4>
                      <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                        2010 - 2012
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">Instituto Técnico Nacional</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-portfolio-purple/10 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-portfolio-purple" />
                </div>
                <h3 className="text-2xl font-bold">Certificações</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h4 className="text-lg font-bold">AWS Certified Developer Associate</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2023
                    </span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h4 className="text-lg font-bold">Meta Frontend Developer Professional Certificate</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2022
                    </span>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <h4 className="text-lg font-bold">Google UX Design Professional Certificate</h4>
                    <span className="inline-block bg-portfolio-purple/10 text-portfolio-purple text-sm px-3 py-1 rounded-full font-medium mt-2 md:mt-0">
                      2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
