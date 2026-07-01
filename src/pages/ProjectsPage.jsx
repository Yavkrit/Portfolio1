import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <>
      <div className="bg-[#0a0a0a] light:bg-white pt-28 px-6 md:px-12">
        <Link
          to="/"
          className="max-w-6xl mx-auto flex items-center gap-2 text-white/50 light:text-gray-500 hover:text-white light:hover:text-gray-900 text-sm font-semibold transition-colors w-fit"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
      <Projects />
    </>
  );
};

export default ProjectsPage;
