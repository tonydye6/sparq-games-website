import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import NewsCard from '@/components/news/NewsCard';
import PressReleases from '@/components/news/PressReleases';
import PodcastSection from '@/components/news/PodcastSection';
import newsVid1 from '@assets/NewsPageVid1_1749106950126.mp4';
import newsVid2 from '@assets/NewsPageVid2_1749106950126.mp4';

const NewsPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const featuredNews = {
    source: "Sparq Press Release",
    date: "March 2025",
    title: "Sparq Mobile Game Platform Readies First Title",
    description: "Sparq Leverages AAA Sports IP, Cutting-Edge AI, Game Rewards, and the Blockchain to Revolutionize How Mobile Games Are Created and Marketed. Crown U™ features collegiate sports trademarks and NIL of the greatest male and female athletes in the university sports ecosystem.",
    image: "./images/crown-u-seasons.png",
    link: "#press-release",
    isInternal: true
  };

  const newsArticles = [
    {
      source: "Mashable",
      date: "April 22, 2024",
      title: "Sparq Inc.™ Bridges Collegiate Sports, Mobile Gaming, and Web3",
      description: "Sparq Inc.™ Bridges Collegiate Sports, Mobile Gaming, and Web3 to Fuel a Large-Scale Sports Gaming Ecosystem.",
      image: "https://sm.mashable.com/t/mashable_nl/photo/default/image1-3_ctva.1200.jpg",
      link: "https://nl.mashable.com/mobile-gaming/11156/sparq-inctm-bridges-collegiate-sports-mobile-gaming-and-web3-to-fuel-sports-gaming-ecosystem"
    },
    {
      source: "eGamers.io",
      date: "March 8, 2024",
      title: "Sparq Break Free Gaming NFT Collection Sells Out",
      description: "Sparq is not just building games – it's building an ecosystem where fans are rewarded for their passion.",
      image: "https://egamers.io/wp-content/uploads/2025/03/sparq-nft-collection.png",
      link: "https://egamers.io/sparq-break-free-gaming-nft-collection-sells-out/"
    },
    {
      source: "NFT Plazas",
      date: "February 15, 2024",
      title: "Sparq Mint Out Break Free NFTs, Announce Crown U Game",
      description: "Sparq's Crown U! platform attracts major attention as the company expands into NCAA-licensed mobile gaming with NFT integration.",
      image: "https://nftplazas.com/wp-content/uploads/2025/03/sparq-nfts-social.webp",
      link: "https://nftplazas.com/sparq-mint-out-break-free-nfts-announce-crown-u-game/"
    }
  ];

  return (
    <>
      <Helmet>
        <title>News & Media - Sparq Inc.</title>
        <meta name="description" content="Stay updated with the latest news from Sparq Inc. Press releases, media coverage, and our podcast featuring collegiate sports gaming innovations." />
        <meta property="og:title" content="News & Media - Sparq Inc." />
        <meta property="og:description" content="Stay updated with the latest news from Sparq Inc. Press releases, media coverage, and our podcast featuring collegiate sports gaming innovations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sparqgames.com/news" />
        <meta property="og:image" content="https://www.sparqgames.com/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sparqgames" />
        <meta name="twitter:image" content="https://www.sparqgames.com/images/og-image.png" />
        <link rel="canonical" href="https://www.sparqgames.com/news" />
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
                src={newsVid1}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={newsVid2}
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
              <span className="text-cyan-400 font-neodex">NEWS</span> & Media
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Stay updated with our latest announcements, media coverage, and industry insights
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-4">Featured <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">NEWS</span></h2>
            <p className="text-lg text-gray-300">Our latest headlines and major announcements</p>
          </div>
          
          {/* Featured News Article */}
          <div className="bg-muted rounded-xl overflow-hidden shadow-xl mb-16" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto">
                <img 
                  src={featuredNews.image} 
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400">{featuredNews.source}</span>
                  <span className="text-sm text-gray-500">{featuredNews.date}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-semibold mb-4">{featuredNews.title}</h3>
                <p className="text-gray-300 mb-6">{featuredNews.description}</p>
                <div>
                  {featuredNews.isInternal ? (
                    <Button 
                      className="bg-primary hover:bg-primary/80 text-white"
                      onClick={() => document.getElementById('press-release')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Read Full Press Release
                    </Button>
                  ) : (
                    <a href={featuredNews.link} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-primary hover:bg-primary/80 text-white">
                        Read Full Article
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <NewsCard 
                key={index}
                source={article.source}
                date={article.date}
                title={article.title}
                description={article.description}
                image={article.image}
                link={article.link}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>
      
      <PressReleases />
      
      <PodcastSection />
      
      {/* Press Release Section */}
      <section id="press-release" className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12" data-aos="fade-up">
              <h2 className="text-3xl lg:text-4xl font-display mb-4">Official <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">PRESS</span> Release</h2>
              <p className="text-lg text-gray-300">Sparq Mobile Game Platform Readies First Title</p>
              <p className="text-sm text-gray-400 mt-2">March 2025</p>
            </div>
            
            <div className="bg-background rounded-xl p-8 lg:p-12 shadow-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="prose prose-lg max-w-none prose-invert">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Sparq Leverages AAA Sports IP, Cutting-Edge AI, Game Rewards, and the Blockchain to Revolutionize How Mobile Games Are Created and Marketed</h3>
                
                <p className="text-gray-300 mb-6">
                  Proprietary mobile gaming publishing and acquisition platform SPARQ announced that it has entered into pre-production of its first game title, Crown U™, featuring collegiate sports trademarks and name, image, likenesses (NIL) of the greatest male and female athletes in the university sports ecosystem.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Crown U is a fast-paced, multiplayer game featuring real college athletes, schools, and stadiums in exciting cross-sport competition. Unlike traditional sports sims, Crown U blends fun and skill-based game play with the chaotic energy of party knockout games like Fall Guys™. In unique fashion, the Sparq team utilized their intensive, proprietary AI approach to select the game genre, subgenre, game mechanics, and game economy features. With an optional blockchain-enabled rewards system, players can earn real-world value through gameplay achievements.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Sparq's publishing and acquisition team has over 140 years of experience working on some of the most valued IP in existence, having formerly led efforts for Lord of the Rings™, Marvel Comics™, Dungeons & Dragons™, Game of Thrones™, Madden NFL™, and over 25 other major game titles. Sparq's veteran-led, proprietary gamer acquisition engine is also fueled by AI support and cutting-edge user acquisition tools and applications.
                </p>
                
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg text-gray-300">
                  "Our experienced team is strategically blending blockchain technology and our proprietary AI approach to mobile game publishing and acquisition to connect passionate college sports fans around the world to university brands and the storied traditions, excitement, and experiences that make the college sports experience so completely unique,"
                  <footer className="text-sm font-medium text-primary mt-2">— Jan Horsfall, CEO and co-founder at Sparq Games</footer>
                </blockquote>
                
                <p className="text-gray-300 mb-6">
                  As part of the extended relationship, Sparq will enable universities across the U.S such as the University of Utah to monetize their committed fan bases. Sparq will target over 700 universities and direct NIL gaming integration from more than 100,000 men and women collegiate athletes, providing unparalleled opportunities for fan and gamer engagement through the power of modern gaming. The athletes themselves will get paid through a blockchain backend that assures all vital record-keeping and transparency.
                </p>
                
                <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg text-gray-300">
                  "While legacy brands such as EA sports predominantly focus on console games, Sparq is intensely focused on fast, fun play in mobile gaming, tapping into the world's most engaged fan base. Over 65% of Americans over the age of 12 have a favorite college sports team and fan engagement in college sports is higher than FIFA, NFL, NBA, MLB, F1, or the Olympics, and this team has years of experience with that kind of IP-based fan engagement."
                  <footer className="text-sm font-medium text-primary mt-2">— Jeffrey Steefel, Head of Games at Sparq</footer>
                </blockquote>
                
                <p className="text-gray-300 mb-6">
                  Sparq's mission is dedicated to empowering athletes worldwide by creating exceptional, highly engaging sports games that not only entertain gamers and fans, but also financially support the athletes involved. "In simple terms, the success of Sparq means that thousands of college athletes will profit from their names and images being featured in a range of video games. We have a goal of releasing up to ten mobile games on our publishing and acquisition platform by the end of 2025."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 lg:py-24 bg-primary relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Media Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-3xl lg:text-4xl font-display mb-6"><span className="text-white font-neodex transform -skew-x-6 inline-block">MEDIA</span> Inquiries</h2>
            <p className="text-xl text-white text-opacity-90 mb-8">
              For press kits, interview requests, or other media inquiries, our communications team is here to help.
            </p>
            
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 font-semibold text-lg shadow-lg">
              <a href="/contact#media-form">Contact Media Relations</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
