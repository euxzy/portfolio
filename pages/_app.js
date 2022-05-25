import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [customCursor, setCustomCursor] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mouseMove);
  }, []);

  const variants = {
    default: { x: mousePosition.x - 32, y: mousePosition.y - 32 },
    inverse: { x: mousePosition.x - 32, y: mousePosition.y - 32, mixBlendMode: 'difference' },
  };

  const cursorIn = () => setCustomCursor('inverse');
  const cursorOut = () => setCustomCursor('default');

  return (
    <>
      <div onMouseEnter={cursorIn} onMouseLeave={cursorOut}>
        <Component {...pageProps} />
      </div>

      <motion.div className="pointer-events-none fixed left-0 top-0 z-50 h-16 w-16 rounded-full bg-primary-light" variants={variants} animate={customCursor} />
    </>
  );
}

export default MyApp;
