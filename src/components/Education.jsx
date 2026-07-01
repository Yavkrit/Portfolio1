import { education } from '../data/portfolioData';

const EducationCard = ({ item, index }) => (
  <div
    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
    data-aos-delay={index * 200}
    className="relative bg-white/5 light:bg-black/[0.03] backdrop-blur-md border border-white/10 light:border-black/10 rounded-3xl p-8 md:p-10 hover:border-indigo-500/30 hover:shadow-[0_20px_50px_rgba(79,70,229,0.12)] transition-all duration-500 group"
  >
    {/* Accent bar */}
    <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#4f46e5] to-indigo-800 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />

    <div className="pl-5">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="bg-[#4f46e5]/20 text-[#4f46e5] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#4f46e5]/30">
          {item.type === 'postgrad' ? 'Current · Research' : 'Undergraduate'}
        </span>
        <span className="text-white/40 light:text-gray-400 text-xs font-mono font-bold tracking-wider">{item.duration}</span>
      </div>

      <h3 className="text-white light:text-gray-900 text-2xl md:text-3xl font-black mb-1 tracking-tight group-hover:text-[#4f46e5] transition-colors">
        {item.degree}
      </h3>
      <p className="text-indigo-400 text-sm font-bold font-mono tracking-wide uppercase mb-1">
        {item.field}
      </p>
      <p className="text-white/80 light:text-gray-700 text-base font-semibold mb-1">
        {item.institution}
      </p>
      <p className="text-white/45 light:text-gray-500 text-sm font-medium mb-4">
        {item.affiliation}
      </p>

      <div className="inline-block bg-white/10 light:bg-black/5 border border-white/10 light:border-black/10 rounded-full px-4 py-1.5 text-white light:text-gray-900 text-sm font-bold">
        {item.grade}
      </div>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-[#0a0a0a] light:bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">

      {/* Torn paper divider at top */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#4f46e5]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-20">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-white/20 light:border-black/10 rounded-full px-5 py-1.5 text-sm text-white/60 light:text-gray-600 font-bold mb-6 shadow-sm bg-white/5 light:bg-black/5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white light:text-gray-900 tracking-tight mb-4 uppercase">
            Education
          </h2>
          <p className="text-white/50 light:text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Grounded in electronics engineering, now pursuing an integrated M.Tech + Ph.D. at the frontier of biomedical AI.
          </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {education.map((item, index) => (
            <EducationCard key={item.institution} item={item} index={index} />
          ))}
        </div>

      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/4 rounded-full blur-[140px] pointer-events-none" />
    </section>
  );
};

export default Education;
