import { renderIcon } from '../utils/iconMap';

// No real product screenshots exist for these projects (most are research /
// NDA-protected industry work), so each gets an honest, generated abstract
// cover instead of a fake UI mockup — distinct per project via a light SVG
// pattern keyed to its category icon, not a stock photo pretending to be one.
const patterns = {
  microscope: (id) => (
    <>
      {[1, 2, 3, 4].map((r) => (
        <circle key={r} cx="50%" cy="50%" r={`${r * 14}%`} fill="none" stroke={`url(#${id})`} strokeWidth="1" opacity={0.5 - r * 0.08} />
      ))}
    </>
  ),
  radio: (id) => (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1={`${8 + i * 5}%`} y1="0%" x2={`${28 + i * 5}%`} y2="100%" stroke={`url(#${id})`} strokeWidth="1" opacity={0.5 - i * 0.07} />
      ))}
    </>
  ),
  lock: (id) => (
    <>
      {[...Array(6)].map((_, r) => (
        <line key={`h${r}`} x1="0" y1={`${(r + 1) * 14}%`} x2="100%" y2={`${(r + 1) * 14}%`} stroke={`url(#${id})`} strokeWidth="0.75" opacity="0.35" />
      ))}
      {[...Array(8)].map((_, c) => (
        <line key={`v${c}`} x1={`${(c + 1) * 11}%`} y1="0" x2={`${(c + 1) * 11}%`} y2="100%" stroke={`url(#${id})`} strokeWidth="0.75" opacity="0.35" />
      ))}
    </>
  ),
  'bar-chart': (id) => (
    <>
      {[38, 55, 46, 70, 60, 82, 68].map((h, i) => (
        <rect key={i} x={`${8 + i * 12.5}%`} y={`${100 - h}%`} width="7%" height={`${h}%`} fill={`url(#${id})`} opacity={0.35 + i * 0.03} />
      ))}
    </>
  ),
  network: (id) => (
    <>
      {[[20, 30], [45, 15], [70, 35], [30, 65], [60, 70], [85, 60]].map(([x, y], i) => (
        <circle key={i} cx={`${x}%`} cy={`${y}%`} r="3" fill={`url(#${id})`} opacity="0.7" />
      ))}
      <g stroke={`url(#${id})`} strokeWidth="0.75" opacity="0.35">
        <line x1="20%" y1="30%" x2="45%" y2="15%" />
        <line x1="45%" y1="15%" x2="70%" y2="35%" />
        <line x1="20%" y1="30%" x2="30%" y2="65%" />
        <line x1="30%" y1="65%" x2="60%" y2="70%" />
        <line x1="60%" y1="70%" x2="85%" y2="60%" />
        <line x1="70%" y1="35%" x2="60%" y2="70%" />
      </g>
    </>
  ),
  activity: (id) => (
    <path
      d="M 0 60 L 15 60 L 22 30 L 30 85 L 38 60 L 50 60 L 57 40 L 65 70 L 73 60 L 100 60"
      fill="none"
      stroke={`url(#${id})`}
      strokeWidth="1.5"
      opacity="0.55"
      vectorEffect="non-scaling-stroke"
    />
  ),
};

const ProjectThumbnail = ({ iconKey, isFlagship }) => {
  const gradientId = `pt-${iconKey}`;
  const pattern = patterns[iconKey] || patterns.microscope;

  return (
    <div className="relative w-full aspect-[21/9] overflow-hidden rounded-t-2xl bg-[#0d0d14]">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="#0d0d14" />
        {pattern(gradientId)}
      </svg>
      {/* Large watermark icon */}
      <div className="absolute -right-4 -bottom-6 opacity-[0.12]">
        {renderIcon(iconKey, { size: 140, className: 'text-indigo-300', strokeWidth: 1 })}
      </div>
      {isFlagship && (
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 text-indigo-200 text-[10px] font-bold uppercase tracking-widest">
          Flagship
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d14] via-transparent to-transparent" />
    </div>
  );
};

export default ProjectThumbnail;
