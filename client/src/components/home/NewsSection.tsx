import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

interface NewsArticleProps {
  source: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
}

const NewsArticle = ({ source, date, title, description, image, link, delay }: NewsArticleProps) => {
  return (
    <div 
      className="bg-muted rounded-xl overflow-hidden shadow-lg group transition-all duration-300 hover:-translate-y-2"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-gray-400">{source}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <a href={link} className="inline-flex items-center text-primary text-sm font-medium">
          Read more
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </div>
  );
};

const NewsSection = () => {
  const newsArticles = [
    {
      source: "Sparq Press Release",
      date: "March 2025",
      title: "Sparq Mobile Game Platform Readies First Title",
      description: "Sparq Leverages AAA Sports IP, Cutting-Edge AI, Game Rewards, and the Blockchain to Revolutionize How Mobile Games Are Created and Marketed.",
      image: "./images/crown-u-seasons.png",
      link: "/news"
    },
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
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12" data-aos="fade-up">
          <div>
            <h2 className="text-3xl lg:text-4xl font-display mb-2">Latest News</h2>
            <p className="text-lg text-gray-400">Announcements, media coverage and industry insights</p>
          </div>
          <Link href="/news" className="text-primary font-medium flex items-center mt-4 md:mt-0 hover:underline">
            View all news
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <NewsArticle 
              key={article.title}
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
  );
};

export default NewsSection;
