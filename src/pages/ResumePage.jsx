import { Link } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ResumePage = () => {
  return (
    <section className="bg-[#0a0a0a] light:bg-white pt-28 pb-28 px-6 md:px-12 w-full min-h-screen font-sans">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 text-white/50 light:text-gray-500 hover:text-white light:hover:text-gray-900 text-sm font-semibold transition-colors w-fit mb-10"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-block border border-white/20 light:border-black/10 rounded-full px-5 py-1.5 text-sm text-white/60 light:text-gray-600 font-bold mb-6 shadow-sm bg-white/5 light:bg-black/5 backdrop-blur-sm">
              Resume
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white light:text-gray-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-white/50 light:text-gray-500 text-base md:text-lg mt-2">{personalInfo.title}</p>
          </div>
          <a
            href={personalInfo.resumeUrl}
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#4f46e5] text-white font-bold hover:bg-indigo-600 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] transition-all duration-300 w-fit whitespace-nowrap"
          >
            <Download size={17} /> Download PDF
          </a>
        </div>

        <div className="w-full h-[75vh] rounded-2xl overflow-hidden border border-white/10 light:border-black/10 bg-white shadow-2xl">
          <iframe src={personalInfo.resumeUrl} title={`${personalInfo.name} Resume`} className="w-full h-full border-0" />
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
