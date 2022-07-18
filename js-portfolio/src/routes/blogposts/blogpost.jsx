import React from "react";
import { motion } from 'framer-motion';

const BlogPost = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.4 }}>
      <h2>This is a blog post</h2>
    </motion.div>
  );
};

export default BlogPost;
