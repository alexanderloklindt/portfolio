import React from 'react';
import { motion } from 'framer-motion';

const ProtectedProject = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h1>This is a protected project</h1>
    </motion.div>
  );
};

export default ProtectedProject;