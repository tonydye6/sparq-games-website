import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import techVid1 from '@assets/TechnologyPageVid1_1749106532932.mp4';
import techVid2 from '@assets/TechnologyPageVid2_1749106532932.mp4';

const TechnologyPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Technology - Sparq Inc. AI & Game Development</title>
        <meta name="description" content="Explore Sparq Inc.'s cutting-edge AI technology and game development platform revolutionizing collegiate sports gaming." />
        <meta property="og:title" content="Technology - Sparq Inc. AI & Game Development" />
        <meta property="og:description" content="Explore Sparq Inc.'s cutting-edge AI technology and game development platform revolutionizing collegiate sports gaming." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sparqinc.com/technology" />
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
                src={techVid1}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={techVid2}
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
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-8">
              <span className="text-cyan-400 font-neodex">AI-POWERED</span>
              <span className="block lg:inline ml-0 lg:ml-4">Technology Platform</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Revolutionary technology that transforms how sports games are created, distributed, and experienced through cutting-edge AI algorithms and data science innovation.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
              Our <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">TECHNOLOGY</span>Stack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">At Sparq Inc., we've built a proprietary technology platform that leverages cutting-edge AI and data science to revolutionize gaming and support our development teams with unprecedented precision and scale.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <h3 className="text-2xl font-display mb-6"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">SPARQPLUG™</span>Engine</h3>
              <p className="text-lg text-gray-300 mb-6">
                Our proprietary user acquisition platform combines AI-driven optimization with predictive LTV modeling to acquire high-value users at scale.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Automated creative optimization across platforms</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Real-time bid management with predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">User segmentation and targeted acquisition</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Cross-channel attribution and optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="bg-muted rounded-xl overflow-hidden h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="SparqPlug Engine" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
            <div data-aos="fade-right">
              <div className="bg-muted rounded-xl overflow-hidden h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="AI Game Analysis" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h3 className="text-2xl font-display mb-6"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">AI-POWERED</span>Game Development</h3>
              <p className="text-lg text-gray-300 mb-6">
                Revolutionary AI-driven development platform reduces game creation costs by 40% while accelerating publishing timelines and enhancing player engagement.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Real collegiate sports data and athlete integration</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Authentic university branding and stadium environments</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">NIL compliance and athlete monetization</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Blockchain-enabled transparent payment system</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24">
            <div className="order-2 lg:order-1" data-aos="fade-right">
              <h3 className="text-2xl font-display mb-6"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">SPARQ LOCKER ROOM™</span></h3>
              <p className="text-lg text-gray-300 mb-6">
                Our seamless Web3 integration platform connects digital rewards with real-world fan experiences without the typical complexity of blockchain technology.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Transparent reward system with real-world value</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Exclusive collectibles and digital memorabilia</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Fan engagement through digital ownership</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                  <span className="text-gray-300">Simplified onboarding, NO web3 jargon. Just play, collect, & show off</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 lg:order-2" data-aos="fade-left">
              <div className="bg-muted rounded-xl overflow-hidden h-full flex items-center justify-center">
                <img 
                  src="./images/Locker_Character_Select.png" 
                  alt="Sparq Locker Room" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 lg:py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">PARTNER</span>With Us</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Interested in leveraging our technology for your university or sports organization? Let's discuss how we can work together.
            </p>
            
            <a href="/partnerships" className="inline-block px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:shadow-xl transition duration-300">
              Explore Partnership Opportunities
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyPage;
