import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/useTheme';

// 'About' and 'Contact' are sections on the home page; everything else is
// substantial enough to be its own dedicated page.
const navItems = [
  { label: 'About', type: 'anchor', target: 'about' },
  { label: 'Experience', type: 'route', target: '/experience' },
  { label: 'Projects', type: 'route', target: '/projects' },
  { label: 'Research', type: 'route', target: '/research' },
  { label: 'Certifications', type: 'route', target: '/certifications' },
  { label: 'Resume', type: 'route', target: '/resume' },
  { label: 'Contact', type: 'anchor', target: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape for keyboard users
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const goToAnchor = (target, e) => {
    if (location.pathname === '/') {
      // Already home — let the native hash anchor smooth-scroll.
      return;
    }
    e.preventDefault();
    navigate(`/#${target}`);
  };

  // Only the homepage has a full-bleed dark hero behind the navbar, so only
  // there can the bar start fully transparent — every other page needs its
  // themed solid background from the very top or it's unreadable in light mode.
  const isHome = location.pathname === '/';
  const showSolidBg = isScrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? 'bg-[#4f46e5] py-4'
          : showSolidBg
            ? 'bg-black/70 light:bg-white/95 light:shadow-md light:shadow-black/5 light:border-b light:border-black/10 backdrop-blur-md py-4'
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">

        {/* Left Side: Logo/Name — takes you to the Contact section */}
        <div className="flex items-center shrink-0">
          <a
            href="/#contact"
            onClick={(e) => goToAnchor('contact', e)}
            className="text-white light:text-gray-900 text-2xl font-black tracking-tight whitespace-nowrap"
          >
            {personalInfo.brandName}<span className="text-indigo-500">.</span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.target}
                className="text-white/80 light:text-gray-700 hover:text-white light:hover:text-gray-900 font-medium relative group transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/#${item.target}`}
                onClick={(e) => goToAnchor(item.target, e)}
                className="text-white/80 light:text-gray-700 hover:text-white light:hover:text-gray-900 font-medium relative group transition-colors duration-300 whitespace-nowrap"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>

        {/* Right Side: Theme Toggle + CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-10 h-10 rounded-full bg-white/10 light:bg-gray-100 border border-white/20 light:border-gray-300 text-white light:text-gray-900 flex items-center justify-center hover:bg-white/20 light:hover:bg-gray-200 transition-all duration-300"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/#contact"
            onClick={(e) => goToAnchor('contact', e)}
            className="px-6 py-2.5 rounded-full bg-white/10 light:bg-gray-100 border border-white/20 light:border-gray-300 text-white light:text-gray-900 font-semibold hover:bg-white/20 light:hover:bg-gray-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-300 backdrop-blur-md whitespace-nowrap"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: Theme Toggle + Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="w-9 h-9 rounded-full bg-white/10 light:bg-gray-100 text-white light:text-gray-900 flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            className={`focus:outline-none p-2 ${isOpen ? 'text-white' : 'text-white light:text-gray-900'}`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[32rem] py-4 opacity-100 bg-[#4f46e5] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link
                key={item.label}
                to={item.target}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/#${item.target}`}
                onClick={(e) => {
                  goToAnchor(item.target, e);
                  setIsOpen(false);
                }}
                className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
              >
                {item.label}
              </a>
            )
          )}
          <div className="pt-4 pb-2">
            <a
              href="/#contact"
              onClick={(e) => {
                goToAnchor('contact', e);
                setIsOpen(false);
              }}
              className="inline-block px-6 py-3 rounded-full bg-white text-[#4f46e5] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
