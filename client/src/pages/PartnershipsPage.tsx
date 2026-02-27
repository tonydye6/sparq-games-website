import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import partnershipsVid1 from '@assets/PartnershipsPageVid1_1749106708048.mp4';
import partnershipsVid3 from '@assets/\'PartnershipsPageVid3.mp4\'_1749107492323.mp4';

const PartnershipsPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const PartnerCard = ({ name, description, logo, website, category }: {
    name: string;
    description: string;
    logo: string;
    website: string;
    category: string;
  }) => (
    <div className="bg-background p-6 rounded-xl hover:shadow-lg transition-shadow" data-aos="fade-up">
      <div className="flex items-center justify-center h-20 mb-4">
        <img src={logo} alt={`${name} Logo`} className="max-h-16 max-w-full object-contain" />
      </div>
      <div className="text-center">
        <span className="inline-block px-3 py-1 bg-primary bg-opacity-20 text-primary text-xs font-medium rounded-full mb-3">
          {category}
        </span>
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <a 
          href={website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 text-sm font-medium"
        >
          Visit Website →
        </a>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Strategic Partnerships - Sparq Inc.</title>
        <meta name="description" content="Discover Sparq Inc.'s strategic partnerships across Web3, sports, technology, and collegiate sectors. Join our ecosystem of innovation." />
        <meta property="og:title" content="Strategic Partnerships - Sparq Inc." />
        <meta property="og:description" content="Discover Sparq Inc.'s strategic partnerships across Web3, sports, technology, and collegiate sectors. Join our ecosystem of innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sparqgames.com/partnerships" />
        <meta property="og:image" content="https://www.sparqgames.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparqgames" />
        <meta name="twitter:image" content="https://www.sparqgames.com/images/og-image.png" />
        <link rel="canonical" href="https://www.sparqgames.com/partnerships" />
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
                src={partnershipsVid3}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={partnershipsVid1}
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
              <span className="text-cyan-400 font-neodex">STRATEGIC</span> Partnerships
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Building the future of collegiate sports gaming through strategic alliances across Web3, technology, and sports industries
            </p>
            
            <Link href="/contact#partnership-form">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-white shadow-lg">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-4">Our <span className="text-cyan-400 font-neodex">PARTNERSHIP</span> Ecosystem</h2>
            <p className="text-lg text-gray-300">Collaborating with industry leaders across technology, sports, and Web3 to create unprecedented experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnerCard
              name="Community3"
              description="Community3 specializes in managing and growing Web3 communities, offering services such as community management, event creation, and moderation to help projects engage and retain their audiences effectively."
              logo="./images/partners/community3.png"
              website="https://www.community3.io/"
              category="Web3 Strategy"
            />
            
            <PartnerCard
              name="Dverse"
              description="Advisory, strategy, and communications firm based in Dubai and Bali with global presence for Web3 acceleration"
              logo="./images/partners/dverse.png"
              website="https://Dverse.xyz"
              category="Strategy & Advisory"
            />
            
            <PartnerCard
              name="Inferno Labs"
              description="Leader in Web3 and influencer marketing, enhancing brand awareness and driving community growth for $SPARQ"
              logo="./images/partners/inferno-labs.png"
              website="https://infernolabs.xyz"
              category="Marketing & Growth"
            />
            
            <PartnerCard
              name="Sensor Tower"
              description="Mobile analytics leader providing critical metrics for success in the competitive mobile gaming industry"
              logo="./images/partners/sensor-tower.png"
              website="https://sensortower.com"
              category="Analytics & Data"
            />
            
            <PartnerCard
              name="Collegiate Licensing Company"
              description="Uniquely positioned to deliver consumer connections and brand visibility for collegiate institutions"
              logo="./images/partners/clc.png"
              website="https://clc.com"
              category="Collegiate Licensing"
            />
            
            <PartnerCard
              name="The BrandR Group"
              description="Full-service NIL agency representing 12,000+ student-athletes at 80+ universities for licensing opportunities"
              logo="./images/partners/brandr.png"
              website="https://thebrandrgroup.com/"
              category="NIL & Athletes"
            />
            
            <PartnerCard
              name="OpenDorse"
              description="The best NIL deal marketplace for athletes to build and monetize their name, image, and likeness value"
              logo="./images/partners/opendorse.png"
              website="https://Opendorse.com"
              category="NIL Marketplace"
            />
            
            <PartnerCard
              name="Meta Law"
              description="Web3 legal solutions specialist ensuring compliance and regulatory readiness for blockchain projects"
              logo="./images/partners/meta-law.png"
              website="https://www.metalaw.ca/"
              category="Legal & Compliance"
            />
            
            <PartnerCard
              name="Teknos"
              description="Experienced valuation firm serving technology companies and their venture capital backers"
              logo="./images/partners/teknos.png"
              website="https://www.teknosassociates.com/"
              category="Valuation & Finance"
            />
            
            <PartnerCard
              name="VF Labs"
              description="Strategic implementation of blockchain technology & virtual financial assets across commercial sectors"
              logo="./images/partners/vf-labs.png"
              website="https://www.vflabs.com/"
              category="Blockchain Technology"
            />
            
            <PartnerCard
              name="Lux Labs"
              description="Development studio specializing in EVM compatible blockchain applications, smart contracts, and dApps"
              logo="./images/partners/lux-labs.png"
              website="https://www.luxlabs.io/"
              category="Development"
            />
            
            <PartnerCard
              name="Crowdcreate"
              description="Influencer marketing and investor outreach specialist connecting $SPARQ with key stakeholders"
              logo="./images/partners/crowdcreate.png"
              website="https://crowdcreate.us/web3-marketing-agency/"
              category="Marketing & Outreach"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-4"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">PARTNERSHIP</span> Categories</h2>
            <p className="text-lg text-gray-300">Our diverse partner network spans multiple industries and expertise areas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Web3 & Blockchain */}
            <div className="relative bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-blue-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-500/30 shadow-2xl hover:shadow-blue-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-lg"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-cube text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wide mb-4">Web3 & Blockchain</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Strategic partners in tokenization, smart contracts, and decentralized technologies</p>
              </div>
            </div>
            
            {/* Collegiate Sports */}
            <div className="relative bg-gradient-to-br from-green-500/20 via-green-500/10 to-green-500/5 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 shadow-2xl hover:shadow-green-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="absolute top-0 left-0 w-22 h-22 bg-gradient-to-br from-green-500/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-26 h-26 bg-gradient-to-tl from-green-400/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-university text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-green-400 uppercase tracking-wide mb-4">Collegiate Sports</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Universities, licensing companies, and NIL platforms enabling authentic experiences</p>
              </div>
            </div>
            
            {/* Technology & Analytics */}
            <div className="relative bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-purple-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-purple-500/15 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-chart-line text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-purple-400 uppercase tracking-wide mb-4">Technology & Analytics</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Data analytics, mobile gaming insights, and development expertise</p>
              </div>
            </div>
            
            {/* Legal & Compliance */}
            <div className="relative bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-500/5 backdrop-blur-sm p-8 rounded-3xl border border-orange-500/30 shadow-2xl hover:shadow-orange-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="absolute top-0 left-0 w-26 h-26 bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-30 h-30 bg-gradient-to-tl from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-balance-scale text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-orange-400 uppercase tracking-wide mb-4">Legal & Compliance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Regulatory guidance, valuation services, and legal framework development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl lg:text-4xl font-display mb-6">Why <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">PARTNER</span> With Sparq?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join an innovative ecosystem that's revolutionizing collegiate sports gaming through cutting-edge technology and strategic collaboration.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1">
                    <i className="fas fa-rocket text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Innovation Leadership</h4>
                    <p className="text-gray-400">
                      Be part of the first officially licensed NCAA sports gaming platform with Web3 integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Market Access</h4>
                    <p className="text-gray-400">
                      Reach millions of college sports fans and gaming enthusiasts through our expanding platform.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center mt-1">
                    <i className="fas fa-handshake text-white"></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Strategic Growth</h4>
                    <p className="text-gray-400">
                      Collaborate with industry leaders to shape the future of sports gaming and Web3 technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <img 
                src="./images/huddle-background.png" 
                alt="Team Huddle Partnership" 
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="./images/background2.png" 
            alt="Partnership Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6">Join Our <span className="text-white font-neodex transform -skew-x-6 inline-block">PARTNER</span> Network</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              Ready to be part of the future of collegiate sports gaming? Let's explore how we can create value together.
            </p>
            
            <Link href="/contact#partnership-form">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg">
                Start Partnership Discussion
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnershipsPage;