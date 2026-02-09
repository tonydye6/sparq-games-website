import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import crownULogo from '@assets/crown_u_wordmark_1749685061296.png';
import crownUSeasonsImg from '@assets/Crown_U_Seasons.png';

const CrownUPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Crown U - Multiplayer Party Knockout Mobile Game | Sparq Games</title>
        <meta name="description" content="Crown U: The ultimate multiplayer party knockout mobile game featuring licensed NCAA athletes, universities, and stadiums. 16 players battle through elimination rounds in cross-sport competition. Download now!" />
        <meta property="og:title" content="Crown U - Multiplayer Party Knockout Mobile Game | Sparq Games" />
        <meta property="og:description" content="Crown U: The ultimate multiplayer party knockout mobile game featuring licensed NCAA athletes, universities, and stadiums. 16 players battle through elimination rounds in cross-sport competition." />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="Crown U, multiplayer party knockout, NCAA mobile game, college athlete gaming, university sports game, mobile gaming app, party game, knockout tournament" />
        
        {/* Structured Data for Crown U Game */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoGame",
            "name": "Crown U",
            "description": "Multiplayer party knockout mobile game featuring licensed NCAA athletes, universities, and stadiums in cross-sport competition",
            "genre": "Multiplayer Party Knockout",
            "gameItem": "NCAA Athletes, University Branding, Stadium Environments",
            "numberOfPlayers": "16 players per match",
            "applicationCategory": "GameApplication",
            "operatingSystem": ["iOS", "Android"],
            "publisher": {
              "@type": "Organization",
              "name": "Sparq Games"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-background">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Crown U Stadium"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold mb-8 shadow-lg">
              <i className="fas fa-crown mr-2"></i>
              The Ultimate Party Knockout Game
            </div>
            
            <div className="mb-6 flex justify-center">
              <img 
                src={crownULogo} 
                alt="Crown U Logo" 
                className="h-16 lg:h-24 w-auto"
              />
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              16 players enter. Only 1 survives. Battle with licensed NCAA athletes across authentic university stadiums in the most exciting multiplayer party knockout experience on mobile.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Join Beta Waitlist
                <i className="fas fa-gamepad ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-display mb-6">
              How <span className="text-primary font-neodex">Crown U</span> Works
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the thrill of competition as you battle through elimination rounds in authentic college environments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-24 h-24 bg-gradient-to-r from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">16</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Players Enter</h3>
              <p className="text-gray-400 text-lg">
                Start each match with 16 players from around the world, each controlling their favorite NCAA athlete
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-trophy text-3xl text-black"></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">Elimination Rounds</h3>
              <p className="text-gray-400 text-lg">
                Survive through multiple knockout rounds across different sports challenges and stadium environments
              </p>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Champion Crowned</h3>
              <p className="text-gray-400 text-lg">
                The final 1v1 showdown determines the Crown U champion with exclusive rewards and recognition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Sport Gameplay */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl font-display mb-6">
                <span className="text-primary font-neodex">Cross-Sport</span> Competition
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Crown U breaks barriers by bringing together athletes from different sports in unified competition. Football players can face off against basketball stars, while soccer athletes compete with baseball champions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-football-ball text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Football Stadiums</h4>
                    <p className="text-gray-400">Battle in iconic college football stadiums with authentic crowd atmosphere</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-basketball-ball text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Basketball Arenas</h4>
                    <p className="text-gray-400">Compete in legendary college basketball venues with March Madness energy</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                    <i className="fas fa-baseball-ball text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Baseball Fields</h4>
                    <p className="text-gray-400">Experience the diamond with college baseball's most historic ballparks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="bg-muted rounded-xl overflow-hidden">
                <img 
                  src={crownUSeasonsImg} 
                  alt="Crown U Seasons - Cross-Sport Competition"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensed Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-display mb-6">
              <span className="text-primary font-neodx">Authentic</span> Licensed Content
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Play with real NCAA athletes, authentic university branding, and licensed stadium environments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-muted/50 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Athletes</h3>
              <p className="text-gray-400">Play as licensed NCAA athletes with authentic names, likenesses, and abilities</p>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-university text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">University Brands</h3>
              <p className="text-gray-400">Compete with official university logos, colors, and mascots</p>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-building text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stadium Venues</h3>
              <p className="text-gray-400">Battle in meticulously recreated college stadiums and arenas</p>
            </div>

            <div className="text-center p-6 bg-muted/50 rounded-xl" data-aos="fade-up" data-aos-delay="400">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-dollar-sign text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">NIL Support</h3>
              <p className="text-gray-400">Athletes earn revenue through authentic NIL partnerships and gameplay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-display mb-6 text-white">
              Ready to <span className="text-yellow-400 font-neodx">Claim Your Crown</span>?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Join thousands of players in the ultimate college sports gaming experience. Sign up for early access to Crown U today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/">
                <Button 
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-8 py-4 shadow-xl transition-all duration-300"
                >
                  Join Beta Waitlist
                  <i className="fas fa-crown ml-2"></i>
                </Button>
              </Link>
              
              <Link href="/about">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-4 transition-all duration-300"
                >
                  Learn More About Sparq
                  <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CrownUPage;