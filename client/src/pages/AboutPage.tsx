import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import aboutVid1 from '@assets/AboutPageVid1_1749106344902.mp4';
import aboutVid2 from '@assets/AboutPageVid2_1749106344902.mp4';

const AboutPage = () => {
  const [showJobDetails, setShowJobDetails] = useState(false);
  
  useEffect(() => {
    // Re-init AOS to handle newly mounted components
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>About Sparq Inc. - Our Mission & Team</title>
        <meta name="description" content="Learn about Sparq Inc.'s mission to revolutionize sports gaming through AI innovation and our talented team of industry veterans." />
        <meta property="og:title" content="About Sparq Inc. - Our Mission & Team" />
        <meta property="og:description" content="Learn about Sparq Inc.'s mission to revolutionize sports gaming through AI innovation and our talented team of industry veterans." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sparqgames.com/about" />
        <meta property="og:image" content="https://www.sparqgames.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparqgames" />
        <meta name="twitter:image" content="https://www.sparqgames.com/images/og-image.png" />
        <link rel="canonical" href="https://www.sparqgames.com/about" />
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
                src={aboutVid1}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={aboutVid2}
              />
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5 z-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8" data-aos="fade-up">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-8">
              <span className="text-cyan-400 font-neodex">ABOUT</span>
              <span className="block lg:inline ml-0 lg:ml-4">Sparq Inc.</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Our mission is to revolutionize the gaming industry with cutting-edge AI technology, premium sports IP, and authentic athlete partnerships that create meaningful value for everyone involved.
            </p>
          </div>
        </div>
      </section>
      
      <section id="story" className="py-16 lg:py-24 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/50 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-display mb-6">
                The <span className="text-gradient font-neodex transform -skew-x-6 inline-block">SPARQ</span> Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Our Genesis */}
              <div className="relative bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-cyan-500/5 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/30 shadow-2xl hover:shadow-cyan-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/15 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-400/10 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-cyan-400 uppercase tracking-wide">Our Genesis</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    We understand the dedication it takes to be a college athlete. We all played. And looking forward, we saw the opportunity to give back when Name, Image and Likeness (NIL) rules were adopted in 2022. Sparq Games was established to help athletes build their own brand through a series of video games.
                  </p>
                </div>
              </div>

              {/* Our Platform */}
              <div className="relative bg-gradient-to-br from-red-500/20 via-red-500/10 to-red-500/5 backdrop-blur-sm p-8 rounded-3xl border border-red-500/30 shadow-2xl hover:shadow-red-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute top-0 left-0 w-28 h-28 bg-gradient-to-br from-red-500/15 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-36 h-36 bg-gradient-to-tl from-red-400/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-red-400 uppercase tracking-wide">Our Platform</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Sparq is rapidly expanding, using our proprietary game publishing platform to launch up to a dozen sports-based mobile games over the next five years which combine our commitment to AI, our gamer fans, college athletes, and the top IP holders we work with.
                  </p>
                </div>
              </div>

              {/* Our Impact */}
              <div className="relative bg-gradient-to-br from-green-500/20 via-green-500/10 to-green-500/5 backdrop-blur-sm p-8 rounded-3xl border border-green-500/30 shadow-2xl hover:shadow-green-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute top-0 left-0 w-30 h-30 bg-gradient-to-br from-green-500/15 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 right-0 w-26 h-26 bg-gradient-to-tl from-green-400/10 to-transparent rounded-full blur-lg"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-green-400 uppercase tracking-wide">Our Impact</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    The success of Sparq means that thousands of college athletes - men and women - will profit from their names and images being featured in our broad range of sports-based mobile video games.
                  </p>
                </div>
              </div>

              {/* Our Pride */}
              <div className="relative bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-orange-500/5 backdrop-blur-sm p-8 rounded-3xl border border-orange-500/30 shadow-2xl hover:shadow-orange-500/25 hover:shadow-3xl transition-all duration-500 group overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-orange-500/15 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-bold text-orange-400 uppercase tracking-wide">Our Pride</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    Sparq takes immense pride in showcasing college athletes from hundreds of top U.S. universities. They recognize the significance of this intellectual property, believing it to be among the most powerful in existence.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to action highlight */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-gradient-to-r from-primary/20 to-primary-dark/20 backdrop-blur-sm p-8 lg:p-12 rounded-3xl border border-primary/30 shadow-2xl max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-display mb-6 text-gradient">Coming in 2026</h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Sparq will be introducing our mobile games beginning in 2026. If you're interested in keeping tabs on Sparq and being a part of the fun as they reach out to the college sports gaming community, then please sign up for the beta. You'll see firsthand what they're building and they'll honor your feedback to make the games as fun as possible.
                </p>
                <div className="flex justify-center">
                  <div className="px-6 py-2 bg-primary/20 rounded-full border border-primary/40">
                    <span className="text-primary font-semibold">Join the Beta • Shape the Future</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="mission" className="py-16 lg:py-24 bg-gradient-to-br from-background to-muted relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 right-20 w-36 h-36 bg-primary rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-primary/60 rounded-full blur-xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-white/30 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-display mb-6">
                Our <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">MISSION</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-8"></div>
              
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="relative bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 backdrop-blur-sm p-10 rounded-3xl border border-primary/30 shadow-2xl hover:shadow-primary/20 hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <p className="text-xl text-gray-200 leading-relaxed font-medium">
                      We're on a mission to disrupt the gaming industry with a revolutionary mobile game publishing platform that harnesses the power of modern technologies and cutting-edge AI.
                    </p>
                  </div>
                </div>
                
                <div className="relative bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent backdrop-blur-sm p-10 rounded-3xl border border-cyan-400/25 shadow-2xl hover:shadow-cyan-400/15 hover:shadow-3xl transition-all duration-500 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-cyan-400/15 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10">
                    <p className="text-xl text-gray-200 leading-relaxed font-medium">
                      Our goal is to create the most fun, immersive, and engaging mobile sports games in the world, while fostering a culture of creativity, innovation, and happiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-3xl lg:text-4xl font-display mb-6">
                Our Core <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">VALUES</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative bg-gradient-to-br from-primary/20 via-primary/15 to-primary/5 backdrop-blur-sm p-8 rounded-3xl border border-primary/40 shadow-2xl group hover:shadow-primary/20 hover:shadow-3xl hover:border-primary/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-heart text-white text-xl"></i>
                    </div>
                    <h4 className="text-2xl font-display text-primary group-hover:text-cyan-400 transition-colors duration-300">People-Centric</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">We prioritize the well-being, happiness, and growth of our employees, athletes, and gamers. We strive to create a workplace that defies industry labor challenges, where people can thrive, grow, and love what they do.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent backdrop-blur-sm p-8 rounded-3xl border border-cyan-400/30 shadow-2xl group hover:shadow-cyan-400/20 hover:shadow-3xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h4 className="text-2xl font-display text-cyan-400 group-hover:text-primary transition-colors duration-300">Unleash Creativity</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">We empower our employees to focus on the most exciting and creative aspects of their job, leveraging AI to eliminate tedious tasks and unlock human potential.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-green-500/10 via-green-500/5 to-transparent backdrop-blur-sm p-8 rounded-3xl border border-green-400/30 shadow-2xl group hover:shadow-green-400/20 hover:shadow-3xl hover:border-green-400/50 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-green-400/15 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-chart-line text-white text-xl"></i>
                    </div>
                    <h4 className="text-2xl font-display text-green-400 group-hover:text-primary transition-colors duration-300">Enrich Lives</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">We partner with athletes to help them build their brand, achieve financial enrichment, and secure a brighter future. We're committed to creating a positive impact in their lives.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-yellow-500/15 via-orange-500/10 to-red-500/5 backdrop-blur-sm p-8 rounded-3xl border border-yellow-400/40 shadow-2xl group hover:shadow-yellow-400/25 hover:shadow-3xl hover:border-yellow-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute top-0 left-1/2 w-20 h-20 bg-gradient-to-b from-yellow-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-gamepad text-white text-xl"></i>
                    </div>
                    <h4 className="text-2xl font-display text-yellow-400 group-hover:text-primary transition-colors duration-300">Fun Above All</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">We're dedicated to crafting games that are ridiculously fun, merging the worlds of sports fans and sports gamers to create a vibrant, interactive, and inclusive community.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="vision" className="py-16 lg:py-24 bg-gradient-to-br from-muted to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/50 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/20 rounded-full blur-lg"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-4xl lg:text-5xl font-display mb-6">
                Our <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">VISION</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="relative bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-indigo-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-400/40 shadow-2xl group hover:shadow-purple-400/25 hover:shadow-3xl hover:border-purple-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-crown text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-purple-400 group-hover:text-primary transition-colors duration-300">Industry Leadership</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Become the world's leading sports mobile game publishing platform, renowned for innovation, creativity, fun, and financial success.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-500/12 via-blue-500/6 to-transparent backdrop-blur-sm p-8 rounded-3xl border border-blue-400/35 shadow-2xl group hover:shadow-blue-400/20 hover:shadow-3xl hover:border-blue-400/55 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/15 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-users text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-blue-400 group-hover:text-primary transition-colors duration-300">Community Building</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Foster a community of passionate sports fans and gamers who share our values and enthusiasm.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-emerald-500/12 via-emerald-500/6 to-transparent backdrop-blur-sm p-8 rounded-3xl border border-emerald-400/35 shadow-2xl group hover:shadow-emerald-400/20 hover:shadow-3xl hover:border-emerald-400/55 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute top-1/2 right-0 w-20 h-20 bg-gradient-to-l from-emerald-400/15 to-transparent rounded-full blur-lg"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-emerald-400 group-hover:text-primary transition-colors duration-300">Athlete Empowerment</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Revolutionize the way athletes engage with their fans, build their personal brand, and secure their financial future.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-rose-500/12 via-pink-500/8 to-red-500/4 backdrop-blur-sm p-8 rounded-3xl border border-rose-400/35 shadow-2xl group hover:shadow-rose-400/20 hover:shadow-3xl hover:border-rose-400/55 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-gradient-to-t from-rose-400/15 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-award text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-rose-400 group-hover:text-primary transition-colors duration-300">Workplace Excellence</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Create a workplace that's a benchmark for happiness, creativity, and productivity in the gaming industry.</p>
                </div>
              </div>
            </div>
            
            {/* Sean Embree Quote */}
            <div className="text-center" data-aos="fade-up" data-aos-delay="500">
              <div className="relative bg-gradient-to-br from-primary/20 via-primary/15 to-primary-dark/10 backdrop-blur-sm p-10 lg:p-16 rounded-3xl border border-primary/40 shadow-2xl hover:shadow-primary/25 hover:shadow-3xl transition-all duration-500 max-w-4xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-dark/15 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <blockquote className="text-xl lg:text-2xl text-gray-200 italic leading-relaxed mb-8 font-medium">
                    "There are over 200 million mobile gamers in the U.S. and 65% of them have a favorite college sports team. They've been starved of college sports game content for years. It's literally the most engaged fan base on the planet and we're about to flood them with fun."
                  </blockquote>
                  <cite className="text-primary font-display text-lg font-semibold">— Sean Embree, Co-Founder</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="careers" className="py-16 lg:py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6">Join Our <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block mr-2">TEAM</span></h2>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-3xl mx-auto">
              We're building the future of sports gaming and looking for talented individuals who share our passion for innovation, creativity, and fun.
            </p>
          </div>
          
          {/* Jan Horsfall Quote */}
          <div className="max-w-4xl mx-auto mb-16" data-aos="fade-up" data-aos-delay="100">
            <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-10 lg:p-16 rounded-3xl border border-white/30 shadow-2xl hover:shadow-white/10 hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/8 to-transparent rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <blockquote className="text-xl lg:text-2xl text-white italic leading-relaxed mb-8 font-medium">
                  "We're hiring - not firing - and making Sparq one of the best places to work. We defy the old approach to game building which destroyed employees and stifled creativity. When human beings love working in a modern, successful setting, they use their vast work experience to create the best games in the world. That's the key to creating fun for the gamer."
                </blockquote>
                <cite className="text-white/90 font-display text-lg font-semibold">— Jan Horsfall, CEO</cite>
              </div>
            </div>
          </div>
          
          {/* Current Openings */}
          <div className="max-w-5xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl lg:text-3xl font-display text-center mb-12">Current Openings</h3>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div>
                    <h4 className="text-2xl font-display text-white mb-2">Chief Technology Officer (CTO)</h4>
                    <p className="text-white/80 mb-2">Mobile Game Publisher • C-Suite Position</p>
                    <p className="text-white/60">Reporting to CEO Jan Horsfall • Target Start: June 1, 2025</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
                      Remote Friendly
                    </span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={() => setShowJobDetails(!showJobDetails)}
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg"
                  >
                    {showJobDetails ? 'Hide Details' : 'View Job Details & Apply'}
                  </Button>
                </div>
                
                {showJobDetails && (
                  <div className="mt-8 space-y-8" data-aos="fade-down" data-aos-delay="100">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h5>
                        <ul className="space-y-2 text-white/80">
                          <li>• Define technology strategy leveraging AI & blockchain</li>
                          <li>• Build and mentor world-class engineering team</li>
                          <li>• Guide mobile game development using Unity/Unreal</li>
                          <li>• Oversee AI-driven user acquisition engine</li>
                          <li>• Drive innovative technology integration</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-lg font-semibold text-white mb-4">Key Qualifications</h5>
                        <ul className="space-y-2 text-white/80">
                          <li>• Proven start-up experience</li>
                          <li>• Extensive Unity/Unreal Engine expertise</li>
                          <li>• Mobile app development at scale</li>
                          <li>• Cloud platforms (AWS, Google Cloud, Azure)</li>
                          <li>• AI/Blockchain enthusiasm or experience</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-2xl">
                      <h5 className="text-lg font-semibold text-white mb-3">About This Role</h5>
                      <p className="text-white/80 leading-relaxed">
                        Join Sparq Games as we disrupt the sports gaming industry with revolutionary mobile game publishing platform. Lead our technology vision, build innovative AI-driven solutions, and help thousands of college athletes profit through NIL integration. We're looking for someone with a start-up mentality, positive attitude, and passion for creating the most fun mobile sports games in the world.
                      </p>
                    </div>
                    
                    {/* Application Form */}
                    <div className="bg-white/5 p-6 lg:p-8 rounded-2xl">
                      <h5 className="text-xl font-semibold text-white mb-6">Apply for This Position</h5>
                      
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white/80 mb-2 text-sm font-medium">Full Name *</label>
                            <input 
                              type="text" 
                              required 
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                              placeholder="Your full name"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white/80 mb-2 text-sm font-medium">Email Address *</label>
                            <input 
                              type="email" 
                              required 
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                              placeholder="your@email.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white/80 mb-2 text-sm font-medium">Phone Number</label>
                            <input 
                              type="tel" 
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white/80 mb-2 text-sm font-medium">LinkedIn Profile</label>
                            <input 
                              type="url" 
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                              placeholder="https://linkedin.com/in/yourprofile"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">Resume/CV * (PDF only)</label>
                          <div className="relative">
                            <input 
                              type="file" 
                              accept=".pdf"
                              required 
                              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-white/20 file:text-white file:font-medium hover:file:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                          </div>
                          <p className="text-white/60 text-sm mt-1">Please upload your resume as a PDF file (max 10MB)</p>
                        </div>
                        
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">Cover Letter</label>
                          <textarea 
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                            placeholder="Tell us why you're excited about this role and what you'd bring to Sparq Games..."
                          ></textarea>
                        </div>
                        
                        <div className="text-center">
                          <button 
                            type="submit"
                            className="px-8 py-4 bg-white text-primary font-semibold text-lg rounded-lg shadow-lg hover:bg-white/90 hover:shadow-xl transition-all duration-300"
                          >
                            Submit Application
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
