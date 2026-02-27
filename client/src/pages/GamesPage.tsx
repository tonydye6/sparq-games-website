import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import gamesVid1 from '@assets/GamesPageVid1_1749106628076.mp4';
import gamesVid2 from '@assets/GamesPageVid2_1749106628076.mp4';

const GamesPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const GameFeature = ({ icon, text }: { icon: string, text: string }) => (
    <div className="flex items-center space-x-3 bg-muted p-4 rounded-lg">
      <i className={`${icon} text-primary`}></i>
      <span>{text}</span>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Crown U! - Collegiate Sports Gaming | Sparq Inc.</title>
        <meta name="description" content="Experience Crown U!, the ultimate NCAA sports gaming platform featuring real universities, athletes, and stadiums. Join the beta waitlist today!" />
        <meta property="og:title" content="Crown U! - Collegiate Sports Gaming | Sparq Inc." />
        <meta property="og:description" content="Experience Crown U!, the ultimate NCAA sports gaming platform featuring real universities, athletes, and stadiums. Join the beta waitlist today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sparqgames.com/games" />
        <meta property="og:image" content="https://www.sparqgames.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparqgames" />
        <meta name="twitter:image" content="https://www.sparqgames.com/images/og-image.png" />
        <link rel="canonical" href="https://www.sparqgames.com/games" />
      </Helmet>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-75 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-15"></div>
          
          {/* Side by side videos */}
          <div className="flex h-full w-full">
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={gamesVid1}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={gamesVid2}
              />
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5 z-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8" data-aos="fade-up">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
              <span className="text-cyan-400 font-neodex mr-2">CROWN U!</span>- The <span className="font-neodex mr-2 text-[#df2020]">ULTIMATE</span>NCAA Gaming Experience
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Multi-player party knockout gameplay featuring real NCAA athletes, universities, and stadiums
            </p>
            
            <Link href="/contact#beta-signup">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white shadow-lg">
                Join Beta Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-display mb-6">Experience <span className="font-neodex transform -skew-x-6 inline-block mr-2 text-[#df2020]">CROWN U!</span></h2>
              <p className="text-lg text-gray-300 mb-8">Crown U! is the first officially licensed NCAA multi-sport game, bringing the excitement of collegiate sports to your mobile device. Compete against friends and rivals in a fast-paced party knockout game, featuring your favorite universities and athletes.</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <GameFeature icon="fas fa-users" text="16-Player Tournaments" />
                <GameFeature icon="fas fa-football-ball" text="Cross-Sport Competition" />
                <GameFeature icon="fas fa-medal" text="Real NCAA Stadiums" />
                <GameFeature icon="fas fa-star" text="E-for-Everyone Rating" />
                <GameFeature icon="fas fa-mobile-alt" text="Mobile-First Design" />
                <GameFeature icon="fas fa-gift" text="In-Game Rewards" />
                <GameFeature icon="fas fa-trophy" text="Weekly Challenges" />
                <GameFeature icon="fas fa-university" text="700+ Universities" />
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <img 
                src="./images/crown-u-seasons.png" 
                alt="Crown U! Game Seasons" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
              
              <div className="absolute -top-4 -right-4 bg-primary text-white py-1 px-3 rounded-full shadow-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-gamepad"></i>
                  <span className="text-sm font-medium">Multi-Sport</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-primary text-white py-1 px-3 rounded-full shadow-lg">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-medal"></i>
                  <span className="text-sm font-medium">NCAA Licensed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-4"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">CROWN U!</span>Features</h2>
            <p className="text-lg text-gray-300">Crown U! offers an immersive collegiate sports gaming experience like never before</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Multiple Sports */}
            <div className="relative bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-blue-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30 shadow-2xl hover:shadow-blue-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-blue-500/15 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-futbol text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-blue-400 uppercase tracking-wide">Multiple Sports</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Compete using characters from major collegiate sports including football, basketball, baseball, soccer, and more, all in revolutionary style.
                </p>
              </div>
            </div>
            
            {/* Multiplayer Action */}
            <div className="relative bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-purple-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-0 w-30 h-30 bg-gradient-to-br from-purple-500/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-400/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-purple-400 uppercase tracking-wide">Multiplayer Action</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Challenge friends to head-to-head matches or join 16-player knockout tournaments for the ultimate bragging rights. Real-world rivalries, in the palm of your hand.
                </p>
              </div>
            </div>
            
            {/* Rewards & Collectibles */}
            <div className="relative bg-gradient-to-br from-yellow-500/20 via-yellow-500/10 to-yellow-500/5 backdrop-blur-sm p-8 rounded-3xl border border-yellow-500/30 shadow-2xl hover:shadow-yellow-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute top-0 right-0 w-26 h-26 bg-gradient-to-bl from-yellow-500/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-yellow-400/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-trophy text-white"></i>
                  </div>
                  <h3 className="text-xl font-bold text-yellow-400 uppercase tracking-wide">Rewards & Collectibles</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Earn exclusive digital collectibles and real-world experiences through the Sparq Locker Room™.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">DEVELOPMENT</span>Timeline</h2>
          </div>
          
          <div className="max-w-4xl mx-auto mb-8 relative timeline-bar">
            <div className="grid grid-cols-4 relative z-10">
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="w-10 h-10 rounded-full bg-primary mb-3 mx-auto flex items-center justify-center">
                  <i className="fas fa-code text-white"></i>
                </div>
                <div className="text-sm text-gray-400 mb-1">Aug 2025</div>
                <div className="text-lg font-medium">Alpha</div>
                <p className="text-xs text-gray-500 mt-2">Internal testing begins</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-primary mb-3 mx-auto flex items-center justify-center">
                  <i className="fas fa-vial text-primary"></i>
                </div>
                <div className="text-sm text-gray-400 mb-1">Nov 2025</div>
                <div className="text-lg font-medium">Beta</div>
                <p className="text-xs text-gray-500 mt-2">Limited public access</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-primary mb-3 mx-auto flex items-center justify-center">
                  <i className="fas fa-rocket text-primary"></i>
                </div>
                <div className="text-sm text-gray-400 mb-1">Jan 2026</div>
                <div className="text-lg font-medium">Soft Launch</div>
                <p className="text-xs text-gray-500 mt-2">Limited regions</p>
              </div>
              
              <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-primary mb-3 mx-auto flex items-center justify-center">
                  <i className="fas fa-flag-checkered text-primary"></i>
                </div>
                <div className="text-sm text-gray-400 mb-1">Mar 2026</div>
                <div className="text-lg font-medium">Full Launch</div>
                <p className="text-xs text-gray-500 mt-2">Global release</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="./images/background2.png" 
            alt="Crown U Gaming Scene" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6">Be Among the <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">FIRST</span></h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Join our exclusive beta program and help shape the future of collegiate sports gaming. Limited spots available!
            </p>
            
            <Link href="/contact#beta-signup">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg">
                Secure Your Beta Access
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default GamesPage;
