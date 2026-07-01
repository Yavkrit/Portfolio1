import {
  Microscope,
  Radio,
  Settings,
  BrainCircuit,
  GraduationCap,
  FlaskConical,
  Cpu,
  Bot,
  Smartphone,
  Lock,
  BarChart3,
  Network,
  Activity,
} from 'lucide-react';

// Maps semantic string keys (stored in portfolioData.js) to lucide-react
// icon components, so data stays framework-agnostic and every icon in the
// site renders from one consistent, stroke-based icon system.
const iconMap = {
  microscope: Microscope,
  radio: Radio,
  settings: Settings,
  'brain-circuit': BrainCircuit,
  'graduation-cap': GraduationCap,
  'flask-conical': FlaskConical,
  cpu: Cpu,
  bot: Bot,
  smartphone: Smartphone,
  lock: Lock,
  'bar-chart': BarChart3,
  network: Network,
  activity: Activity,
};

// Renders a JSX element (not a component reference) so call sites never
// hold a capitalized variable across renders.
export const renderIcon = (key, props) => {
  const IconComponent = iconMap[key] || Settings;
  return <IconComponent {...props} />;
};
