import React from "react";
import { motion } from 'framer-motion';

const WelcomePage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 1 }}>
      <h2>Welcome Page</h2>
    </motion.div>
  );
};

export default WelcomePage;
