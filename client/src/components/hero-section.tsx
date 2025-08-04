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
      <div className="absolute inset-0 bg-gradient-to-br from-kranti-navy via-kranti-black to-kranti-purple/20"></div>
      <div className="absolute inset-0">
        <div 
          className="h-full w-full bg-cover bg-center bg-no-repeat hero-background" 
          style={{
            backgroundImage: `url("./photos/IMG_7731.JPG")`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-kranti-black/80 via-kranti-black/60 to-kranti-purple/40"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <h1 className="font-normal text-8xl md:text-9xl lg:text-[12rem] mb-6 bg-gradient-to-r from-white via-kranti-gold via-kranti-orange to-kranti-blue bg-clip-text text-transparent drop-shadow-2xl" style={{ fontFamily: 'Samarkan, sans-serif' }}>
          Kranti
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => scrollToSection('music')}
            className="bg-gradient-to-r from-kranti-gold via-kranti-orange to-kranti-purple text-white font-semibold px-10 py-4 rounded-full hover-glow transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Listen to Our Music
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-kranti-gold via-kranti-orange to-kranti-purple text-white font-semibold px-10 py-4 rounded-full hover-glow transition-all duration-300 transform hover:scale-105 text-lg"
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
