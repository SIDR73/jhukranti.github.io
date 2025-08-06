import { Play } from "lucide-react";

export default function MusicSection() {
  const featuredVideos = [
    {
      title: "Spring 2025 Showcase",
      subtitle: "",
      description: "Highlights of our latest arrangements from our 2024-2025 season.",
      embedId: "PLKPKF8cd10xW-h0S8FI-_eie-PLjHGerI" // YouTube playlist ID from the provided link
    },
    {
      title: "Steel City Sapna 2025 Performance",
      subtitle: "",
      description: "Watch our full competition set from Steel City Sapna 2025.",
      embedId: "xwG44-k5K9Q" // YouTube video ID from the provided link
    }
  ];

  const albums = [
    {
      title: "Fusion Revolution",
      subtitle: "Latest Album • 2023",
      description: "Our newest collection featuring innovative East-West musical fusions and contemporary hits reimagined."
    },
    {
      title: "Classical Meets Modern",
      subtitle: "EP • 2022",
      description: "Traditional Indian ragas beautifully woven into contemporary Western melodies and arrangements."
    },
    {
      title: "Cultural Bridges",
      subtitle: "Album • 2021",
      description: "A full-length album celebrating the rich tapestry of cross-cultural musical collaboration."
    }
  ];

  const performancePhotos = [
    "./photos/Performance_Gallery_1.jpg",
    "./photos/Performance_Gallery_2.jpg",
    "./photos/Performance_Gallery_3.jpg",
    "./photos/Performance_Gallery_4.jpg"
  ];

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-kranti-black via-kranti-navy/30 to-kranti-orange/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Our Music</h2>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-16">
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Featured Performances</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div key={index} className="bg-gradient-to-br from-kranti-navy/40 to-kranti-orange/20 backdrop-blur-sm rounded-xl overflow-hidden border border-kranti-blue/30 hover:border-kranti-gold/50 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative">
                  <iframe
                    src={video.embedId.startsWith('PL') 
                      ? `https://www.youtube.com/embed/videoseries?list=${video.embedId}`
                      : `https://www.youtube.com/embed/${video.embedId}`
                    }
                    title={video.title}
                    className="w-full h-full rounded-t-xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-xl text-white mb-2">{video.title}</h4>
                  {video.subtitle && <p className="text-kranti-gold text-sm mb-2">{video.subtitle}</p>}
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Revolution Album Section */}
        <div className="mb-16">
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Revolution Album</h3>
          <div className="bg-gradient-to-br from-kranti-navy/40 to-kranti-purple/20 backdrop-blur-sm rounded-xl p-8 border border-kranti-purple/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-center lg:text-left">
                <img 
                  src="./photos/Revolution_Album_Cover.jpg" 
                  alt="Revolution Album Cover" 
                  className="w-64 h-64 mx-auto lg:mx-0 rounded-xl shadow-2xl mb-6 object-cover" 
                />
                <h4 className="font-semibold text-xl text-white mb-2">Revolution</h4>
                <p className="text-gray-300 text-sm mb-4">2020 • 7 songs, 28 min 37 sec</p>
                <a 
                  href="https://open.spotify.com/album/7rL5cq2yCvgs7lYrfLSsSH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300 transform hover:scale-105"
                >
                  <i className="fab fa-spotify"></i>
                  <span>Listen on Spotify</span>
                </a>
              </div>
              <div className="space-y-4">
                <h5 className="font-semibold text-lg text-white mb-4">Track List</h5>
                <div className="max-h-64 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Ishq Sufiyana / Naina</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">4:12</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Adiye / Who's Lovin You</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">4:08</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Mitwa / Cheerleader</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">4:15</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Aaj Ibaadat</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">3:52</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Bhare Naina / Skyfall</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">4:25</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">Janam Janam / Main Agar Kahoon</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">4:18</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-kranti-black/30 rounded-lg border border-kranti-purple/20 hover:border-kranti-purple/40 transition-all duration-300">
                    <div>
                      <p className="text-white font-medium">K3G Medley: Suraj Hua Maddham / You Are My Soniya / Deewana Hai Dekho / Bole Chudiyan</p>
                      <p className="text-gray-400 text-sm">JHU Kranti</p>
                    </div>
                    <span className="text-gray-400 text-sm">3:27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Gallery */}
        <div>
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>Performance Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performancePhotos.map((photo, index) => (
              <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Performance photo ${index + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
