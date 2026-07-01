import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Preloader from './components/Preloader';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';

const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const CertificationsPage = lazy(() => import('./pages/CertificationsPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));

const PageFallback = () => <div className="min-h-screen bg-[#0a0a0a] light:bg-white" />;

// Wraps a lazy page in both the Suspense boundary it needs and the
// PageTransition motion wrapper, so AnimatePresence can find and animate it.
const lazyPage = (Component) => (
  <PageTransition>
    <Suspense fallback={<PageFallback />}>
      <Component />
    </Suspense>
  </PageTransition>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/experience" element={lazyPage(ExperiencePage)} />
        <Route path="/projects" element={lazyPage(ProjectsPage)} />
        <Route path="/research" element={lazyPage(ResearchPage)} />
        <Route path="/certifications" element={lazyPage(CertificationsPage)} />
        <Route path="/resume" element={lazyPage(ResumePage)} />
        <Route path="*" element={<PageTransition><Home /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <BrowserRouter>
        <Layout>
          <AnimatedRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
