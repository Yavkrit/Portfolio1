import { projects, socialLinks } from '../data/portfolioData';
import { renderIcon } from '../utils/iconMap';
import { ExternalLink, FileText, Lock, ChevronRight, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons';
import ProjectThumbnail from './ProjectThumbnail';

const ProjectCard = ({ project, aosDelay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
        project.isFlagship
          ? 'bg-gradient-to-br from-indigo-500/50 via-white/10 to-indigo-500/30 hover:from-indigo-500 hover:via-indigo-400/30 hover:to-indigo-500/60'
          : 'bg-white/10 light:bg-black/10 hover:bg-white/20 light:hover:bg-black/20'
      }`}
    >
      <div className={`rounded-2xl overflow-hidden h-full backdrop-blur-md transition-all duration-500 ${
        project.isFlagship
          ? 'bg-[#0f0f0f]/95 light:bg-white group-hover:bg-[#0f0f0f]/90 light:group-hover:bg-white'
          : 'bg-[#111111]/90 light:bg-white group-hover:bg-[#111111]/80 light:group-hover:bg-gray-50'
      }`}>
        <ProjectThumbnail iconKey={project.icon} isFlagship={project.isFlagship} />

        <div className="p-6 md:p-8">
        {/* Icon glyph + Badge */}
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 shrink-0 rounded-xl bg-indigo-500/10 flex items-center justify-center">
            {renderIcon(project.icon, { size: 20, className: 'text-indigo-400', strokeWidth: 1.75 })}
          </span>
          {project.badge && (
            <span className="text-xs font-bold tracking-widest uppercase text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              {project.badge}
            </span>
          )}
        </div>

        {/* Number + Title */}
        <div className="flex items-baseline gap-4 mb-4">
          <span className="text-5xl font-black text-white/10 light:text-black/10 font-serif italic">{project.number}</span>
          <h3 className="text-2xl md:text-3xl font-black text-white light:text-gray-900 tracking-tight">{project.title}</h3>
        </div>

        {/* Description */}
        <p className="text-white/60 light:text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-2xl font-medium">
          {project.description}
        </p>

        {/* Expandable Case Study: Problem / Solution / Results */}
        {(project.problem || project.solution || project.results) && (
          <details className="mb-6 group/details">
            <summary className="cursor-pointer select-none text-xs font-black uppercase tracking-widest text-indigo-400 hover:text-indigo-300 transition-colors list-none flex items-center gap-2">
              <ChevronRight size={14} className="transition-transform duration-300 group-open/details:rotate-90" />
              Read Full Case Study
            </summary>
            <div className="mt-4 flex flex-col gap-4 border-l-2 border-indigo-500/20 pl-4">
              {project.problem && (
                <div>
                  <h4 className="text-white/50 light:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Problem</h4>
                  <p className="text-white/70 light:text-gray-600 text-sm leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <h4 className="text-white/50 light:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-white/70 light:text-gray-600 text-sm leading-relaxed">{project.solution}</p>
                </div>
              )}
              {project.results && (
                <div>
                  <h4 className="text-white/50 light:text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Results</h4>
                  <ul className="text-white/70 light:text-gray-600 text-sm leading-relaxed list-disc pl-4 space-y-1">
                    {project.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project.confidentialNote && (
                <p className="text-white/40 light:text-gray-400 text-xs italic leading-relaxed">{project.confidentialNote}</p>
              )}
            </div>
          </details>
        )}

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold text-white/70 light:text-gray-600 bg-white/5 light:bg-black/5 rounded-full border border-white/10 light:border-black/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 hover:text-indigo-300 transition-all duration-300 cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.links.github ? (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 light:bg-black/5 border border-white/20 light:border-black/10 text-white light:text-gray-900 text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          ) : null}

          {project.links.demo !== undefined && project.links.demo !== null && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4f46e5] text-white text-sm font-semibold hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
            >
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}

          {project.links.paper && (
            <a
              href={project.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#4f46e5] text-white text-sm font-semibold hover:bg-indigo-600 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300"
            >
              <FileText size={15} />
              Research Paper
            </a>
          )}

          {!project.links.github && !project.links.demo && !project.links.paper && (
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 light:bg-black/5 text-white/40 light:text-gray-400 border border-white/10 light:border-black/10 text-sm font-semibold cursor-default">
              <Lock size={14} />
              Proprietary / Confidential
            </span>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] light:bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 light:border-black/10 rounded-full px-5 py-1.5 text-sm text-white/60 light:text-gray-600 font-bold mb-8 shadow-sm bg-white/5 light:bg-black/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white light:text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h1>
          <p className="text-white/50 light:text-gray-500 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            Research projects and engineering systems built from hardware up — firmware, signal processing, and AI.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              aosDelay={String((index + 1) * 100)}
            />
          ))}
        </div>

        {/* LinkedIn CTA */}
        <div data-aos="fade-up" data-aos-delay="500" className="mt-16 flex justify-center">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 light:border-black/10 text-white light:text-gray-900 font-bold text-lg hover:bg-white hover:text-black light:hover:bg-black light:hover:text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-500 group"
          >
            <LinkedinIcon size={20} />
            View Full Profile on LinkedIn
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
