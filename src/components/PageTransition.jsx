import { motion } from 'framer-motion';

const variants = {
  initial: { opacity: 0, x: 90 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -90 },
};

const PageTransition = ({ children }) => (
  <motion.div
    variants={variants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default PageTransition;
