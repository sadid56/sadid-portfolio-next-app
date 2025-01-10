import { useState, useEffect, useRef } from 'react';

const useScrollTrigger = () => {
  const [scrollingDown, setScrollingDown] = useState<boolean>(false);
  const lastScrollTopRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTopRef.current) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }

      lastScrollTopRef.current = Math.max(0, currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollingDown;
};

export default useScrollTrigger;
