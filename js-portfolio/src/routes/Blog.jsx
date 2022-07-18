import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h2>This is the blog page content</h2>
      <ul>
        <li>
          <Link to="blogpost">Blogpost #1</Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default BlogPage;