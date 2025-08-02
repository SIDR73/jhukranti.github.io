import { Play } from "lucide-react";

export default function MusicSection() {
  const featuredVideos = [
    {
      title: "To the Moon",
      subtitle: "Jnr Choi & Sam Tompkins Cover",
      description: "Our latest fusion performance showcasing the perfect blend of American and South Asian musical styles.",
      embedId: "dQw4w9WgXcQ" // Placeholder - would be actual YouTube video ID
    },
    {
      title: "Culture Show Performance",
      subtitle: "Traditional & Modern Fusion",
      description: "Highlights from our annual Culture Show performance featuring intricate vocal arrangements.",
      embedId: "dQw4w9WgXcQ" // Placeholder - would be actual YouTube video ID
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
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
  ];

  const photoTitles = ["Culture Show Performance", "Traditional Fusion Set", "Hopkins O-Show", "Behind the Scenes"];

  return (
    <section id="music" className="py-20 bg-gradient-to-b from-kranti-black to-kranti-navy/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-6 text-white">Our Music</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the revolutionary fusion of East and West through our performances and recordings.
          </p>
        </div>

        {/* Featured Videos Section */}
        <div className="mb-16">
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center">Featured Performances</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredVideos.map((video, index) => (
              <div key={index} className="bg-kranti-navy/30 backdrop-blur-sm rounded-xl overflow-hidden border border-kranti-blue/20 hover:border-kranti-gold/50 transition-all duration-300">
                <div className="aspect-video bg-gray-800 relative group cursor-pointer">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <i className="fab fa-youtube text-red-500 text-6xl mb-4"></i>
                      <p className="text-white font-semibold">{video.title}</p>
                      <p className="text-gray-300 text-sm mt-2">{video.subtitle}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Play className="text-white text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-xl text-white mb-2">{video.title}</h4>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spotify Section */}
        <div className="mb-16">
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center">Listen on Spotify</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {albums.map((album, index) => (
              <div key={index} className="bg-gradient-to-br from-kranti-navy/40 to-kranti-black/40 backdrop-blur-sm rounded-xl p-6 border border-kranti-blue/20 hover:border-kranti-gold/50 transition-all duration-300 group cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <i className="fab fa-spotify text-green-500 text-3xl group-hover:scale-110 transition-transform duration-300"></i>
                  <div>
                    <h4 className="font-semibold text-white">{album.title}</h4>
                    <p className="text-gray-300 text-sm">{album.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{album.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Gallery */}
        <div>
          <h3 className="font-semibold text-2xl md:text-3xl text-kranti-gold mb-8 text-center">Performance Gallery</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performancePhotos.map((photo, index) => (
              <div key={index} className="relative group cursor-pointer rounded-xl overflow-hidden">
                <img 
                  src={photo} 
                  alt={`Performance photo ${index + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kranti-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{photoTitles[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://www.youtube.com/user/johnshopkinskranti/featured" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-red-600/30 transition-all duration-300 transform hover:scale-105 mr-4"
          >
            <i className="fab fa-youtube"></i>
            <span>Watch More on YouTube</span>
          </a>
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-green-600/30 transition-all duration-300 transform hover:scale-105"
          >
            <i className="fab fa-spotify"></i>
            <span>Listen on Spotify</span>
          </a>
        </div>
      </div>
    </section>
  );
}
