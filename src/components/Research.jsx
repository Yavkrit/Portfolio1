import { researchContent, socialLinks } from '../data/portfolioData';
import { renderIcon } from '../utils/iconMap';
import { ArrowRight } from 'lucide-react';
import { LinkedinIcon } from './icons/BrandIcons';

const ResearchCard = ({ category, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 light:bg-black/[0.03] backdrop-blur-md border border-white/10 light:border-black/10 rounded-3xl p-8 hover:scale-[1.02] hover:border-indigo-500/30 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] transition-all duration-500 group flex flex-col justify-between"
    >
      <div>
        <div className="flex justify-between items-start mb-6">
          <span className="w-14 h-14 flex items-center justify-center bg-white/5 light:bg-black/5 rounded-2xl group-hover:bg-[#4f46e5]/10 group-hover:scale-110 transition-all duration-300">
            {renderIcon(category.icon, { size: 24, className: 'text-indigo-400', strokeWidth: 1.75 })}
          </span>
          <span className="text-white/30 light:text-gray-400 text-xs font-mono font-bold tracking-widest uppercase py-1 px-2 border border-white/5 light:border-black/10 rounded-full">
            {category.stats}
          </span>
        </div>
        <h3 className="text-white light:text-gray-900 text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-[#4f46e5] transition-colors">
          {category.title}
        </h3>
        <p className="text-white/60 light:text-gray-500 text-sm md:text-base leading-relaxed mb-6 font-medium">
          {category.description}
        </p>
      </div>

      <div className="pt-4 border-t border-white/5 light:border-black/10 flex items-center justify-between text-xs font-mono tracking-wider font-bold text-white/40 light:text-gray-400 group-hover:text-white light:group-hover:text-gray-900 transition-colors">
        <span>Learn More</span>
        <ArrowRight size={15} className="transform group-hover:translate-x-1.5 transition-transform" />
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <section id="research" className="bg-[#0a0a0a] light:bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Visual background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 light:border-black/10 rounded-full px-5 py-1.5 text-sm text-white/60 light:text-gray-600 font-bold mb-6 shadow-sm bg-white/5 light:bg-black/5 backdrop-blur-sm">
            {researchContent.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white light:text-gray-900 leading-[1.1] mb-6 tracking-tight">
            {researchContent.heading}
          </h1>
          <p className="text-white/50 light:text-gray-500 text-base md:text-lg max-w-xl font-medium leading-relaxed">
            {researchContent.description}
          </p>
        </div>

        {/* Research Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {researchContent.categories.map((category, index) => (
            <ResearchCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div data-aos="fade-up" data-aos-delay="400" className="mt-16 flex justify-center">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#4f46e5] text-white font-bold text-lg hover:bg-indigo-600 hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] transition-all duration-500 group"
          >
            <LinkedinIcon size={20} />
            Connect on LinkedIn
            <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Research;
