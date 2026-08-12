import { Mail, MapPin, Calendar } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-kranti-black to-kranti-navy/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Us</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-8 text-center">
          <div className="space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-purple/20 p-3 rounded-lg">
                <Mail className="text-kranti-gold text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Email</h4>
                <p className="text-gray-300">johnshopkinskranti@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-teal/20 p-3 rounded-lg">
                <MapPin className="text-kranti-gold text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Location</h4>
                <p className="text-gray-300">Johns Hopkins University<br />Baltimore, MD</p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-orange/20 p-3 rounded-lg">
                <Calendar className="text-kranti-gold text-xl" />
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">Performance Booking</h4>
                <p className="text-gray-300">Available for campus events, cultural shows, and private performances</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-xl text-white mb-4">Current Set List</h4>
            <div className="space-y-2 text-gray-300">
              <p>Akhiyan Udeek Diyan / Mere Dholna</p>
              <p>Hamari Adhuri Kahani / Breathe Me / Par Channa De</p>
              <p>All for Us / Bhare Naina</p>
              <p>Ambarsariya / Cheap Thrills</p>
              <p>Channa Mereya / Kabira</p>
              <p>Physical / Sun Saathiya</p>
              <p>Thalli Pogathey / Maguva Maguva</p>
              <p>Samjhawan / We Can't Be Friends</p>
              <p>The Greatest</p>
              <p>Sajdaa</p>
              <p className="text-kranti-gold font-medium mt-3">We are open to requests too!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
