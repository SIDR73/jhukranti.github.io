import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-kranti-navy via-kranti-black to-kranti-black"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="h-full w-full" 
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='3' fill='%23F59E0B'/><circle cx='25' cy='25' r='2' fill='%23F59E0B'/><circle cx='75' cy='75' r='2' fill='%23F59E0B'/></svg>")`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white via-kranti-gold to-kranti-blue bg-clip-text text-transparent">
          JHU Kranti
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
          South Asian Fusion A Cappella
        </p>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          Johns Hopkins' premier co-ed South Asian Fusion a cappella group, seamlessly blending traditional and modern Indian musical forms with contemporary Western songs since 2003.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('music')}
            className="bg-gradient-to-r from-kranti-gold to-amber-500 text-kranti-black font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-kranti-gold/30 transition-all duration-300 transform hover:scale-105"
          >
            Listen to Our Music
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="border-2 border-kranti-blue text-kranti-blue font-semibold px-8 py-3 rounded-full hover:bg-kranti-blue hover:text-white transition-all duration-300"
          >
            Learn Our Story
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-kranti-gold text-2xl" />
      </div>
    </section>
  );
}
