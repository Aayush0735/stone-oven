import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, width = "100%", delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  // Handle slide direction mapping
  const hiddenVariants = {
    up: { opacity: 0, y: 50 },
    down: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: hiddenVariants[direction],
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
