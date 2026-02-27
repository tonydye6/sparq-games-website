import useReveal from '@/hooks/use-reveal';
import footballPlayerImg from '@assets/footbalplayer.png';
import softballPlayerImg from '@assets/softballplayer.png';
import basketballPlayerImg from '@assets/basketballplayer.png';

interface CredibilityCardProps {
  icon: string;
  title: string;
  description: string;
  delay: string;
  characterImage?: string;
}

const CredibilityCard = ({ icon, title, description, delay, characterImage }: CredibilityCardProps) => {
  const ref = useReveal();

  return (
    <div 
      ref={ref} 
      className="group relative bg-gradient-to-br from-muted/80 to-background/60 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-primary/20 hover:border-primary/40 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.2)] reveal overflow-hidden"
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Character image - perfectly sized to fit card height */}
      {characterImage && (
        <div className="absolute top-0 right-0 h-full w-auto opacity-70 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105 overflow-hidden rounded-r-2xl">
          <img 
            src={characterImage} 
            alt={`${title} character`}
            className="h-full w-auto object-contain object-bottom filter drop-shadow-lg"
          />
        </div>
      )}
      
      {/* Icon with enhanced styling */}
      <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
        <i className={`${icon} text-3xl text-white`}></i>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
};

const CredibilitySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
            <span className="text-cyan-400 font-neodex">INDUSTRY VETERANS</span>{" "}
            <span className="ml-4 block lg:inline">Building the Future</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            From Turbine Games' turnaround to Warner Bros acquisition, our team has a proven track record of transforming gaming companies and creating industry-leading experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <CredibilityCard 
            icon="fas fa-trophy"
            title="Proven Leadership"
            description="Led Turbine Games from $16M loss to $55M revenue, acquired by Warner Bros for $150M+"
            delay="100"
            characterImage={footballPlayerImg}
          />
          
          <CredibilityCard 
            icon="fas fa-handshake"
            title="Strategic Partnerships"
            description="Official CLC licensing, Unity partnership, Sensor Tower data collaboration"
            delay="200"
            characterImage={softballPlayerImg}
          />
          
          <CredibilityCard 
            icon="fas fa-brain"
            title="AI Research"
            description="MIT Sloan CSAIL collaboration on AI-driven game development, revolutionary machine learning optimization platform"
            delay="300"
            characterImage={basketballPlayerImg}
          />
        </div>
        
        {/* Enhanced partner logos section */}
        <div className="bg-muted/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-primary/10">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-2xl lg:text-3xl font-display mb-4 text-white">Trusted Partners</h3>
            <p className="text-gray-400">Working with industry leaders to deliver exceptional gaming experiences</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { name: 'CLC', logo: './images/logos/clc-logo.png', alt: 'CLC - Learfield IMG College' },
              { name: 'Unity', logo: './images/logos/unity-logo.png', alt: 'Unity Technologies' },
              { name: 'Sensor Tower', logo: './images/logos/sensor-tower-logo.png', alt: 'Sensor Tower' },
              { name: 'MIT', logo: './images/logos/mit-logo.png', alt: 'MIT - Massachusetts Institute of Technology' }
            ].map((partner, index) => (
              <div 
                key={partner.name}
                className="flex items-center justify-center p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <img 
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-h-16 w-auto filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
