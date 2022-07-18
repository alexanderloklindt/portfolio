import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h2>This is a project</h2>
    </motion.div>
  );
};

export default Project;