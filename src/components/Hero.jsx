import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Download, Play, Pause, ChevronDown, Volume2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import heroVideo from '../assets/hero video/yavkrit-hero.mp4';
import { heroContent, personalInfo, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
    // Video does NOT autoplay anymore — it starts muted (silent while paused
    // anyway) and unmutes only on a direct user click, which browsers permit.
  }, []);

  const toggleVideo = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      // Unmuting happens inside this click handler so it counts as a
      // user-initiated gesture — required for browsers to allow audio.
      video.muted = false;
      setIsMuted(false);
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        // Some browsers still refuse sound on first attempt — fall back to
        // a muted play so the video isn't stuck, and surface an unmute hint.
        video.muted = true;
        setIsMuted(true);
        await video.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="GitHub"
        >
          <GithubIcon size={20} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <LinkedinIcon size={20} />
        </a>
        <a
          href={`mailto:${personalInfo.emails.primary}`}
          className="text-white/60 hover:text-[#4f46e5] transition-all duration-300 transform hover:scale-125"
          aria-label="Email"
        >
          <Mail size={20} strokeWidth={1.75} />
        </a>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Mobile / Hero inline socials */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-4 mb-4 lg:hidden"
          >
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href={`mailto:${personalInfo.emails.primary}`} className="text-white/60 hover:text-[#4f46e5]" aria-label="Email">
              <Mail size={20} strokeWidth={1.75} />
            </a>
          </div>

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            className="text-white text-3xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            {heroContent.greeting}, <br /> <span className="text-transparent [-webkit-text-stroke:1.5px_black]">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subheading */}
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <Link
              to={heroContent.ctaPrimary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              {heroContent.ctaPrimary.text}
            </Link>

            {/* Secondary Button - Glassmorphism style */}
            <a
              href={heroContent.ctaSecondary.href}
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-semibold hover:bg-black/60 transition-all duration-300 backdrop-blur-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download Button */}
            <a
              href={heroContent.ctaResume.href}
              download
              className="px-4 py-2 md:px-6 md:py-2 text-xs md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2"
            >
              <Download size={15} />
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div className="relative mt-8 md:mt-0 self-start md:self-auto">
          {/* Discovery guide — bold dotted semicircle bulging outward from the opposite side, sweeping into the play/pause button, fades once played */}
          {!isPlaying && (
            <svg
              className="hidden md:block absolute -top-32 -left-48 w-72 h-48 pointer-events-none text-white"
              viewBox="0 0 230 150"
              fill="none"
              aria-hidden="true"
              style={{ filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.9))' }}
            >
              <path
                d="M150 10 C 215 45, 215 95, 150 130"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="0.1 17"
                opacity="0.9"
                className="animate-[dashFlow_3s_linear_infinite]"
              />
              <path
                d="M150 130 l14 -8 M150 130 l16 6"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.95"
              />
            </svg>
          )}

          <button
            type="button"
            data-aos="zoom-in"
            data-aos-delay="600"
            className="flex flex-row md:flex-col items-center gap-2 md:gap-3 cursor-pointer group"
            onClick={toggleVideo}
            aria-label={isPlaying ? 'Pause hero video' : 'Play hero video with sound'}
          >
            <div className="relative w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#4f46e5] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(79,70,229,0.6)]">
              {!isPlaying ? (
                <Play size={20} className="text-white ml-0.5 md:ml-1 md:w-8 md:h-8" fill="currentColor" />
              ) : (
                <Pause size={20} className="text-white md:w-8 md:h-8" fill="currentColor" />
              )}
              {isPlaying && !isMuted && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#4f46e5] border-2 border-black/40 flex items-center justify-center">
                  <Volume2 size={11} className="text-white" />
                </span>
              )}
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? "Play" : isMuted ? "Playing (muted)" : "Playing"}
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <ChevronDown size={24} strokeWidth={3} className="text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
