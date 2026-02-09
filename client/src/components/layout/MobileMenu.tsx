import { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  toggle: () => void;
}

const MobileMenu = ({ isOpen, toggle }: MobileMenuProps) => {
  const [, setLocation] = useLocation();

  const handleNavigation = (path: string) => {
    toggle();
    setLocation(path);
  };

  return (
    <div className={cn(
      "fixed inset-0 z-40 lg:hidden transition-all duration-300",
      isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggle}></div>

      <div className={cn(
        "absolute top-20 left-0 right-0 bg-black border-t border-gray-800 transform transition-transform duration-300",
        isOpen ? "translate-y-0" : "-translate-y-full"
      )}>
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col space-y-6">
            <button onClick={() => handleNavigation('/')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">Home</button>
            <button onClick={() => handleNavigation('/about')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">About</button>
            <button onClick={() => handleNavigation('/crown-u')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">Crown U</button>
            <button onClick={() => handleNavigation('/technology')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">Technology</button>
            <button onClick={() => handleNavigation('/partnerships')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">Partnerships</button>
            <button onClick={() => handleNavigation('/team')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">Team</button>
            <button onClick={() => handleNavigation('/news')} className="text-lg font-medium text-white hover:text-primary transition-colors text-left">News</button>

            <div className="pt-4 border-t border-gray-800">
              <Button 
                onClick={() => handleNavigation('/contact')}
                className="w-full bg-primary hover:bg-primary/80 text-white"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;