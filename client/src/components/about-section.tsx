import { Calendar, Users, Music } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-kranti-black to-kranti-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">Our Revolution</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The word "kranti" means "revolution" in Hindi, and we embody this spirit in everything we do.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold">Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Established in 2003, JHU Kranti has been at the forefront of cultural fusion in collegiate a cappella. We strive to present a unique vocal combination of East and West, creating revolutionary performances that honor our heritage while pushing musical boundaries.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our performances seamlessly blend traditional and modern Indian musical forms with contemporary Western songs, creating an entirely new musical experience that celebrates both cultures.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cultural performance on stage" 
              className="rounded-xl shadow-2xl w-full" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kranti-black/60 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-kranti-navy/30 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20">
            <div className="text-kranti-gold text-3xl mb-4">
              <Calendar />
            </div>
            <h4 className="font-semibold text-xl mb-3 text-white">Since 2003</h4>
            <p className="text-gray-300">Over 20 years of musical innovation and cultural bridge-building at Johns Hopkins University.</p>
          </div>
          
          <div className="bg-kranti-navy/30 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20">
            <div className="text-kranti-gold text-3xl mb-4">
              <Users />
            </div>
            <h4 className="font-semibold text-xl mb-3 text-white">Co-ed Excellence</h4>
            <p className="text-gray-300">Bringing together diverse voices and backgrounds to create harmony that transcends cultural boundaries.</p>
          </div>
          
          <div className="bg-kranti-navy/30 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20">
            <div className="text-kranti-gold text-3xl mb-4">
              <Music />
            </div>
            <h4 className="font-semibold text-xl mb-3 text-white">Fusion Innovation</h4>
            <p className="text-gray-300">Pioneering the art of South Asian-Western musical fusion in the collegiate a cappella scene.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-semibold text-2xl md:text-3xl text-white mb-8">Recent Highlights</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-black/40 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20">
              <h4 className="font-semibold text-xl text-kranti-gold mb-3">O-Show 2023</h4>
              <p className="text-gray-300">"To the Moon" by Jnr Choi and Sam Tompkins - a perfect blend of American and South Asian styles that captivated the Hopkins community.</p>
            </div>
            <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-black/40 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20">
              <h4 className="font-semibold text-xl text-kranti-gold mb-3">Culture Show</h4>
              <p className="text-gray-300">Regular performances at Johns Hopkins' annual Culture Show, showcasing intricate vocal lines with crystal clarity in our South Asian arrangements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
