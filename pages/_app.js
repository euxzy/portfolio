import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 22, y: mousePosition.y - 22 },
    inverse: { x: mousePosition.x - 22, y: mousePosition.y - 22, mixBlendMode: 'difference' },
  };

  const cursorIn = () => setCustomCursor('inverse');
  const cursorOut = () => setCustomCursor('default');

  return (
    <>
      <div onMouseEnter={cursorIn} onMouseLeave={cursorOut}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>

      <motion.div className="pointer-events-none fixed left-0 top-0 z-50 h-11 w-11 rounded-full bg-primary-light" variants={variants} animate={customCursor} />
    </>
  );
}

export default MyApp;
