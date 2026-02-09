
import { Button } from '@/components/ui/button';
import useScrollTo from '@/hooks/use-scroll-to';
import { Link } from 'wouter';

const HeroSection = () => {
  const scrollTo = useScrollTo();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          className="w-full h-full object-cover opacity-40"
          onLoadedData={(e) => {
            const video = e.target as HTMLVideoElement;
            video.play().catch(() => {});
          }}
        >
          <source src="/videos/Sparq_Hero_Video_Small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <h1 className="text-5xl lg:text-7xl font-display mb-6 leading-tight">
            <span className="text-cyan-400 font-neodex">AI-POWERED</span> Sports Gaming Studio
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">Revolutionary mobile gaming studio connecting college athletes with fans through Crown U - featuring authentic NIL partnerships, NCAA licensing, and innovative gameplay experiences.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button 
              size="lg"
              onClick={() => scrollTo('beta-signup')}
              className="bg-gradient-to-r from-primary to-primary-dark text-white font-semibold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Join Beta Waitlist
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
            
            <Link href="/games">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-4 transition-all duration-300"
              >
                Explore Games
                <i className="fas fa-gamepad ml-2"></i>
              </Button>
            </Link>
          </div>
          
          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" data-aos="fade-up" data-aos-delay="300">
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">For Athletes</h3>
              <p className="text-gray-300">Monetize your NIL through authentic gaming experiences and revenue sharing</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">For Fans</h3>
              <p className="text-gray-300">Play with your favorite athletes in Crown U's multiplayer knockout tournaments</p>
            </div>
            
            <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-university text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">For Universities</h3>
              <p className="text-gray-300">Engage fanbases through licensed content and real-time analytics insights</p>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" data-aos="fade-up" data-aos-delay="600">
        <div className="animate-bounce">
          <i className="fas fa-chevron-down text-white text-2xl opacity-70"></i>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
