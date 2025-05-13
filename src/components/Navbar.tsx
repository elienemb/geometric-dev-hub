
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-portfolio-purple to-portfolio-green bg-clip-text text-transparent">
              DevPortfolio
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="nav-link active">Início</a>
            <a href="#about" className="nav-link">Sobre</a>
            <a href="#projects" className="nav-link">Projetos</a>
            <a href="#resume" className="nav-link">Currículo</a>
            <a href="#contact" className="btn-primary">Contato</a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 dark:text-gray-100 focus:outline-none"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-black shadow-xl animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a
              href="#hero"
              className="block px-3 py-2 text-base font-medium nav-link active"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-base font-medium nav-link"
              onClick={toggleMenu}
            >
              Sobre
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-base font-medium nav-link"
              onClick={toggleMenu}
            >
              Projetos
            </a>
            <a
              href="#resume"
              className="block px-3 py-2 text-base font-medium nav-link"
              onClick={toggleMenu}
            >
              Currículo
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-base font-medium btn-primary w-full text-center mt-4"
              onClick={toggleMenu}
            >
              Contato
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
