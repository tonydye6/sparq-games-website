import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const UniversityLogo = ({ name, index }: { name: string, index: number }) => {
  const getLogoConfig = (universityName: string) => {
    const configs = {
      'Florida': { 
        image: './images/logos/florida-gators.png',
        fullName: 'University of Florida Gators'
      },
      'Utah': { 
        image: './images/logos/utah-utes.png',
        fullName: 'University of Utah Utes'
      },
      'Cal': { 
        image: './images/logos/cal-bears.png',
        fullName: 'UC Berkeley Golden Bears'
      },
      'UNC': { 
        image: './images/logos/unc-tarheels.png',
        fullName: 'University of North Carolina Tar Heels'
      },
      'Washington': { 
        image: './images/logos/washington-huskies.png',
        fullName: 'University of Washington Huskies'
      },
      'SMU': { 
        image: './images/logos/smu-mustangs.png',
        fullName: 'Southern Methodist University Mustangs'
      },
      'Michigan State': { 
        image: './images/logos/michigan-state-spartans.png',
        fullName: 'Michigan State University Spartans'
      }
    };
    return configs[universityName as keyof typeof configs] || { image: '', fullName: name };
  };

  const config = getLogoConfig(name);
  
  return (
    <div 
      className="group relative bg-gradient-to-br from-background/90 via-muted/80 to-background/70 backdrop-blur-sm rounded-3xl p-8 flex items-center justify-center h-36 w-44 transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,255,255,0.2)] border border-primary/20 hover:border-primary/50 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={100 * index}
      title={config.fullName}
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
      <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
      
      {/* Logo container with enhanced styling */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <img 
          src={config.image} 
          alt={config.fullName}
          className={`max-w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500 ${name === 'SMU' ? 'max-h-28' : 'max-h-20'}`}
          style={{ 
            imageRendering: 'auto'
          }}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
    </div>
  );
};

const PartnershipSection = () => {
  const universities = [
    'Florida', 'Utah', 'Cal', 'UNC',
    'Washington', 'SMU', 'Michigan State'
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="./images/university-stadium.png"
          alt="University Stadium"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
            <span className="font-neodex text-primary">NCAA</span>{" "}
            <span className="block lg:inline ml-0 lg:ml-4">Partnerships</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 leading-relaxed">Current Crown U! pre-marketing university partners committed to revolutionary sports gaming experiences</p>
        </div>
        
        <div className="bg-background/30 backdrop-blur-sm rounded-3xl p-12 border border-primary/20 shadow-2xl mb-16">
          {/* First row with 3 logos centered */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-8 lg:mb-12">
            {universities.slice(0, 3).map((univ, index) => (
              <UniversityLogo key={univ} name={univ} index={index} />
            ))}
          </div>
          
          {/* Second row with 4 logos centered */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {universities.slice(3, 7).map((univ, index) => (
              <UniversityLogo key={univ} name={univ} index={index + 3} />
            ))}
          </div>
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <Link href="/partnerships">
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Explore Partnership Opportunities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
