import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { isElementInViewport } from '@/lib/utils';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface MetricCardProps {
  number: string;
  text: string;
  delay: number;
}

const getDetailedContent = (cardType: string) => {
  const content = {
    'Mission': {
      title: 'Our Mission',
      description: 'Revolutionize sports gaming through innovation, creating immersive and authentic experiences that bring athletes and fans closer to the games they love.',
      details: [
        'Push the boundaries of sports gaming technology',
        'Create authentic and engaging experiences',
        'Connect athletes and fans in meaningful ways'
      ]
    },
    'Values': {
      title: 'Our Values',
      description: '',
      valuesList: [
        {
          title: 'Unleash Creativity',
          description: 'We empower each employee to focus on the most exciting and creative aspects of their job, leveraging AI to eliminate tedious tasks and unlock human potential.'
        },
        {
          title: 'Enrich Lives',
          description: 'We partner with athletes to help them build their brand, achieve financial enrichment, and secure a brighter future. We\'re committed to creating a positive impact on their lives and the lives of our employees, gamers, and the broader community.'
        },
        {
          title: 'Fun Above All',
          description: 'We\'re dedicated to crafting games that are ridiculously fun, merging the worlds of sports fans and sports gamers to create a vibrant, interactive, and inclusive community. We listen to feedback, iterate, and innovate to deliver the best gaming experiences possible.'
        },
        {
          title: 'People-Centric',
          description: 'We prioritize the well-being, happiness, and growth of our employees, athletes, and gamers. We strive to create a workplace that defies industry labor challenges, where people can thrive, grow, and love what they do.'
        }
      ]
    },
    'Vision': {
      title: 'Our Vision',
      description: '',
      details: [
        'Become the world\'s leading sports mobile game publishing platform, renowned for innovation, creativity, fun, and financial success.',
        'Foster a community of passionate sports fans and gamers who share our values and enthusiasm.',
        'Revolutionize the way athletes engage with their fans, build their personal brand, and secure their financial future.',
        'Create a workplace that\'s a benchmark for happiness, creativity, and productivity in the gaming industry.'
      ]
    },
    'Beta': {
      title: 'What to Expect',
      description: '',
      details: [
        'Early access to our mobile gaming platform',
        'Exclusive in-game rewards and items',
        'Direct feedback channel with our development team',
        'Special events and tournaments for beta testers',
        'Regular updates on new features and improvements'
      ]
    }
  };
  return content[cardType as keyof typeof content];
};

const MetricCard = ({ number, text, delay }: MetricCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (isElementInViewport(element)) {
        setTimeout(() => {
          element.classList.add('active');
        }, delay);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay]);

  const content = getDetailedContent(number);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div 
          ref={ref} 
          className={cn("group metric-card relative bg-gradient-to-br from-background/90 to-muted/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-primary/20 hover:border-primary/50 reveal cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)] overflow-hidden")}
        >
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="text-4xl md:text-5xl font-display text-primary mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-neodex">{number}</div>
            <div className="text-base text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{text}</div>
          </div>
          
          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl max-h-[90vh] bg-gradient-to-br from-background via-muted/90 to-background border-2 border-primary/40 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-xl"></div>
        
        <div className="relative z-10 flex flex-col min-h-0">
          <DialogHeader className="pb-6 flex-shrink-0">
            <DialogTitle className="text-4xl font-display bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent mb-2 font-neodex">{content?.title}</DialogTitle>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full"></div>
          </DialogHeader>
          
          <div className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <div className="space-y-8 pb-4">
              {content?.description && (
                <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 rounded-2xl border border-primary/20 shadow-lg">
                  <p className="text-xl text-gray-200 leading-relaxed font-medium">{content.description}</p>
                </div>
              )}
              
              {/* Enhanced Values card styling */}
              {number === 'Values' && (content as any)?.valuesList && (
                <div className="space-y-6">
                  {(content as any).valuesList.map((value: any, index: number) => {
                    const colors = [
                      'from-red-500/20 via-red-500/10 to-red-500/5 border-red-500/30 text-red-400',
                      'from-cyan-500/20 via-cyan-500/10 to-cyan-500/5 border-cyan-500/30 text-cyan-400',
                      'from-green-500/20 via-green-500/10 to-green-500/5 border-green-500/30 text-green-400',
                      'from-orange-500/20 via-orange-500/10 to-orange-500/5 border-orange-500/30 text-orange-400'
                    ];
                    const colorClass = colors[index % colors.length];
                    return (
                      <div key={index} className={`relative bg-gradient-to-br ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} ${colorClass.split(' ')[2]} backdrop-blur-sm p-8 rounded-2xl border ${colorClass.split(' ')[3]} shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-xl"></div>
                        <div className="relative z-10">
                          <h4 className={`text-2xl font-display font-bold ${colorClass.split(' ')[4]} mb-4 uppercase tracking-wide`}>• {value.title}</h4>
                          <p className="text-gray-300 leading-relaxed text-lg ml-6">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
              
              {/* Enhanced standard bullet points */}
              {number !== 'Values' && (content as any)?.details && (
                <div className="space-y-4">
                  {(content as any).details.map((detail: string, index: number) => (
                    <div key={index} className="relative bg-gradient-to-br from-primary/15 via-primary/8 to-primary/5 backdrop-blur-sm p-6 rounded-xl border border-primary/25 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-lg"></div>
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-primary to-cyan-400 rounded-full mt-2 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                        <p className="text-gray-200 leading-relaxed text-lg font-medium">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            
              {/* Enhanced Beta button */}
              {number === 'Beta' && (
                <div className="pt-6">
                  <Button className="w-full bg-gradient-to-r from-primary via-cyan-500 to-primary-dark hover:from-primary-dark hover:via-primary hover:to-cyan-500 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 py-4 text-xl font-bold rounded-xl border border-primary/30 hover:border-primary/60 transform hover:scale-105">
                    <span className="relative z-10">Sign Up for Beta Access</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const MetricsBar = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display mb-4 text-white">Discover Our Foundation</h2>
          <p className="text-gray-400 text-lg">Click each card to explore what drives us forward</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          <MetricCard number="Mission" text="Our Purpose" delay={0} />
          <MetricCard number="Values" text="What We Believe" delay={200} />
          <MetricCard number="Vision" text="Our Future" delay={400} />
          <MetricCard number="Beta" text="Join Early Access" delay={600} />
        </div>
      </div>
    </section>
  );
};

export default MetricsBar;
