import { Button } from '@/components/ui/button';

const PodcastSection = () => {
  const podcastEpisodes = [
    {
      number: "05",
      title: "The Future of Collegiate Sports Gaming with Tony Dye",
      description: "Former UCLA star and NFL player Tony Dye discusses how Crown U! is revolutionizing the collegiate sports gaming landscape.",
      date: "TBA",
      link: "#",
    },
    {
      number: "04",
      title: "AI in Game Development: Behind the SparqPlug™ Engine",
      description: "Jeffrey Steefel breaks down how AI is transforming game development and user acquisition in sports gaming.",
      date: "TBA",
      link: "#",
    },
    {
      number: "03",
      title: "NIL Opportunities for Student-Athletes in Gaming",
      description: "A panel discussion on how Crown U! is creating new revenue streams for collegiate athletes through NIL deals.",
      date: "TBA",
      link: "#",
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-display mb-4">The Sparq <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">PODCAST</span></h2>
          <p className="text-lg text-gray-300">Conversations with industry leaders and innovators in sports gaming and technology</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-up">
            <div className="bg-muted rounded-xl overflow-hidden shadow-xl">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <i className="fas fa-microphone text-2xl text-white"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display">The Sparq Podcast</h3>
                      <p className="text-gray-400">Hosted by Jan Horsfall</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/80">
                    Subscribe
                  </Button>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Join Sparq Inc. CEO Jan Horsfall as he explores the intersection of collegiate sports, gaming technology, and the evolving landscape of NIL opportunities. Each episode features insights from industry leaders, athletes, and technology experts.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-background p-2 rounded-md">
                    <i className="fab fa-spotify text-green-500"></i>
                    <span className="text-sm">Spotify</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background p-2 rounded-md">
                    <i className="fab fa-apple text-gray-300"></i>
                    <span className="text-sm">Apple Podcasts</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background p-2 rounded-md">
                    <i className="fab fa-google text-blue-500"></i>
                    <span className="text-sm">Google Podcasts</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background p-2 rounded-md">
                    <i className="fab fa-youtube text-red-500"></i>
                    <span className="text-sm">YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Episodes</h3>
              
              {podcastEpisodes.map((episode, index) => (
                <div key={index} className="bg-muted p-5 rounded-lg flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-display text-primary">EP{episode.number}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold">{episode.title}</h4>
                    <p className="text-gray-400 text-sm mb-2">{episode.description}</p>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500">{episode.date}</span>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastSection;
