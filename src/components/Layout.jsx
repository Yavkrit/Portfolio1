import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToHash from './ScrollToHash';

// Pure shell — Navbar and Footer stay mounted across every route so only
// the page content in between transitions. Page-level animation lives in
// PageTransition, applied per-route in App.jsx.
const Layout = ({ children }) => {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
