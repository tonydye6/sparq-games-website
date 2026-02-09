import { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import MetricsBar from '@/components/home/MetricsBar';
import CredibilitySection from '@/components/home/CredibilitySection';
import TechnologySection from '@/components/home/TechnologySection';
import GameShowcase from '@/components/home/GameShowcase';
import BetaSignup from '@/components/home/BetaSignup';
import TeamSection from '@/components/home/TeamSection';
import NewsSection from '@/components/home/NewsSection';
import CTASection from '@/components/home/CTASection';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  useEffect(() => {
    // Re-init AOS to handle newly mounted components
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Sparq Games - AI-Powered Sports Gaming Platform | College Athlete Mobile Games</title>
        <meta name="description" content="Revolutionary AI sports gaming platform connecting college athletes with fans. Mobile gaming apps featuring NIL partnerships, NCAA licensing, and authentic athlete experiences through Crown U and innovative game development." />
        <meta property="og:title" content="Sparq Games - AI-Powered Sports Gaming Platform | College Athlete Mobile Games" />
        <meta property="og:description" content="Revolutionary AI sports gaming platform connecting college athletes with fans. Mobile gaming apps featuring NIL partnerships, NCAA licensing, and authentic athlete experiences through Crown U and innovative game development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sparqgames.com" />
        <meta name="keywords" content="AI sports gaming, college athletics gaming, NCAA mobile games, NIL gaming platform, athlete partnerships, university licensing, Crown U, multiplayer party knockout, mobile gaming apps" />
        
        {/* Structured Data for AI SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "SoftwareApplication"],
                "name": "Sparq Games",
                "alternateName": "Sparq Inc",
                "description": "AI-powered sports gaming platform connecting college athletes with fans through innovative mobile gaming experiences featuring NCAA licensing and NIL partnerships",
                "url": "https://sparqgames.com",
                "sameAs": [
                  "https://linkedin.com/company/sparqgames",
                  "https://x.com/sparqgames"
                ],
                "foundingDate": "2021",
                "foundingLocation": {
                  "@type": "Place",
                  "addressLocality": "Los Angeles",
                  "addressRegion": "CA",
                  "addressCountry": "US"
                },
                "applicationCategory": ["GameApplication", "SportsApplication"],
                "operatingSystem": ["iOS", "Android"],
                "keywords": "AI sports gaming, college athletics gaming, NCAA mobile games, NIL gaming platform, athlete partnerships, university licensing",
                "specialty": ["Mobile Gaming", "AI Technology", "Sports Entertainment", "NIL Partnerships"]
              },
              {
                "@type": "VideoGame",
                "name": "Crown U",
                "description": "Multiplayer party knockout mobile game featuring licensed NCAA athletes, universities, and stadiums in cross-sport competition",
                "genre": "Multiplayer Party Knockout",
                "gameItem": "NCAA Athletes, University Branding, Stadium Environments",
                "numberOfPlayers": "16 players per match",
                "applicationCategory": "GameApplication"
              }
            ]
          })}
        </script>
      </Helmet>
      
      <HeroSection />
      <MetricsBar />
      <CredibilitySection />
      <TechnologySection />
      <GameShowcase />
      <BetaSignup />
      <TeamSection />
      <NewsSection />
      <CTASection />
    </>
  );
};

export default HomePage;
