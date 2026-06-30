import React from 'react';
import stackImage from '../assets/about/yavkrit-avatar.png';
import { aboutContent } from '../data/portfolioData';

const CppIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.9-.1-1.9-.4-2.6zM64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c6.2 0 11.8 2.3 16.1 6.1l-8.6 8.6c-2-1.8-4.6-2.9-7.5-2.9-6.3 0-11.4 5.1-11.4 11.4s5.1 11.4 11.4 11.4c4.2 0 7.8-2.3 9.8-5.6H64v-9.4h24.5c.3 1.4.5 2.8.5 4.3.1 13.4-10.9 24.5-25 24.5zm29-13.9h-3.8v3.8h-3.8v-3.8h-3.8v-3.8h3.8V67h3.8v3.8H93v3.8zm13.5 0h-3.8v3.8h-3.8v-3.8h-3.8v-3.8h3.8V67h3.8v3.8h3.8v3.8z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">C / C++</span>
  </div>
);

const LinuxIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#fff" d="M63.1 7.4C45 7.4 30.2 22 29.5 40c-.2 4.5.5 8.8 1.9 12.9C17.2 55.9 8 66 8 78.1c0 13.5 11 24.5 24.5 24.5 4.6 0 8.9-1.3 12.5-3.5.3.7.6 1.3.9 1.9 2 3.6 5.2 6.5 9.2 8.3 1.5.7 3.1 1.1 4.8 1.3v4.5c-3.2.3-5.7 3-5.7 6.3 0 3.5 2.8 6.3 6.3 6.3h6.9c3.5 0 6.3-2.8 6.3-6.3 0-3.3-2.5-5.9-5.7-6.3v-4.5c1.7-.2 3.3-.6 4.8-1.3 4-1.8 7.2-4.7 9.2-8.3.3-.6.6-1.3.9-1.9 3.6 2.2 7.9 3.5 12.5 3.5C108.9 102.6 120 91.6 120 78.1c0-12.1-9.2-22.2-21.4-24.2C100 49.8 100.5 45.5 100.3 41 99.6 22 84.8 7.4 66.7 7.4h-3.6z"/>
      <path fill="#E6D5AC" d="M64 15c-14.4 0-26 11.6-26 26 0 4.7 1.2 9.1 3.4 12.9C37.7 54 35 54 35 54s-3 3-3 8 1.5 9 1.5 9-4.5 4-4.5 9 2 9 2 9-5 2-5 7c0 6.6 5.4 12 12 12s12-5.4 12-12c0-3.8-1.8-7.2-4.5-9.4.7-1.3 1.3-2.7 1.8-4.1C51.4 84.9 54.9 86 58.5 86c2 0 3.9-.4 5.5-1 1.6.6 3.5 1 5.5 1 3.6 0 7.1-1.1 9.7-2.5.5 1.4 1.1 2.8 1.8 4.1C78.3 89.8 76.5 93.2 76.5 97c0 6.6 5.4 12 12 12s12-5.4 12-12c0-5-3-7-5-7s2-3 2-9-4.5-9-4.5-9 1.5-4 1.5-9-3-8-3-8-2.7 0-6.4-.1C87.3 50.1 88.5 45.7 88.5 41c0-14.4-11.6-26-24.5-26z"/>
      <path fill="#333" d="M51.5 44c-2.5 0-4.5 2-4.5 4.5S49 53 51.5 53 56 51 56 48.5 54 44 51.5 44zm24 0c-2.5 0-4.5 2-4.5 4.5S73.5 53 76 53s4.5-2 4.5-4.5S78 44 75.5 44z"/>
      <path fill="#f5a623" d="M58 60c0 3.3 2.7 6 6 6s6-2.7 6-6H58z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Linux & RTOS</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="pyBlue" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#5A9FD4"/>
        <stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="pyYellow" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFD43B"/>
        <stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#pyBlue)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#pyYellow)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.693 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Python & TF</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img
                  src={stackImage}
                  alt="Yavkrit Vashishtha — Embedded Software Engineer & Research Scholar"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CppIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <LinuxIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
