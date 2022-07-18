import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h2>This is the projects page content</h2>
      <ul>
        <li>
          <Link to="project">Project #1</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default ProjectsPage;
