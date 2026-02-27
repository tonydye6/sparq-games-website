import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

interface TechFeatureProps {
  icon: string;
  title: string;
  description: string;
  delay: string;
}

const TechFeature = ({ icon, title, description, delay }: TechFeatureProps) => {
  return (
    <div 
      className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <i className={`${icon} text-2xl text-white`}></i>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">{title}</h3>
          <p className="text-gray-200 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">{description}</p>
        </div>
      </div>
      
      {/* Decorative bottom accent */}
      <div className="mt-6 w-full h-1 bg-gradient-to-r from-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
    </div>
  );
};

const TechnologySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
      {/* Enhanced background with animated elements */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Technology Background"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20" data-aos="fade-up">
          <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
            <span className="font-neodex text-white">AI-POWERED</span>{" "}
            <span className="block lg:inline ml-0 lg:ml-4">Game Development Platform</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-cyan-200 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
            Revolutionary technology transforming how sports games are created, distributed, and experienced by millions of fans worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
          <TechFeature 
            icon="fas fa-rocket"
            title="SparqPlug™ Engine"
            description="Proprietary user acquisition platform with AI-driven optimization and predictive LTV modeling"
            delay="100"
          />
          
          <TechFeature 
            icon="fas fa-chart-line"
            title="AI-Driven Analytics"
            description="Advanced machine learning models optimize game mechanics, player retention, and monetization strategies"
            delay="200"
          />
          
          <TechFeature 
            icon="fas fa-university"
            title="Advanced Analytics"
            description="Real-time insights platform for universities to understand and engage their fanbase"
            delay="300"
          />
          
          <TechFeature 
            icon="fas fa-link"
            title="Sparq Locker Room™"
            description="Seamless Web3 integration connecting digital rewards with real-world fan experiences"
            delay="400"
          />
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="500">
          <Link href="/technology">
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1">
              Explore Our Technology
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
