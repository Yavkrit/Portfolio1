import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Certificates from '../components/Certificates';

const CertificationsPage = () => {
  return (
    <>
      <div className="bg-[#4f46e5] pt-28 px-6 md:px-12">
        <Link
          to="/"
          className="max-w-6xl mx-auto flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors w-fit"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
      <Certificates />
    </>
  );
};

export default CertificationsPage;
