import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToContact = (e) => {
    if (location.pathname === '/') return; // native anchor handles it
    e.preventDefault();
    navigate('/#contact');
  };

  return (
    <footer className="bg-[#111111] light:bg-gray-50 text-[#d4d4d4] light:text-gray-600 py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          {footerContent.taglines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>{footerContent.credential}</p>
          <Link to="/projects" className="inline-block underline hover:text-white light:hover:text-gray-900 transition-colors mt-1 py-2 -my-2 underline-offset-4 decoration-1">View Work</Link>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Available for opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] light:text-gray-200 w-full text-center">
          {personalInfo.brandName.toLowerCase()}
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="/#contact" onClick={goToContact} className="underline hover:text-white light:hover:text-gray-900 transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 light:text-gray-400 font-mono text-[9px] md:text-[10px]">
            {footerContent.copyright}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-center">
          <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white light:hover:text-gray-900 transition-colors underline-offset-4 decoration-1 lowercase">
            {personalInfo.emails.primary}
          </a>
          {/* Social Links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors duration-300"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4d4d4] light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-[#d4d4d4] light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white light:hover:text-gray-900 transition-colors underline-offset-4 decoration-1"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
