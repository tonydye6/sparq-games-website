import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm",
        isScrolled ? "bg-black/95 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img 
              src="./images/logo-hq.png" 
              alt="Sparq Games Logo" 
              className="h-10"
              style={{ 
                imageRendering: 'auto',
                filter: 'none',
                transform: 'translateZ(0)',
                willChange: 'transform',
                width: 'auto'
              }}
            />
          </Link>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/" && "active")}>Home</Link>
            <Link href="/about" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/about" && "active")}>About</Link>
            <Link href="/crown-u" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/crown-u" && "active")}>Crown U</Link>
            <Link href="/technology" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/technology" && "active")}>Technology</Link>
            <Link href="/partnerships" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/partnerships" && "active")}>Partnerships</Link>
            <Link href="/team" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/team" && "active")}>Team</Link>
            <Link href="/news" className={cn("nav-link text-sm font-medium text-white hover:text-primary transition-colors", location === "/news" && "active")}>News</Link>
            <Link href="/contact" className="ml-4">
              <Button className="bg-primary hover:bg-primary/80 text-white">Get Started</Button>
            </Link>
          </div>
          
          <Button variant="ghost" className="lg:hidden p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
      
      <MobileMenu isOpen={mobileMenuOpen} toggle={toggleMobileMenu} />
    </nav>
  );
};

export default Navbar;
