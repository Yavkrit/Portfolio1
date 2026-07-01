import { Link } from 'react-router-dom';
import { Briefcase, FolderGit2, FlaskConical, Award, FileText, ArrowRight } from 'lucide-react';

const items = [
  {
    to: '/experience',
    icon: Briefcase,
    title: 'Experience',
    desc: 'Career journey, technical skill set, education, and self-driven initiatives.',
    stat: '2+ years industry',
  },
  {
    to: '/projects',
    icon: FolderGit2,
    title: 'Projects',
    desc: 'Full case studies — problem, solution, architecture, and measured results for every build.',
    stat: '6 projects',
  },
  {
    to: '/research',
    icon: FlaskConical,
    title: 'Research',
    desc: 'Doctoral research at CSIR-CSIO on AI-assisted sub-THz biomedical imaging.',
    stat: 'Active PhD research',
  },
  {
    to: '/certifications',
    icon: Award,
    title: 'Certifications',
    desc: 'Verifiable credentials in data science, AI, and embedded C/C++, viewable and downloadable.',
    stat: '5 credentials',
  },
  {
    to: '/resume',
    icon: FileText,
    title: 'Resume',
    desc: 'Full resume — view inline or download the PDF directly.',
    stat: 'View & download',
  },
];

const ExploreMore = () => {
  return (
    <section className="bg-[#0a0a0a] light:bg-white pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 text-center">
          <div className="inline-block border border-white/20 light:border-black/10 rounded-full px-5 py-1.5 text-sm text-white/60 light:text-gray-600 font-bold mb-6 shadow-sm bg-white/5 light:bg-black/5 backdrop-blur-sm">
            Go Deeper
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white light:text-gray-900 tracking-tight mb-4">
            Explore the Full Work
          </h2>
          <p className="text-white/50 light:text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Each area gets its own dedicated space — no scrolling through everything to find what you need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {items.map(({ to, icon: Icon, title, desc, stat }) => (
            <Link
              key={to}
              to={to}
              className="group flex flex-col justify-between bg-white/5 light:bg-black/[0.03] backdrop-blur-md border border-white/10 light:border-black/10 rounded-2xl p-6 hover:border-indigo-500/40 hover:bg-white/[0.08] light:hover:bg-black/[0.05] hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                  <Icon size={20} className="text-indigo-400" strokeWidth={1.75} />
                </div>
                <h3 className="text-white light:text-gray-900 text-lg font-black tracking-tight mb-2">{title}</h3>
                <p className="text-white/55 light:text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
              </div>
              <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider text-white/40 light:text-gray-400 group-hover:text-indigo-400 transition-colors">
                <span>{stat}</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
