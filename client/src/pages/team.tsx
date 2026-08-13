import Navigation from "../components/navigation";

// Team member data
const teamMembers = [
  {
    firstName: "Aditya",
    lastName: "Nimbalagundi",
    part: "Tenor",
    photo: "./photos/Team/Aditya_Nimbalagundi.jpg",
    objectPosition: "50% 25%"
  },
  {
    firstName: "Advika",
    lastName: "Agarwal",
    part: "Soprano",
    photo: "./photos/Team/Advika_Agarwal.jpg"
  },
  {
    firstName: "Anika",
    lastName: "Narayan",
    part: "Alto",
    photo: "./photos/Team/Anika_Narayan.jpg"
  },
  {
    firstName: "Arihant",
    lastName: "Patni",
    part: "Baritone",
    photo: "./photos/Team/Arihant_Patni.jpg"
  },
  {
    firstName: "Hasitha",
    lastName: "Putcha",
    part: "Alto",
    photo: "./photos/Team/Hasitha_Putcha.jpg"
  },
  {
    firstName: "Janya",
    lastName: "Jagan",
    part: "Alto",
    photo: "./photos/Team/Janya_Jagan.jpg"
  },
  {
    firstName: "Medha",
    lastName: "Mandumula",
    part: "Mezzo",
    photo: "./photos/Team/Medha_Mandumula.jpg"
  },
  {
    firstName: "Navya",
    lastName: "Balamurugan",
    part: "Mezzo",
    photo: "./photos/Team/Navya_Balamurugan.jpg"
  },
  {
    firstName: "Oorvi",
    lastName: "Moolchandani",
    part: "Mezzo",
    photo: "./photos/Team/Oorvi_Moolchandani.jpg",
    objectPosition: "50% 0%"
  },
  {
    firstName: "Pranav",
    lastName: "Potluri",
    part: "Tenor",
    photo: "./photos/Team/Pranav_Potluri.jpg"
  },
  {
    firstName: "Riya",
    lastName: "Verma",
    part: "Mezzo",
    photo: "./photos/Team/Riya_Verma.jpg"
  },
  {
    firstName: "Rohit",
    lastName: "Thapa",
    part: "Baritone",
    photo: "./photos/Team/Rohit_Thapa.jpg"
  },
  {
    firstName: "Shivesh",
    lastName: "Mishra",
    part: "Tenor",
    photo: "./photos/Team/Shivesh_Mishra.jpg"
  },
  {
    firstName: "Sidharth",
    lastName: "Raghavan",
    part: "Bass Vocalist",
    photo: "./photos/Team/Sidharth_Raghavan.jpg"
  },
  {
    firstName: "Varsha",
    lastName: "Arun",
    part: "Mezzo",
    photo: "./photos/Team/Varsha_Arun.jpg"
  },
  {
    firstName: "Viha",
    lastName: "Chakrapani",
    part: "Soprano",
    photo: "./photos/Team/Viha_Chakrapani.jpg"
  },
  {
    firstName: "Yara",
    lastName: "Changyit-Levin",
    part: "Alto",
    photo: "./photos/Team/Yara_Changyit-Levin.jpg",
    objectPosition: "50% 0%"
  }
];

export default function Team() {
  return (
    <div className="bg-kranti-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-4 bg-gradient-to-b from-kranti-black via-kranti-navy/30 to-kranti-purple/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h1 className="font-bold text-5xl md:text-6xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Team
            </h1>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="mb-4">
                  <div className="w-96 h-96 mx-auto rounded-lg overflow-hidden transition-all duration-300 shadow-lg">
                    <img 
                      src={member.photo} 
                      alt={`${member.firstName} ${member.lastName} portrait`}
                      className="w-full h-full object-cover"
                      style={member.objectPosition ? { objectPosition: member.objectPosition } : undefined}
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-4xl text-white font-bold flex items-center justify-center w-full h-full bg-gradient-to-br from-kranti-navy/40 to-kranti-purple/20" style="font-family: 'Playfair Display', serif">${member.firstName[0]}${member.lastName[0]}</span>`;
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-2xl text-gray-200 mb-1 group-hover:text-gray-300 transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {member.firstName} {member.lastName}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bold text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Alumni
          </h2>
          <div className="text-gray-400 text-sm italic space-y-1">
            <p><span className="text-kranti-gold">2026:</span> Viha Chakrapani, Sidharth Raghavan, Rohit Thapa, Yara Changyit-Levin, Hasitha Putcha</p>
            <p><span className="text-kranti-gold">2025:</span> Avi Mehta, Sharada Vishwanath, Shreya Raman, Hassan Sohail, Kavya Velliangiri, Julie Alan, Varsha Arun</p>
            <p><span className="text-kranti-gold">2024:</span> Sayantika Roy, Sharanya Parvathaneni, Sangeeta Koilada</p>
            <p><span className="text-kranti-gold">2023:</span> Manasi Prasant, Mihir Chakravarthi, Rahul Swaminathan, Niranjan Behera, Trisha Palaka, Sahana Kumar, Ria Datwani, Jay Aswala, Parijat Banerjee</p>
            <p><span className="text-kranti-gold">2022:</span> Pratiksha Boinapally, Ajay Ananthakrishnan, Sonia Sukumar</p>
            <p><span className="text-kranti-gold">2021:</span> Aashay Patel, Sid Kavuturu, Ramya Reddy, Alisha Kodibagkar, Divya Anand</p>
            <p><span className="text-kranti-gold">2020 - 2003:</span> Jessica Rana, Aishwarya Pradeep, Varun Ventakesh, Shivansh Sachdeva, Vidur Kailash, Anuja Shah, Nik Moondra, Sai Pinni, Tanay Agarwal, Ronak Mehta, Nirmal Krishnan, Abhilash Suresh, Ronak Desai and many more!</p>
          </div>
        </div>
      </section>

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