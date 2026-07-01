import { renderIcon } from '../utils/iconMap';
import limeHardware from '../assets/projects/lime-hardware.jpg';

// Only one project has a real build photo available (pulled straight from the
// LIME research paper's own figures). Every other project — research in
// progress, NDA industry work, or a data-science notebook — gets an honest
// generated 3D icon cover instead of a fake product screenshot.
const realPhotos = {
  lime: { src: limeHardware, position: 'center 38%' },
};

const accents = {
  microscope: { from: '#a78bfa', to: '#6d28d9' },
  radio: { from: '#818cf8', to: '#4338ca' },
  lock: { from: '#38bdf8', to: '#1d4ed8' },
  'bar-chart': { from: '#34d399', to: '#047857' },
  network: { from: '#f472b6', to: '#be185d' },
  activity: { from: '#fb923c', to: '#c2410c' },
};

const FlagshipBadge = () => (
  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-200 text-[10px] font-bold uppercase tracking-widest">
    Flagship
  </div>
);

const ProjectThumbnail = ({ iconKey, isFlagship, projectId }) => {
  const photo = realPhotos[projectId];

  if (photo) {
    return (
      <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-[#0d0d14]">
        <img
          src={photo.src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: photo.position }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-[#0d0d14]/5 to-transparent" />
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-white/80 text-[10px] font-bold uppercase tracking-widest">
          Real Build Photo
        </div>
        {isFlagship && <FlagshipBadge />}
      </div>
    );
  }

  const accent = accents[iconKey] || accents.microscope;

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-[#0d0d14]">
      {/* Atmosphere */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 22% 18%, ${accent.from}30, transparent 55%), radial-gradient(circle at 82% 88%, ${accent.to}40, transparent 50%)`,
        }}
      />

      {/* Perspective floor grid, converging toward a horizon */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 56" preserveAspectRatio="none" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <line
            key={`h${i}`}
            x1="0" y1={26 + i * 5} x2="100" y2={26 + i * 5}
            stroke={accent.to} strokeWidth="0.3" opacity={0.4 - i * 0.06}
          />
        ))}
        {[10, 30, 50, 70, 90].map((x, i) => (
          <line
            key={`v${i}`}
            x1={x} y1="56" x2="50" y2="26"
            stroke={accent.to} strokeWidth="0.25" opacity="0.25"
          />
        ))}
      </svg>

      {/* Floating 3D icon block */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '420px' }}>
        <div
          className="relative w-16 h-16"
          style={{ transformStyle: 'preserve-3d', transform: 'rotateX(52deg) rotateZ(-38deg)' }}
        >
          {[5, 4, 3, 2, 1].map((d) => (
            <div
              key={d}
              className="absolute inset-0 rounded-xl"
              style={{ background: accent.to, transform: `translateZ(-${d * 3}px)`, opacity: 0.85 }}
            />
          ))}
          <div
            className="absolute inset-0 rounded-xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
              boxShadow: 'inset 0 2px 5px rgba(255,255,255,0.45), inset 0 -3px 6px rgba(0,0,0,0.25)',
            }}
          >
            {renderIcon(iconKey, { size: 28, className: 'text-white', strokeWidth: 1.75 })}
          </div>
        </div>
      </div>

      {/* Grounding shadow beneath the floating block */}
      <div className="absolute left-1/2 bottom-[26%] -translate-x-1/2 w-20 h-4 rounded-full bg-black/50 blur-md" />

      {isFlagship && <FlagshipBadge />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
    </div>
  );
};

export default ProjectThumbnail;
