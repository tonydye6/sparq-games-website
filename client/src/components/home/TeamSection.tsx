import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  logos?: { name: string; image: string }[];
  delay: number;
}

const TeamMember = ({ name, role, bio, image, logos = [], delay }: TeamMemberProps) => {
  return (
    <div 
      className="group bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image}
          alt={name} 
          className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
          style={{ 
            imageRendering: 'auto'
          }}
          loading="eager"
          srcSet={`${image} 1x, ${image} 2x`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {logos.map((logo, index) => (
            <div key={index} className="h-16 w-16 bg-gradient-to-br from-background/80 to-muted/60 backdrop-blur-md rounded-xl p-1 flex items-center justify-center shadow-lg border border-primary/30 group-hover:scale-110 transition-transform duration-300">
              <img src={logo.image} alt={logo.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 relative">
        <h3 className="text-2xl font-neodex font-bold mb-2 text-primary transform -skew-x-12 group-hover:text-white transition-colors duration-300">{name.toUpperCase()}</h3>
        <p className="text-primary font-semibold mb-4 text-lg group-hover:text-cyan-200 transition-colors duration-300">{role}</p>
        <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">{bio}</p>
        
        {/* Decorative bottom accent */}
        <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jan Horsfall",
      role: "Chairman, CEO & Founder",
      bio: "Led Turbine Games from $16M loss to $55M revenue and Warner Bros acquisition.",
      image: "./images/team/stylized/Horsfall_Stylized.png",
      logos: [
        { name: "Warner Bros", image: "./images/logos/wb.png" },
        { name: "Turbine", image: "./images/logos/turbine.png" }
      ]
    },
    {
      name: "Tony Dye",
      role: "Founder, President-Product",
      bio: "Former UCLA athlete and NFL player for the Bengals and Raiders.",
      image: "./images/team/stylized/Dye_Stylized.png",
      logos: [
        { name: "Bengals", image: "./images/logos/bengals.png" },
        { name: "Raiders", image: "./images/logos/raiders.png" }
      ]
    },
    {
      name: "Sean Embree",
      role: "BOD Governance Committee Chair",
      bio: "On the '90 national champion CU Buffs. Brings 27 years of coaching experience at HS, college, pro levels. Won eight titles as a player and coach.",
      image: "./images/team/stylized/Embree_Stylized.png",
      logos: [
        { name: "Colorado Buffs", image: "./images/logos/buffs.png" },
        { name: "Miami Dolphins", image: "./images/logos/dolphins.png" }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
            Meet Our <span className="text-primary font-neodex transform -skew-x-6 inline-block ml-3">FOUNDERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
          
          <div className="bg-background/30 backdrop-blur-sm p-10 lg:p-12 rounded-3xl border border-primary/30 shadow-2xl max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <p className="text-xl text-gray-200 leading-relaxed font-medium">
              WE KNOW THE GRIT AND PASSION IT TAKES TO BE A COLLEGE ATHLETE—BECAUSE WE'VE BEEN THERE. WHEN NAME, IMAGE, AND LIKENESS (NIL) RULES OPENED DOORS IN 2022, WE SEIZED THE CHANCE TO GIVE BACK. THAT'S WHY WE FOUNDED SPARQ GAMES: TO HELP ATHLETES BUILD THEIR BRANDS THROUGH A SERIES OF SPORTS-BASED MOBILE VIDEO GAMES. OUR SUCCESS IS THEIR SUCCESS—THOUSANDS OF MEN AND WOMEN WILL PROFIT FROM THE USE OF THEIR NAMES AND IMAGES, FORGING A NEW PATH IN THE WORLD OF COLLEGIATE ATHLETICS.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={member.name}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              delay={index * 150}
            />
          ))}
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <Link href="/about#team">
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1">
              View Full Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
