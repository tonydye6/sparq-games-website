import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PressReleases = () => {
  const pressReleases = [
    {
      title: "Sparq Mobile Game Platform Readies First Title",
      date: "March 2025",
      summary: "Sparq Leverages AAA Sports IP, Cutting-Edge AI, Game Rewards, and the Blockchain to Revolutionize How Mobile Games Are Created and Marketed. Crown U™ features collegiate sports trademarks and NIL of the greatest male and female athletes in the university sports ecosystem.",
      link: "#press-release"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display mb-4"><span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">PRESS</span> Releases</h2>
          <p className="text-lg text-gray-300">Official announcements from Sparq Inc.</p>
        </div>
        
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          {pressReleases.map((press, index) => (
            <div 
              key={index} 
              className="mb-8 pb-8 border-b border-gray-700 last:border-0 last:mb-0 last:pb-0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{press.title}</h3>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">{press.date}</span>
              </div>
              <p className="text-gray-300 mb-4">{press.summary}</p>
              <button 
                onClick={() => document.getElementById('press-release')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
              >
                Read full release
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10" data-aos="fade-up">
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => document.getElementById('press-release')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Read Full Press Release
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PressReleases;
