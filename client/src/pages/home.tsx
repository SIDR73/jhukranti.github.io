import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import MusicSection from "@/components/music-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="bg-kranti-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <MusicSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-kranti-navy/20 border-t border-kranti-navy/30 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <i className="fas fa-music text-kranti-gold text-2xl"></i>
              <span className="font-inter font-bold text-2xl text-white">JHU Kranti</span>
            </div>
            <p className="text-gray-400 mb-6">Johns Hopkins University's Premier South Asian Fusion A Cappella Group</p>
            <div className="flex justify-center space-x-6 mb-6">
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
            <p className="text-gray-500 text-sm">&copy; 2024 JHU Kranti. All rights reserved. | Established 2003</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
