import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import TechnicalSkills from '../components/TechnicalSkills';
import Services from '../components/Services';
import Internships from '../components/Internships';
import Education from '../components/Education';
import Leadership from '../components/Leadership';

const ExperiencePage = () => {
  return (
    <>
      <div className="bg-[#0a0a0a] light:bg-white pt-28 pb-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2 text-white/50 light:text-gray-500 hover:text-white light:hover:text-gray-900 text-sm font-semibold transition-colors w-fit mb-8"
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white light:text-gray-900 leading-[1.1] tracking-tight">
            Experience & Expertise
          </h1>
        </div>
      </div>
      <TechnicalSkills />
      <Services />
      <Internships />
      <Education />
      <Leadership />
    </>
  );
};

export default ExperiencePage;
