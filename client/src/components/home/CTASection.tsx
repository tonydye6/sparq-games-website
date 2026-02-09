import { Button } from '@/components/ui/button';
import useScrollTo from '@/hooks/use-scroll-to';

const CTASection = () => {
  const scrollTo = useScrollTo();

  return (
    <section className="py-20 lg:py-28 bg-primary relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="People Gaming Together" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          <h2 className="text-3xl lg:text-5xl font-display mb-6">Ready to Join the <span className="text-cyan-400 font-neodex">FUTURE</span> of Collegiate Sports Gaming?</h2>
          <p className="text-xl text-white text-opacity-90 mb-10">Whether you're a university, student athlete, or passionate fan, we have a place for you in the Sparq ecosystem.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => scrollTo('beta-signup')}
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg"
            >
              Join Beta Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
