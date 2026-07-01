import { useState, useEffect, useRef } from 'react';
import { certificates } from '../data/portfolioData';
import { renderIcon } from '../utils/iconMap';
import { Eye, Download, X } from 'lucide-react';

const CertificateCard = ({ cert, aosDelay }) => {
  const [activePdf, setActivePdf] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  // Normalize to a list so single-PDF and multi-PDF certs render the same way
  const pdfList = cert.pdfs || [{ label: null, pdfPath: cert.pdfPath, fileName: cert.fileName }];

  useEffect(() => {
    if (!activePdf) return;
    closeButtonRef.current?.focus();
    const handleKey = (e) => {
      if (e.key === 'Escape') setActivePdf(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      triggerRef.current?.focus();
    };
  }, [activePdf]);

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay={aosDelay}
        className="bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-all duration-500 cursor-default group flex flex-col"
      >
        {/* Real certificate preview, rendered from the actual PDF */}
        {cert.thumb && (
          <button
            type="button"
            onClick={(e) => {
              triggerRef.current = e.currentTarget;
              setActivePdf(pdfList[0]);
            }}
            className="relative block w-full aspect-[4/3] overflow-hidden bg-white"
            aria-label={`View ${cert.name}`}
          >
            <img
              src={cert.thumb}
              alt={`${cert.name} certificate preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black text-xs font-bold">
                <Eye size={13} /> View Full
              </span>
            </div>
          </button>
        )}

        <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Top: icon + name */}
        <div className="flex items-start gap-4">
          <span className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
            {renderIcon(cert.icon, { size: 18, className: 'text-white', strokeWidth: 1.75 })}
          </span>
          <div>
            <h3 className="text-white font-bold text-sm md:text-base leading-tight mb-1">
              {cert.name}
            </h3>
            <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">
              {cert.issuer}
            </p>
          </div>
        </div>

        {/* Actions — one View/Download pair per PDF */}
        <div className="flex flex-col gap-2 mt-1">
          {pdfList.map((pdf) => (
            <div key={pdf.pdfPath} className="flex items-center gap-2">
              {pdf.label && (
                <span className="text-white/85 text-[10px] font-bold uppercase tracking-wider flex-1 truncate">
                  {pdf.label}
                </span>
              )}
              <div className={`flex gap-2 ${pdf.label ? '' : 'w-full'}`}>
                <button
                  onClick={(e) => {
                    triggerRef.current = e.currentTarget;
                    setActivePdf(pdf);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold hover:bg-white hover:text-black transition-all duration-300"
                  aria-label={`View ${pdf.label || cert.name}`}
                >
                  <Eye size={13} />
                  View
                </button>
                <a
                  href={pdf.pdfPath}
                  download={pdf.fileName}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold hover:bg-[#4f46e5] hover:border-[#4f46e5] transition-all duration-300"
                  aria-label={`Download ${pdf.label || cert.name}`}
                >
                  <Download size={13} />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {activePdf && (
        <div
          className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePdf(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activePdf.label || cert.name} preview`}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden w-full max-w-3xl h-[80vh] flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-5 py-3 bg-[#0a0a0a] border-b border-white/10">
              <div>
                <p className="text-white font-bold text-sm truncate max-w-[480px]">{activePdf.label || cert.name}</p>
                <p className="text-white/50 text-xs">{cert.issuer}</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activePdf.pdfPath}
                  download={activePdf.fileName}
                  className="px-3 py-1.5 rounded-full bg-[#4f46e5] text-white text-xs font-bold hover:bg-indigo-600 transition-colors flex items-center gap-1"
                >
                  <Download size={13} />
                  Download
                </a>
                <button
                  ref={closeButtonRef}
                  onClick={() => setActivePdf(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            {/* PDF embed */}
            <iframe
              src={activePdf.pdfPath}
              title={activePdf.label || cert.name}
              className="flex-1 w-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
};

const Certificates = () => {
  return (
    <section id="certifications" className="bg-[#4f46e5] pt-20 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a] light:fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-12 md:mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight">
            Certifications
          </h1>
          <p className="text-indigo-100 text-base md:text-lg font-semibold max-w-lg mx-auto">
            Each certificate is individually viewable and downloadable below.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.featured.map((cert, index) => (
            <CertificateCard
              key={cert.name}
              cert={cert}
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-16 left-6 md:left-16 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-20 right-8 md:right-24 text-black opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Certificates;
