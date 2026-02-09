import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import BetaSignupForm from '@/components/contact/BetaSignupForm';
import PartnershipForm from '@/components/contact/PartnershipForm';
import MediaForm from '@/components/contact/MediaForm';

const ContactPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
    
    // Scroll to section if URL has hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact & Beta Signup - Sparq Inc.</title>
        <meta name="description" content="Get in touch with Sparq Inc., join the Crown U! beta waitlist, or inquire about university partnerships. Limited beta spots available!" />
        <meta property="og:title" content="Contact & Beta Signup - Sparq Inc." />
        <meta property="og:description" content="Get in touch with Sparq Inc., join the Crown U! beta waitlist, or inquire about university partnerships. Limited beta spots available!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sparqinc.com/contact" />
      </Helmet>
      
      <section className="page-hero relative pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        {/* Enhanced background with animated elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80 z-10"></div>
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')" }}
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5 z-5">
          <div className="absolute top-20 left-20 w-80 h-80 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-white/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="hero-content max-w-5xl" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-8">
              Get in <span className="font-neodex italic text-cyan-400">TOUCH</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Ready to join the future of collegiate sports gaming? Connect with us to explore partnerships, beta access, or learn more about our revolutionary platform.
            </p>
          </div>
        </div>
      </section>
      
      <section className="contact-options py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="options-grid grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            <div className="group contact-card bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]" data-aos="fade-up" data-aos-delay="100">
              <div className="card-icon w-20 h-20 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-primary">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  <path d="M12 22V12m0 0l-4 4m4-4l4 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">University Partnerships</h3>
              <p className="text-gray-300 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">Interested in bringing Crown U! to your campus? Let's discuss how we can work together to revolutionize campus sports engagement.</p>
              <a href="#partnership-form" className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                Partnership Inquiry
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>

            <div className="group contact-card featured bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border-2 border-primary/60 hover:border-primary transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.2)] relative" data-aos="fade-up" data-aos-delay="200">
              <div className="beta-badge absolute top-6 right-6 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                Limited Spots
              </div>
              <div className="card-icon w-20 h-20 bg-gradient-to-r from-white/30 to-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-primary">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-cyan-200 transition-colors duration-300">Beta Access</h3>
              <p className="text-gray-200 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">Be among the first to experience Crown U! Join our exclusive beta program with $50 bonus credits.</p>
              <a href="#beta-signup" className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join Beta Waitlist
                <i className="fas fa-star ml-2"></i>
              </a>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-white/50 to-cyan-200/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
            </div>

            <div className="group contact-card bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]" data-aos="fade-up" data-aos-delay="300">
              <div className="card-icon w-20 h-20 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-primary">
                  <path d="M3 12h18m-9-9v18" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Media & Press</h3>
              <p className="text-gray-400 mb-6">For media inquiries, interviews, or press kit requests, our communications team is here to help.</p>
              <a href="#media-form" className="inline-block px-4 py-2 rounded-md border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition duration-300">
                Media Request
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <BetaSignupForm />
      
      <PartnershipForm />
      
      <MediaForm />
    </>
  );
};

export default ContactPage;
