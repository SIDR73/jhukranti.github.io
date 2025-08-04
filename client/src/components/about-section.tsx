import { Calendar, Users, Music } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-kranti-black via-kranti-navy/30 to-kranti-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold" style={{ fontFamily: 'Playfair Display, serif' }}>Our Mission</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              The word "kranti" means "revolution" in Hindi, and we embody this spirit in everything we do. Established in 2003, JHU Kranti has been at the forefront of cultural fusion in collegiate a cappella. We strive to present a unique vocal combination of East and West, creating revolutionary performances that honor our heritage while pushing musical boundaries.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our performances seamlessly blend traditional and modern South Asian musical forms with contemporary Western songs, creating an entirely new musical experience that celebrates both cultures.
            </p>
          </div>
          <div className="relative">
            <img 
              src="./photos/JHUKranti_Group.jpg" 
              alt="JHU Kranti performing on stage in traditional South Asian attire" 
              className="rounded-xl shadow-2xl w-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kranti-black/60 to-transparent rounded-xl"></div>
          </div>
        </div>




      </div>
    </section>
  );
}
