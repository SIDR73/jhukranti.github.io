import { teamMembers } from "@/lib/team-data";
import { ArrowRight } from "lucide-react";

export default function TeamSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-20 bg-kranti-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">Meet Our Artists</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Talented voices from diverse backgrounds united by our passion for musical fusion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-kranti-navy/30 to-kranti-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-kranti-blue/20 hover:border-kranti-gold/50 transition-all duration-300 hover:transform hover:scale-105">
              <img 
                src={member.image} 
                alt={`${member.name} portrait`} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-1">{member.name}</h3>
                <p className="text-kranti-gold text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-kranti-blue to-kranti-navy text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-kranti-blue/30 transition-all duration-300 transform hover:scale-105"
          >
            <span>Join Our Musical Revolution</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
