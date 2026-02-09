import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FormEvent, useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/subscribe', { email });
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img src="./images/logo.png" alt="Sparq Games Logo" className="h-10" />
            </Link>
            <p className="text-gray-400 mb-6">Revolutionizing sports gaming with AI and premium IP.</p>
            <div className="flex space-x-4">
              <a href="https://x.com/sparqgames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors flex items-center justify-center">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/sparqgames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="https://discord.gg/6kBSJ3zMrw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-discord text-lg"></i>
              </a>
              <a href="https://www.linkedin.com/company/sparqgames" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/about#team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/about#careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/games" className="text-gray-400 hover:text-white transition-colors">Crown U!</Link></li>
              <li><Link href="/partnerships" className="text-gray-400 hover:text-white transition-colors">Partnership</Link></li>


            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="text-gray-400 mb-4">Stay updated with the latest from Sparq Inc.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 bg-black border-gray-700 rounded-r-none focus:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                className="px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-l-none"
                disabled={isSubmitting}
              >
                <i className="fas fa-arrow-right"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Sparq Inc. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</Link>
              <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
