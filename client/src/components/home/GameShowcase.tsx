import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

const GameFeature = ({ icon, text }: { icon: string, text: string }) => (
  <div className="group flex items-center space-x-4 bg-gradient-to-r from-muted/80 to-background/60 backdrop-blur-sm p-5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
      <i className={`${icon} text-white text-lg`}></i>
    </div>
    <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors duration-300">{text}</span>
  </div>
);

const TimelinePoint = ({ date, label, active }: { date: string, label: string, active: boolean }) => (
  <div className="text-center group">
    <div className={`w-8 h-8 rounded-full ${active ? 'bg-gradient-to-r from-primary to-primary-dark shadow-lg' : 'bg-muted border-2 border-primary'} mb-3 mx-auto transition-all duration-300 group-hover:scale-110 ${active ? 'animate-pulse' : ''}`}>
      {active && <div className="w-full h-full rounded-full bg-white/20 animate-ping"></div>}
    </div>
    <div className="text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">{date}</div>
    <div className="text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{label}</div>
  </div>
);

const GameShowcase = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-display mb-6 leading-tight">
              <span className="font-neodex text-primary transform -skew-x-6 inline-block mr-3">CROWN U!</span>™ 
              <span className="block mt-2">The Ultimate NCAA Gaming Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-6 rounded-full"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Multi-player party knockout gameplay featuring real NCAA athletes and universities in an immersive sports gaming experience</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <GameFeature icon="fas fa-users" text="16-Player Tournaments" />
              <GameFeature icon="fas fa-football-ball" text="Cross-Sport Competition" />
              <GameFeature icon="fas fa-medal" text="Real NCAA Stadiums" />
              <GameFeature icon="fas fa-star" text="E-for-Everyone Rating" />
            </div>
            
            <div className="mb-10 bg-muted/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-display mb-6 text-center text-white">Development Timeline</h3>
              <div className="grid grid-cols-5 relative">
                {/* Timeline connector line */}
                <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-muted"></div>
                <TimelinePoint date="Aug 2025" label="Project Kickoff" active={true} />
                <TimelinePoint date="Oct 2025" label="Alpha Start" active={false} />
                <TimelinePoint date="Mar 2026" label="Beta Launch" active={false} />
                <TimelinePoint date="May 2026" label="Soft Launch" active={false} />
                <TimelinePoint date="Aug 2026" label="Scheduled Launch" active={false} />
              </div>
            </div>
            
            <Link href="/games">
              <Button className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-xl text-white transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl hover:-translate-y-1">
                Learn More About Crown U!
              </Button>
            </Link>
          </div>
          
          <div className="relative" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-gradient-to-br from-muted/50 to-background/30 backdrop-blur-sm rounded-3xl p-8 border border-primary/30 shadow-2xl">
              <img 
                src="./images/crown-u-demo-image.png" 
                alt="Crown U! Game Demo" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 rounded-2xl shadow-xl border border-primary/30">
              <div className="flex items-center space-x-3">
                <i className="fas fa-gamepad text-lg"></i>
                <span className="font-semibold">Multi-Sport</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-dark to-primary text-white py-3 px-6 rounded-2xl shadow-xl border border-primary/30">
              <div className="flex items-center space-x-3">
                <i className="fas fa-medal text-lg"></i>
                <span className="font-semibold">NCAA Licensed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;
