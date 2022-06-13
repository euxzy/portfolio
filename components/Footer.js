import { motion } from 'framer-motion';
import { AnimationHeaderFooter } from './Animations';

const Footer = () => {
  return (
    <motion.footer {...AnimationHeaderFooter} className="fixed right-0 -bottom-20 z-40 flex w-full justify-end pb-28 md:bottom-0">
      <div className="flex w-1/2 items-baseline justify-end">
        <div className="flex w-full flex-col items-end md:w-2/3">
          <div className="line-footer h-1 w-2/5" />
          <div className="line-footer mt-1 h-1 w-full" />
          <div className="line-footer mt-1 h-1 w-2/3" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
