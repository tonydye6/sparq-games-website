import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  source: string;
  date: string;
  title: string;
  description: string;
  image: string;
  link: string;
  delay: number;
  isInternal?: boolean;
}

const NewsCard = ({ source, date, title, description, image, link, delay, isInternal }: NewsCardProps) => {
  const handleClick = () => {
    if (isInternal) {
      document.getElementById('press-release')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-medium text-gray-400">{source}</span>
          <span className="text-xs text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        {isInternal ? (
          <button onClick={handleClick} className="inline-flex items-center text-primary text-sm font-medium">
            Read more
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary text-sm font-medium">
            Read more
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
