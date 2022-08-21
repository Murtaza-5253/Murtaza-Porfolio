import React from 'react';
import { motion } from 'framer-motion';

const MotionWrap = (Components, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Components />
    </motion.div>
  );
};

export default MotionWrap;