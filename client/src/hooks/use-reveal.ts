import { useEffect, useRef } from 'react';
import { isElementInViewport } from '@/lib/utils';

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      if (isElementInViewport(element)) {
        element.classList.add('active');
      }
    };

    // Check on initial load
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ref;
};

export default useReveal;
