import { useState, useEffect } from "react";
import { Music, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-sm border-b border-kranti-purple/30 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-kranti-black/95' : 'bg-kranti-black/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src="./photos/kranti_vector_logo.svg" alt="Kranti Logo" className="w-8 h-8" />
            <span className="font-bold text-xl">JHU Kranti</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              About
            </button>
            <a href="./team.html" className="text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Team
            </a>
            <button onClick={() => scrollToSection('music')} className="text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Music
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex space-x-4">
            <a href="https://www.instagram.com/jhu_kranti/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="https://www.facebook.com/jhukranti/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a href="https://www.youtube.com/user/johnshopkinskranti/featured" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-kranti-black/95 backdrop-blur-sm border-t border-kranti-purple/30">
          <div className="px-4 py-3 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              About
            </button>
            <a href="./team.html" className="block text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Team
            </a>
            <button onClick={() => scrollToSection('music')} className="block text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Music
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-300 hover:text-kranti-gold transition-colors duration-300">
              Contact
            </button>
            <div className="flex space-x-4 pt-3">
              <a href="https://www.instagram.com/jhu_kranti/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.facebook.com/jhukranti/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://www.youtube.com/user/johnshopkinskranti/featured" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-kranti-gold transition-colors duration-300">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
