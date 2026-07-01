import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to a #hash target after route changes (needed because React Router
// doesn't do this automatically), and otherwise resets scroll to top on
// page navigation so a new route never opens mid-scroll.
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick for the target page's content to mount.
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
