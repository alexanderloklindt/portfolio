import React from "react";
import { motion } from 'framer-motion';

const NothingHerePage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h2>404 page</h2>
      <p>There's absolutely nothing here</p>
    </motion.div>
  );
};

export default NothingHerePage;
