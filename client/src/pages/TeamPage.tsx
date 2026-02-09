import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import teamVid1 from '@assets/TeamPageVid1_1749106825099.mp4';
import teamVid2 from '@assets/TeamPageVid2_1749106825099.mp4';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin: string;
  logos?: { name: string; image: string }[];
  delay?: number;
}

const TeamMember = ({ name, position, bio, image, linkedin, logos = [], delay = 0 }: TeamMemberProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleBio = () => {
    setExpanded(!expanded);
  };

  return (
    <div 
      className="group bg-gradient-to-br from-background/90 to-muted/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,255,255,0.15)]"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image}
          alt={name} 
          className="w-full h-full object-contain object-center group-hover:scale-110 transition-transform duration-500"
          style={{ 
            imageRendering: 'auto'
          }}
          loading="eager"
          srcSet={`${image} 1x, ${image} 2x`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2">
          {logos.map((logo, index) => (
            <div key={index} className="h-16 w-16 bg-gradient-to-br from-background/80 to-muted/60 backdrop-blur-md rounded-xl p-1 flex items-center justify-center shadow-lg border border-primary/30 group-hover:scale-110 transition-transform duration-300">
              <img src={logo.image} alt={logo.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 relative">
        <h3 className="text-2xl font-neodx font-bold mb-2 text-primary transform -skew-x-12 group-hover:text-white transition-colors duration-300">{name.toUpperCase()}</h3>
        <p className="text-primary font-semibold mb-4 text-lg group-hover:text-cyan-200 transition-colors duration-300">{position}</p>
        <div className="min-h-[6rem]">
          <p className={`text-gray-300 mb-4 leading-relaxed group-hover:text-white transition-colors duration-300 ${expanded ? '' : 'line-clamp-4'}`}>{bio}</p>
          {bio.length > 240 && (
            <button 
              onClick={toggleBio} 
              className="text-primary hover:text-white text-sm font-semibold mb-4 focus:outline-none px-3 py-1 rounded-lg bg-primary/20 hover:bg-primary transition-all duration-300"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-white font-semibold px-4 py-2 rounded-xl bg-primary/20 hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          View Profile
        </a>
        
        {/* Decorative bottom accent */}
        <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary to-primary-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
      </div>
    </div>
  );
};

const TeamPage = () => {
  useEffect(() => {
    // Re-init AOS to handle newly mounted components
    if (typeof window !== 'undefined') {
      AOS.refresh();
    }
  }, []);

  // Executive Leadership team members
  const executiveTeam: TeamMemberProps[] = [
    {
      name: "Jan Horsfall",
      position: "CEO / BOD Chair",
      bio: "Ran marketing at Valvoline and then at tech juggernaut, Lycos. Had the fastest IPO in NASDAQ history, stock price surge of 3,000%, and sold for $4.5 billion. CEO roles at Gemini, Gelazzi, and Universal. Served as the CMO at Turbine Games (acquired by Warner Bros). On NorthWestern's board NASDAQ NWE.",
      image: "./images/team/stylized/Horsfall_Stylized.png",
      linkedin: "https://www.linkedin.com/in/janhorsfall/",
      logos: [
        { name: "Warner Bros", image: "./images/logos/wb.png" },
        { name: "Valvoline", image: "./images/logos/valvoline.png" }
      ]
    },
    {
      name: "Tony Dye",
      position: "CIO / BOD HR Comm. Chair",
      bio: "Former UCLA student-athlete and team MVP who went on to play in the NFL for the Cincinnati Bengals and Oakland Raiders. Has two brothers in the NFL. Passionate about athletics, Web3, blockchain apps, and gaming. Focus is on building games which help athletes capitalize on their name, image, & likeness.",
      image: "./images/team/stylized/Dye_Stylized.png",
      linkedin: "https://www.linkedin.com/in/tony-dye-0a0836113/",
      logos: [
        { name: "UCLA", image: "./images/logos/ucla.png" },
        { name: "Cincinnati Bengals", image: "./images/logos/bengals.png" }
      ]
    },
    {
      name: "Chase Huber",
      position: "SVP User Acquisition",
      bio: "Visionary and strategic growth architect with two decades of experience in transformative initiatives and fostering product-led growth across diverse sectors including gaming, tech, entertainment. Proven expertise at notable firms such as Workhuman, Liberty Mutual, Warner Bros. Games, and Digitas.",
      image: "./images/team/stylized/Huber_Stylized.png",
      linkedin: "https://www.linkedin.com/in/chase-huber-132b033/",
      logos: [
        { name: "Warner Bros", image: "./images/logos/wb.png" },
        { name: "Gamer Sensei", image: "./images/logos/gamer_sensei.png" }
      ]
    },
    {
      name: "Rob Vogel",
      position: "SVP University & Player Relationships",
      bio: "Founder of J5 Partners, a sports business solutions firm. Uses 30 years of sports experience and leverages his network of sports decision-makers to drive business. Worked with brands such as JPMorgan Chase, FedEx, BofA, Honda, General Mills, Heineken, and sports properties including the NFL, NBA, NHL, ACC, Big 12.",
      image: "./images/team/stylized/Vogel_Stylized.png",
      linkedin: "https://www.linkedin.com/in/robvogelj5partners/",
      logos: [
        { name: "Sports Venture Collective", image: "./images/logos/sports_venture_collective.png" },
        { name: "BG Collective", image: "./images/logos/bg_collective.png" }
      ]
    },
    {
      name: "Jeffrey Steefel",
      position: "SVP Games",
      bio: "Game-industry thought leader who headed franchises at 7th Level, Turbine, Sony, Warner Bros., Disney, Wizards/Hasbro. Created original IP for Disney, The Lord of the Rings, Dungeons & Dragons, Magic: The Gathering, Monty Python, and Bandai. Developer of single and multiplayer games across numerous genres.",
      image: "./images/team/stylized/Steefel_Stylized.png",
      linkedin: "https://www.linkedin.com/in/jeffrey-steefel-97380/",
      logos: [
        { name: "Wizards of the Coast", image: "./images/logos/wizards.png" },
        { name: "Warner Bros Games", image: "./images/logos/wb_games.png" }
      ]
    },
    {
      name: "Daniel \"DA\" Algattas",
      position: "VP, Studio Operations",
      bio: "QB at UCLA and Colorado State who created some of the most innovative apps used in college football coaching circles. Has an outstanding combination of skills mixing athletics and computer science. Developed apps for the Google and Apple stores and has applied AI across a myriad of computer applications.",
      image: "./images/team/stylized/Algattas_Stylized.png",
      linkedin: "https://www.linkedin.com/in/danielalgattas/",
      logos: [
        { name: "UCLA", image: "./images/logos/ucla.png" },
        { name: "San Bernardino Valley", image: "./images/logos/san_bernardino_valley.png" }
      ]
    },
    {
      name: "Mark Rogers",
      position: "BOD Finance Committee Chair",
      bio: "Met co-founder Sean Embree when they were sons of Denver Bronco players. Starred as a wide receiver at Princeton. Joined his firm after graduating cum laude from the Georgia School of Law. Graduate of Princeton University with an AB in Politics. Practices in Virginia, Maryland, Colorado and District of Columbia.",
      image: "./images/team/stylized/Rogers_Stylized.png",
      linkedin: "https://www.linkedin.com/in/mark-rogers-982bb7124/",
      logos: [
        { name: "Princeton", image: "./images/logos/princeton.png" },
        { name: "Georgia Law", image: "./images/logos/georgia_law.png" }
      ]
    },
    {
      name: "Sean Embree",
      position: "BOD Governance Committee Chair",
      bio: "Second startup he's founded. On the '90 national champion CU Buffs. Brings 27 years of coaching experience at HS, college, pro levels. Won eight titles as a player and coach. Bloodline includes father, John, who played for the Denver Broncos, and brother, Jon, who is the Assistant Coach for the Miami Dolphins.",
      image: "./images/team/stylized/Sean_Embree_Stylized.png",
      linkedin: "https://www.linkedin.com/in/sean-embree-a9698366/",
      logos: [
        { name: "Colorado Buffaloes", image: "./images/logos/colorado.png" },
        { name: "Denver Broncos", image: "./images/logos/broncos.png" }
      ]
    },
    {
      name: "Fumbi Chima",
      position: "Special Advisor",
      bio: "Strategic advisor with extensive experience in business development and corporate strategy. Brings deep expertise in scaling technology companies and fostering strategic partnerships across multiple industries. Has held leadership positions at major corporations including Walmart and Adidas, where she drove innovation initiatives and digital transformation projects. Her expertise spans consumer technology, e-commerce platforms, and global market expansion strategies.",
      image: "./images/team/stylized/Chima_Stylized.png",
      linkedin: "https://www.linkedin.com/in/fumbi-chima/",
      logos: [
        { name: "Walmart", image: "./images/logos/walmart.png" },
        { name: "Adidas", image: "./images/logos/adidas.png" }
      ]
    }
  ];

  // Advisory board members
  const advisoryTeam: TeamMemberProps[] = [
    {
      name: "David Ortiz",
      position: "Advisory Board Member",
      bio: "20 years of experience in gaming. Deep expertise in coming up with innovative ideas and building world class teams. Generated $2.5 billion in revenue from products he has been involved in developing. Built blockbuster teams at sector leaders like Microsoft/Activision, EA Sports, Sony, and Warner Brothers.",
      image: "./images/team/stylized/Ortiz_Stylized.png",
      linkedin: "https://www.linkedin.com/in/david-ortiz-9b79a41/",
      logos: [
        { name: "EA", image: "./images/logos/ea.png" },
        { name: "Sony", image: "./images/logos/sony.png" }
      ]
    },
    {
      name: "Michelle Kahle",
      position: "Advisory Board Member",
      bio: "Initiative-taking, digital thought leader known for driving results with deep expertise in website development, UX design, content strategy, CRM, and integrated digital media marketing. A dedicated team leader with a focus on solutions and achieving business objectives. Expert in Sales Force applications and company integration.",
      image: "./images/team/stylized/MichelleK_Stylized.png",
      linkedin: "https://www.linkedin.com/in/mfbronson/",
      logos: [
        { name: "Valvoline", image: "./images/logos/valvoline.png" },
        { name: "Santa Margarita", image: "./images/logos/santa_margarita.png" }
      ]
    },
    {
      name: "Craig Alexander",
      position: "Advisory Board Member",
      bio: "Oversaw development for the Lord of the Rings Online (second highest-rated MMO ever, multiple Game of the Year awards), Dungeons & Dragons Online (first F2P MMO in North America/EU. Helped facilitate the sale of Turbine to Warner Bros. Expert in premium F2P online games and pioneering game business models.",
      image: "./images/team/stylized/CraigA_Stylized.png",
      linkedin: "https://www.linkedin.com/in/craig-alexander-2a46/",
      logos: [
        { name: "EA", image: "./images/logos/ea.png" },
        { name: "Warner Bros", image: "./images/logos/wb.png" }
      ]
    },
    {
      name: "Jon Embree",
      position: "Advisory Board Member",
      bio: "A seasoned football coach with extensive experience at both the collegiate and professional levels. Currently serving as the Assistant Head Coach and Tight Ends Coach for the Miami Dolphins, Jon brings a wealth of knowledge in athlete development and team management to Sparq Games.",
      image: "./images/team/stylized/Jon_Embree_Stylized.png",
      linkedin: "https://www.miamidolphins.com/team/coaches-roster/jon-embree",
      logos: [
        { name: "Miami Dolphins", image: "./images/logos/dolphins.png" },
        { name: "San Francisco 49ers", image: "./images/logos/san_francisco.png" }
      ]
    },
    {
      name: "Josef Schaible",
      position: "Advisory Board Member",
      bio: "Over 20 years experience in digital marketing and technology, with deep expertise in brand strategy and user engagement. Has led successful campaigns for major brands and startups alike, bringing innovative approaches to audience development and customer acquisition.",
      image: "./images/team/stylized/JosefS_stylized.png",
      linkedin: "https://www.linkedin.com/in/josefschaible/",
      logos: [
        { name: "Warner Bros", image: "./images/logos/wb.png" },
        { name: "Colorado State", image: "./images/logos/colorado_state.png" }
      ]
    },
    {
      name: "Jim Drewry",
      position: "Advisory Board Member",
      bio: "Gaming and tech exec successfully applying data-driven product principles to consumer and B2B technology businesses. An innovator who identifies novel opportunities to improve outcomes and executes to deliver results. Skilled at building high-functioning teams and inspiring top performance.",
      image: "./images/team/stylized/Drewry_Stylized.png",
      linkedin: "https://www.linkedin.com/in/jimdrewry/",
      logos: [
        { name: "Warner Bros", image: "./images/logos/wb.png" },
        { name: "Gamer Sensei", image: "./images/logos/gamer_sensei_new.png" }
      ]
    },
    {
      name: "Mark Coughlin",
      position: "Advisory Board Member",
      bio: "Sports marketing maven and Esports pioneer who led the negotiation strategies for Fortune 500 companies in sponsorship, IP, media, celebrity endorsement, and personal services. Developed and negotiated over $2 billion of marketing program investments for some of the largest sports-related brands.",
      image: "./images/team/stylized/Coughlin_Stylized.png",
      linkedin: "https://www.linkedin.com/in/mark-coughlin-17b7222/",
      logos: [
        { name: "OpTic Gaming", image: "./images/logos/optic_gaming.png" },
        { name: "Octagon", image: "./images/logos/octagon.png" }
      ]
    },
    {
      name: "Roger Mason Jr",
      position: "Advisory Board Member",
      bio: "Former NBA player with 10+ years of professional basketball experience, including teams like the Chicago Bulls, Miami Heat, New York Knicks, and Washington Wizards. Served as Deputy Executive Director of the National Basketball Players Association (NBPA), where he led strategic initiatives and player advocacy programs. Currently focused on sports technology innovation and athlete empowerment through digital platforms. Brings deep understanding of professional sports operations, player development, and league dynamics to the gaming industry. Expert in building bridges between traditional sports and emerging technology sectors.",
      image: "./images/team/stylized/RogerMJR_Stylized.png",
      linkedin: "https://www.linkedin.com/in/roger-mason-jr-05900299/",
      logos: [
        { name: "Minnesota Timberwolves", image: "./images/logos/minnesota_timberwolves.png" },
        { name: "NBPA", image: "./images/logos/nbpa.png" }
      ]
    },
    {
      name: "Rudy Koch",
      position: "Advisory Board Member",
      bio: "Seasoned technology executive with over 15 years of experience in gaming, blockchain, and digital entertainment. Previously held senior leadership positions at Activision Blizzard, where he spearheaded innovative gaming initiatives and digital transformation projects. Expert in cryptocurrency integration, NFT marketplaces, and Web3 gaming ecosystems. Led the development of multiple successful gaming platforms that generated millions in revenue. Currently advising startups on blockchain gaming strategies and decentralized finance applications. Pioneer in player-owned economies and virtual asset monetization, bringing cutting-edge expertise to the intersection of traditional gaming and emerging technologies.",
      image: "./images/team/stylized/Koch_Stylized.png",
      linkedin: "https://www.linkedin.com/in/rudykoch/",
      logos: [
        { name: "Blizzard Entertainment", image: "./images/logos/blizzard_entertainment.png" },
        { name: "Activision", image: "./images/logos/activision.png" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Sparq Inc. - Industry Veterans in Gaming and Sports</title>
        <meta 
          name="description" 
          content="Meet the Sparq Inc. leadership team and advisors. Industry veterans with 140+ years of combined gaming expertise, collegiate athletics experience, and business acumen." 
        />
        <meta property="og:title" content="Our Team | Sparq Inc. - Industry Veterans in Gaming and Sports" />
        <meta 
          property="og:description" 
          content="Meet the Sparq Inc. leadership team and advisors. Industry veterans with 140+ years of combined gaming expertise, collegiate athletics experience, and business acumen." 
        />
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
                src={teamVid1}
              />
            </div>
            <div className="w-1/2 h-full overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover opacity-40"
                src={teamVid2}
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
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-tight mb-8">
              <span className="text-cyan-400 font-neodex">OUR</span>
              <span className="ml-4">TEAM</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mb-8 rounded-full"></div>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Industry veterans with 140+ years of combined gaming expertise to revolutionize sports gaming
            </p>
          </div>
        </div>
      </section>

      <section id="team-story" className="py-16 lg:py-24 bg-gradient-to-br from-muted to-background relative overflow-hidden">
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
                Our <span className="text-gradient font-neodex transform -skew-x-6 inline-block">EXPERTISE</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <div className="relative bg-gradient-to-br from-red-500/15 via-red-500/8 to-red-500/5 backdrop-blur-sm p-8 rounded-3xl border border-red-400/40 shadow-2xl group hover:shadow-red-400/25 hover:shadow-3xl hover:border-red-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="100">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-red-400/20 to-transparent rounded-full blur-2xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-gamepad text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-red-400 group-hover:text-primary transition-colors duration-300">Gaming Veterans</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Our leadership team brings together industry veterans with proven track records at major gaming companies, from indie startups to billion-dollar acquisitions. We understand what it takes to build successful gaming platforms at scale.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-orange-500/5 backdrop-blur-sm p-8 rounded-3xl border border-orange-400/40 shadow-2xl group hover:shadow-orange-400/25 hover:shadow-3xl hover:border-orange-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-400/15 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 shadow-lg">
                      <i className="fas fa-briefcase text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-orange-400 group-hover:text-primary transition-colors duration-300">Business Acumen</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Our team combines technical expertise with proven business leadership, having built and scaled companies, navigated complex partnerships, and delivered sustainable growth in competitive markets.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-blue-500/15 via-blue-500/8 to-blue-500/5 backdrop-blur-sm p-8 rounded-3xl border border-blue-400/40 shadow-2xl group hover:shadow-blue-400/25 hover:shadow-3xl hover:border-blue-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="300">
                <div className="absolute top-0 left-1/2 w-20 h-20 bg-gradient-to-b from-blue-400/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-dumbbell text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-blue-400 group-hover:text-primary transition-colors duration-300">Athlete Background</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">Many of our founders and team members are former college and professional athletes who understand the dedication, passion, and challenges of collegiate sports. This authentic connection drives our commitment to creating value for current athletes.</p>
                </div>
              </div>
              
              <div className="relative bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-purple-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-400/40 shadow-2xl group hover:shadow-purple-400/25 hover:shadow-3xl hover:border-purple-400/60 transition-all duration-500 overflow-hidden" data-aos="fade-up" data-aos-delay="400">
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-purple-400/15 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-lg">
                      <i className="fas fa-lightbulb text-white text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-display text-purple-400 group-hover:text-primary transition-colors duration-300">Innovation Focus</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg">We're not just building games—we're pioneering the future of NIL monetization and athlete empowerment through technology, creating authentic partnerships that benefit everyone in the collegiate sports ecosystem.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-28 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-56 h-56 bg-primary/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
              <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">EXECUTIVE</span>
              <span className="block lg:inline ml-0 lg:ml-4">LEADERSHIP</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our leadership team combines deep expertise in gaming development, collegiate athletics, and business strategy to drive innovation and create authentic value for athletes and fans.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {executiveTeam.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                logos={member.logos}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-28 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-56 h-56 bg-cyan-300/50 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-20" data-aos="fade-up">
            <h2 className="text-4xl lg:text-6xl font-display mb-6 leading-tight">
              <span className="text-cyan-400 font-neodex transform -skew-x-6 inline-block">ADVISORY</span>
              <span className="block lg:inline ml-0 lg:ml-4">BOARD</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Our advisors provide strategic guidance and industry insights to help shape the future of Sparq Inc., bringing decades of experience from top-tier organizations and successful ventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {advisoryTeam.map((member, index) => (
              <TeamMember 
                key={member.name}
                name={member.name}
                position={member.position}
                bio={member.bio}
                image={member.image}
                linkedin={member.linkedin}
                logos={member.logos}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        {/* Enhanced background with overlay */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
            alt="Team Collaboration" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-cyan-200 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl lg:text-6xl font-display mb-8 leading-tight text-white">
              Join Our <span className="font-neodex">TEAM</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-cyan-200 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              We're always looking for talented individuals who are passionate about gaming, sports, and innovation. Join us in revolutionizing the future of collegiate sports gaming and creating authentic value for athletes everywhere.
            </p>
            <a href="/contact" className="inline-flex items-center px-10 py-5 bg-white text-primary font-bold text-lg rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
              View Open Positions
              <i className="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;