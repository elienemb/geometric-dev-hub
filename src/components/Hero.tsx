
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Olá! Eu sou <span className="text-portfolio-purple">João Silva</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Desenvolvedor <span className="bg-gradient-to-r from-portfolio-purple to-portfolio-green bg-clip-text text-transparent">Frontend</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Transformando ideias em experiências digitais incríveis com código limpo e design responsivo.
            Especializado em criar aplicações web modernas e acessíveis.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="#projects" className="btn-primary flex items-center gap-2">
              Ver Projetos <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-outline">Fale Comigo</a>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative animate-expand">
          <div className="relative w-full max-w-md mx-auto">
            <div className="w-full aspect-square bg-gradient-to-br from-portfolio-purple to-portfolio-green rounded-full opacity-20 absolute top-0 animate-pulse"></div>
            <img 
              src="https://placehold.co/600x600/1A1F2C/FFFFFF?text=JS&font=montserrat" 
              alt="Imagem de perfil do desenvolvedor" 
              className="w-full rounded-full relative z-10 p-3"
            />
            {/* Floating tech icons */}
            <div className="absolute -top-5 -right-5 bg-white dark:bg-portfolio-black p-3 rounded-full shadow-lg animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#61DAFB">
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" />
                <path d="M12 22.5C11.0991 22.5 10.1982 22.3311 9.35389 21.9933C8.50954 21.6555 7.73128 21.1535 7.0533 20.5075C5.7038 19.2225 4.50156 17.5417 3.5178 15.5742C2.52094 13.5807 1.75 11.3134 1.75 9C1.75 7.11641 2.35937 5.29688 3.50156 3.86719C4.62891 2.45312 6.25 1.5 8 1.5C9.01795 1.5 10.0359 1.7594 10.9378 2.25C11.8605 2.75277 12.6371 3.46224 13.25 4.33984C13.8629 3.46224 14.6395 2.75277 15.5622 2.25C16.4641 1.7594 17.482 1.5 18.5 1.5C20.25 1.5 21.8711 2.45312 22.9984 3.86719C24.1406 5.29688 24.75 7.11641 24.75 9C24.75 13.9462 21.8659 18.6534 18.9422 20.51C18.2655 21.0113 17.4905 21.4196 16.6461 21.9933C15.8018 22.3311 14.9009 22.5 14 22.5H12Z" />
              </svg>
            </div>
            <div className="absolute top-1/2 -left-10 bg-white dark:bg-portfolio-black p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#8B5CF6">
                <path d="M10.1579 20.7581L10.158 8.132H1.8374L1.83734 5.87723H20.7739L20.774 8.132H12.4533L12.4533 20.7581L10.1579 20.7581Z" />
              </svg>
            </div>
            <div className="absolute -bottom-5 right-10 bg-white dark:bg-portfolio-black p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 5.00005H20C20.5523 5.00005 21 5.44777 21 6.00005V18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18V6.00005C3 5.44777 3.44772 5.00005 4 5.00005Z" fill="#10B981" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
